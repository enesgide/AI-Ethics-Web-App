package com.sydney.au.ethicalaivalidation.service.impl;

import com.sydney.au.ethicalaivalidation.domain.*;
import com.sydney.au.ethicalaivalidation.entity.FeedbackMessage;
import com.sydney.au.ethicalaivalidation.repository.*;
import com.sydney.au.ethicalaivalidation.service.SupplierService;
import com.sydney.au.ethicalaivalidation.utils.ServiceUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;
import java.util.stream.Collectors;

@Transactional
@Service
@Slf4j
public class SupplierServiceImpl implements SupplierService {

    private final UsersRepository usersRepository;
    private final ProjectassignRepository projectassignRepository;
    private final ProjectsRepository projectsRepository;
    private final CompanyRepository companyRepository;
    private final EthicalconcernsRepository ethicalconcernsRepository;
    private final QuestionsRepository questionsRepository;
    private final SegmentsRepository segmentsRepository;
    private final QuestiontypeRepository questiontypeRepository;
    private final SubquestionsRepository subquestionsRepository;
    private final PrinciplesRepository principlesRepository;
    private final AnswerRepository answerRepository;
    private final ValidatorfeedbackRepository validatorfeedbackRepository;
    private final QuestionfeedbackRepository questionfeedbackRepository;
    private final ProjectvalidationRepository projectvalidationRepository;
    private final SegmentsummaryRepository segmentsummaryRepository;
    private final QuestionstatusRepository questionstatusRepository;

    public SupplierServiceImpl(UsersRepository usersRepository, ProjectassignRepository projectassignRepository, ProjectsRepository projectsRepository, CompanyRepository companyRepository, EthicalconcernsRepository ethicalconcernsRepository, QuestionsRepository questionsRepository, SegmentsRepository segmentsRepository, QuestiontypeRepository questiontypeRepository, SubquestionsRepository subquestionsRepository, PrinciplesRepository principlesRepository, AnswerRepository answerRepository, ValidatorfeedbackRepository validatorfeedbackRepository, QuestionfeedbackRepository questionfeedbackRepository, ProjectvalidationRepository projectvalidationRepository, SegmentsummaryRepository segmentsummaryRepository, QuestionstatusRepository questionstatusRepository) {
        this.usersRepository = usersRepository;
        this.projectassignRepository = projectassignRepository;
        this.projectsRepository = projectsRepository;
        this.companyRepository = companyRepository;
        this.ethicalconcernsRepository = ethicalconcernsRepository;
        this.questionsRepository = questionsRepository;
        this.segmentsRepository = segmentsRepository;
        this.questiontypeRepository = questiontypeRepository;
        this.subquestionsRepository = subquestionsRepository;
        this.principlesRepository = principlesRepository;
        this.answerRepository = answerRepository;
        this.validatorfeedbackRepository = validatorfeedbackRepository;
        this.questionfeedbackRepository = questionfeedbackRepository;
        this.projectvalidationRepository = projectvalidationRepository;
        this.segmentsummaryRepository = segmentsummaryRepository;
        this.questionstatusRepository = questionstatusRepository;
    }

    @Override
    public List<Map<String, String>> listProject(String supplierName) {
        //找用户id
        Users supplier = usersRepository.findByUsername(supplierName);

        //String companyName = companyRepository.findById(supplier.getCompanyid()).get().getCompanyname();
        int supplierId = supplier.getId();
        //找所有关联的项目id和对应的assign time
        System.out.println("this is supplier:" + supplier);
        System.out.println("this is supplier id:" + supplierId);
        Map<Integer, List<Timestamp>> projectList = projectassignRepository.findBySupplierid(supplierId)
                .stream().collect(Collectors.toMap(Projectassign::getProjectid, x -> {
                    List<Timestamp> timestamps = new ArrayList<>();
//                    System.out.println(x.getAssigntime());
//                    System.out.println(x.getUpdatetime());
                    timestamps.add(x.getAssigntime());
                    timestamps.add(x.getUpdatetime());
                    return timestamps;
                }));
        Set<Integer> projectIdList = projectList.keySet();
        //根据id取符合status的project
        List<Projects> allById = new ArrayList<>();
        projectsRepository.findAllById(projectIdList).forEach(x -> {
            if (x.getStatus() == 2
                    || x.getStatus() == 3
                    || x.getStatus() == 4
                    || x.getStatus() == 5)
                allById.add(x);
        });
        //构建结果
        List<Map<String, String>> res = new ArrayList<>();
        allById.forEach(x -> {
            TreeMap<String, String> projectMap = new TreeMap<>();
            projectMap.put("projectid", String.valueOf(x.getId()));
            projectMap.put("projectname", x.getProjectname());
            projectMap.put("status", String.valueOf(x.getStatus()));
            projectMap.put("assigntime", String.valueOf(projectList.get(x.getId()).get(0)));
            projectMap.put("updatetime", String.valueOf(projectList.get(x.getId()).get(1)));
            projectMap.put("company", supplier.getCompany());
            projectMap.put("open", String.valueOf(x.getOpen()));
            res.add(projectMap);
        });
        return res;
    }

    @Override
    public Map<String, String> getQuestion(String projectName, String userName) {
        //获取supplier和project
        Users supplier = usersRepository.findByUsername(userName);
        Projects projects = projectsRepository.findByProjectname(projectName);
        //获取
        List<Projectassign> projectAssignList = projectassignRepository.findByProjectid(projects.getId());
        Map<String, String> res = new TreeMap<>();

        //锁住的问题列表
        List<Integer> lockList = new ArrayList<>();
        projectAssignList.forEach(x -> {
            //找出其他用户正在答的题
            if(x.getSupplierid() != supplier.getId()) {
                //查看锁过期了吗
                if(x.getLocked() == 2) { //上锁了
                    long time_duration = ServiceUtils.getNowTimeStamp().getTime() - x.getLockedtime().getTime();
                    time_duration = new Long(time_duration).intValue();
                    if(time_duration > 5) {
                        projectassignRepository.unLockByProjectIdAndSupplierId(projects.getId(), x.getSupplierid());
                    }
                    else lockList.add(x.getLockedquestion());
                }
            }
        });

        List<Ethicalconcerns> ethicalconcerns = ethicalconcernsRepository.findByProjectidAndFinished(projects.getId(), 1);
        if(ethicalconcerns.isEmpty()) {
            //问题全部答完，改变项目状态
            res.put("questionid", String.valueOf(-1));
            res.put("subquesid", String.valueOf(-1));
            //检查是否分配了validator
            if(projects.getStatus() == 2) {
                List<Projectvalidation> validators = projectvalidationRepository.findByProjectid(projects.getId());
                if(validators.isEmpty()) { //没分配validator
                    projects.setStatus(3);
                }
                else projects.setStatus(4);
                projectsRepository.save(projects);
            }
            return res;
        }
        //排除掉上锁的问题，筛选出ethicalconcerns
        List<Ethicalconcerns> ethicalList = ethicalconcerns.stream()
                .filter(x -> !lockList.contains(x.getQuestionid()))
                .collect(Collectors.toList());
        //取第一组第一个
        int firstQuestionId = ethicalList.stream().mapToInt(Ethicalconcerns::getQuestionid).min().orElse(Integer.MAX_VALUE);
        int firstSubQuestion = ethicalList.stream().mapToInt(x -> {
            if (x.getQuestionid() == firstQuestionId) {
                return x.getSubquesid();
            }
            return Integer.MAX_VALUE;
        }).min().orElse(Integer.MAX_VALUE);

        //构建结果
        res.put("questionid", String.valueOf(firstQuestionId));
        res.put("subquesid", String.valueOf(firstSubQuestion));
        return res;
    }

    @Override
    public Map<String, Object> getQuestionPage(String projectName, String userName, String questionId, String subquesId) {
        Map<String, Object> res = new TreeMap<>();
        //获取supplier和project
        Users supplier = usersRepository.findByUsername(userName);
        Projects project = projectsRepository.findByProjectname(projectName);
        //去projectassign上锁
        projectassignRepository.lockByProjectIdAndSupplierId(
                project.getId(),
                supplier.getId(),
                Integer.parseInt(questionId),
                ServiceUtils.getNowTimeStamp());
        //获取具体信息
        Questions question = questionsRepository.findById(Integer.parseInt(questionId)).get();
        Subquestions subquestion = subquestionsRepository.findById(Integer.parseInt(subquesId)).get();
        Segments segment = segmentsRepository.findById(question.getSegmentid()).get();
        String principleName = principlesRepository.findById(segment.getPrincipleid()).get().getPrinciplename();
        String segmentName = segment.getSegmentname();
        String questionContent = question.getQuestioncontent();
        String subQuesContent = subquestion.getContent();
        int questionType = questiontypeRepository.findById(subquestion.getQuestiontype()).get().getType();
        //获取评论
        ArrayList<TreeMap<String, Object>> comments = new ArrayList<>();
        List<Questionfeedback> feedback = questionfeedbackRepository.findByProjectidAndSubquesid(
                project.getId(), subquestion.getId());
        //判断feedback的记录不为空
        if (feedback != null) {
            //构建comment
            for (Questionfeedback questionfeedback : feedback) {
                TreeMap<String, Object> comment = new TreeMap<>();
                comment.put("commenter", usersRepository.findById(questionfeedback.getValidatorid()).get().getUsername());
                comment.put("comment", questionfeedback.getContent());
                comment.put("commenttime", questionfeedback.getFeedbacktime());
                comments.add(comment);
            }
        }
        //构建结果
        res.put("projectid", project.getId());
        res.put("subquesid", subquesId);
        res.put("principle", principleName);
        res.put("segment", segmentName);
        res.put("questioncontent", questionContent);
        res.put("subquescontent", subQuesContent);
        res.put("questiontype", questionType);
        //插入comment
        res.put("quescomment", comments);
        return res;
    }


    @Override
    public Map<String, Object> postAnswer(String projectName, Integer questionId, Integer subQuestionId, Map<String, Object> answerMap, String userName)  {
        Map<String, Object> res = new TreeMap<>();
        Users supplier = usersRepository.findByUsername(userName);
        int projectId = projectsRepository.findByProjectname(projectName).getId();
        //查question type
        int questionTypeId = subquestionsRepository.findById(subQuestionId).get().getQuestiontype();
        Integer subQuestionType = questiontypeRepository.findById(questionTypeId).get().getType();
        float point = 0;
        String answer = "";
        //选择题
        if (subQuestionType.equals(1)) {
            int answerOption = (int) answerMap.get("option1");
            //如果选项为空
            if (answerOption <= 0 && answerOption != -1) {
                projectassignRepository.unLockByProjectIdAndSupplierId(projectId,supplier.getId());
                return res;
            }
            //选择题: 选择了No(1)
            else if (answerOption >= 1) {
                //答案列表
                List<Answer> answerList = answerRepository.findBySubquesid(subQuestionId);
                //如果选项非法
                if (answerList.stream().mapToInt(Answer::getAnswer).noneMatch(x -> x == answerOption)) return res;
                answer = String.valueOf(answerOption);
                //查找分数
                for (Answer answer1 : answerList) {
                    if (answer1.getAnswer() == answerOption) point = answer1.getPoint();
                }
            }
            //选择题：选择了Yes(-1) -> 链接题
            else {
                List<Answer> answerList = answerRepository.findBySubquesid(subQuestionId);
                //查找分数
                for (Answer answer1 : answerList) {
                    if (answer1.getAnswer() == answerOption) point = answer1.getPoint();
                }
                int linkOption = (int) answerMap.get("option2");
                if (linkOption == 1) {
                    answer = "link: " + answerMap.get("link"); // By link
                } else if (linkOption == 2) {
                    answer = "file: " + answerMap.get("submitfile"); // By request
                }
            }
        }
        //文本题
        else if (subQuestionType.equals(2)) {
            answer = (String) answerMap.get("text");
        }
        //链接题 -> fairness
        else if(subQuestionType > 2) {
            answer = answerMap.get("submitfile").toString();
            System.out.println(answer);
            point = calculateAlgorithmPoint(answer, subQuestionType);
            if(point == -1) {
                projectassignRepository.unLockByProjectIdAndSupplierId(projectId,supplier.getId());
                return res;
            }
        }
        else {
            projectassignRepository.unLockByProjectIdAndSupplierId(projectId,supplier.getId());
            return res;
        }
        //通用流程
        if (ethicalconcernsRepository.findByProjectidAndSubquesid(projectId, subQuestionId) == null) {
            Ethicalconcerns ethicalconcern = new Ethicalconcerns();
            ethicalconcern.setProjectid(projectId);
            ethicalconcern.setQuestionid(questionId);
            ethicalconcern.setSubquesid(subQuestionId);
            ethicalconcern.setAnswer(answer);
            ethicalconcern.setPoints(point);
            ethicalconcernsRepository.save(ethicalconcern);
        } else {
            ethicalconcernsRepository.updateAnswerAndPointsByProjectIdAndSubQuesId(projectId,subQuestionId,answer,point);
        }
        ethicalconcernsRepository.updateFinishedByProjectIdAndSubquesid(projectId,subQuestionId,2);
        res.put("projectid", projectId);
        res.put("projectname", projectName);
        projectassignRepository.unLockByProjectIdAndSupplierId(projectId,supplier.getId());
        return res;
    }

    public float calculateAlgorithmPoint(String filename, int questiontype){
        float point = 0;
        HttpURLConnection connection = null;
        if(questiontype == 3){
            //Faithfulness of explanation
            try {
                filename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
                URL url = new URL("http://127.0.0.1:8000/polls/faithfulness/"+filename);
                System.out.println("Send URL: "+url.toString());
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");
                connection.setRequestProperty("Content-Language", "en-US");
                connection.setConnectTimeout(30000);
                connection.setReadTimeout(30000);
                connection.setUseCaches(false);

                int status = connection.getResponseCode();
                if(status == 200) {
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuffer content = new StringBuffer();
                    while ((inputLine = in.readLine())!= null) {
                        content.append(inputLine);
                    }
                    in.close();
                    System.out.println(content);
                    point = Float.valueOf(content.toString());
                }
                else point = -1;
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                connection.disconnect();
                return point;
            }
        }
        else if(questiontype == 4) {
            //Monotonicity of explanation
            //explainer(filename, "synthetic_data_train", "y", num_samples=10, num_features=2)
            try {
                filename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
                URL url = new URL("http://127.0.0.1:8000/polls/monotonicity/"+filename);
                System.out.println("Send URL: "+url.toString());
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-Type", "application/json");
                connection.setRequestProperty("Content-Language", "en-US");
                connection.setConnectTimeout(30000);
                connection.setReadTimeout(30000);
                connection.setUseCaches(false);

                int status = connection.getResponseCode();
                if(status == 200) {
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuffer content = new StringBuffer();
                    while ((inputLine = in.readLine())!= null) {
                        content.append(inputLine);
                    }
                    in.close();
                    System.out.println(content);
                    point = Float.valueOf(content.toString());
                }
                else point = -1;
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                connection.disconnect();
                return point;
            }
        }
        else if(questiontype == 5) {
            //Data bias
            //measure_data_fairness(filename, sensitive_colname, outcome_colname)
            try {
                filename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
                URL url = new URL("http://127.0.0.1:8000/polls/databias/"+filename);
                System.out.println("Send URL: "+url.toString());
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-Type", "application/json");
                connection.setRequestProperty("Content-Language", "en-US");
                connection.setConnectTimeout(30000);
                connection.setReadTimeout(30000);
                connection.setUseCaches(false);

                int status = connection.getResponseCode();
                if(status == 200) {
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuffer content = new StringBuffer();
                    while ((inputLine = in.readLine())!= null) {
                        content.append(inputLine);
                    }
                    in.close();
                    System.out.println(content);
                    point = Float.valueOf(content.toString());
                }
                else point = -1;
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                connection.disconnect();
                return point;
            }
        }
        else if(questiontype == 6) {
            //Model bias
            //measure_model_fairness(filename, sensitive_colname,outcome_colname)
            try {
                filename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
                URL url = new URL("http://127.0.0.1:8000/polls/modelbias/"+filename);
                System.out.println("Send URL: "+url.toString());
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-Type", "application/json");
                connection.setRequestProperty("Content-Language", "en-US");
                connection.setConnectTimeout(30000);
                connection.setReadTimeout(30000);
                connection.setUseCaches(false);

                int status = connection.getResponseCode();
                if(status == 200) {
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuffer content = new StringBuffer();
                    while ((inputLine = in.readLine())!= null) {
                        content.append(inputLine);
                    }
                    in.close();
                    System.out.println(content);
                    point = Float.valueOf(content.toString());
                }
                else point = -1;
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                connection.disconnect();
                return point;
            }
        }
        else{
            //questiontype == 7
            //Model stability
            //measure_stability(filename, sensitibe_colname, outcome_colname,shuffle_num=50)
            try {
                filename = URLEncoder.encode(filename, StandardCharsets.UTF_8.toString());
//                filename.replaceAll("+","%20")
                URL url = new URL("http://127.0.0.1:8000/polls/modelstability/"+filename);
                System.out.println("Send URL: "+url.toString());
                connection = (HttpURLConnection) url.openConnection();
                connection.setRequestMethod("GET");
                connection.setRequestProperty("Content-Type", "text/plain");
                connection.setRequestProperty("Content-Language", "en-US");
                connection.setConnectTimeout(30000);
                connection.setReadTimeout(30000);
                connection.setUseCaches(false);

                int status = connection.getResponseCode();
                if(status == 200) {
                    BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream()));
                    String inputLine;
                    StringBuffer content = new StringBuffer();
                    while ((inputLine = in.readLine())!= null) {
                        content.append(inputLine);
                    }
                    in.close();
                    System.out.println(content);
                    point = Float.valueOf(content.toString());
                }
                else point = -1;
            } catch (MalformedURLException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            } finally {
                connection.disconnect();
                return point;
            }
        }
    }

    @Override
    public List<Map<String, Object>> getAllMessage(String userName) {
        //获取用户与关联的项目
        Users supplier = usersRepository.findByUsername(userName);
        List<Projectassign> projectAssignList = projectassignRepository.findBySupplierid(supplier.getId());
        List<Integer> projectIdList = projectAssignList.stream().map(Projectassign::getProjectid).collect(Collectors.toList());
        //查找所有的项目信息
        List<Projects> projects = new ArrayList<>();
        projectsRepository.findAllById(projectIdList).forEach(projects::add);
        //查找所有的validator feedback信息
        List<Validatorfeedback> validatorFeedback = validatorfeedbackRepository.findByProjectidIn(projectIdList);
        List<FeedbackMessage> feedbackMessages = new ArrayList<>();
        projects.forEach(project -> {
            //将project assign放入结果，type=1
            if (project.getStatus() == 2 || project.getStatus() == 3) {
                Projectassign projectassign = projectAssignList.stream().filter(assign -> assign.getProjectid() == project.getId()).collect(Collectors.toList()).get(0);
                feedbackMessages.add(new FeedbackMessage(1,
                        project.getId(),
                        project.getProjectname(),
                        projectassign.getAssigntime(),
                        usersRepository.findById(project.getCreatorid()).get().getUsername()));
            }
            //将validator comment放入结果，type=2
            if (project.getStatus() > 3) {
                Projectassign projectassign = projectAssignList.stream().filter(assign -> assign.getProjectid() == project.getId()).collect(Collectors.toList()).get(0);
                feedbackMessages.add(new FeedbackMessage(1,
                        project.getId(),
                        project.getProjectname(),
                        projectassign.getAssigntime(),
                        usersRepository.findById(project.getCreatorid()).get().getUsername()));
                List<Validatorfeedback> feedbackList = validatorFeedback.stream().filter(feedback -> feedback.getProjectid() == project.getId()).collect(Collectors.toList());
                for (Validatorfeedback feedback : feedbackList) {
                    feedbackMessages.add(new FeedbackMessage(2,
                            project.getId(),
                            project.getProjectname(),
                            feedback.getSendtime(),
                            usersRepository.findById(feedback.getValidatorid()).get().getUsername()));
                }
            }
        });
        feedbackMessages.sort(Collections.reverseOrder());
        //写list number
        for (int i = 0; i < feedbackMessages.size(); i++) {
            FeedbackMessage message = feedbackMessages.get(i);
            message.setListNumber(i);
            feedbackMessages.set(i, message);
        }
        return feedbackMessages.stream().map(FeedbackMessage::toResMap).collect(Collectors.toList());
    }

    @Override
    public List<Map<String, Object>> getValidatorFeedback(String projectName, String validatorName, String feedbackTime) {
        //获取project，validator，checkIndex（版本号）
        Projects project = projectsRepository.findByProjectname(projectName);
        Users validator = usersRepository.findByUsername(validatorName);
        int checkIndex = validatorfeedbackRepository
                .findByProjectidAndValidatoridAndSendtime(project.getId(), validator.getId(), Timestamp.valueOf(LocalDateTime.parse(feedbackTime, DateTimeFormatter.ofPattern("yyyy-MM-ddHH:mm:ss")))).getCheckindex();
        //获取该版本的所有子问题反馈
        List<Questionfeedback> questionFeedbackList = questionfeedbackRepository.findByProjectidAndValidatoridAndCreatedindex(project.getId(), validator.getId(), checkIndex);
        List<Map<String, Object>> res = new ArrayList<>();
        questionFeedbackList.forEach(x -> {
            //查询信息
            //todo 此处可用map缓存优化
            Subquestions subquestion = subquestionsRepository.findById(x.getSubquesid()).get();
            Questions question = questionsRepository.findById(subquestion.getQuestionid()).get();
            Segments segment = segmentsRepository.findById(question.getSegmentid()).get();
            String principleName = principlesRepository.findById(segment.getPrincipleid()).get().getPrinciplename();
            Ethicalconcerns ethicalConcern = ethicalconcernsRepository.findByProjectidAndSubquesid(project.getId(), subquestion.getId());
            String segmentName = segment.getSegmentname();
            String questionContent = question.getQuestioncontent();
            String subQuesContent = subquestion.getContent();
            //结果map
            Map<String, Object> feedbackMap = new TreeMap<>();
            feedbackMap.put("principle", principleName);
            feedbackMap.put("segment", segmentName);
            feedbackMap.put("questionid", question.getId());
            feedbackMap.put("questioncontent", questionContent);
            feedbackMap.put("subquesid", subquestion.getId());
            feedbackMap.put("subquescontent", subQuesContent);
            feedbackMap.put("youranswer", ethicalConcern.getAnswer());
            feedbackMap.put("comments", x.getContent());
            res.add(feedbackMap);
        });
        return res;
    }

    @Override
    public Map<String, Object> getAssignFeedback(String projectName) {
        Projects project = projectsRepository.findByProjectname(projectName);
        List<Principles> principles = principlesRepository.getPrincipleByProjectId(project.getId());
        Map<String, Object> res = new TreeMap<>();
        res.put("projectname", project.getProjectname());
        res.put("creatorname", usersRepository.findById(project.getCreatorid()).get().getUsername());
        res.put("feedbacktime", project.getCreatedtime());
        res.put("ethicalconcerns", principles.stream().map(x -> {
            Map<String, Object> map = new TreeMap<>();
            map.put("principleid", x.getId());
            map.put("principlename", x.getPrinciplename());
            return map;
        }).collect(Collectors.toList()));
        res.put("createdtime", project.getCreatedtime());
        res.put("status", project.getStatus());
        return res;
    }

    @Override
    public Map<String, Object> getReport(String projectName) {
        Projects project = projectsRepository.findByProjectname(projectName);
        //查询所需数据
        //创建用户Map
        List<Integer> supplierIds = projectassignRepository.findByProjectid(project.getId()).parallelStream().map(Projectassign::getSupplierid).distinct().collect(Collectors.toList());
        List<Integer> validatorIds = projectvalidationRepository.findByProjectid(project.getId()).parallelStream().map(Projectvalidation::getValidatorid).distinct().collect(Collectors.toList());
        Map<Integer, String> userNameMap = new HashMap<>();
        usersRepository.findAllById(new ArrayList<Integer>() {{
            addAll(supplierIds);
            addAll(validatorIds);
        }}).forEach(user -> userNameMap.put(user.getId(), user.getUsername()));
        //创建ethicalconcerns的list和缓存Map
        List<Ethicalconcerns> ethicalconcernsList = ethicalconcernsRepository.findByProjectid(project.getId());
        Map<Integer, Ethicalconcerns> ethicalconcernsMap = ethicalconcernsList.parallelStream().collect(Collectors.toMap(Ethicalconcerns::getSubquesid, ethicalconcerns -> ethicalconcerns));
        //创建subquestions的缓存Map
        Map<Integer, Subquestions> subquestionsMap = new HashMap<Integer, Subquestions>() {{
            subquestionsRepository.findAllById(ethicalconcernsMap.keySet()).forEach(x -> put(x.getId(), x));
        }};
        //创建summary的缓存Map
        Map<Integer, Segmentsummary> segmentsummaryMap = new HashMap<Integer, Segmentsummary>() {{
            segmentsummaryRepository.findByProjectid(project.getId()).forEach(x -> put(x.getSegmentid(), x));
        }};
        //创建answer的缓存Map
//        Map<Integer, Answer> answerMap = new HashMap<Integer, Answer>() {{
//            answerRepository.findAllById(ethicalconcernsList.parallelStream().map(Ethicalconcerns::getSubquesid).distinct().collect(Collectors.toList()))
//                    .forEach(x -> {
//                        if (x.getPoint() > get(x.getSubquesid()).getPoint())
//                            put(x.getSubquesid(), x);
//                    });
//        }};
        //创建questions的list和缓存Map
        List<Questions> questionsList = questionsRepository.findByIdIn(ethicalconcernsList.parallelStream().map(Ethicalconcerns::getQuestionid).collect(Collectors.toList()));
        Map<Integer, Questions> questionsMap = questionsList.parallelStream().collect(Collectors.toMap(Questions::getId, questions -> questions));
        //创建segments的list和缓存Map
        List<Segments> segmentsList = segmentsRepository.findByIdIn(questionsList.parallelStream().map(Questions::getSegmentid).collect(Collectors.toList()));
        Map<Integer, Segments> segmentsMap = segmentsList.parallelStream().collect(Collectors.toMap(Segments::getId, segments -> segments));
        //创建principles的list
        List<Principles> principlesList = principlesRepository.findByIdIn(segmentsList.parallelStream().map(Segments::getPrincipleid).collect(Collectors.toList()));

        //开始构建结果
        Map<String, Object> res = new TreeMap<>();
        res.put("projectname", project.getProjectname());
        res.put("description", project.getDescription());
        res.put("createdtime", project.getCreatedtime());
        res.put("creator", usersRepository.findById(project.getCreatorid()).get());

        List<Map<String, Object>> contentList = new ArrayList<>();
        principlesList.parallelStream().forEach(principle -> {
            Map<String, Object> summaryMap = new TreeMap<>();
            summaryMap.put("principle", principle.getPrinciplename());
            List<Map<String, Object>> principleContentList = new ArrayList<>();
            segmentsList.parallelStream().forEach(segment -> {
                if (segment.getPrincipleid() != principle.getId()) return;
                Map<String, Object> principleContentMap = new TreeMap<>();
                principleContentMap.put("segment", segment.getSegmentname());
                principleContentMap.put("summary", segmentsummaryMap.get(segment.getId()));
                List<Map<String, Object>> segmentContentList = new ArrayList<>();
                questionsList.parallelStream().forEach(question -> {
                    if (question.getSegmentid() != segment.getId()) return;
                    Map<String, Object> segmentContentMap = new TreeMap<>();
                    segmentContentMap.put("question", question.getQuestioncontent());
                    List<Map<String, Object>> questionContentList = new ArrayList<>();
                    ethicalconcernsList.parallelStream().forEach(ethicalconcern -> {
                        if (ethicalconcern.getQuestionid() != question.getId()) return;
                        Map<String, Object> questionContentMap = new TreeMap<>();
                        Subquestions subquestions = subquestionsMap.get(ethicalconcern.getSubquesid());
                        questionContentMap.put("subquestion", subquestions.getContent());
                        questionContentMap.put("level", subquestions.getLevel());
                        questionContentMap.put("youranswer", ethicalconcern.getAnswer());
                        questionContentMap.put("point", ethicalconcern.getPoints());
                        questionContentList.add(questionContentMap);
                    });
                    segmentContentMap.put("questioncontent", questionContentList);
                    segmentContentList.add(segmentContentMap);
                });
                principleContentMap.put("segmentcontent", segmentContentList);
                principleContentList.add(principleContentMap);
            });
            summaryMap.put("principlecontent", principleContentList);
            contentList.add(summaryMap);
        });
        res.put("content", contentList);
        return res;
    }

}

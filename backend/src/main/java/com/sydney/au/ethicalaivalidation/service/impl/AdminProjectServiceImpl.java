package com.sydney.au.ethicalaivalidation.service.impl;

import com.sydney.au.ethicalaivalidation.domain.*;
import com.sydney.au.ethicalaivalidation.repository.*;
import com.sydney.au.ethicalaivalidation.service.AdminProjectService;
import com.sydney.au.ethicalaivalidation.utils.ServiceUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;

@Transactional
@Service
public class AdminProjectServiceImpl implements AdminProjectService {

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

    public AdminProjectServiceImpl(UsersRepository usersRepository, ProjectassignRepository projectassignRepository, ProjectsRepository projectsRepository, CompanyRepository companyRepository, EthicalconcernsRepository ethicalconcernsRepository, QuestionsRepository questionsRepository, SegmentsRepository segmentsRepository, QuestiontypeRepository questiontypeRepository, SubquestionsRepository subquestionsRepository, PrinciplesRepository principlesRepository, AnswerRepository answerRepository, ValidatorfeedbackRepository validatorfeedbackRepository, QuestionfeedbackRepository questionfeedbackRepository, ProjectvalidationRepository projectvalidationRepository, SegmentsummaryRepository segmentsummaryRepository, QuestionstatusRepository questionstatusRepository) {
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
    public List<Map<String, Object>> listAllProject() {
        List<Projects> projects = new ArrayList<>();
        projectsRepository.findAll().forEach(projects::add);
        return projects.parallelStream()
                .map(project -> {
                    TreeMap<String, Object> projectMap = new TreeMap<>();
                    projectMap.put("projectname", project.getProjectname());
                    projectMap.put("projectid", project.getId());
                    projectMap.put("createdtime", project.getCreatedtime());
                    projectMap.put("status", project.getStatus());
                    return projectMap;
                }).collect(Collectors.toList());
    }

    @Override
    public Map<String, Object> getProjectDetail(String projectName) {
        Projects project = projectsRepository.findByProjectname(projectName);
        int projectId = project.getId();
        //查询所有supplier/validator信息
        List<Projectassign> suppliersInfo = projectassignRepository.findByProjectid(projectId);
        List<Projectvalidation> validatorsInfo = projectvalidationRepository.findByProjectid(projectId);
        //创建用户缓存Map
        Map<Integer, Users> userInfos = new HashMap<>();
        usersRepository.findAllById(new ArrayList<Integer>() {{
            addAll(suppliersInfo.parallelStream().map(Projectassign::getSupplierid).collect(Collectors.toList()));
            addAll(validatorsInfo.parallelStream().map(Projectvalidation::getValidatorid).collect(Collectors.toList()));
        }}).forEach(user -> userInfos.put(user.getId(), user));
        //构建supplier信息
        List<Map<String, Object>> suppliers = suppliersInfo.parallelStream().map(supplier -> {
            Map<String, Object> supplierMap = new TreeMap<>();
            int id = supplier.getSupplierid();
            Users supplierInfo = userInfos.get(id);
            supplierMap.put("id", id);
            supplierMap.put("name", supplierInfo.getUsername());
            return supplierMap;
        }).collect(Collectors.toList());
        //构建validator信息
        List<Map<String, Object>> validators = validatorsInfo.parallelStream().map(validator -> {
            Map<String, Object> validatorMap = new TreeMap<>();
            int id = validator.getValidatorid();
            Users validatorInfo = userInfos.get(id);
            validatorMap.put("id", id);
            validatorMap.put("name", validatorInfo.getUsername());
            return validatorMap;
        }).collect(Collectors.toList());
        //构建ethicalConcerns信息
        List<Map<String, Object>> ethicalConcerns = ethicalconcernsRepository.findByProjectid(projectId)
                .parallelStream().map(ethicalconcern -> {
                    Map<String, Object> ethicalConcernsMap = new TreeMap<>();
                    ethicalConcernsMap.put("id", ethicalconcern.getId());
                    ethicalConcernsMap.put("subquestionid", ethicalconcern.getSubquesid());
                    ethicalConcernsMap.put("questionid", ethicalconcern.getQuestionid());
                    ethicalConcernsMap.put("answer", ethicalconcern.getAnswer());
                    ethicalConcernsMap.put("finished", ethicalconcern.getFinished());
                    return ethicalConcernsMap;
                }).collect(Collectors.toList());
        TreeMap<String, Object> res = new TreeMap<>();
        res.put("createdtime", project.getCreatedtime());
        res.put("creator", usersRepository.findById(project.getCreatorid()).get().getUsername());
        res.put("description", project.getDescription());
        res.put("status", project.getStatus());
        res.put("assignedsuppliers", suppliers);
        res.put("assignedvalidators", validators);
        res.put("ethicalconcerns", ethicalConcerns);
        res.put("open", project.getOpen());
        return res;
    }

    @Override
    public List<Map<String, Object>> listOtherQuestion(String projectName) {
        Projects project = projectsRepository.findByProjectname(projectName);
        List<Ethicalconcerns> ethicalConcerns = ethicalconcernsRepository.findByProjectid(project.getId());
        //创建缓存容器
        List<Subquestions> leftSubQuestions = subquestionsRepository.findByIdNotIn(
                ethicalConcerns.parallelStream()
                        .map(Ethicalconcerns::getSubquesid).collect(Collectors.toList()));
        Map<Integer, Questions> leftQuestionsMap = questionsRepository.findByIdIn(
                leftSubQuestions.parallelStream()
                        .map(Subquestions::getQuestionid).distinct().collect(Collectors.toList()))
                .parallelStream().collect(Collectors.toMap(Questions::getId, questions -> questions));
        List<Integer> leftSegmentId = new ArrayList<>();
        leftQuestionsMap.forEach((key, question) -> leftSegmentId.add(question.getSegmentid()));
        Map<Integer, Segments> leftSegmentMap = segmentsRepository.findByIdIn(leftSegmentId)
                .parallelStream().collect(Collectors.toMap(Segments::getId, segments -> segments));
        List<Integer> leftPrincipleId = new ArrayList<>();
        leftSegmentMap.forEach((key, segment) -> leftPrincipleId.add(segment.getPrincipleid()));
        Map<Integer, Principles> leftPrinciples = principlesRepository.findByIdIn(leftPrincipleId)
                .stream().collect(Collectors.toMap(Principles::getId, principles -> principles));
        //构建结果
        return leftSubQuestions.parallelStream().map(subQuestion -> {
            TreeMap<String, Object> subQuestionMap = new TreeMap<>();
            subQuestionMap.put("subquesid", subQuestion.getId());
            subQuestionMap.put("subquestion", subQuestion.getContent());
            subQuestionMap.put("questiontype", subQuestion.getQuestiontype());
            Questions question = leftQuestionsMap.get(subQuestion.getQuestionid());
            subQuestionMap.put("questionid", question.getId());
            subQuestionMap.put("question", question.getQuestioncontent());
            Segments segment = leftSegmentMap.get(question.getSegmentid());
            subQuestionMap.put("segmentid", segment.getId());
            subQuestionMap.put("segment", segment.getSegmentname());
            Principles principle = leftPrinciples.get(segment.getPrincipleid());
            subQuestionMap.put("principleid", principle.getId());
            subQuestionMap.put("principle", principle.getPrinciplename());
            return subQuestionMap;
        }).collect(Collectors.toList());
    }

    @Override
    public boolean addOtherQuestion(String projectName, Integer projectId, Integer subQuesId) {
        Projects project = projectsRepository.findByProjectname(projectName);
        Optional<Subquestions> subQuesOptional = subquestionsRepository.findById(subQuesId);
        //判断subquestion id是否有效 && projectName是否有效 && 该subquestion是否已加入
        if (!subQuesOptional.isPresent()
                || project == null
                || project.getId() != projectId
                || ethicalconcernsRepository.findByProjectidAndSubquesid(projectId, subQuesId) != null)
            return false;
        Ethicalconcerns ethicalConcern = new Ethicalconcerns();
        ethicalConcern.setProjectid(projectId);
        ethicalConcern.setSubquesid(subQuesId);
        ethicalConcern.setQuestionid(subQuesOptional.get().getQuestionid());
        ethicalConcern.setFinished(1);
        ethicalconcernsRepository.save(ethicalConcern);
        return true;
    }

    @Override
    public boolean deleteQuestion(String projectName, Integer subQuesId) {
        Projects project = projectsRepository.findByProjectname(projectName);
        Optional<Subquestions> subQuesOptional = subquestionsRepository.findById(subQuesId);
        //判断subquestion id是否有效 && projectName是否有效 && 该subquestion是否已加入
        if (!subQuesOptional.isPresent()
                || project == null
                || ethicalconcernsRepository.findByProjectidAndSubquesid(project.getId(), subQuesId) == null)
            return false;
        ethicalconcernsRepository.deleteByProjectidAndSubquesid(project.getId(), subQuesId);
        return true;
    }

    @Override
    public List<Map<String, Object>> listAllValidator(String projectName) {
        return usersRepository.findByUsertype(3).parallelStream()
                .map(validator -> {
                    Map<String, Object> validatorMap = new TreeMap<>();
                    validatorMap.put("username", validator.getUsername());
                    validatorMap.put("userid", validator.getId());
                    validatorMap.put("company", validator.getCompany());
                    return validatorMap;
                }).collect(Collectors.toList());
    }

    @Override
    public boolean assignValidator(String projectName, List<Integer> userId) {
        Projects project = projectsRepository.findByProjectname(projectName);
        if (project == null) return false;

        projectvalidationRepository.saveAll(userId.parallelStream().map(validatorId -> {

            Projectvalidation projectvalidation = new Projectvalidation();
            projectvalidation.setProjectid(project.getId());
            projectvalidation.setValidatorid(validatorId);
            projectvalidation.setAssignedtime(ServiceUtils.getNowTimeStamp());
            projectvalidation.setChecknumber(0);
            projectvalidation.setStatus(1);
            return projectvalidation;
        }).collect(Collectors.toList()));
//        projectsRepository.updateStatusByProjectId(project.getId(), 3);
        return true;
    }

    @Override
    public Map<String, Object> summaryTheProject(String projectName) {
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
        Map<Integer, Answer> answerMap = new HashMap<Integer, Answer>() {{
            answerRepository.findBySubquesidIn(ethicalconcernsList.parallelStream().map(Ethicalconcerns::getSubquesid).distinct().collect(Collectors.toList()))
                    .forEach(x -> {
                        if (x.getPoint() > Optional.ofNullable(get(x.getSubquesid())).orElse(new Answer()).getPoint())
                            put(x.getSubquesid(), x);
                    });
        }};
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
        Map<String, Object> projectMap = new TreeMap<>();
        projectMap.put("projectname", project.getProjectname());
        projectMap.put("description", project.getDescription());
        projectMap.put("createdtime", project.getCreatedtime());
        projectMap.put("finishedtime", project.getFinishedtime());
        projectMap.put("creator", usersRepository.findById(project.getCreatorid()).get());
        projectMap.put("assignedsupplier", supplierIds.parallelStream().map(userNameMap::get).collect(Collectors.toList()));
        projectMap.put("assignedvalidator", validatorIds.parallelStream().map(userNameMap::get).collect(Collectors.toList()));
        res.put("project", projectMap);
        Map<Integer, Principles> principlesMap = principlesList.parallelStream().collect(Collectors.toMap(Principles::getId, principles -> principles));
        Map<Integer, Float> principleGraph = new HashMap<>();
        Map<Integer, Float> segmentGraph = new HashMap<>();
        Map<Integer, Float> quesGraph = new HashMap<>();
        Map<Integer, Float> subQuesGraph = new HashMap<>();
        ethicalconcernsList.forEach(x -> {
            Float points = x.getPoints();
            int subquesid = x.getSubquesid();
            int questionid = x.getQuestionid();
            int segmentid = questionsMap.get(questionid).getSegmentid();
            int principleid = segmentsMap.get(segmentid).getPrincipleid();
            Float quesPoint = quesGraph.getOrDefault(questionid, Float.valueOf(0));
            Float segmentPoint = segmentGraph.getOrDefault(segmentid, Float.valueOf(0));
            Float principlePoint = principleGraph.getOrDefault(principleid, Float.valueOf(0));
            subQuesGraph.put(subquesid, points);
            quesGraph.put(questionid, quesPoint + points);
            segmentGraph.put(segmentid, segmentPoint + points);
            principleGraph.put(principleid, principlePoint + points);
        });
        res.put("principlegraph", principleGraph);
        res.put("segmentgraph", segmentGraph);
        res.put("questiongraph", quesGraph);
        res.put("subquestiongraph", subQuesGraph);

        List<Map<String, Object>> summaryList = new ArrayList<>();
        principlesList.parallelStream().forEach(principle -> {
            Map<String, Object> summaryMap = new TreeMap<>();
            summaryMap.put("principle", principle.getPrinciplename());
            List<Map<String, Object>> principleContentList = new ArrayList<>();
            segmentsList.parallelStream().forEach(segment -> {
                if (segment.getPrincipleid() != principle.getId()) return;
                Map<String, Object> principleContentMap = new TreeMap<>();
                principleContentMap.put("segment", segment.getSegmentname());
                principleContentMap.put("segmentcomment", segmentsummaryMap.get(segment.getId()));
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
                        questionContentMap.put("type", questiontypeRepository.findById(subquestions.getQuestiontype()).get().getDescription());
                        if(answerMap.get(ethicalconcern.getSubquesid()) != null) questionContentMap.put("answer", answerMap.get(ethicalconcern.getSubquesid()).getAnswer());
                        else questionContentMap.put("answer", 0);
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
            summaryList.add(summaryMap);
        });

        res.put("summary", summaryList);

        return res;
    }

    @Override
    public Map<String, Object> getProjectProcess(String projectName) {
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
        Map<Integer, Answer> answerMap = new HashMap<Integer, Answer>() {{
            answerRepository.findBySubquesidIn(ethicalconcernsList.parallelStream().map(Ethicalconcerns::getSubquesid).distinct().collect(Collectors.toList()))
                    .forEach(x -> {
                        if (x.getPoint() > Optional.ofNullable(get(x.getSubquesid())).orElse(new Answer()).getPoint())
                            put(x.getSubquesid(), x);
                    });
        }};
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
        Map<String, Object> projectMap = new TreeMap<>();
        projectMap.put("projectname", project.getProjectname());
        projectMap.put("description", project.getDescription());
        projectMap.put("createdtime", project.getCreatedtime());
        projectMap.put("finishedtime", project.getFinishedtime());
        projectMap.put("creator", usersRepository.findById(project.getCreatorid()).get());
        projectMap.put("assignedsupplier", supplierIds.parallelStream().map(userNameMap::get).collect(Collectors.toList()));
        projectMap.put("assignedvalidator", validatorIds.parallelStream().map(userNameMap::get).collect(Collectors.toList()));
        res.put("project", projectMap);

        List<Map<String, Object>> summaryList = new ArrayList<>();
        principlesList.parallelStream().forEach(principle -> {
            Map<String, Object> summaryMap = new TreeMap<>();
            summaryMap.put("principle", principle.getPrinciplename());
            List<Map<String, Object>> principleContentList = new ArrayList<>();
            segmentsList.parallelStream().forEach(segment -> {
                if (segment.getPrincipleid() != principle.getId()) return;
                Map<String, Object> principleContentMap = new TreeMap<>();
                principleContentMap.put("segment", segment.getSegmentname());
                principleContentMap.put("segmentcomment", segmentsummaryMap.get(segment.getId()));
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
                        questionContentMap.put("type", subquestions.getQuestiontype());
                        Answer answer = answerMap.get(ethicalconcern.getSubquesid());
                        questionContentMap.put("answer", answer==null?new Answer().getAnswer():answer.getAnswer());
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
            summaryList.add(summaryMap);
        });

        res.put("summary", summaryList);

        return res;
    }

    @Override
    public Boolean openProject(String projectName) {
        Projects project = projectsRepository.findByProjectname(projectName);
        if(project != null) {
            project.setOpen(1);
            projectsRepository.save(project);
            return true;
        }
        return false;
    }


}

package com.sydney.au.ethicalaivalidation.service.impl;

import com.sydney.au.ethicalaivalidation.domain.Users;
import com.sydney.au.ethicalaivalidation.repository.*;
import com.sydney.au.ethicalaivalidation.service.AdminUserService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Transactional
@Service
public class AdminUserServiceImpl implements AdminUserService {

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

    public AdminUserServiceImpl(UsersRepository usersRepository, ProjectassignRepository projectassignRepository, ProjectsRepository projectsRepository, CompanyRepository companyRepository, EthicalconcernsRepository ethicalconcernsRepository, QuestionsRepository questionsRepository, SegmentsRepository segmentsRepository, QuestiontypeRepository questiontypeRepository, SubquestionsRepository subquestionsRepository, PrinciplesRepository principlesRepository, AnswerRepository answerRepository, ValidatorfeedbackRepository validatorfeedbackRepository, QuestionfeedbackRepository questionfeedbackRepository, ProjectvalidationRepository projectvalidationRepository, SegmentsummaryRepository segmentsummaryRepository, QuestionstatusRepository questionstatusRepository) {
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
    @SuppressWarnings("unchecked")
    public List<Map<String, Object>> listAllUser() {
        List<Users> users = new ArrayList<>();
        usersRepository.findAll().forEach(users::add);
        HashMap<Integer, String> companies = new HashMap<>();
        companyRepository.findAll().forEach(company -> companies.put(company.getId(), company.getCompanyname()));
        //构建结果
        List<Map<String, Object>> res = new ArrayList<>();
        TreeMap<String, Object> userTypeMap = new TreeMap<>();
        userTypeMap.put("users", new ArrayList<Map<String, Object>>());
        userTypeMap.put("usertype", "supplier admin");
        res.set(1, userTypeMap);
        userTypeMap.put("usertype", "supplier");
        res.set(2, userTypeMap);
        userTypeMap.put("usertype", "validator");
        res.set(3, userTypeMap);
        userTypeMap.put("usertype", "admin");
        res.set(4, userTypeMap);
        userTypeMap.put("usertype", "regulator");
        res.set(5, userTypeMap);
        users.parallelStream().forEach(user -> {
            Map<String, Object> principleMap = new TreeMap<>();
            principleMap.put("userid", user.getId());
            principleMap.put("username", user.getUsername());
            principleMap.put("createdtime", user.getCreatedtime());
            principleMap.put("company", companies.get(user.getCompany()));
            ((List<Map<String, Object>>) res.get(user.getUsertype()).get("users")).add(principleMap);
        });
        return res;
    }

    @Override
    public List<Map<String, Object>> listAllUserByType(String type) {
        int userTypeId = 0;
        if (type.equals("supplier admin")) userTypeId = 1;
        else if (type.equals("supplier")) userTypeId = 2;
        else if (type.equals("validator")) userTypeId = 3;
        else if (type.equals("admin")) userTypeId = 4;
        else if (type.equals("regulator")) userTypeId = 5;
        List<Users> users = new ArrayList<>(usersRepository.findByUsertype(userTypeId));
        HashMap<Integer, String> companies = new HashMap<>();
        companyRepository.findAll().forEach(company -> companies.put(company.getId(), company.getCompanyname()));
        List<Map<String, Object>> res = new ArrayList<>();
        users.parallelStream().forEach(user -> {
            Map<String, Object> principleMap = new TreeMap<>();
            principleMap.put("userid", user.getId());
            principleMap.put("username", user.getUsername());
            principleMap.put("createdtime", user.getCreatedtime());
            principleMap.put("company", companies.get(user.getCompany()));
            res.add(principleMap);
        });
        return res;
    }

    @Override
    public Map<String, Object> getUserDetail(String userName) {
        Users user = usersRepository.findByUsername(userName);
        TreeMap<String, Object> res = new TreeMap<>();
        res.put("username", user.getUsername());
        res.put("createdtime", user.getCreatedtime());
        res.put("company", user.getCompany());
        res.put("email", user.getEmail());
        String[] types = {"supplier admin", "supplier", "validator", "admin"};
        res.put("usertype", types[user.getUsertype() - 1]);
        res.put("firstname", user.getFirstname());
        res.put("lastname", user.getLastname());
        res.put("address1", user.getAddress1());
        res.put("address2", user.getAddress2());
        res.put("phone", user.getPhone());
        return res;
    }

    @Override
    public boolean deleteUser(String userName) {
        Users user = usersRepository.findByUsername(userName);
        if (user == null) return false;
        usersRepository.deleteById(user.getId());
        return true;
    }
}

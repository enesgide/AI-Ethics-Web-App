package com.sydney.au.ethicalaivalidation.controller;

import com.sydney.au.ethicalaivalidation.service.SupplierService;
import com.sydney.au.ethicalaivalidation.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartResolver;

import javax.naming.ConfigurationException;
import javax.servlet.MultipartConfigElement;
import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;
import java.util.List;
import java.util.Map;

/**
 * @author: 
 * @package: com.sydney.au.ethicalaivalidation.controller
 * @version: 1.0
 * <b>Description:</b>
 * <p>AI Supplier requests</p>
 */
@RestController
public class SupplierController {

    private final SupplierService supplierService;

    public SupplierController(UserService userService, SupplierService supplierService) {
        this.supplierService = supplierService;
    }

//    @Bean
//    public MultipartConfigElement multipartConfigElement(){
//        return new MultipartConfigElement("");
//    }
//
//    @Bean(name = "multipartResolver")
//    public MultipartResolver multipartResolver() {
//        org.springframework.web.multipart.commons.CommonsMultipartResolver multipartResolver =
//                new org.springframework.web.multipart.commons.CommonsMultipartResolver();
//        multipartResolver.setMaxUploadSize(1000000);
//        return multipartResolver;
//    }

    //Show all projects that are assigned to this supplier
    @GetMapping(path = "/projectlist")
    public @ResponseBody ResponseEntity<List> getProjectList(@AuthenticationPrincipal UserDetails userDetails) {
        List<Map<String, String>> res = supplierService.listProject(userDetails.getUsername());
        if (res.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //find an unlocked question and its first unfinished subquestion.
    @GetMapping(path = "/answer/{projectname}")
    public @ResponseBody ResponseEntity<Map> getQuestion(@PathVariable("projectname") String projectName,@AuthenticationPrincipal UserDetails userDetails) {
        Map<String, String> res = supplierService.getQuestion(projectName, userDetails.getUsername());
        if (res.isEmpty()) {
            res.put("message", "project name is wrong");
            return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Show a question page and user can answer
    @GetMapping(path = "/answer/{projectname}/{questionid}/{subquesid}")
    public @ResponseBody ResponseEntity<Map> getQuestionPage(@PathVariable("projectname") String projectName,
                                                             @PathVariable("questionid") String questionId,
                                                             @PathVariable("subquesid") String subquesId,
                                                             @AuthenticationPrincipal UserDetails userDetails) {
        Map<String, Object> res = supplierService.getQuestionPage(projectName,userDetails.getUsername(),questionId,subquesId);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Answer the question
    @PostMapping(path = "/answer/{projectname}/{questionid}/{subquesid}", consumes = {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public @ResponseBody ResponseEntity<Map> postAnswer(@PathVariable("projectname") String projectName,
                                                        @PathVariable("questionid") String questionId,
                                                        @PathVariable("subquesid") String subquesId,
                                                        @RequestPart(value = "submitedfile", required = false) MultipartFile file,
                                                        @RequestPart("answer") Map<String,Object> req,
                                                        @AuthenticationPrincipal UserDetails userDetails) {
        if(file != null && !file.isEmpty()){
            String basePath = System.getProperty("user.dir");
            String changedBasePath = new File(basePath).getParent();
            String rootPath = changedBasePath.concat("/fairnessdjango/polls/Algorithms/dataset/synthetic_data");
            File dir = new File(rootPath + File.separator + file.getName());
            if(!dir.exists()) dir.mkdirs();
            File serverFile = new File(dir.getAbsolutePath() + File.separator + file.getOriginalFilename());
            try {
                file.transferTo(serverFile);
            } catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }
        Map<String, Object> res = supplierService.postAnswer(projectName, Integer.parseInt(questionId), Integer.parseInt(subquesId), req, userDetails.getUsername());
        if (res.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Show all message (project assignment and feedbacks)
    @GetMapping(path = "/feedback")
    public @ResponseBody ResponseEntity<List> getAllMessage(@AuthenticationPrincipal UserDetails userDetails) {
        String username = userDetails.getUsername();
        System.out.println(username);
        List<Map<String, Object>> res = supplierService.getAllMessage(username);
        if (res.isEmpty()) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Feedback Detail page: validator feedback
    @GetMapping(path = "/feedback/projectfeedback/{projectname}/{validatorname}/{feedbacktime}")
    public @ResponseBody ResponseEntity<List> getValidatorFeedback(@PathVariable("projectname") String projectName,
                                                                   @PathVariable("validatorname") String validatorName,
                                                                   @PathVariable("feedbacktime") String feedbackTime) {
        List<Map<String, Object>> res = supplierService.getValidatorFeedback(projectName,validatorName,feedbackTime);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Feedback Detail page: assign project to this user
    @GetMapping(path = "/feedback/projectassignment/{projectname}")
    public @ResponseBody ResponseEntity<Map> getAssignFeedback(@PathVariable("projectname") String projectName) {
        Map<String, Object> res = supplierService.getAssignFeedback(projectName);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    //Show a report after the project's status is finished.
    @GetMapping(path = "/report/{projectname}")
    public @ResponseBody
    ResponseEntity<Map> getReport(@PathVariable("projectname") String projectName) {
        Map<String, Object> res = supplierService.getReport(projectName);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}

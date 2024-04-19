package com.sydney.au.ethicalaivalidation.controller;

import com.sydney.au.ethicalaivalidation.service.ValidatorService;
import com.sydney.au.ethicalaivalidation.utils.ReportGenerator;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayOutputStream;
import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

//imports to generate pdf example
import com.itextpdf.text.Document;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.pdf.PdfWriter;

@RestController
@RequestMapping("/questionnairelist")
public class ValidatorController {

    private final ValidatorService validatorService;

    public ValidatorController(ValidatorService validatorService) {
        this.validatorService = validatorService;
    }

    @GetMapping()
    public @ResponseBody
    ResponseEntity<Object> getProject(@AuthenticationPrincipal UserDetails userDetails) {
        List<Map<String, Object>> res = validatorService.getProjectList(userDetails.getUsername());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping("/{projectname}")
    public @ResponseBody
    ResponseEntity<Object> getProjectDetail(@PathVariable("projectname") String projectName, @AuthenticationPrincipal UserDetails userDetails) {
        Map<String, Object> res = validatorService.getProjectDetail(projectName, userDetails.getUsername());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/{projectname}/addcomment")
    public @ResponseBody
    ResponseEntity<Object> addComment(@PathVariable("projectname") String projectName,
                                      @RequestBody Map<String, Object> req,
                                      @AuthenticationPrincipal UserDetails userDetails) {
        Integer subQuestionId = (Integer) req.get("subquesid");
        String comment = (String) req.get("comment");
        Boolean passed = req.get("passed").equals(1);
        boolean res = validatorService.addComment(projectName, userDetails.getUsername(), subQuestionId, comment, passed);
        if (res) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/{projectname}/addsummary")
    public @ResponseBody
    ResponseEntity<Object> addSummary(@PathVariable("projectname") String projectName,
                                      @RequestBody Map<String, Object> req,
                                      @AuthenticationPrincipal UserDetails userDetails) {
        Integer segmentId = (Integer) req.get("segmentid");
        String comment = (String) req.get("comment");
        boolean res = validatorService.addSummary(projectName, userDetails.getUsername(), segmentId, comment);
        if (res) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        TreeMap<String, String> resMap = new TreeMap<>();
        resMap.put("message", "Not all questions in this segment passed.");
        return new ResponseEntity<>(resMap, HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{projectname}/pass")
    public @ResponseBody
    ResponseEntity<Object> passProject(@PathVariable("projectname") String projectName,
                                      @AuthenticationPrincipal UserDetails userDetails) {
        boolean res = validatorService.passProject(projectName, userDetails.getUsername());
        if (res) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{projectname}/sendfeedback")
    public @ResponseBody
    ResponseEntity<Object> sendFeedback(@PathVariable("projectname") String projectName,
                                       @AuthenticationPrincipal UserDetails userDetails) {
        boolean res = validatorService.sendFeedback(projectName, userDetails.getUsername());
        if (res) {
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

//    @PostMapping("/generateReport")
//    public @ResponseBody
//    ResponseEntity<Object> generateReport(
//                                      @RequestBody String req,
//                                      @AuthenticationPrincipal UserDetails userDetails) {
//        System.out.println(req);
//        boolean res = ReportGenerator.GenerateReport();
//        if (res) {
//            return new ResponseEntity<>(HttpStatus.OK);
//        }
//        return new ResponseEntity<>("Report generation did not complete.", HttpStatus.BAD_REQUEST);
//    }
@PostMapping("/generateReport")
public ResponseEntity<byte[]> generateReport(
        @RequestBody String req,
        @AuthenticationPrincipal UserDetails userDetails) {
    System.out.println("Generating report");
    try {
        // Create a new Document
        Document document = new Document();

        // Create a ByteArrayOutputStream to hold the PDF data
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        // Create a PdfWriter instance to write to the ByteArrayOutputStream
        PdfWriter.getInstance(document, baos);

        // Open the document
        document.open();

        // Add content to the PDF
        document.add(new Paragraph("This is a sample PDF content."));

        // Close the document
        document.close();

        // Set the response headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        String filename = "report.pdf"; // You can change the filename as needed
        headers.setContentDispositionFormData(filename, filename);

        // Convert the ByteArrayOutputStream to a byte array
        byte[] pdfBytes = baos.toByteArray();
        System.out.println(pdfBytes);

        // Return the PDF as a response
        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    } catch (Exception e) {
        e.printStackTrace();
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}

}

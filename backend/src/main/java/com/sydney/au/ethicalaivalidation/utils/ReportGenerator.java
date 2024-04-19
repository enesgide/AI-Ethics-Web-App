package com.sydney.au.ethicalaivalidation.utils;

import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import net.sf.jasperreports.engine.JREmptyDataSource;
import net.sf.jasperreports.engine.JRException;
import net.sf.jasperreports.engine.JRVariable;
import net.sf.jasperreports.engine.JasperCompileManager;
import net.sf.jasperreports.engine.JasperExportManager;
import net.sf.jasperreports.engine.JasperFillManager;
import net.sf.jasperreports.engine.JasperPrint;
import net.sf.jasperreports.engine.JasperReport;
import org.springframework.stereotype.Service;

@Service
public class ReportGenerator {


//    private String jdbcUrl = "jdbc:mysql://localhost:3306/ethicalaivalidation?user=root&password=Mysql123456\"";
    public ReportGenerator() {
    }
    public static boolean GenerateReport() {
        ReportGenerator reportGenerator = new ReportGenerator();
        reportGenerator.generateTableOfContents();
        reportGenerator.generateFrontCover();
        reportGenerator.generateBackCover();
        reportGenerator.generateSegmentSummary();
        return true;
    }

//    private Connection connect() {
//        Connection connection = null;
//        try {
//            connection = DriverManager.getConnection(jdbcUrl);
//        } catch (SQLException e) {
//            System.out.println(e.getMessage());
//        }
//        return connection;
//    }

    public String generateTableOfContents() {

        try {
            // Compile JRXML file and generate PDF
            JasperReport jasperReport = null;
            InputStream inputStream = ReportGenerator.class.getResourceAsStream("/MyReports/tableofcontents.jrxml");
//            InputStream inputStream = ReportGenerator.class.getResourceAsStream("src/main/java/com/sydney/au/ethicalaivalidation/utils/MyReports/tableofcontents.jrxml");
            if (inputStream == null) {
                throw new FileNotFoundException("JRXML file not found in classpath.");
            }
            jasperReport = JasperCompileManager.compileReport(inputStream);
            JREmptyDataSource dataSourceEmpty = new JREmptyDataSource();


            // Create a map to hold the parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("Principle", "Fairness");
            parameters.put("Segment", "Segment 1: Industry Norms");
            parameters.put("question", "In a scenario where your AI system is tasked with decision-making that affects diverse user groups, how does your system ensure that no particular group is systematically disadvantaged or favored over others, and how is this fairness validated and communicated to the stakeholders?");

            // Get the list of variables from the report
            JRVariable[] variables = jasperReport.getVariables();
            for (JRVariable var : variables) {
                System.out.println("Variable Name: " + var.getName() + " " + var.getDescription());
            }

            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSourceEmpty);

            // Convert the JasperPrint to a byte array
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            JasperExportManager.exportReportToPdfStream(jasperPrint, byteArrayOutputStream);
            byte[] pdfData = byteArrayOutputStream.toByteArray();
            System.out.println(pdfData);
//            pdfRepository.insertPdfData(pdfData);
//            String sql = "INSERT INTO pdf_table (pdf_data) VALUES (?)";
//            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
//                preparedStatement.setBytes(1, pdfData);
//                preparedStatement.executeUpdate();
//            }

            return "Successful";
        } catch ( JRException | IOException e) {
            e.printStackTrace();
            System.out.println("Failed to generate and store the report");
            return null;
        } //finally {
////            if (connection != null) {
////                try {
////                    connection.close();
////                } catch (SQLException e) {
////                    e.printStackTrace();
////                }
////            }
//        }
    }

    public String generateBackCover() {
//        Connection connection = connect();
        try {
            // Compile JRXML file and generate PDF
            JasperReport jasperReport = null;
            InputStream inputStream = ReportGenerator.class.getResourceAsStream("/MyReports/Backcover.jrxml");
            if (inputStream == null) {
                throw new FileNotFoundException("JRXML file not found in classpath.");
            }
            jasperReport = JasperCompileManager.compileReport(inputStream);
            JREmptyDataSource dataSourceEmpty = new JREmptyDataSource();

            // Create a map to hold the parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("PrincipleSegmentQuestion", "TEST");

            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSourceEmpty);

            // Convert the JasperPrint to a byte array
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            JasperExportManager.exportReportToPdfStream(jasperPrint, byteArrayOutputStream);
            byte[] pdfData = byteArrayOutputStream.toByteArray();
//            pdfRepository.insertPdfData(pdfData);
//
//            String sql = "INSERT INTO pdf_table (pdf_data) VALUES (?)";
//            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
//                preparedStatement.setBytes(1, pdfData);
//                preparedStatement.executeUpdate();
//            }

            return "Successful";
        } catch ( JRException | IOException e) {
            e.printStackTrace();
            System.out.println("Failed to generate and store the report");
            return null;
        } //finally {
//            if (connection != null) {
//                try {
//                    connection.close();
//                } catch (SQLException e) {
//                    e.printStackTrace();
//                }
//            }
//        }
    }

    public String generateFrontCover() {

        try {
            // Compile JRXML file and generate PDF
            JasperReport jasperReport = null;
            InputStream inputStream = ReportGenerator.class.getResourceAsStream("/MyReports/Frontcover.jrxml");
            if (inputStream == null) {
                throw new FileNotFoundException("JRXML file not found in classpath.");
            }
            jasperReport = JasperCompileManager.compileReport(inputStream);
            JREmptyDataSource dataSourceEmpty = new JREmptyDataSource();


            // Create a map to hold the parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("AIProjectName", "UTS Skynet");
            parameters.put("AISupplier", "OpenAI");

            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSourceEmpty);

            // Convert the JasperPrint to a byte array
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            JasperExportManager.exportReportToPdfStream(jasperPrint, byteArrayOutputStream);
            byte[] pdfData = byteArrayOutputStream.toByteArray();
//            pdfRepository.insertPdfData(pdfData);
//            String sql = "INSERT INTO pdf_table (pdf_data) VALUES (?)";
//            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
//                preparedStatement.setBytes(1, pdfData);
//                preparedStatement.executeUpdate();
//            }

            return "Successful";
        } catch (JRException | IOException e) {
            e.printStackTrace();
            System.out.println("Failed to generate and store the report");
            return null;
        } //finally {
//            if (connection != null) {
//                try {
//                    connection.close();
//                } catch (SQLException e) {
//                    e.printStackTrace();
//                }
//            }
//        }
    }

    public String generateSegmentSummary() {
//        Connection connection = connect();
        try {
            // Compile JRXML file and generate PDF
            JasperReport jasperReport = null;
            InputStream inputStream = ReportGenerator.class.getResourceAsStream("/MyReports/SegmentSummary.jrxml");
            if (inputStream == null) {
                throw new FileNotFoundException("JRXML file not found in classpath.");
            }
            jasperReport = JasperCompileManager.compileReport(inputStream);
            JREmptyDataSource dataSourceEmpty = new JREmptyDataSource();


            // Create a map to hold the parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("Principle", "Fairness");
            parameters.put("Segment", "Segment 1: Test");
            parameters.put("SegmentSummary", "Segment summary q?");

            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, dataSourceEmpty);

            // Convert the JasperPrint to a byte array
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            JasperExportManager.exportReportToPdfStream(jasperPrint, byteArrayOutputStream);
            byte[] pdfData = byteArrayOutputStream.toByteArray();
//            pdfRepository.insertPdfData(pdfData);
//            String sql = "INSERT INTO pdf_table (pdf_data) VALUES (?)";
//            try (PreparedStatement preparedStatement = connection.prepareStatement(sql)) {
//                preparedStatement.setBytes(1, pdfData);
//                preparedStatement.executeUpdate();
//            }

            return "Successful";
        } catch (JRException | IOException e) {
            e.printStackTrace();
            System.out.println("Failed to generate and store the report");
            return null;
        } //finally {
//            if (connection != null) {
//                try {
//                    connection.close();
//                } catch (SQLException e) {
//                    e.printStackTrace();
//                }
//            }
//        }
    }
}

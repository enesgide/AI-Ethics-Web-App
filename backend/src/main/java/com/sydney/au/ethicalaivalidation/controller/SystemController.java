package com.sydney.au.ethicalaivalidation.controller;

import com.sydney.au.ethicalaivalidation.domain.Company;
import com.sydney.au.ethicalaivalidation.security.JwtTokenProvider;
import com.sydney.au.ethicalaivalidation.security.WebSecurityConfig;
import com.sydney.au.ethicalaivalidation.service.AsynchronousService;
import com.sydney.au.ethicalaivalidation.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.stream.Collectors;

/**
 * @author: Xin Lin on 11/9/2020
 * @package: com.sydney.au.ethicalaivalidation.controller
 * @version: 1.0
 * <b>Description:</b>
 * <p>Handle all requests that allowed to all types of users</p>
 */
@RestController
public class SystemController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    JwtTokenProvider jwtTokenProvider;

    @Autowired
    private UserService userService;

    @Autowired
    private AsynchronousService asynchronousService;

    /************************** User Signup *******************************************/
    /**
     * @return Map
     * {@link WebSecurityConfig}
     * {@link JwtTokenProvider}
     */
    @GetMapping(path = "/signup")
    public @ResponseBody ResponseEntity<List> getsignup(){
        System.out.println("\n\n");
        System.out.println("Reached getmapping signup");
        System.out.println("\n\n");

        List<Map> res = new ArrayList<>();
        List<Company> companies = new ArrayList<>();
        companies = userService.getAllCompanies();
        for(Company c: companies){
            int cid = c.getId();
            String cname = c.getCompanyname();
            Map<String, Object> m = new TreeMap<>();
            m.put("companyid",cid);
            m.put("companyname",cname);
            res.add(m);
        }

        System.out.println("\n\nSYSTEM SIGN UP companies:");
        System.out.println(companies);
        System.out.println("SYSTEM SIGN UP res:");
        System.out.println(res);
        System.out.println("\n\n");

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping(path = "/signup")
    public @ResponseBody ResponseEntity<Map> postsignup(@RequestBody Map<String, Object> req){
        //System.out.println("\n\nReached postmapping signup\n\n");

        Map<String, String> res = new TreeMap<>();
        // achieve all submitted fields
        String username = req.get("username").toString();

        String email = req.get("email").toString();
        String password = req.get("password").toString();
        String company = req.get("company").toString();
     //   int company = Integer.parseInt(req.get("company").toString());
        int usertype = Integer.parseInt(req.get("usertype").toString());
     //   int company = (Integer) req.get("company");
     //   int usertype = (Integer) req.get("usertype");
        String firstname = req.get("firstname").toString();
        String lastname = req.get("lastname").toString();
        String address1 = req.get("address1").toString();
        String address2 = req.get("address2").toString();
        String phone = req.get("phone").toString();

        String message = "";
        //only for supplier & supplieradmin
        if(usertype != 1 && usertype != 2) {
            message = "You don't have permission to sign up";
            res.put("message", message);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }

        // signup process
        int check = userService.signup(
                username,
                email,
                password,
                company,
                usertype,
                firstname,
                lastname,
                address1,
                address2,
                phone);

        // wrap response message
        if(check == 2){
            message = "Something wrong, please try again later.";
        }
        else if(check == 3){
            message = "Username already exists, please try again.";
        }
        else {
            message = "Success! Please check your email box to verify your email address.";
        }
        res.put("message", message);

        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @GetMapping(path = "/verifyemail/{username}/{useremail}/{token}")
    public @ResponseBody ResponseEntity<Map> verifyemail(@PathVariable("username") String username,
                                                         @PathVariable("useremail") String useremail,
                                                         @PathVariable("token") String token){
        Map<String, String> res = new TreeMap<>();
        String message = "";
        boolean check = userService.checkEmailToken(username, token);
        if(check){
            message = "Verify email successfuly!";
            res.put("message", message);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }
        message = "Something wrong! Please load again or send feedback to us.";
        res.put("message", message);
        return new ResponseEntity<>(res,HttpStatus.NOT_FOUND);
    }

    /******************************* User Login ***************************************/
    @PostMapping(path = "/login")
    public @ResponseBody ResponseEntity<Map> login(@RequestBody Map<String, Object> req){
        //System.out.println("\n\nReached postmapping login\n\n");

        Map<String, Object> res = new TreeMap<>();
        try {
            String username = req.get("username").toString();
            String password = req.get("password").toString();
            //System.out.println("Raw password = " + password);
            //password = jwtTokenProvider.savedPasswordToken(password);
            //System.out.println("Token password = " + password);

            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
            List<String> roles = this.userService.checkUserRoles(username);

            String token = jwtTokenProvider.createToken(username, roles);
            int usertype = this.userService.getUserType(username);
            res.put("jwttoken", token);
            res.put("username", username);
            res.put("usertype", usertype);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }catch (AuthenticationException e){
            System.out.println("wrong username/password");
            throw new BadCredentialsException("Invalid username/password");
        }
    }

    /******************************** User Info *******************************************/
    @RequestMapping(path = "userinfo")
    public @ResponseBody ResponseEntity<Map> getUserInfo(@AuthenticationPrincipal UserDetails userDetails){
        List<String> usertype = userDetails.getAuthorities().stream().map(a->((GrantedAuthority) a).getAuthority()).collect(Collectors.toList());
        List<String> roles = new ArrayList<>();
        for(String role: usertype){
            String r = role.substring(5);
            roles.add(r);
        }

        Map<String, Object> res = new TreeMap<>();
        res = this.userService.findUserInfo(userDetails.getUsername());
        System.out.println("this is userinfo: \n" + res);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PutMapping(path = "/userinfo")
    public @ResponseBody ResponseEntity<Map> updateUserInfo(@RequestBody Map<String, Object> req, @AuthenticationPrincipal UserDetails userDetails){
        Map<String, Object> res = new TreeMap<>();
        String username = userDetails.getUsername();
        // get update information
        String username1 = req.get("username").toString();
        String firstname = req.get("firstname").toString();
        String lastname = req.get("lastname").toString();
        String address1 = req.get("address1").toString();
        String address2 = req.get("address2").toString();
        String phone = req.get("phone").toString();

        // update user info
        String message = "";
        boolean usernameexist = this.userService.checkUserExists(username1, username);
        if(usernameexist){
            message = "This username already exists.";
            res.put("message", message);
            return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
        }
        boolean update = false;
        if(username.equals(username1)){
            update = this.userService.updateUserInfo(username,firstname,lastname,address1,address2,phone);
        }
        else {
            update = this.userService.updateUserInfoWithUsername(username,username1,
                    firstname,lastname,address1,address2,phone);
        }

        if(update){
            boolean updateusername = false;
            if(!username.equals(username1)) updateusername=true;
            res.put("updateusername", updateusername);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }
        message = "Fail to update your information";
        res.put("message", message);
        return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
    }

    /*********************************** Reset Password ************************************/
    @GetMapping(path = "/resetpassword")
    public @ResponseBody ResponseEntity<Boolean> autoSendResetPasswordEmail(@AuthenticationPrincipal UserDetails userDetails){
        String username = userDetails.getUsername();

        String useremail = "";
        String userpwdtoken = "";
        useremail = this.userService.getUserEmail(username);
        userpwdtoken = this.userService.getUserPasswordToken(username);

        if(useremail.length()>1 && userpwdtoken.length()>1){
            asynchronousService.sendEmailResetPassword(username, useremail, userpwdtoken);
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }

    @PostMapping(path = "/resetpassword")
    public @ResponseBody ResponseEntity<Map> sendResetPasswordEmail(@RequestBody Map<String, Object> req){
        Map<String, Object> res = new TreeMap<>();
        String message = "";
        String username = req.get("username").toString();
        String email = req.get("email").toString();

        boolean checkUser = this.userService.checkUsernameAndEmail(username,email);

        if(checkUser){
            String token = this.userService.getUserPasswordToken(username);
            asynchronousService.sendEmailResetPassword(username, email,token);

            message = "Success, please check your email box to reset password.";
            res.put("message", message);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }

        message = "Wrong username or email.";
        res.put("message", message);
        return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
    }

    @GetMapping(path = "/resetpassword/newpassword/{username}/{token}")
    public @ResponseBody ResponseEntity<Boolean> validateResetPasswordToken(@PathVariable String username, @PathVariable String token){
        boolean res = false;

        res = this.userService.validateUserPasswordToken(username, token);

        if(res){
            return new ResponseEntity<>(true, HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.BAD_REQUEST);
    }

    @PutMapping(path = "/resetpassword/newpassword/{username}/{token}")
    public @ResponseBody ResponseEntity<Boolean> updateUserPassword(@PathVariable String username, @PathVariable String token,
                                                                    @RequestBody Map<String, Object> req){
        boolean res = false;
        String password = req.get("password").toString();

        boolean check = false;
        check = this.userService.validateUserPasswordToken(username, token);

        if(check){
            boolean update = false;
            update = this.userService.updateUserPassword(username, password);
            if(update){
                res = true;
                return new ResponseEntity<>(res,HttpStatus.OK);
            }
        }
        return new ResponseEntity<>(res,HttpStatus.BAD_REQUEST);
    }

    /****************************** Reset User Image ******************************************/
    @PutMapping(path = "/resetimage")
    public @ResponseBody ResponseEntity<Map> resetUserImage(@RequestPart("req") Map<String, Object> req,
                                                            @RequestPart(value = "avatar", required = true) MultipartFile file,
                                                            @AuthenticationPrincipal UserDetails userDetails){
        Map<String, Object> res = new TreeMap<>();

        String username = userDetails.getUsername();
        String imagepath = username.concat("-").concat(req.get("imagepath").toString());

        if(file != null && !file.isEmpty()){
            String basePath = System.getProperty("user.dir");
            String rootPath = basePath.concat("/src/main/resources");
            File dir = new File(rootPath + File.separator + file.getName());
            if(!dir.exists()) dir.mkdirs();
            File serverFile = new File(dir.getAbsolutePath() + File.separator + imagepath);
            try{
                file.transferTo(serverFile);
            }catch (IOException e) {
                return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
            }
        }

        File avatar = this.userService.updateUserImage(username, imagepath);

        if(avatar != null){
            res.put("imagepath", imagepath);
            res.put("avatar", avatar);
            return new ResponseEntity<>(res, HttpStatus.OK);
        }
        imagepath = "defaultimage.png";
        res.put("imagepath", imagepath);
        return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
    }

}

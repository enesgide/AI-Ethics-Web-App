import api from "../axios/axios"

/**
 * Description: For all types of users
 * @param {json} params 
 */
export function getHome(params){
    return api({
        url: "/home",
        method: "get",
        data: params,
    });
}

export function getCompany(params){
    return api({
        url: "/signup",
        method: "get",
        data: params,
    });
}


export function postSignup(params){
    return api({
        url: "/signup",
        method: "post",
        data: params,
    })
}

export function login(params){
    return api({
        url: "/login",
        method: "post",
        data: params,
    });
}

export function getUserInfo(params, token){
    return api({
        url: "/userinfo",
        method: "get",
        data: params,
        token: token,
    });
}

export function putUserInfo(params, token){
    return api({
        url: "/userinfo",
        method: "put",
        data: params,
        token: token,
    });
}

export function getPasswordToken(params, token){
    return api({
        url: "/resetpassword",
        method: "get",
        data: params,
        token: token,
    })
}

export function postResetPassword(params){
    return api({
        url: "/resetpassword",
        method: "post",
        data: params,
    });
}

export function getResetPassword( params){
    return api({
        url: "/resetpassword/newpassword/"+params.username+"/"+params.token,
        method: "get",
        data: params,
    });
}

export function putResetPassword( params){
    return api({
        url: "/resetpassword/newpassword/"+params.username+"/"+params.token,
        method: "put",
        data: params,
    });
}

export function getVerifyEmail(params){
    return api({
        url: "/verifyemail/"+params.username+"/"+params.useremail+"/"+params.token,
        method: "get",
        data: params,
    });
}

export function putResetImage(params, token){
    return api({
        url: "/resetimage",
        method: "put",
        data: params,
        token: token,
    });
}


/**
 * Description: AI SupplierAdmin
 * @param {json} params 
 * @param {string} token 
 */
export function getProject1(params, token){
    return api({
        url: "/project",
        method: "get",
        data: params,
        token: token,
    });
}

export function getNewProject1(params, token){
    return api({
        url: "/newproject",
        method: "get",
        data: params,
        token: token,
    });
}

export function postNewProject1(params, token){
    return api({
        url: "/newproject",
        method: "post",
        data: params,
        token: token,
    });
}

export function getProjectDetail1(projectname, params, token){
    return api({
        url: "/project/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function getAssignProject1(projectname, params, token){
    return api({
        url: "/assignproject/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function postAssignProject1(projectname, params, token){
    return api({
        url: "/assignproject/"+projectname,
        method: "post",
        data: params,
        token: token,
    });
}

export function getProjectList2(params, token){
    return api({
        url: "/projectlist",
        method: "get",
        data: params,
        token: token,
    });
}

export function getAnswer2(projectname, params, token){
    return api({
        url: "/answer/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function getAnswerQuestion2(projectname, questionid, subquesid, params, token){
    return api({
        url: "/answer/"+projectname+"/"+questionid+"/"+subquesid,
        method: "get",
        data: params,
        token: token,
    });
}

export function postAnswerQuestion2(projectname, questionid, subquesid, params, token){
    return api({
        url: "/answer/"+projectname+"/"+questionid+"/"+subquesid,
        method: "post",
        data: params,
        token: token,
        contentType: false,
    });
}

export function getFeedback2(params, token){
    return api({
        url: "/feedback",
        method: "get",
        data: params,
        token: token,
    });
}

export function getProjectFeedback2(projectname, creatorname, feedbacktime, params, token){
    return api({
        url: "/feedback/projectfeedback/"+projectname+"/"+creatorname+"/"+feedbacktime,
        method: "get",
        data: params,
        token: token,
    });
}

export function getProjectAssignment2(projectname, params, token){
    return api({
        url: "/feedback/projectassignment/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function getReport2(projectname, params, token){
    return api({
        url: "/report/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

/**
 * Description: AI Supplier
 * @param {json} params
 * @param {string} token
 */
export function getQuestionnaireList3(params, token){
    return api({
        url: "/questionnairelist",
        method: "get",
        data: params,
        token: token,
    });
}

export function getQuestionnaireDetail3(projectname, params, token){
    return api({
        url: "/questionnairelist/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function postAddComment3(projectname, params, token){
    return api({
        url: "/questionnairelist/"+projectname+"/addcomment",
        method: "post",
        data: params,
        token: token,
    });
}

export function postAddSummary3(projectname, params, token){
    return api({
        url: "/questionnairelist/"+projectname+"/addsummary",
        method: "post",
        data: params,
        token: token,
    });
}

export function getSendFeedback3(projectname, params, token){
    return api({
        url: "/questionnairelist/"+projectname+"/sendfeedback",
        method: "get",
        data: params,
        token: token,
    });
}

export function getPass3(projectname, params, token){
    return api({
        url: "/questionnairelist/"+projectname+"/pass",
        method: "get",
        data: params,
        token: token,
    });
}

/**
 * Description: Administrator
 * @param {json} params
 * @param {string} token
 */
export function getQuestionList4(params, token){
    return api({
        url: "/admin/questions/questionlist",
        method: "get",
        data: params,
        token: token,
    });
}

export function getPrinciples4(params, token){
    return api({
        url: "/admin/questions/principles",
        method: "get",
        data: params,
        token: token,
    });
}

export function getSegments4(principleid, params, token){
    return api({
        url: "/admin/questions/"+principleid+"/segments",
        method: "get",
        data: params,
        token: token,
    });
}

export function getQuestions4(principleid, segmentid, params, token){
    return api({
        url: "/admin/questions/"+principleid+"/"+segmentid+"/questions",
        method: "get",
        data: params,
        token: token,
    });
}

export function getAddPrinciple4(params, token){
    return api({
        url: "/admin/questions/addprinciple",
        method: "get",
        data: params,
        token: token,
    });
}

export function postAddPrinciple4(params, token){
    return api({
        url: "/admin/questions/addprinciple",
        method: "post",
        data: params,
        token: token,
    });
}

export function postAddSegment4(params, token){
    return api({
        url: "/admin/questions/addsegment",
        method: "post",
        data: params,
        token: token,
    });
}

export function postAddQuestion4(params, token){
    return api({
        url: "/admin/questions/addquestion",
        method: "post",
        data: params,
        token: token,
    });
}

export function postAddSubquestion4(params, token){
    return api({
        url: "/admin/questions/addsubquestion",
        method: "post",
        data: params,
        token: token,
    });
}

export function getQuestionType4(params, token){
    return api({
        url: "/admin/questions/questiontype",
        method: "get",
        data: params,
        token: token,
    });
}

export function getSubquestionDetail4(subquestionid, params, token){
    return api({
        url: "/admin/questions/"+subquestionid,
        method: "get",
        data: params,
        token: token,
    });
}

export function putSubquestionDetail4(subquestionid, params, token){
    return api({
        url: "/admin/questions/"+subquestionid,
        method: "put",
        data: params,
        token: token,
    });
}

export function deleteSubquestion4(subquestionid, params, token){
    return api({
        url: "/admin/questions/"+subquestionid,
        method: "delete",
        data: params,
        token: token,
    });
}

export function getUserList4(params, token){
    return api({
        url: "/admin/users/userlist",
        method: "get",
        data: params,
        token: token,
    });
}

export function getCategorizeUserList4(usertype, params, token){
    return api({
        url: "/admin/users/"+usertype,
        method: "get",
        data: params,
        token: token,
    });
}

export function getUserDetail4(username, params, token){
    return api({
        url: "/admin/users/userlist/"+username,
        method: "get",
        data: params,
        token: token,
    });
}

export function deleteUser4(username, params, token){
    return api({
        url: "/admin/users/userlist/"+username,
        method: "delete",
        data: params,
        token: token,
    });
}

export function internalSignup(params, token){
    return api({
        url: "/admin/users/internalsignup",
        method: "post",
        data: params,
        token: token,
    })
}

export function getProjectList4(params, token){
    return api({
        url: "/admin/projects/projectlist",
        method: "get",
        data: params,
        token: token,
    });
}

export function getProjectDetail4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname,
        method: "get",
        data: params,
        token: token,
    });
}

export function getLeftQuestion4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/addquestion",
        method: "get",
        data: params,
        token: token,
    });
}

export function postAddQuestion(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/addquestion",
        method: "post",
        data: params,
        token: token,
    });
}

export function deleteProjectSubquestion4(projectname, subquestionid, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/deletequestion/"+subquestionid,
        method: "delete",
        data: params,
        token: token,
    });
}

export function getAssignValidator4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/assignvalidator",
        method: "get",
        data: params,
        token: token,
    });
}

export function postAssignValidator4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/assignvalidator",
        method: "post",
        data: params,
        token: token,
    });
}

export function getSummary4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/summary",
        method: "get",
        data: params,
        token: token,
    });
}

export function getProgress4(projectname, params, token){
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/progress",
        method: "get",
        data: params,
        token: token,
    });
}

export function openProject(projectname, params, token) {
    return api({
        url: "/admin/projects/projectlist/"+projectname+"/openproject",
        method: "post",
        data: params,
        token: token,
    });
}

export function getAllLaws() {
    return api({
        url: "/all_laws",
        method: "get",
    });
}

export function generateReport(data, params, token) {
    return api({
        url: '/questionnairelist/generateReport',
        method: "post",
        data: data, // Include data property
        params: params, // Include params property
        token: token
    });
}
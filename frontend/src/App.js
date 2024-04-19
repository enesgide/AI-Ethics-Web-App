import React, {Fragment} from 'react';
import {HashRouter, Route, Switch, Redirect, BrowserRouter, IndexRoute} from 'react-router-dom'
// import './assets/fomantic/dist/semantic.css'
import {Provider as KeepAliveProvider} from 'react-keep-alive'

import Home from './views/index/index'
import Contact from './views/contact/contact'
import Login from './views/login/login'
import Signup from './views/signup/signup'
import ResetPWD from './views/forgotPass/forgotPass'
import About from './views/about/about'
import News from './views/news/news'
import Service from './views/service/service'


import Profile from './views/profile'
import NewPWD from './views/resetpwd/newpwd'
import VerifyEmail from './views/verifyemail'
import SupAdminProject from './views/supplieradmin/project'
import Detail from './views/supplieradmin/project/detail'
import ProjectAssign from './views/supplieradmin/project/projectassign'
import NewProject from './views/supplieradmin/project/newproject'
import SupProject from './views/supplier/project'
import MesDetail from './views/supplier/message/detail'
import Message from './views/supplier/message'
import ProjectAssignment from './views/supplier/message/projectassignment'
import Answer from './views/supplier/project/answer'
import Report from './views/supplier/project/report'
import ValidatorProject from './views/validator/project'
import QuestionDetail from './views/validator/project/questiondetail'
import Summary from './views/validator/project/summary'
import RegulatorProject from './views/regulator/project'
import QuestionDetailReg from './views/regulator/project/questiondetail'
import LawsTable from './views/regulator/project/LawsTable'
import AddLaw from './views/regulator/project/LawsTable/AddLaw';
import AddClause from './views/regulator/project/LawsTable/AddClause';
import SummaryReg from './views/regulator/project/summary'
import AdministratorProject from './views/administrator/projectlist/project'
import Project4Detail from './views/administrator/projectlist/detail'
import Project4Summary from './views/administrator/projectlist/summary'
import Project4Progress from './views/administrator/projectlist/progress'
import AdministratorQuestionList from './views/administrator/question/questionlist'
import AdministratorQuestionListNewPrinciple from './views/administrator/question/newprinciple'
import AdministratorQuestionListNewQuestion from './views/administrator/question/newquestion'
import AdministratorQuestionListNewSegment from './views/administrator/question/newsegment'
import AdministratorQuestionListNewSubQuestion from './views/administrator/question/newsubquestion'
import AdministratorUserValidator from './views/administrator/users/Validator'
import AdministratorUserAIsupplier from './views/administrator/users/AIsupplier'
import AdministratorUserAIsupplierAdmin from './views/administrator/users/AIsupplieradmin'
import AdministratorQuestionListDetail from './views/administrator/question/questionlist/detail'
import InternalSignup from './views/administrator/users/internalsignup'
import UserDetail from './views/administrator/users/detail'
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <KeepAliveProvider>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/userinfo" component={Profile}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact component={About} path="/about"/>
            <Route exact component={Service} path="/service"/>
            <Route exact component={News} path="/news"/>
            <Route exact path="/forgotPass" component={ResetPWD}/>
            <Route exact path="/forgotPass/newpassword/:username/:token" component={NewPWD}/>
            <Route exact path="/verifyemail/:username/:useremail/:token" component={VerifyEmail}/>
            <Route exact path="/project1" component={SupAdminProject}/>
            <Route exact path="/project1/detail" component={Detail}/>
            <Route exact path="/project1/projectassign" component={ProjectAssign}/>
            <Route exact path="/project1/newproject" component={NewProject}/>
            <Route exact path="/project2" component={SupProject}/>
            <Route exact path="/message" component={Message}/>
            <Route exact path="/message/detail" component={MesDetail}/>
            <Route exact path="/message/projectassignment" component={ProjectAssignment}/>
            <Route exact path="/project2/answer" component={Answer}/>
            <Route exact path="/project2/report" component={Report}/>
            <Route exact path="/project3" component={ValidatorProject}/>
            <Route exact path="/project3/questiondetail" component={QuestionDetail}/>
            <Route exact path="/project3/summary" component={Summary}/>
            <Route exact path="/project4/projectlist" component={AdministratorProject}/>
            <Route exact path="/project4/projectlist/detail" component={Project4Detail}/>
            <Route exact path="/project4/projectlist/summary" component={Project4Summary}/>
            <Route exact path="/project4/projectlist/progress" component={Project4Progress}/>
            <Route exact path="/project4/question/questionlist" component={AdministratorQuestionList}/>
            <Route exact path="/project4/question/questionlist/detail" component={AdministratorQuestionListDetail}/>
            <Route exact path="/project4/question/newprinciple" component={AdministratorQuestionListNewPrinciple}/>
            <Route exact path="/project4/question/newquestion" component={AdministratorQuestionListNewQuestion}/>
            <Route exact path="/project4/question/newsubquestion" component={AdministratorQuestionListNewSubQuestion}/>
            <Route exact path="/project4/question/newsegment" component={AdministratorQuestionListNewSegment}/>
            <Route exact path="/project4/users/AIsupplier" component={AdministratorUserAIsupplier}/>
            <Route exact path="/project4/users/AIsupplieradmin" component={AdministratorUserAIsupplierAdmin}/>
            <Route exact path="/project4/users/Validator" component={AdministratorUserValidator}/>
            <Route exact path="/project4/users/detail" component={UserDetail}/>
            <Route exact path="/project4/users/internal/signup" component={InternalSignup}/> 
            <Route exact path="/project5" component={RegulatorProject}/>
            <Route exact path="/project5/questiondetail" component={QuestionDetailReg}/>
            <Route exact path="/project5/summary" component={SummaryReg}/>
            <Route exact path="/lawstable" component={LawsTable}/>
            <Route exact path="/addlaw" component={AddLaw}/>
            <Route exact path="/addclause" component={AddClause}/>
            <Redirect to={"/home"}/>
          </Switch>
        </KeepAliveProvider>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;

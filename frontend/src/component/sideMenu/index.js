import React, {Component} from 'react'
import './sideMenu.scss'
import 'semantic-ui-css/semantic.min.css'
import {
    Menu,
    Image,
    Header,
    Icon,
} from 'semantic-ui-react'
import { withRouter} from 'react-router-dom';
import logo from '../../assets/images/logo-green.png'

class SideMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            menutype: 1,
        }

        this.gotoProject = this.gotoProject.bind(this);
        this.gotoProfile = this.gotoProfile.bind(this);
        this.gotoMessage = this.gotoMessage.bind(this);
        this.gotoAdministratorQuestionList = this.gotoAdministratorQuestionList.bind(this);
        this.gotoAdministratorQuestionNewPrinciple = this.gotoAdministratorQuestionNewPrinciple.bind(this);
        this.gotoAdministratorQuestionNewQuestion = this.gotoAdministratorQuestionNewQuestion.bind(this);
        this.gotoAdministratorQuestionnewsegment = this.gotoAdministratorQuestionnewsegment.bind(this);
        this.gotoAdministratorQuestionNewSubQuestion = this.gotoAdministratorQuestionNewSubQuestion.bind(this);
        // this.state = {visible: false,
        //             setVisible: false};
        // this.showMenu = this.showMenu.bind(this);
        // this.hideMenu = this.hideMenu.bind(this);
        this.gotoAdministratorUsersAIsupplier = this.gotoAdministratorUsersAIsupplier.bind(this);
        this.gotoAdministratorUsersAIsupplieradmin = this.gotoAdministratorUsersAIsupplieradmin.bind(this);
        this.gotoAdministratorUsersValidator = this.gotoAdministratorUsersValidator.bind(this);
        this.gotoAdminostratorInternalUserSignup = this.gotoAdminostratorInternalUserSignup.bind(this);
        this.gotoRegulatorLawsTable = this.gotoRegulatorLawsTable.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token != null && token != -1){
            let userType = sessionStorage.getItem("userType");
            if(userType == 1){
                this.onGetMenu1();
            }
            else if(userType == 2){
                this.onGetMenu2();
            }
            else if(userType == 3){
                this.onGetMenu3();
            }
            else if (userType == 4){
                this.onGetMenu4()
            }
            else{
                this.onGetMenu5();
            }
        }
    }

    onGetMenu1(){
        this.setState({
            menutype: 1
        });
    }

    onGetMenu2(){
        this.setState({
            menutype: 2
        });
    }

    onGetMenu3(){
        this.setState({
            menutype: 3
        });
    }

    onGetMenu4(){
        this.setState({
            menutype: 4
        });
    }

    onGetMenu5(){
        this.setState({
            menutype: 5
        });
    }

    gotoProject(){
        if(this.state.menutype==1){
            this.props.history.push('/project1')
        }else if(this.state.menutype==2){
            this.props.history.push('/project2')
        }else if(this.state.menutype==3){
            this.props.history.push('/project3')
        }else if(this.state.menutype==4){
            this.props.history.push('/project4/projectlist')
        }else{
            this.props.history.push('/project5')
        }

        console.log("MENUTYPE IS");
        console.log(this.state.menutype);
        
    }

    gotoProfile(){
        this.props.history.push('/userinfo')
    }

    gotoMessage(){
        this.props.history.push('/message')
    }



    gotoAdministratorQuestionList(){
        this.props.history.push('/project4/question/questionlist')
    }
    
    gotoAdministratorQuestionNewPrinciple(){
        this.props.history.push('/project4/question/newprinciple')
    }

    gotoAdministratorQuestionNewQuestion(){
        this.props.history.push('/project4/question/newquestion')
    }

    gotoAdministratorQuestionnewsegment(){
        this.props.history.push('/project4/question/newsegment')
    }

    gotoAdministratorQuestionNewSubQuestion(){
        this.props.history.push('/project4/question/newsubquestion')
    }


    gotoAdministratorUsersAIsupplier(){
        this.props.history.push('/project4/users/AIsupplier')
    }

    gotoAdministratorUsersAIsupplieradmin(){
        this.props.history.push('/project4/users/AIsupplieradmin')
    }

    gotoAdministratorUsersValidator(){
        this.props.history.push('/project4/users/validator')
    }

    gotoAdminostratorInternalUserSignup(){
        //supplier, validator
        //在不退出登录的情况下，把signup页面右边限制，允许adminstration signup不同的用户 (supplier or validator)
        this.props.history.push('/project4/users/internal/signup')
    }

    gotoRegulatorLawsTable() {
        this.props.history.push('/lawstable')
    }
    //TODO:
    //remove correct answer and point in test report pdf
    
    render(){
        // const {visible} = this.state
        // const {setVisible} = this.state
        // 1 - AI SupplierAdmin
        // 2 - AI Supplier
        // 3 - Validator
        // 4 - Administrator
        // 5 - Regulator
        let menu1 = this.state.menutype;

        return(
            <div className="Side-Menu">
                <Menu       
                    inverted
                    vertical
                    style={{borderRadius:'0',width:'220px',height:'100vh',padding:'5px',overflow: 'auto'}}
                >
                    <Menu.Header style={{height:'80px'}}>
                        <a href="/">
                            <Header as='h2' inverted textAlign='left'
                                style={{marginTop:'15%',fontSize:'24px',fontFamily:'Montserrat',fontWeight:'600'}}
                            >
                                <img src={logo} style={{marginTop:'-4px',marginLeft:'16px',width:'30px',height:'30px'}}/>
                                E-LENS
                            </Header>
                        </a>
                    </Menu.Header>

                    <Menu.Item as='a' style={{marginTop:'-30px'}}>
                        <Menu.Header onClick={this.gotoProfile} style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                            <Icon name='user' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/> PROFILE
                        </Menu.Header>
                    </Menu.Item>
                    {(menu1 == 1 || menu1 == 5) ? <Menu.Item inverted as='a' onClick={this.gotoProject}>                        
                        <Menu.Header onClick={this.gotoProfile} style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                            <Icon name='folder' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/> PROJECTS
                        </Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 2 ? <Menu.Item inverted as='a' onClick={this.gotoProject}>
                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                        <Icon name='folder' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>PROJECTS</Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 3 ? <Menu.Item inverted as='a' onClick={this.gotoProject}>
                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                        <Icon name='folder' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>PROJECTS</Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 2 ? <Menu.Item inverted as='a' onClick={this.gotoMessage}>
                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                        <Icon name='comment alternate' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>MESSAGES</Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 4 ? <Menu.Item inverted>
                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                            <Icon name='clipboard' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>
                            QUESTIONS
                            <Menu.Menu>
                                <Menu.Item 
                                    as='a'
                                    name='Question List'
                                    style={{padding:'15px', marginLeft:'5px', marginTop:'10px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorQuestionList}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='New Principle'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorQuestionNewPrinciple}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='New Segment'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorQuestionnewsegment}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='New Question'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorQuestionNewQuestion}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='New Sub-Question'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorQuestionNewSubQuestion}
                                >
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 4 ? <Menu.Item inverted>

                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                        <Icon name='users' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>
                            USERS
                            <Menu.Menu>
                                <Menu.Item 
                                    as='a'
                                    name='AI SupplierAdmin'
                                    style={{padding:'15px', marginLeft:'5px', marginTop:'10px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorUsersAIsupplieradmin}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='AI Supplier'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorUsersAIsupplier}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='Validator'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdministratorUsersValidator}
                                >
                                </Menu.Item>
                                <Menu.Item 
                                    as='a'
                                    name='New User'
                                    style={{padding:'15px', marginLeft:'5px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoAdminostratorInternalUserSignup}
                                >
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 4 ? <Menu.Item inverted>

                        <Menu.Header style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                        <Icon name='folder' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/>
                            PROJECTS
                            <Menu.Menu>
                                <Menu.Item 
                                    as='a'
                                    name='Project List'
                                    style={{padding:'15px', marginLeft:'5px', marginTop:'10px', fontFamily:'Montserrat', fontSize:'13px'}}
                                    onClick={this.gotoProject}
                                >
                                </Menu.Item>
                            </Menu.Menu>
                        </Menu.Header>
                    </Menu.Item> : ""}
                    {menu1 == 5 ?
                    <Menu.Item as='a' style={{marginTop:'10'}}>
                        <Menu.Header onClick={this.gotoRegulatorLawsTable} style={{fontSize:'14px', fontFamily:'Montserrat', fontWeight:'600'}}>
                            <Icon name='book' style={{marginLeft:'6px', marginRight:'18px', fontSize:'14px'}}/> LAWS
                        </Menu.Header>
                    </Menu.Item>
                    : ""}
                    
                </Menu>
            </div>
        )
    }
}

export default withRouter(SideMenu)
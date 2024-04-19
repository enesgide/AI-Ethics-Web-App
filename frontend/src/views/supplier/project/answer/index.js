import React, {Component} from 'react'
import './answer.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getQuestionnaireDetail3,getAnswer2,getAnswerQuestion2,postAnswerQuestion2} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Form,
    Input,
    Header,
    Dimmer,
    Loader,
    Comment,
    Divider,
    Button
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class Answer extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectid:'',
            projectname:'',
            questionid: 0,
            subquesid: 0,
            question:{
                "principle": " ",
                "projectid": 26,
                "quescomment": [{
                    "comment": " ",
                    "commenter": " ",
                    "commenttime": " "
                }],
                "questioncontent": " ",
                "questiontype": 1,
                "segment": " ",
                "subquescontent": " ",
                "subquesid": " "
            },
            principleList:[],
            loading:false,
            Option1:"",
            Option2:"",
            openValidators:false,
            option1:0,
            option2:0,
            link:'',
            link2:'',
            submitfile:{},
            text:''
            
        }
        this.handleChangeOption1 = this.handleChangeOption1.bind(this);
        this.handleChangeOption2 = this.handleChangeOption2.bind(this);
        this.onGetAnswer2 = this.onGetAnswer2.bind(this);
        this.onGetAnswerQuestion2 = this.onGetAnswerQuestion2.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handletOpenValidators=this.handletOpenValidators.bind(this);
        this.closeSelectImage = this.closeSelectImage.bind(this);
        this.onChangeUserImage = this.onChangeUserImage.bind(this);
        this.handleText = this.handleText.bind(this)
        this.handlePostAnswer = this.handlePostAnswer.bind(this);
        this.handleNofile = this.handleNofile.bind(this);
        this.handleLink = this.handleLink.bind(this);
        this.handleLink2 = this.handleLink2.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
            
          this.setState({
            projectname:projectname,
          })
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname"),
            projectid:sessionStorage.getItem("questionid")
          })
        }
        if(token == null || token == -1){
            console.log("didn't login state");
            this.setState({isLoggedIn: false});
            this.gotoHome();
        }else{
            this.onGetAnswer2(token)
           
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname");
        sessionStorage.removeItem("questionid")
      }

      handletOpenValidators = ({open})=>{
        this.setState({
            // loading:true,
            openValidators:!this.state.openValidators
        })
       }

       closeSelectImage(){
        this.setState({
            openValidators: false,
        });
    }

       onChangeUserImage(){
        // const basename = this.state.userInformation.userName;
        const file =  document.getElementById("file").files[0];
        console.log(file);
        const fileType = file.type;
        if(!fileType.startsWith("text/plain")){
            message.config({duration: 5});
            message.error("Wrong format!Must be a txt");
        }else{
            let formData  = new FormData();
            formData.append(file.name, file);
            console.log(formData.get(file.name));
            this.setState({
                submitfile:formData.get(file.name)
            })
            console.log(this.state.submitfile)
        }
    }

    handleText=(e)=>{
        this.setState({
            text:e.target.value
        })
        console.log(e.target.value);
        console.log(this.state.text);
    }

    handlePostAnswer=(e)=>{
        let formData = new FormData();
        let answer ={};
        let text = this.state.text
        let option1 = this.state.option1;
        let option2 = this.state.option2;
        let link = this.state.link;
        let link2 = this.state.link2;
        let projectid = this.state.question.projectid;
        let questionid = this.state.questionid
        let token = sessionStorage.getItem("token");
        let subquesid = this.state.subquesid

        if(this.state.question.questiontype==1){
            if(option1==-1){
                if(option2==1){
                    if(link==''){
                        message.error("you must write your link ")
                    }else{
                        const re = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
                        if (!re.test(link)){
                            message.error("Please modify the format of the link you entered again")
                        }else{
                            answer.projectid=projectid;
                            answer.option1 = -1;
                            answer.option2 = 1;
                            answer.link = link;
                            answer.submitfile = '';
                            answer.text = '';
                            formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                            formData.append("submitedfile", null);
                            this.onPostAnswer(questionid,subquesid,formData,token);
                        }
                        
                    }
                }else if (option2==2){
                    if(link2==''){
                        message.error("you must complete this field")
                    }else{
                        answer.projectid=projectid;
                        answer.option1 = -1;
                        answer.option2 = 2;
                        answer.link = '';
                        answer.submitfile = link2;
                        answer.text = '';
                        formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                        formData.append("submitedfile", null);
                        this.onPostAnswer(questionid,subquesid,formData,token);
                        // const reg = /^[a-z]:(\\[^\\\/:*?"<>|]+)*/i;
                        // if(!reg.test(link2)){
                        //     message.error("Please modify the format of the absalute file path you entered again")
                        // }else{
                        //     answer.projectid=projectid;
                        //     answer.option1 = -1;
                        //     answer.option2 = 2;
                        //     answer.link = '';
                        //     answer.submitfile = link2;
                        //     answer.text = '';
                        //     formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                        //     formData.append("submitedfile", null);
                        //     this.onPostAnswer(questionid,subquesid,formData,token);
                        // }
                        
                    }
                }else{
                    message.error("you must select by link or file path")
                }
            }else if(option1==1){
                answer.projectid=projectid;
                answer.option1 = 1;
                answer.option2 = 0;
                answer.link = '';
                answer.submitfile = '';
                answer.text = '';
                formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                formData.append("submitedfile", null);
                this.onPostAnswer(questionid,subquesid,formData,token);
            }else{
                message.error("you must select yes or no!")
            }
        }else if (this.state.question.questiontype==2){
            if(text==''){
                message.error("you must write your text")
            }else{
                answer.projectid=projectid;
                answer.option1 = 0;
                answer.option2 = 0;
                answer.link = '';
                answer.submitfile = '';
                answer.text = text;
                formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                formData.append("submitedfile", null);
                this.onPostAnswer(questionid,subquesid,formData,token);
            }
        }else{
            let submitfile = document.getElementById('submitfile').files[0];
            console.log(submitfile);
            var filename = submitfile.name;
            var typeSheet = filename.endsWith("xlsx");
            var typeCSV = filename.endsWith("csv");
            if(submitfile == null || (Boolean(typeSheet)==false && Boolean(typeCSV)==false)){
                message.error("Please submit a csv file");
            }
            else{
                answer.projectid = projectid;
                answer.submitfile = filename;
                formData.append("answer", new Blob([JSON.stringify(answer)], {type: 'application/json'}));
                formData.append("submitedfile", submitfile);
                this.onPostAnswer(questionid, subquesid, formData, token);
            }
        }

    }

    onPostAnswer=(questionid,subquesid,formData,token)=>{
        let projectname = sessionStorage.getItem("projectname");
        this.setState({
            loading:true
        })
        postAnswerQuestion2(projectname,questionid,subquesid,formData,{token}).then((res)=>{
            // this.onGetAnswer2(token);
            window.location.reload();
        }).catch((error)=>{
            this.setState({
                loading:false,
                question:null,
                option1:0,
                option2:0,
                link:'',
                link2:'',
                text:''
            })
            message.config({duration: 5});
            message.error(error);
        })
    }


    handleNofile=(e)=>{
        this.setState({
            submitfile:{}
        })
    }

    handleLink = (e)=>{
        this.setState({
            link:e.target.value
        })
    }

    handleLink2 = (e)=>{
        this.setState({
            link2:e.target.value
        })
    }
    
    
    handleChangeOption1 = (e, { Option1 }) => {
        this.setState({ Option1 ,option1:Option1 })
        if (Option1==1){
            this.setState({
                option2:0,
                Option2:''
            })
        }
        console.log(this.state.Option1)
    }

    handleChangeOption2 = (e, { Option2 }) => this.setState({ Option2,option2:Option2 })
    
    handleChange = (e, {name, value}) => this.setState({[name]: value})

    onGetAnswer2 = (token) =>{
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        this.setState({
            loading:true,
            submitfile:{}
        })

        getAnswer2(projectname,{},{token}).then(res=>{
            let questionid = 0;
            let subquesid = 0;
            questionid = parseInt(res.questionid);
            subquesid = parseInt(res.subquesid);
            console.log(res);
            this.setState({
                questionid:questionid,
                subquesid:subquesid,
                loading:false
            })
            if(questionid === -1 || subquesid === -1){
                this.setState({
                    projectid:res.projectid,
                    loading:false,
                    option1:0,
                    Option1:0,
                    Option2:0,
                    option2:0,
                    link:'',
                    link2:'',
                    text:'',
                    submitfile:{},
                })
                this.props.history.push('/project2')
                message.success("You have finished answering all questions. Thank you!")
            }
            else if(questionid >= 200000000 || subquesid >= 2000000000){
                this.setState({
                    projectid:res.projectid,
                    loading:false,
                    option1:0,
                    Option1:0,
                    Option2:0,
                    option2:0,
                    link:'',
                    link2:'',
                    text:'',
                    submitfile:{},
                })
                this.props.history.push('/project2')
                message.success("Sorry, your coordinator is working on the left question. Please try again later.")
            }
            else{
                this.setState({
                    projectid:res.projectid,
                    loading:false,
                    option1:0,
                    option2:0,
                    Option1:0,
                    Option2:0,
                    link:'',
                    link2:'',
                    text:'',
                    submitfile:{},
                })
                sessionStorage.setItem("questionid",res.questionid)
                this.onGetAnswerQuestion2(token);
            }

        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })


    }

    onGetAnswerQuestion2 = (token) =>{
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        // let projectid = this.state.projectid;
        let questionid = this.state.questionid;
        let subquesid = this.state.subquesid;
        this.setState({
            loading:true
        })
        
        getAnswerQuestion2(projectname,questionid,subquesid,{},{token}).then(res=>{
            let question = [];
            question = res;
            // const principleList = [];
            // (question.map||[]).map((e) => {
            //     principleList.push({status:0,name:e.principle})
            // })
            this.setState({
                question:question,
                submitfile:{},
                loading:false
            })
        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })
    }

    onGet
    render() {
        return (
          <div className="Supplier-message">
            <Dimmer active={this.state.loading}>
              <Loader />
            </Dimmer>
            <Grid columns={2} style={{ background: '#f3f3f3 !important' }}>
              <Grid.Column style={{ width: '220px' }}>
                <SideMenu />
              </Grid.Column>
              <Grid.Column style={{ width: 'calc(100% - 220px)' }}>
                <TopHeader/>
      
                <div style={{ marginTop: '4em', border: 'none', marginLeft: '3em', marginRight: '3em' }}>
                    <div style={{float: 'right', width: '360px',
                        display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>      
                        <Button positive onClick={this.handlePostAnswer}
                            style={{
                                marginRight: '20px',
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                width:'150px',
                                height:'50px'
                            }}>
                            Submit
                        </Button> 
                    </div>

                    {this.state.questionid < 1000000 ? (
                    <>
                      <label className="form-label" style={{fontSize:'30px', fontWeight:'600', marginLeft:'1em', marginBottom:'1em'}}>Principle: {this.state.question.principle}</label>
                      <div>
                        {this.state.principleList.map((item) => (
                          <div className="main-item" key={item.id}>
                            <div className={`main-item-title${item.status}`}>
                              <div type="text" className={`main-item-title_text${item.status}`}>
                                {item.principle}
                              </div>
                            </div>
                            <div className={`main-item-circle_area`}>
                              <div className={`main-item-circle_area_line${item.status}`}></div>
                              <div className={`main-item-circle_area_point${item.status}`}></div>
                            </div>
                          </div>
                        ))}
                      </div>
      
                      <div className="ques-content">
                        <label className="form-label"
                            style={{marginLeft:'3em',marginBottom:'0.5em', fontSize:'26px', fontWeight:'600'}}>
                            Segment: {this.state.question.segment}
                        </label>
                        <div className="sub-ques-content">
                            <label className="form-label"
                                style={{display:'block', marginLeft:'4em', marginRight:'5em', marginBottom:'1em', fontSize:'20px', fontWeight:'400'}}>
                                    <span style={{fontWeight:'600'}}>Core Question:</span>
                                    <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{this.state.question.questioncontent}</span>
                            </label>

                            <label className="form-label"
                                style={{display:'block', marginLeft:'4em',marginBottom:'1em', fontSize:'20px', fontWeight:'400'}}>
                                    <span style={{fontWeight:'600'}}>Question to Answer:</span>
                                    <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{this.state.question.subquescontent}</span>
                            </label>

                        {this.state.question.quescomment.length === 0 ? (
                            ''
                        ) : (
                            <div>
                                <label className="form-label"
                                    style={{display:'block', marginLeft:'4em',marginBottom:'1em', fontSize:'20px', fontWeight:'400'}}>
                                        <span style={{fontWeight:'600'}}>History Comment:</span>
                                        <Comment.Group className="history-comment" style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                            {this.state.question.quescomment.map((item, index) => (
                                            <div key={index}>
                                                <Comment>
                                                <Comment.Author as="a" style={{ display: 'inline-block' }}>
                                                    CommenterName{item.commenter}&nbsp;&nbsp;
                                                </Comment.Author>
                                                <Comment.Metadata style={{ display: 'inline-block', fontSize: '10px' }}>
                                                    CommenterMessage{item.commenttime.slice(0, 10)}
                                                </Comment.Metadata>
                                                <Comment.Text>{item.comment}</Comment.Text>
                                                </Comment>
                                                {index === this.state.question.quescomment.length - 1 ? null : <Divider />}
                                            </div>
                                            ))}
                                        </Comment.Group>
                                </label>                              
                            </div>
                        )}
                        
                        <div className="answer" style={{marginTop:'1em'}}>
                            <Form enctype="multipart/form-data">
                                {/* <Header as="h3" style={{marginTop:'2em'}}>{this.state.question.questiontype==1?"SeLect or Upload a Link or Upload a File":'Write your text'}</Header> */}
                                {this.state.question.questiontype == 1?
                               

                                <div>
                                    <label className="form-label"
                                        style={{display:'block', marginLeft:'4em',marginBottom:'1em', fontSize:'20px', fontWeight:'400'}}>
                                            <span style={{fontWeight:'600'}}>Select to upload a link or file:</span>
                                    </label>
                                    <Form.Group inline style={{marginLeft:'8em', fontFamily:'Poppins'}}>
                                        <Form.Radio
                                            label='Yes'
                                            Option1="-1"
                                            checked={this.state.Option1 == -1}
                                            onChange={this.handleChangeOption1}
                                        />
                                        <Form.Radio
                                            label='No'
                                            Option1="1"
                                            checked={this.state.Option1 === "1"}
                                            onChange={this.handleChangeOption1}
                                        />
                                    </Form.Group></div>: ""}
                                {this.state.question.questiontype == 2?
                                <div>
                                    <label className="form-label"
                                        style={{display:'block', marginLeft:'4em',marginBottom:'1em', fontSize:'20px', fontWeight:'400'}}>
                                            <span style={{fontWeight:'600'}}>Answer:</span>
                                    </label>
                                    <Form.TextArea rows="10" style={{marginLeft:'8em', width:'80%', fontFamily:'Poppins'}} value={this.state.text} onChange={this.handleText} placeholder='Enter answer here...' />
                                </div>:""}
                                
                                {this.state.Option1 == -1?
                                <Form.Group inline style={{marginLeft:'10em', fontFamily:'Poppins'}}>
                                    <Form.Radio
                                        label='By Link'
                                        Option2='1'
                                        checked={this.state.Option2 === "1"}
                                        onChange={this.handleChangeOption2}
                                    />
                                    <Form.Radio
                                        label='By Request'
                                        Option2='2'
                                        checked={this.state.Option2 === '2'}
                                        onChange={this.handleChangeOption2}
                                    />
                                </Form.Group>:""}
                                {this.state.Option2 ==1 ?
                                <Input fluid style={{width:'60%', marginLeft:'12em', fontFamily:'Poppins'}} value={this.state.link} onChange={this.handleLink} placeholder='Enter link here. Eg: http://www.geogle.com' />
                                        
                                    :''} 
                                    {this.state.Option2 ==2 ?
                                <Form.TextArea fluid style={{width:'60%', marginLeft:'12em', fontFamily:'Poppins'}} value={this.state.link2} onChange={this.handleLink2} placeholder='Enter contact person or email here.' />:''}
                                {this.state.question.questiontype > 2?
                                <div class="ui placeholder segment" style={{marginTop:'3em'}}>
                                    <div class="ui icon header">
                                        <i class="pdf file outline icon"></i>
                                        No documents are listed for this question.
                                    </div>
                                    <Form.Input style={{width:'110%'}} type="file" id="submitfile" name="submitfile" multiple="multiple" onChange={this.handleChange} autocomplete="off"></Form.Input>
                                </div>:""}
                            </Form>
                        </div>
                          
                        </div>
                    </div>
                    </>
                  ) : null}
                </div>
              </Grid.Column>
            </Grid>
          </div>
        );
      }
      
}

export default  Answer
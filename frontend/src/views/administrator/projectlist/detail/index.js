import React,  {Component, useState}from 'react'
import './detail.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {postAddQuestion,
    getLeftQuestion4,deleteProjectSubquestion4,
    getAssignValidator4,postAssignValidator4,
    getProjectDetail4,getSummary4,getProgress4,getSubquestionDetail4,openProject} from '../../../../api/api'
import{
    Grid,
    Segment,
    Container,
    Header,
    Divider,
    Button,
    List,
    Modal,
    Form,
    Checkbox,
    Dimmer,
    Loader,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'
import CustomButton from '../../../../component/customButton'

class Project4Detail extends Component{
   constructor(props){
    super(props);
    this.state={
        openValidators:false,
        openAddQuestionList:false,
        optionValue:'',
        ethicalconcerns:[],
        subQuestionList:[],
        questionList:[
            {principle1:[
                {
                    questionName:'name1',
                    value:'value1',
                    questionId:1
                },
                {
                    questionName:'name2',
                    value:'value2',
                    questionId:2
                },
                {
                    questionName:'name3',
                    value:'value3',
                    questionId:3
                },
                {
                    questionName:'name4',
                    value:'value4',
                    questionId:4
                },
                {
                    questionName:'name5',
                    value:'value5',
                    questionId:5
                },
                {
                    questionName:'name1',
                    value:'value1',
                    questionId:1
                },
                {
                    questionName:'name2',
                    value:'value2',
                    questionId:2
                },
                {
                    questionName:'name3',
                    value:'value3',
                    questionId:3
                },
                {
                    questionName:'name4',
                    value:'value4',
                    questionId:4
                },
                {
                    questionName:'name5',
                    value:'value5',
                    questionId:5
                }
            ]},
           { principle2:[
                {
                    questionName:'name6',
                    value:'value1',
                    questionId:1
                },
                {
                    questionName:'name7',
                    value:'value2',
                    questionId:2
                },
                {
                    questionName:'name8',
                    value:'value3',
                    questionId:3
                },
                {
                    questionName:'name9',
                    value:'value4',
                    questionId:4
                },
                {
                    questionName:'name5',
                    value:'value5',
                    questionId:5
                }
            ]},
           { principle3:[
                {
                    questionName:'name9',
                    value:'value1',
                    questionId:1
                },
                {
                    questionName:'name2',
                    value:'value2',
                    questionId:2
                },
                {
                    questionName:'name3',
                    value:'value3',
                    questionId:3
                },
                {
                    questionName:'name4',
                    value:'value4',
                    questionId:4
                },
                {
                    questionName:'name5',
                    value:'value5',
                    questionId:5
                }
            ]},
            { principle4:[
                {
                    questionName:'name9',
                    value:'value1',
                    questionId:1
                },
                {
                    questionName:'name4',
                    value:'value2',
                    questionId:2
                },
                {
                    questionName:'name3',
                    value:'value3',
                    questionId:3
                },
                {
                    questionName:'name4',
                    value:'value4',
                    questionId:4
                },
                {
                    questionName:'name5',
                    value:'value5',
                    questionId:5
                }
            ]}
        ],
        questionList2:[ 
          {
            "principleid": 1,
            "principle": "string1",
            "segmentid": 0,
            "segment": "string",
            "questionid": 0,
            "question": "string",
            "subquesid": 0,
            "subquestion": "string",
            "questiontype": "string"
          },
          {
            "principleid": 2,
            "principle": "string2",
            "segmentid": 0,
            "segment": "string",
            "questionid": 0,
            "question": "string",
            "subquesid": 0,
            "subquestion": "string",
            "questiontype": "string"
          },
          {
            "principleid": 3,
            "principle": "string3",
            "segmentid": 0,
            "segment": "string",
            "questionid": 0,
            "question": "string",
            "subquesid": 0,
            "subquestion": "string",
            "questiontype": "string"
          },
          {
            "principleid": 4,
            "principle": "string4",
            "segmentid": 0,
            "segment": "string",
            "questionid": 0,
            "question": "string",
            "subquesid": 0,
            "subquestion": "string",
            "questiontype": "string"
          },
          {
            "principleid": 4,
            "principle": "string4",
            "segmentid": 0,
            "segment": "string",
            "questionid": 0,
            "question": "string",
            "subquesid": 0,
            "subquestion": "string",
            "questiontype": "string"
          }
        ],
        validatorAssigned:true,
        validatorList:[],
        projectDetail:{},
        principleList:[],
        leftQuestion:[],
        selected:'principle1',
        selectedValidatorId:[],
        loading:false,
        projectname:'',
        projectid:100,
        open:0,
        token:sessionStorage.getItem('token')
    }
    this.handleValidatorChange = this.handleValidatorChange.bind(this);
    this.handletOpenValidators = this.handletOpenValidators.bind(this);
    this.handleAddQuestionList = this.handleAddQuestionList.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.handleAddThisQuestion = this.handleAddThisQuestion.bind(this);
    this.onGetQuestionList = this.onGetQuestionList.bind(this);
    this.onGetProjectDetail4 = this.onGetProjectDetail4.bind(this);
    this.onGetLeftQuestion4 = this.onGetLeftQuestion4.bind(this);
    this.onGetValidatorList = this.onGetValidatorList.bind(this);
    this.handleDelectQuestion = this.handleDelectQuestion.bind(this);
    this.onCompare = this.onCompare.bind(this);
    this.onGetSubquestionDetail4 = this.onGetSubquestionDetail4.bind(this);
    this.openProjectToSupplier = this.openProjectToSupplier.bind(this);
   }
    
   handletOpenValidators = ({open})=>{
    let projectname = '';
    let token = sessionStorage.getItem('token');
    let selectedValidatorId = this.state.selectedValidatorId;
    projectname = sessionStorage.getItem("projectname");
    // let projectid = ''
    // projectid = sessionStorage.getItem("projectid")
    this.setState({
        // loading:true,
        openValidators:!this.state.openValidators
    })
    if(this.state.openValidators){
        this.setState({
            loading:false
        })
        postAssignValidator4(projectname,selectedValidatorId,{token}).then((res)=>{
            this.setState({
                loading:false,
                selectedValidatorId:[]
            })
            this.onGetValidatorList(token);
            this.onGetProjectDetail4(token)
        }).catch((error)=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
              loading:false
            })
        })
    }
   
   }

   handleAddQuestionList = (open)=>{
    this.setState({
        openAddQuestionList:!this.state.openAddQuestionList
    })
}

   handleValidatorChange = (e,{value})=>{
       const selectedValidatorId=this.state.selectedValidatorId;
       if(e.target.checked){
           const idObj = {userid:0}
           idObj.userid = parseInt(e.target.id)
            selectedValidatorId.push(idObj)
       }else{
           selectedValidatorId.map((item)=>{
               if(item.userid==e.target.id){
                const index=selectedValidatorId.indexOf(item);
                selectedValidatorId.splice(index,1);
               }
           })
       }
       this.setState({
        optionValue:value,
        selectedValidatorId:selectedValidatorId
       })
   }

   handleSelected = (e)=>{
       console.log(e);
       const selectedIndex = e.target.options.selectedIndex
       const selectedObject = this.state.principleList[selectedIndex]
        this.setState({
            selected:selectedObject.principle
        })
   }

   handleAddThisQuestion = (e)=>{
        let projectname = '';
        projectname = sessionStorage.getItem("projectname");
        let projectid = '';
        projectid = sessionStorage.getItem("projectid");
        let token = sessionStorage.getItem("token")
        let dataset = e.target.dataset
        this.setState({
            loading:true
        })
        const questionObj={
            "projectid":parseInt(projectid),
            "subquesid":parseInt(e.target.id)
        }
        postAddQuestion(projectname,questionObj,{token}).then((res)=>{
            const newQuestion = {
                principle: dataset.principle,
                segment: dataset.segment,
                question: dataset.question,
                subquesid: dataset.subquesid,
                subquestion: dataset.subquestion,
                questiontype: dataset.questiontype
            }
            const mes = res;
            message.config({duration:5});
            message.success(mes)
            this.setState({
                loading:false,
                subQuestionList:[]
            })
            this.onGetProjectDetail4(token);
            this.onGetLeftQuestion4(token);
        }).catch((error)=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
              loading:false
            })
        })
   }

   componentDidMount(){
       let token = sessionStorage.getItem("token");
       let projectname = sessionStorage.getItem("projectname")
       let projectid = sessionStorage.getItem("projectid")
         if(projectname == null||projectid==null){
            let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectName)
            let projectid = sessionStorage.setItem("projectid",this.props.location.query.projectId)
           this.setState({
             projectname:projectname,
             projectid:projectid
           })
           
         }else{
           this.setState({
             projectname:sessionStorage.getItem("projectname"),
             projectid:sessionStorage.getItem("projectid")
           })
           console.log(1,this.state.projectid,this.state.projectname);
         }
         if(token == null || token == -1){
             this.gotoHome();
             
         }else{
            this.onGetProjectDetail4(token);
            this.onGetValidatorList(token);
            this.onGetLeftQuestion4(token);
         }
   }

   componentWillUnmount(){
    console.log("un");
    sessionStorage.removeItem("projectname");
    sessionStorage.removeItem("projectid");
  }

  


  onGetQuestionList (leftQuestion){
    this.setState({
        loading:true
    })
 const principleList = [];
 (leftQuestion||[]).map((item)=>{
     const newobj ={}
     const keyArr = Object.keys(item)
     const key1 = keyArr[0];
     const key2 = keyArr[1];
     newobj.principleid = item[key2];
     newobj.principle = item[key1];
     principleList.push(newobj);
     
 })
 var principleList2 = [];
 var obj = {};
     for(var i =0; i<principleList.length; i++){
        if(!obj[principleList[i].principle]){
         principleList2.push(principleList[i]);
           obj[principleList[i].principle] = true;
        }
     }
 this.setState({
     principleList:principleList2,
     loading:false
 })
 if(this.state.selected=="principle1"){
     if(principleList2.length!=0){
        this.setState({
            selected:principleList2[0].principle
        })
     }
 }else{
    this.setState({
        selected:principleList2[0].principle
    })
 }
}

onCompare =(obj1,obj2)=>{
    var val1 = obj1.principleid;
    var val2 = obj2.principleid;
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }            
}

    onGetSubquestionDetail4 = (subquestionid,token)=>{
        this.setState({
            loading:true
        })
        getSubquestionDetail4(subquestionid,{},{token}).then((res)=>{
            let questioncontent = res;
            questioncontent.subquestionid = subquestionid;
            const subQuestionList = this.state.subQuestionList;
            subQuestionList.push(questioncontent)
            this.setState({
                subQuestionList:subQuestionList,
                loading:false,

            })
        }).catch((error)=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
            loading:false
            })
        })
    }

   onGetProjectDetail4(token){
    let projectname = ''
    projectname = sessionStorage.getItem("projectname")
    // let projectid = ''
    // projectid = sessionStorage.getItem("projectid")
    this.setState({
        loading:true
    })
    getProjectDetail4(projectname,{},{token}).then((res)=>{
        const projectDetail = res;
        const ethicalconcerns = res.ethicalconcerns;
        const validators = res.assignedvalidators;
        const open = res.open;
        (ethicalconcerns||[]).forEach((item)=>{
            this.onGetSubquestionDetail4(item.subquestionid,token);
        })
        this.setState({
            projectDetail:projectDetail,
            ethicalconcerns:ethicalconcerns,
            validatorAssigned:validators.length>0,
            open:open,
            loading:false
        })
    }).catch((error)=>{
        message.config({duration: 5});
        message.error(error);
        this.setState({
          loading:false
        })
    })
   }

   onGetLeftQuestion4(token){
    let projectname = ''
    projectname = sessionStorage.getItem("projectname")
    // let projectid = ''
    // projectid = sessionStorage.getItem("projectid")
    this.setState({
        loading:true
    })
    getLeftQuestion4(projectname,{},{token}).then((res)=>{
        const leftQuestion = res;
        this.setState({
            leftQuestion:leftQuestion,
            loading:false
        });
        this.onGetQuestionList(leftQuestion);
    }).catch((error)=>{
        message.config({duration: 5});
        message.error(error);
        this.setState({
          loading:false
        })
    })
   }

   onGetValidatorList(token){
    let projectname = ''
    projectname = sessionStorage.getItem("projectname")
    // let projectid = ''
    // projectid = sessionStorage.getItem("projectid")
    this.setState({
        loading:true
    })
    getAssignValidator4(projectname,{},{token}).then((res)=>{
        const validatorList = res;
        this.setState({
            validatorList:validatorList,
            loading:false
        })
    }).catch((error)=>{
        message.config({duration: 5});
        message.error(error);
        this.setState({
          loading:false
        })
    })
   }


//    onAddQuestion (e,projectName,token){
//     let projectid = ''
//     projectid =sessionStorage.getItem("projectname")
//     // let projectid = ''
//     // projectid = sessionStorage.getItem("projectid")
//     this.setState({
//         loading:true
//     })
//     const id = e.target.id;
//     const data = {projectid:projectid,subquesid:id}
//     postAddQuestion(projectName,data,{token}).then((res)=>{
//         this.setState({
//             loading:false
//         })
//     })
//    }

   handleDelectQuestion(e){
    let projectname = ''
    projectname =sessionStorage.getItem("projectname")
    // let projectid = ''
    // projectid = sessionStorage.getItem("projectid")
    let subQuesid = e.target.id;
    let token = sessionStorage.getItem("token")
    this.setState({
        loading:true
    })
    deleteProjectSubquestion4(projectname,subQuesid,{},{token}).then((res)=>{
        let subQuestionList = this.state.subQuestionList;
        let delectedQuestion = subQuestionList.find((item)=> {return item.subquestionid==subQuesid});
        let index = subQuestionList.indexOf(delectedQuestion)
        subQuestionList.splice(index,1);
        this.setState({
            subQuestionList:[],
            loading:false
        })
        this.onGetProjectDetail4(token);
    }).catch((error)=>{
        this.setState({
            loading:false
        })
        message.config({duration:5});
        message.error(error);
    })
   }

    openProjectToSupplier() {
        let projectname = '';
        projectname = sessionStorage.getItem("projectname");
        let token = sessionStorage.getItem("token");
        this.setState({
            loading:true
        })
        openProject(projectname,{},{token}).then((res)=>{
            this.setState({
                open:1,
                loading:false,
            })
            this.onGetProjectDetail4(token);
        }).catch((error)=>{
            this.setState({
                loading:false
            })
            message.config({duration:5});
            message.error(error);
        })
    }
    
   
    render(){
        // this.setState({loading:true})
        // console.log(this.state.projectDetial.status);
        const projectName = sessionStorage.getItem('projectname');
        return(
            <div className="Admin-project-detail" style={{backgroundColor:'#f3f3f3'}}>
                
                <Dimmer active={this.state.loading}>
                    <Loader/>
              </Dimmer>
                <Grid columns={2}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                        <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                            <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Manage</div>
                            <div style={{float: 'right', 
                                display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>  

                                {this.state.open === 0? 
                                    <Button positive onClick={this.openProjectToSupplier}
                                        style={{marginRight: '20px',fontFamily: 'Poppins',fontWeight: '500',width:'200px',height:'50px'}}>
                                        Open to Suppliers
                                    </Button> 
                                :""}

                                {this.state.validatorAssigned == true ? ""
                                    :<Modal 
                                        onClose={this.handletOpenValidators}
                                        onOpen={this.handletOpenValidators}
                                        open={this.state.openValidators}
                                        trigger={
                                            <Button positive style={{fontFamily: 'Poppins',fontWeight: '500',width:'200px',height:'50px'}}>
                                                Assign to Validator
                                            </Button>
                                        }>
                                        <Modal.Header>Assign Validators</Modal.Header>
                                        <Modal.Content image>
                                            <Modal.Description>
                                            <Header>Please select at least one validator:</Header>
                                            <Form>
                                                {(this.state.validatorList||[]).map((item)=>{
                                                    return(
                                                        <Form.Field>
                                                        <Checkbox
                                                            Checkbox
                                                            label={item.username+'-'+item.company}
                                                            name='checkboxRadioGroup'
                                                            id={item.userid}
                                                            value={item.username}
                                                            // checked={this.state.optionValue === item}
                                                            onChange={this.handleValidatorChange}
                                                        />
                                                        </Form.Field>
                                                    )
                                                })}                                                
                                            </Form>
                                            </Modal.Description>
                                        </Modal.Content>

                                        <Modal.Actions>
                                            <Button onClick={this.handletOpenValidators} positive>Add</Button>
                                        </Modal.Actions>
                                    </Modal>
                                }
                            </div>    
                            
                            <div style={{marginTop: '3em'}}/>
                        </div>

                        <div style={{marginLeft:'3em', marginRight:'3em'}}>
                            <div className="form-card" style={{width:'100%', marginTop:'4em'}}>
                                <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label" style={{marginTop: '20px'}}>Project Title</label>
                                            <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                {projectName}
                                            </p>
                                        </div>

                                        <div className="col">
                                            <label className="form-label" style={{marginTop: '20px'}}>Creator</label>
                                            <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                {this.state.projectDetail.creator}
                                            </p>
                                        </div>
                                    </div>
                                    <Divider style={{marginLeft:'0'}}/>

                                    <label className="form-label" style={{marginTop: '20px'}}>Description</label>
                                    <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                        {this.state.projectDetail.description}
                                    </p>
                                    <Divider style={{marginLeft:'0'}}/>

                                    <div className="row">
                                        <div className="col">
                                            <label className="form-label" style={{marginTop: '20px'}}>Assigned Suppliers</label>
                                            {(this.state.projectDetail.assignedsuppliers||[]).map((item)=>{
                                                return(
                                                    <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                        {item.name}
                                                    </p>
                                                )
                                            })}                                                                
                                        </div>    

                                        <div className="col">
                                            <label className="form-label" style={{marginTop: '20px'}}>Assigned Validators</label>
                                            {this.state.validatorAssigned == true ?(this.state.projectDetail.assignedvalidators||[]).map((item)=>{
                                                return(
                                                    <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                        {item.name}
                                                    </p>
                                                )
                                            }): 
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    Not assigned
                                                </p>
                                            }
                                        </div>                     
                                    </div>
                                    <Divider style={{marginLeft:'0'}}/>

                                </div>
                            </div>
                            
                            <div style={{marginBottom:'4em'}}>
                                <div style={{display:'inline-block', fontFamily:'Montserrat', fontSize:'32px', fontWeight:'600', marginLeft:'3rem'}}>Questions:</div>
                                <div style={{overflow:'hidden', float: 'right', display: 'flex', 
                                    alignContent: 'center', justifyContent: 'flex-end'}}>
                                    <Modal
                                        onClose={this.handleAddQuestionList}
                                        onOpen={this.handleAddQuestionList}
                                        open={this.state.openAddQuestionList}
                                        trigger={<Button size="big" style={{fontSize:'1rem',fontFamily:'Poppins',fontWeight:'500',width:'200px',height:'50px'}} positive>Add Question</Button>}
                                        size='large'
                                        style={{marginLeft:'15em', marginTop: '3em', marginBottom: '20em', height:'90vh', borderRadius:'20px'}}
                                        >
                                        <Modal.Content>
                                            <Modal.Description>
                                                {this.state.leftQuestion.length==0?<span>no question to be selected</span>:""}
                                                <select name="" id="" onChange={this.handleSelected} placeholder="no question to be selected " style={{backgroundColor:"#21ba45",color:"#fff",height:"40px", borderRadius:"5px"}}>
                                                    {(this.state.principleList||[]).map((item)=>{
                                                            return(
                                                                <option value={item.principle}  >{item.principle}</option>
                                                            )
                                                        })}
                                                </select>
                                                <List divided verticalAlign='middle' style={{height:"70vh",overflow:"auto"}}>
                                                    {(this.state.leftQuestion||[]).map((item)=>{
                                                        if(item.principle==this.state.selected){
                                                            
                                                            return(
                                                                <List.Item style={{marginTop:'1em'}}>
                                                                    <List.Content floated='right'>
                                                                        <Button basic color='green' style={{marginTop:'0'}} 
                                                                        id={item.subquesid} 
                                                                        data-segment={item.segment} 
                                                                        data-queestion={item.question}
                                                                        data-subquestion={item.subquestion}
                                                                        data-principle = {item.principle}
                                                                        data-questiontype = {item.questiontype}
                                                                        onClick={this.handleAddThisQuestion}>Add</Button>
                                                                    </List.Content>
                                                                    <List.Content style={{marginTop:'0.5em'}}>Principle:&nbsp;&nbsp;{item.principle}</List.Content>
                                                                    <List.Content style={{marginTop:'0.5em'}}>Segment:&nbsp;&nbsp;{item.segment}</List.Content>
                                                                    <List.Content style={{marginTop:'0.5em'}}>Queestion:&nbsp;&nbsp;{item.question}</List.Content>
                                                                    <List.Content style={{marginTop:'0.5em'}}>Subquestion:&nbsp;&nbsp;{item.subquestion}</List.Content>
                                                                    <List.Content style={{marginTop:'0.5em'}}>Questiontype:&nbsp;&nbsp;{item.questiontype}</List.Content>
                                                                </List.Item>
                                                            )
                                                        }
                                                    })}
                                                </List>
                                            </Modal.Description>
                                        </Modal.Content>
                                        <Modal.Actions>
                                            <Button
                                            
                                            onClick={this.handleAddQuestionList}
                                            positive
                                            >Complete</Button>
                                        </Modal.Actions>
                                    </Modal>
                                </div>
                            </div>
                            
                            <div>
                                <div divided verticalAlign='middle' style={{backgroundColor: 'f3f3f3'}}>
                                    {(this.state.subQuestionList||[]).map((item)=>{
                                        return(
                                            <div className='form-card' style={{marginLeft:'0.5em', marginRight:'0.5em', paddingBottom: '3.5em'}}>
                                            <List.Item style={{marginTop:'1em', marginBottom:"1em", position: 'relative'}}>

                                                <List.Content style={{marginTop:'0.5em', paddingRight: '120px'}}>
                                                    <label className="form-label" style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                        <span style={{fontWeight:'600'}}>Principle:</span>
                                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.principle}</span>
                                                    </label>
                                                </List.Content>

                                                <List.Content style={{marginTop:'0.5em', paddingRight: '120px'}}>
                                                    <label className="form-label" style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                        <span style={{fontWeight:'600'}}>Segment:</span>
                                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.segment}</span>
                                                    </label>
                                                </List.Content>

                                                <List.Content style={{marginTop:'0.5em', paddingRight: '0'}}>
                                                    <label className="form-label" style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                        <span style={{fontWeight:'600'}}>Question:</span>
                                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.question}</span>
                                                    </label>
                                                </List.Content>

                                                <List.Content style={{marginTop:'0.5em', paddingRight: '0'}}>
                                                    <label className="form-label" style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                        <span style={{fontWeight:'600'}}>Sub-Question:</span>
                                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.subquescontent}</span>
                                                    </label>
                                                </List.Content>

                                                <List.Content style={{marginTop:'0.5em', paddingRight: '0'}}>
                                                    <label className="form-label" style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                        <span style={{fontWeight:'600'}}>Question Type:</span>
                                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.questiontype}</span>
                                                    </label>
                                                </List.Content>
                                                
                                                <List.Content style={{position: 'absolute', top: '0', right: '0', transform: 'translateY(-40%)'}}>
                                                    <CustomButton color="red" message="Delete" fontSize="13px" id={item.subquestionid} onClick={this.handleDelectQuestion}/>
                                                </List.Content>
                                            </List.Item>

                                            </div>
                                        )                                        
                                    })}
                                </div>
                            </div>
                        </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
        
    
}

export default  Project4Detail
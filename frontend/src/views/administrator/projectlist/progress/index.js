import React, {Component} from 'react'
import './progress.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProgress4,getProjectDetail4} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Container,
    Header,
    Dimmer,
    Loader,
    Divider
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'
import CustomButton from '../../../../component/customButton'

class Project4Progress extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            progress:{
                "principlegraph": {
                    "25": 0,
                    "28": 0
                },
                "project": {
                    "assignedsupplier": [],
                    "assignedvalidator": [],
                    "createdtime": "2021-05-11T15:47:31.000+0000",
                    "creator": {
                        "id": 142,
                        "username": "Test0",
                        "password": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXNzd29yZCJ9.XZ0-LKjKyhGzW76FpJzmGMPuobmaf_OeKfM0l52iSTs",
                        "email": "Test0@gmail.com",
                        "usertype": 1,
                        "firstname": "Test0",
                        "lastname": "Moment",
                        "companyid": 31,
                        "address1": "address10Test",
                        "address2": "address20Moment",
                        "phone": "00",
                        "createdtime": "2021-05-11T15:45:54.000+0000",
                        "verifiedemail": 1,
                        "passwordtoken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0MCJ9.ZoxVWLL4aR8apiQN4JR78wgzeuMKKK1CsHD2ZrNlBOc",
                        "emailtoken": "50129903adac26dd8c761743cd1de3f3",
                        "image": "defaultimage.png"
                    },
                    "description": "test6",
                    "finishedtime": null,
                    "projectname": "projecttest1"
                },
                "questiongraph": {
                    "263": 0,
                    "264": 0,
                    "265": 0,
                    "266": 0,
                    "251": 0
                },
                "segmentgraph": {
                    "100": 0,
                    "101": 0,
                    "94": 0
                },
                "subquestiongraph": {
                    "1239": 0,
                    "1240": 0,
                    "1241": 0,
                    "1242": 0,
                    "1243": 0,
                    "1244": 0,
                    "1245": 0,
                    "1246": 0,
                    "1215": 0
                },
                "summary": [{
                    "principle": "Transparency",
                    "principlecontent": [{
                        "segment": "Segment-Transparency0",
                        "segmentcomment": {
                            "id": 20,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 94,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:25.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Transparency00",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Transparency00",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }]
                    }]
                }, {
                    "principle": "Privacy",
                    "principlecontent": [{
                        "segment": "Segment-Privacy0",
                        "segmentcomment": {
                            "id": 18,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 100,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:21.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy00",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy00",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy00",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy01",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy01",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy01",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }]
                        }]
                    }, {
                        "segment": "Segment-Privacy1",
                        "segmentcomment": {
                            "id": 19,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 101,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:23.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy11",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy11",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy11",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy10",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy10",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy10",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }]
                    }]
                }]
            },
            status :0,
            leftquestion:[],
            loading:false
        }
        this.onGetProgress = this.onGetProgress.bind(this);
        // this.onGetProjectDetail = this.onGetProjectDetail.bind(this)
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname"),
          })
        }
        if(token == null || token == -1){
            console.log("didn't login state");
        }else{
            this.onGetProgress(token);
            
          
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname");
      }
    onGetProgress=(token)=>{
        this.setState({
            loading:true
        })
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        getProgress4(projectname,{},{token}).then(res=>{
            let progress = res;
            this.setState({
                progress:progress,
                loading:false
            })
            console.log(this.state.progress);
            this.onGetProjectDetail(token)
        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })
    }

    onGetProjectDetail=(token)=>{
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        this.setState({
            loading:true
        })
        getProjectDetail4(projectname,{},{token}).then(res=>{
            let status = 0;
            status = res.status;
            console.log(res);
            this.setState({
                status:status,
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
    
    render(){
        console.log(this.state.progress);
        return(
            <div className="Supplier-project-report" style={{backgroundColor: '#f3f3f3'}}>
                
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
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Progress</div>
                        <div style={{marginTop: '3em'}}/>    

                        <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                            <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">Project Title</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {sessionStorage.getItem("projectname")}
                                        </p>
                                    </div>

                                    <div className="col">
                                        <label className="form-label">Status</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.status==5?'Finished':'Not Finished'}
                                        </p>
                                    </div>
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                                <div className="row">
                                    <div className="col">
                                        <label className="form-label"  style={{marginTop: '20px'}}>Creator</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.progress.project.creator.username||''}
                                        </p>
                                    </div>
                                    
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Date Created</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.progress.project.createdtime.slice(0,10)||''}
                                        </p>
                                    </div>
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Description</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.progress.project.description||''}
                                        </p>       
                                    </div>                         
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Assigned Suppliers</label>
                                        {(this.state.progress.project.assignedsupplier||[]).map((item)=>{
                                            return(
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {item}
                                                </p>
                                            )
                                        })}
                                    </div>

                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Assigned Validators</label>
                                        {(this.state.progress.project.assignedvalidator||[]).map((item)=>{
                                            return(
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {item}
                                                </p>
                                            )
                                        })}
                                    </div>
                                </div>  
                                <Divider style={{marginLeft:'0'}}/> 
                            </div>                         
                        </div>                        
                        
                        <div style={{fontFamily:'Montserrat', fontSize:'32px', fontWeight:'600', marginLeft:'3rem'}}>Content:</div>
                        
                        {(this.state.progress.summary||[]).map((item)=>{
                            return(
                                <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                                    <center><label className="form-label" style={{fontSize:'25px', fontWeight:'600', marginBottom:'1em'}}>Principle: {item.principle}</label></center>
                                    {(item.principlecontent||[]).map((subItem)=>{
                                        return(
                                            <div>
                                                <label className="form-label"
                                                    style={{marginLeft:'1em',marginBottom:'1em', marginTop:'2em', fontSize:'22px', fontWeight:'600'}}>
                                                    Segment: {subItem.segment}
                                                </label>
                                                <Divider/>
                                                {/* <h3>Summary:{item.principlecontent.summary.summary}</h3> */}
                                                {(subItem.segmentcontent||[]).map((segItem)=>{
                                                    return(
                                                        <div>
                                                            <label className="form-label"
                                                                style={{marginLeft:'2em',marginBottom:'1em', marginTop:'1em', fontSize:'18px', fontWeight:'400'}}>
                                                                    <span style={{fontWeight:'600'}}>Question:</span>
                                                                    <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{segItem.question}</span>
                                                            </label>
                                                            <Divider/>
                                                            {(segItem.questioncontent||[]).map((quesItem)=>{
                                                                return(
                                                                    <div style={{marginBottom:"3em",marginLeft:'2.5em', marginTop:'2em'}}>
                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Sub-Question:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{quesItem.subquestion}</span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Supplier Answer:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.youranswer == 1 ? 'No' : quesItem.youranswer}
                                                                            </span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Correct Answer:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.answer == -1 ? 'Yes' : quesItem.answer == 1 ? 'No' : 'No correct answer for this question'}
                                                                            </span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Point:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.point}
                                                                            </span>
                                                                        </label>
                                                                        <Divider/>
                                                                    </div>
                                                                )
                                                            })}         
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  Project4Progress
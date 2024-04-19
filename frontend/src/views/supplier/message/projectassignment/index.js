import React, {Component} from 'react'
import './projectassignment.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProjectAssignment2} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Header,
    Container,
    ItemMeta,
    Dimmer,
    Loader,
    Divider
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class ProjectAssignment extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            assignmentcontent:{},
            status:2,
            loading:false
        }
        this.goBack = this.goBack.bind(this);
        this.onGetProjectAssignment2 = this.onGetProjectAssignment2.bind(this);

    }

    goBack(){
      this.props.history.go(-1)
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
          this.setState({
            projectname:projectname
          })
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname")
          })
        }
        if(token == null || token == -1){
            this.gotoHome();
            
        }else{
            this.onGetProjectAssignment2(token)
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname")
      }

    onGetProjectAssignment2= (token) => {

        let projectname = ''
      projectname = sessionStorage.getItem("projectname")
        this.setState({
            loading:true
        })
        getProjectAssignment2(projectname,{},{token}).then(res=>{
            let assignmentcontent ={};
            assignmentcontent = res
            this.setState({
                assignmentcontent:assignmentcontent,
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
        return(
            <div className="User-project" style={{backgroundColor:'#f3f3f3'}}> 
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2}  style={{backgroundColor:'#f3f3f3'}}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                    <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Message: Assignment</div>
                        <div style={{marginTop: '3em'}}/>    

                        <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                            <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                <label className="form-label">Project Title</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.assignmentcontent.projectname}
                                </p>
                                <Divider/>

                                <label className="form-label" style={{marginTop: '20px'}}>Creator Name</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.assignmentcontent.creatorname}
                                </p>
                                <Divider/>

                                <label className="form-label" style={{marginTop: '20px'}}>Feedback Date</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {(this.state.assignmentcontent.feedbacktime||'').substring(0,10)}
                                </p>
                                <Divider/>
                            
                                <label className="form-label" style={{marginTop: '20px'}}>Principles</label>                                
                                {(this.state.assignmentcontent.ethicalconcerns||[]).map((item) => {
                                    return(
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {item.principlename}
                                        </p>
                                    )
                                })}
                                <Divider/>
                            </div>                         
                        </div>  
                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  ProjectAssignment
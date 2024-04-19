import React, {Component} from 'react'
import './project.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getProjectList4} from '../../../../api/api'
import{
    Grid,
    Table,
    Segment,
    Button,
    Dimmer,
    Loader,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'
import CustomButton from '../../../../component/customButton'

class AdministratorProject extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          projectList:[
            {
              "projectname": "string",
              "projectid": 0,
              "createdtime": "2021-04-22T06:47:52.225Z",
              "status": 0
            },
            {
              "projectname": "string",
              "projectid": 1,
              "createdtime": "2021-04-22T06:47:52.225Z",
              "status": 0
            },
            {
              "projectname": "string",
              "projectid": 2,
              "createdtime": "2021-04-22T06:47:52.225Z",
              "status": 5
            },
            {
              "projectname": "string",
              "projectid": 3,
              "createdtime": "2021-04-22T06:47:52.225Z",
              "status": 0
            },
            {
              "projectname": "string",
              "projectid": 4,
              "createdtime": "2021-04-22T06:47:52.225Z",
              "status": 5
            }
          ]
        }
        this.gotoDetail = this.gotoDetail.bind(this)
        this.onGetProjectList4 = this.onGetProjectList4.bind(this)

    }

    componentDidMount(){
      let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.onGetProjectList4(token)
        }
    }


    onGetProjectList4 = (token)=>{
      this.setState({loading:true})
      getProjectList4({},{token}).then((res)=>{
        let projectList = [];
        projectList = res.reverse();
        this.setState({
          loading:false,
          projectList:projectList,
          
        })
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error(error);
      })
    }

    gotoDetail =(e)=>{
      this.props.history.push({pathname:"/project4/projectlist/detail",query:{projectName:e.target.value,projectId:e.target.id}})
      console.log(e.target.value,e.target.id)
    }

    gotoSummary =(e)=>{
      this.props.history.push({pathname:"/project4/projectlist/summary",query:{projectname:e.target.value,projectid:e.target.id}})
    }

    gotoProgress =(e)=>{
      this.props.history.push({pathname:'/project4/projectlist/progress',query:{projectname:e.target.value,projectid:e.target.id}})
    }

    render(){
        return(
            <div className="User-project">
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2} style={{background: '#f3f3f3'}}>
                    <Grid.Column style={{width: '220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                    
                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em', boxShadow: 'none'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Projects</div>
                        <div style={{marginTop: '4em'}}/>
                          {(this.state.projectList||[]).map((item)=>{
                            return(
                              <div className='project-row row' style={{display:'flex', alignItems:'center', fontFamily: 'Montserrat', fontWeight: '600'}}>
                                <div className='col col-text'>{item.projectname}</div>
                                <div className='col col-text'>
                                  {item.status==1 ? 'Created': (item.status==5?'Complete': 'Not Complete')}
                                </div>

                                <div className='col'>
                                  <CustomButton message='Manage' value={item.projectname} id={item.projectid} onClick={this.gotoDetail}/>
                                </div>
                                <div className='col'>
                                  {item.status==5
                                  ?<CustomButton message="Summary" value={item.projectname} id={item.projectid} onClick={this.gotoSummary}/>
                                  :<CustomButton message="Progress" value={item.projectname} id={item.projectid} onClick={this.gotoProgress}/>}                               
                                </div>
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

export default  AdministratorProject
import React, {Component} from 'react'
import './project.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProject1} from '../../../api/api'
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

import SideMenu from '../../../component/sideMenu'
import TopHeader from '../../../component/header'
import CustomButton from '../../../component/customButton'
import Item from 'antd/lib/list/Item'

class SupAdminProject extends Component{
    constructor(props){
        super(props);
        this.state = {
          projectLists:[],
          loading:false
        }
        this.gotoDetail=this.gotoDetail.bind(this)
        this.gotoNewProject=this.gotoNewProject.bind(this)
        this.gotoProjectAssign = this.gotoProjectAssign.bind(this)
        this.onGetProject1 = this.onGetProject1.bind(this)
    }

    componentDidMount(){
      let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
        }else{
            this.onGetProject1(token)
        }
    }

    onGetProject1 = (token) =>{
      this.setState(({
        loading:true
      }))
      getProject1({},{token}).then(res => {
        let projectLists = []
        projectLists = res.reverse();
        console.log(res)
        this.setState({
          projectLists:projectLists,
          loading:false
        })
      }).catch(error =>{
        message.config({duration: 5});
        message.error(error);
      })
    }

    gotoNewProject(){
      this.props.history.push('/project1/newproject')
  }

    gotoDetail(event){
      console.log(event.target.value);
      this.props.history.push({pathname:'/project1/detail',query:{projectname:event.target.value}})
    }

    gotoProjectAssign(event){
      this.props.history.push({pathname:'/project1/projectassign',query:{projectname:event.target.value}})
    }



    render(){
        return(
            <div className="User-project">
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2} style={{background: '#f3f3f3'}}>
                    {/* <Grid.Column width={2}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={13}> */}
                    <Grid.Column style={{width: '220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div>
                          <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Projects</div>
                          {/* className="btn-custom-darker" */}
                          <Button style={{float:'right', width:'200px', height:'50px', marginTop: '10px', fontFamily:'Poppins', fontWeight:'500'}} 
                          positive onClick={this.gotoNewProject}>New Project</Button>
                        </div>
                        <div style={{marginTop: '4em'}}/>

                        <div celled color={'#A7C942'}>
                          <div>

                            {(this.state.projectLists||[]).map((item)=>{
                              return(
                                <div className='project-row row' style={{display:'flex', alignItems:'center'}}>
                                  <b className='col col-text' style={{fontFamily: 'Montserrat', fontWeight: '600'}}>
                                    {item.projectname}
                                  </b>
                                  <div className='col col-text' style={{fontFamily: 'Montserrat', fontWeight: '600'}}>
                                    {item.createdtime.slice(0,10)}
                                  </div>

                                  <div className='col'>
                                    <CustomButton message='Details' value={item.projectname} onClick={this.gotoDetail}/>
                                  </div>
                                  <div className='col'>
                                    <CustomButton message='Assign' value={item.projectname} onClick={this.gotoProjectAssign}/>
                                  </div>
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

export default  SupAdminProject
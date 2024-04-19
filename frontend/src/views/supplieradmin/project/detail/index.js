import React, {Component} from 'react'
import './detail.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProjectDetail1} from '../../../../api/api'
import{
    Grid,
    Segment,
    Button,
    Breadcrumb,
    Form,
    Header,
    List,
    Dimmer,
    Loader,
    Container,
    Divider
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
          projectname:'',
          projectDetail:[],
          status:2,
          loading:false
        }
        this.goBack = this.goBack.bind(this)
        this.onGetProjectDetail1 = this.onGetProjectDetail1.bind(this)

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
            this.onGetProjectDetail1(token)
        }
    }

    componentWillUnmount(){
      console.log("un");
      sessionStorage.removeItem("projectname")
    }

    onGetProjectDetail1 = (token) =>{

      let projectname = ''
      projectname = sessionStorage.getItem("projectname")
      this.setState({
        loading:true
      })
      getProjectDetail1(projectname,{},{token}).then(res =>{
        let projectDetail = []
        projectDetail = res
        console.log(res);
        this.setState({
          projectDetail:projectDetail,
          loading:false
        })
      }).catch(error => {
        message.config({duration: 5});
        message.error(error);
        this.setState({
          loading:false
        })
      })
    }


    goBack(){
      this.props.history.go(-1)
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

                  <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                    <div>
                      <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                        Project Details
                      </div>

                      <Button negative onClick={this.goBack}
                          style={{float: 'right', fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
                            Back
                          </Button>

                        <div className='form-card' style={{width: '100%', marginTop:'4em'}}>  
                          <Form>
                          <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                        <label className="form-label" style={{}}>Project Title</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                          {this.state.projectDetail.projectname}
                                        </p>
                                        <Divider/>
                                        <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Description</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                          {this.state.projectDetail.description}
                                        </p>
                                        <Divider/>
                                        <label className="form-label" style={{marginTop: '20px'}}>Principles</label>
                                        {(this.state.projectDetail.ethicalconcerns||[]).map((item)=>{
                                          return(
                                            <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                              {item.principlename}
                                            </p>
                                          )
                                        })}
                                        <Divider/>
                                    </div>
                          </Form>
                      </div>
                    </div>
                  </div> 
               </Grid.Column>
              </Grid>
            </div>
        )
    }
}

export default  Detail
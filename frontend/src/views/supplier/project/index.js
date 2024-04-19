import React, {Component} from 'react'
import './project.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProjectList2} from '../../../api/api'
import{
    Grid,
    Table,
    Segment,
    Button,
    Dimmer,
    Loader
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../component/sideMenu'
import TopHeader from '../../../component/header'
import CustomButton from '../../../component/customButton'

class SupProject extends Component{
    constructor(props){
        super(props);
        this.state = {
          projectLists:[],
          loading:false
        }
        this.gotoAnswer = this.gotoAnswer.bind(this);
        this.gotoReport = this.gotoReport.bind(this);
        this.onGetProjectLists = this.onGetProjectLists.bind(this);
        this.onCompare = this.onCompare.bind(this)
    }

    gotoAnswer(event){
      this.props.history.push({pathname:'/project2/answer/',query:{projectname:event.target.value}})
    }

    gotoReport(event){
      this.props.history.push({pathname:'/project2/report/',query:{projectname:event.target.value}})
    }

    componentDidMount(){
      let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.onGetProjectLists(token)
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

    onGetProjectLists = (token) =>{
      this.setState({
        loading:true
      })
      getProjectList2({},{token}).then(res => {
        let projectLists = [];
        projectLists = res.reverse();
        this.setState({
          loading:false,
          projectLists:projectLists
        })
      }).catch(error=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error(error);
      })
    }

    render(){
        return(
            <div className="User-project">
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2} style={{background: '#f3f3f3 !important'}}>
                    <Grid.Column style={{width: '220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Projects</div>
                        <div style={{marginTop: '4em'}}/>
                        {(this.state.projectLists||[]).map((item) =>{
                          return(
                            <div className='project-row row' style={{display:'flex', alignItems:'center', fontFamily: 'Montserrat', fontWeight: '600'}}>
                              <b className='col col-text'>{item.projectname}</b>
                              <div className='col col-text'>{item.assigntime.slice(0,10)}</div>
                              <div className='col'>
                                {item.status == 2?'Not Completed':(item.status==3 || item.status==4?"Validating":"Completed")}</div>
                              <div className='col'>

                                {item.status == 5
                                  ?<CustomButton message='Report' value={item.projectname} onClick={this.gotoReport}/>
                                  :(item.status==2 && item.open == 1
                                  ?<CustomButton message='Answer' value={item.projectname} onClick={this.gotoAnswer}/>
                                  :<CustomButton message='Answer' value={item.projectname} disabled={true}/>)
                                }
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

export default  SupProject
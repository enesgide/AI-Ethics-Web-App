import React, {Component} from 'react'
import './project.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getQuestionnaireList3} from '../../../api/api'
import{
    Grid,
    Table,
    Segment,
    Button,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../component/sideMenu'
import TopHeader from '../../../component/header'
import CustomButton from '../../../component/customButton'

class ValidatorProject extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          questionList :[
            {
              "projectid": 0,
              "projectname": "string",
              "date": "2021-04-26T15:33:36.051Z",
              "finished": false,
            }
          ]
        }

        this.onGetQuestionnaireList3 = this.onGetQuestionnaireList3.bind(this)

    }

    componentDidMount(){
      let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.onGetQuestionnaireList3(token)
        }
    }

    onGetQuestionnaireList3 = (token)=>{
      this.setState({
        loading:true
      })
      getQuestionnaireList3({},{token}).then((res)=>{
        const questionList = res;
        this.setState({
          questionList:questionList,
          loading:false
        })
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error(error);
        console.log(error);
      })
    }

    gotoQuesDetail = (e)=>{
      this.props.history.push({pathname:'/project3/questiondetail',query:{projectname:e.target.name}})
    }

    render(){
        return(
            <div className="User-project" style={{background: '#f3f3f3'}}>
                <Grid columns={2} >
                    <Grid.Column style={{width: '220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em', boxShadow: 'none'}}>
                      <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Projects</div>
                            {(this.state.questionList||[]).map((item)=>{
                              return(
                                <div className='project-row row' style={{display:'flex', alignItems:'center', fontFamily: 'Montserrat', fontWeight: '600'}}>
                                  <div className='col col-text'>{item.projectname}</div>
                                  <div className='col col-text'>{item.date.split("T")[0]}</div>
                                  {item.finished? <div className='col'>
                                    <CustomButton message='Report' name={item.projectname} onClick={this.gotoQuesDetail}/>
                                  </div>:
                                  <div className='col'>
                                    <CustomButton message='Check' name={item.projectname} onClick={this.gotoQuesDetail}/>
                                  </div>}
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

export default  ValidatorProject
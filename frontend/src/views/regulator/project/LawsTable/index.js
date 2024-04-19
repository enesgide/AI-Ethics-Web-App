import React, {Component} from 'react'
// import '../project.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
// import {getQuestionnaireList3} from '../../../../api/api'
import { getQuestionnaireList3 } from '../../../../api/api'
import { getAllLaws } from '../../../../api/api'
import{
    Grid,
    Table,
    Segment,
    Button,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class LawsTable extends Component{
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
          ],
          lawList :[
            {
              "lawname": "Ethical Law 1",
              "description": "An AI model must provide full transparency to stakeholders.",
              "year": 2022,
              "city": "Sydney",
              "country": "Australia",
              "type": 1,
            }
          ],
        }

        this.onGetQuestionnaireList3 = this.onGetQuestionnaireList3.bind(this)
        console.log(getAllLaws())
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

    gotoAddLaw = (e)=>{
      this.props.history.push({pathname:'/addlaw'})
    }

    gotoAddClause = (e)=>{
      this.props.history.push({pathname:'/addclause'})
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
                      <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Laws</div>
                      <Button basic size='big' color='green' name={""} onClick={this.gotoAddLaw} floated='right' style={{position: 'relative', top:'20px', left:'-30px'}}>Add Law</Button>
                            {(this.state.lawList||[]).map((item)=>{
                              return(
                                <div>
                                {/* Only returns projects that have been completed by the supplier already. The validator may or may not have passed/failed each question yet. */}
                                  <div className='project-row'>
                                      <div style={{fontSize:'1.5em'}}>{item.lawname}</div>
                                      <div className='col-text text-muted'>{item.year}</div>
                                      <div className='col-text'>{item.city}, {item.country}</div>
                                      <div className='col-text' style={{marginTop:'25px'}}>{item.description}</div>
                                      <Button basic color='green' name={item.lawname} onClick={this.gotoAddClause} floated='bottom-right' style={{position: 'relative', top: '-20px', left: '-150px'}}>Add Clause</Button>
                                      <Button basic color='red' name={item.lawname} onClick={""} floated='bottom-right' style={{position: 'relative', top: '-20px', left: '60px'}}>Delete</Button>
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

export default LawsTable
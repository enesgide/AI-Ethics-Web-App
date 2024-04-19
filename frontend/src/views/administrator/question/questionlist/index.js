import React, {Component} from 'react'
import './questionlist.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getQuestionList4,getQuestionType4,deleteSubquestion4} from '../../../../api/api'
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

class AdministratorQuestionList extends Component{
    constructor(props){
        super(props);
        this.gotoDetail = this.gotoDetail.bind(this)
        this.onGetQuestionList4 = this.onGetQuestionList4.bind(this);
        this.onGetQuestionType = this.onGetQuestionType.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
        this.onCompare = this.onCompare.bind(this)
        this.state = {
          loading:false,
          questionList:[],
          questionType:[],
        }
        

    }

    componentDidMount(){
      let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.onGetQuestionType(token)
          console.log(this.state.questionType);
          console.log(this.state.questionList);
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

    onGetQuestionList4 = (token)=>{
      this.setState({
        loading:true
      })
      console.log(this.state.loading);
      getQuestionList4({},{token}).then((res)=>{
        let questionList=[];
        questionList=res;
        questionList.sort(this.onCompare)
        this.setState({
          questionList:questionList,
          loading:false,
        });
        console.log(questionList);
        console.log(this.state.questionList);
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error(error);
      })
    }

    gotoDetail =(e)=>{
      this.props.history.push({pathname:"/project4/question/questionlist/detail",query:{subquestionid :e.target.id}})
      
    }

    onGetQuestionType = (token)=>{
      this.setState({
        loading:true
      })
      getQuestionType4({},{token}).then((res)=>{
        const questionType = res;
        this.setState({
          questionType:questionType,
          loading:false
        })
        console.log(this.state.questionType)
        this.onGetQuestionList4(token)
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error(error);
      })
    }

    deleteQuestion = (e)=>{
      let token = sessionStorage.getItem("token");
      let subquestionid = e.target.id;
      this.setState({
        loading:true
      })
      deleteSubquestion4(subquestionid,{},{token}).then((res)=>{
        message.success("delete success");
        this.setState({
          loading:false
        })
        this.onGetQuestionList4(token);
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration: 5});
        message.error("something error,try again");
      })
    }
    
    render(){
      console.log(this.state.questionList);
      console.log(this.state.questionType)
        return(
            <div className="User-project">
               <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                
                <Grid columns={2} style={{background: '#f3f3f3'}}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                      <TopHeader/>

                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em'}}>
                        <div>
                          <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                            Question List
                          </div>

                          <div style={{marginTop:'4em'}}>
                              {(this.state.questionList||[]).map((item)=>{
                                  if(item.principlecontent!=[]){
                                    return (
                                      item.principlecontent.map((segItem)=>{
                                        if(segItem.segmentcontent!=[]){
                                          return(
                                            (segItem.segmentcontent||[]).map((quesItem)=>{
                                              return (
                                                (quesItem.questioncontent||[]).map((subQuesItem)=>{
                                                  return(
                                                    <div className='project-row row ml-1 mr-5'>
                                                      <div className='row w-100' style={{marginLeft:'0.5rem', fontSize:'1.2rem', fontFamily: 'Montserrat', fontWeight: '600'}}>{subQuesItem.subquestion}</div>
                                                      <div className="row w-100 my-3" style={{marginLeft:'1rem', fontFamily: 'Poppins', fontWeight: '400'}}>
                                                        {quesItem.question}
                                                        {/* {this.state.questionType.find((item)=>{return item.questiontypeid==subQuesItem.questiontype})} */}
                                                      </div>
                                                      <div className="row" style={{marginTop:'10px'}}>
                                                        <div className='col' style={{padding:'0', marginLeft: '2rem'}}>
                                                          <CustomButton message='Details' fontSize='13px' value={item.projectname} id={subQuesItem.subquesid} onClick={this.gotoDetail}/>
                                                        </div>
                                                        <div className='col'>
                                                          <CustomButton color='red' fontSize='13px' message='Delete' value={item.projectname} id={subQuesItem.subquesid} onClick={this.deleteQuestion}/>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  )
                                                  
                                                })
                                              )
                                            })
                                          )
                                          
                                        }
                                      })
                                    )
                                    
                                  }
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

export default  AdministratorQuestionList
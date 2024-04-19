import React, {Component} from 'react'
import './newsubquestion.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {postAddSubquestion4,getPrinciples4,getSegments4,getQuestions4,getQuestionType4} from '../../../../api/api'
import{
    Grid,
    Form,
    Segment,
    Button,
    Dimmer,
    Loader,
    Input,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class AdministratorQuestionListNewSubQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          principleList:[ 
        ],
          segmentList:[],
          questionList:[],
          selectedPrincipleId:0,
          selectedSegmentId:0,
          selectedQuestionId:0,
          newSubQuestion:'',
          questionType:[],
          questionTypeid:0,
          token:'',
          answer:0,
          answerDisabled:true,
        }
        this.handleSubQuestionContent = this.handleSubQuestionContent.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleSelectPrinciple = this.handleSelectPrinciple.bind(this);
        this.handleSelectSegment = this.handleSelectSegment.bind(this);
        this.onGetSegmentList = this.onGetSegmentList.bind(this);
        this.onGetPrincipleList = this.onGetPrincipleList.bind(this);
        this.handleSubQuestionAnswer = this.handleSubQuestionAnswer.bind(this);
        this.handleSelectQuestion = this.handleSelectQuestion.bind(this);
        this.handleSelectQuestionType = this.handleSelectQuestionType.bind(this);
        this.onGetQuestionTypeList = this.onGetQuestionTypeList.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.setState({
            token:token,
          })
          this.onGetQuestionTypeList(token);
          this.onGetPrincipleList(token);
        }
    }

    onGetQuestionTypeList = (token) => {
      this.setState({
        loading: true
      })
      getQuestionType4({},{token}).then((res) => {
        const questionTypeList = res;
        this.setState({
          questionType: questionTypeList,
          loading: false
        })
        if(this.state.questionTypeid===0) {
          this.setState({
            questionTypeid: questionTypeList[0].questiontypeid
          })
        }
      }).catch((error) => {
        this.setState({
          loading:false
        })
        message.config({duration:5});
        message.error(error);
      })
    }

    onGetPrincipleList = (token)=>{
      this.setState({
        loading:true
      })
      getPrinciples4({},{token}).then((res)=>{
        const principleList = res;
        this.setState({
          principleList:principleList,
          loading:false

        })
        if(this.state.selectedPrincipleId==0){
            this.setState({
                selectedPrincipleId : principleList[0].principleid
            })
            this.onGetSegmentList(principleList[0].principleid,token)
        }else{
          // this.onGetSegmentList(this.state.selectedPrincipleId,token)
        }
        
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration:5});
        message.error(error);
      })

    }

    onGetSegmentList = (principleid,token)=>{
      this.setState({
        loading:true
      })
      getSegments4(principleid,{},{token}).then((res)=>{
        var segmentList = res;
        this.setState({
          segmentList:segmentList,
          loading:false
        })
        console.log(segmentList);
        if(this.state.selectedSegmentId==0){
          if(segmentList.length!=0){
            this.setState({
              selectedSegmentId : segmentList[0].segmentid
          })
          }
        }
        this.onGetQuestionList(principleid,this.state.selectedSegmentId,token)
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration:5});
        message.error(error);
      })

    }

    onGetQuestionList = (principleid,segmentid,token)=>{
        this.setState({
          loading:true
        })
        getQuestions4(principleid,segmentid,{},{token}).then((res)=>{
          const questionList = res;
          this.setState({
            questionList:questionList,
            loading:false
          })
          if(this.state.selectedQuestionId==0){
            this.setState({
                selectedQuestionId : questionList[0].questionid
            })  
        }else{
          // this.onGetSegmentList(this.state.selectedPrincipleId,token)
        }
        }).catch((error)=>{
          this.setState({
            loading:false
          })
          message.config({duration:5});
          message.error(error);
        })
  
      }
    
    handleSelectPrinciple = (e)=>{
        let token= sessionStorage.getItem("token")
        let selectedPrincipleId = e.target.selectedOptions[0].value;
        this.setState({
          selectedPrincipleId:e.target.selectedOptions[0].value,
          loading:true
        })
        // console.log(this.state.selectedPrincipleId);
        this.onGetSegmentList(selectedPrincipleId,token)
    }

     handleSelectSegment = (e)=>{
        let token= sessionStorage.getItem("token")
        let selectedPrincipleId = this.state.selectedPrincipleId;
        let selectedSegmentId = e.target.selectedOptions[0].value;
        this.setState({
            selectedSegmentId:e.target.selectedOptions[0].value
        })
        this.onGetQuestionList(selectedPrincipleId,selectedSegmentId,token)
    }

    handleSelectQuestion = (e)=>{
      let selectQuestionId = e.target.selectedOptions[0].value;
        this.setState({
            selectedQuestionId:selectQuestionId
        })
    }

    handleSelectQuestionType=(e)=>{
      let questionTypeid = e.target.selectedOptions[0].value;
      if(questionTypeid == 1){
        this.setState({
          answerDisabled:false,
          questionTypeid:questionTypeid,
        })
      }else{
        this.setState({
          answerDisabled:true,
        })
      }
    }


    handleSubQuestionContent =(e)=>{
      this.setState({
        newSubQuestion:e.target.value,
      })
    }

    

    handleSubQuestionAnswer =(e)=>{
      let answer = e.target.selectedOptions[0].value;
      if(answer == "yes") {
        this.setState({
          answer:-1,
        })
      }
      else if(answer == "no") {
        this.setState({
          answer:1,
        })
      }
      else{
        this.setState({
          answer:0,
        })
      }
    }

    handleAddQuestion = (e)=>{
      console.log(this.state.selectedSegmentId,this.state.selectedPrincipleId);
      this.setState({
        loading:true
      })
      if(this.state.newSubQuestion==''){
        message.error('nothing input,please input again!')
        this.setState({
          loading:false
        })
      }else if(parseInt(this.state.answer) != 0 && parseInt(this.state.answer) != 1 && parseInt(this.state.answer) != -1){
        message.error('the answer input is incorrect!');
        this.setState({
          loading:false
        })
      }else{
        let token = sessionStorage.getItem("token");
      let principleObj = {
        "questiontypeid":parseInt(this.state.questionTypeid),
        "subquescontent":this.state.newSubQuestion,
        "answer":this.state.answer,
        "questionid":parseInt(this.state.selectedQuestionId)
      }
      postAddSubquestion4(principleObj,{token}).then((res)=>{
        this.setState({
          newSubQuestion:'',
          loading:false
        })
        message.config({duration:5});
        message.success(res)
      }).catch((error)=>{
        this.setState({
          loading:false
        })
        message.config({duration:5});
        message.error(error)
      })
      }
    }

    

    render(){
      console.log(this.state.segmentList);
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
                      Create New Sub-Question
                    </div>
                    
                    <div className='form-card' style={{width: '100%', marginTop: '4em'}}>
                      <Form>
                        <Form.Field required>
                          <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Principle
                          </label>
                          <select name="" id="" onChange={this.handleSelectPrinciple} placeholder="Principle"
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                              {(this.state.principleList||[]).map((item)=>{
                                      return(
                                          <option value={item.principleid} 
                                          style={{fontFamily: 'Poppins', width: '100%'}}>
                                            {item.principlename}                                              
                                          </option>
                                      )
                                  })}
                          </select> 

                          <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Segment
                          </label>
                          <select name="" id="" onChange={this.handleSelectSegment} placeholder="Segment"
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                              {(this.state.segmentList||[]).map((item)=>{
                                      return(
                                          <option value={item.segmentid} 
                                          style={{fontFamily: 'Poppins', width: '100%'}}>
                                            {item.segmentname}                                              
                                          </option>
                                      )
                                  })}
                          </select> 

                          <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Core Question
                          </label>
                          <select name="" id="" onChange={this.handleSelectQuestion} placeholder="Question"
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                              {(this.state.questionList||[]).map((item)=>{
                                      return(
                                          <option value={item.questionid} 
                                          style={{fontFamily: 'Poppins', width: '100%'}}>
                                            {item.questioncontent}                                              
                                          </option>
                                      )
                                  })}
                          </select> 

                          <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Question Type
                          </label>
                          <select name="" id="" onChange={this.handleSelectQuestionType} placeholder="Question Type"
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                              {(this.state.questionType||[]).map((item)=>{
                                      return(
                                          <option value={item.questiontypeid} 
                                          style={{fontFamily: 'Poppins', width: '100%'}}>
                                            {item.description}                                              
                                          </option>
                                      )
                                  })}
                          </select> 

                          <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Sub-Question
                          </label>
                          <input placeholder='Add your sub-question' value ={this.state.newSubQuestion} onChange={this.handleSubQuestionContent}
                          style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                          <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                            Accepted Answer
                          </label>
                          <select name="" id="" onChange={this.handleSubQuestionAnswer} placeholder='yes/no' disabled={this.state.answerDisabled}
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                            <option value="" style={{fontFamily: 'Poppins', width: '100%'}}>
                              Select yes/no
                            </option>
                            <option value="yes" style={{fontFamily: 'Poppins', width: '100%'}}>
                              Yes
                            </option>
                            <option value="no" style={{fontFamily: 'Poppins', width: '100%'}}>
                              No
                            </option>
                          </select>

                          

                        <Button type='submit' positive onClick={this.handleAddQuestion}
                          style={{marginTop: '3em', fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
                          Create
                        </Button>
                        </Form.Field>
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

export default  AdministratorQuestionListNewSubQuestion
import React, {Component} from 'react'
import './newquestion.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {postAddQuestion4,getPrinciples4,getSegments4} from '../../../../api/api'
import{
    Grid,
    Form,
    Segment,
    Button,
    Dimmer,
    Loader,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class AdministratorQuestionListNewQuestion extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          principleList:[ 
            {
            "principleid": 0,
            "principlename": "string"
          },
          {
            "principleid": 1,
            "principlename": "string1"
          },
          {
            "principleid": 2,
            "principlename": "string2"
          },
          {
            "principleid": 3,
            "principlename": "string3"
          },
          {
            "principleid": 4,
            "principlename": "string4"
          },
          {
            "principleid": 5,
            "principlename": "string5"
          }
        ],
          segmentList:[
            {
              "segmentid": 0,
              "segmentname": "strin1g"
            },
            {
              "segmentid":1,
              "segmentname": "string2"
            },
            {
              "segmentid": 2,
              "segmentname": "string3"
            },
            {
              "segmentid": 3,
              "segmentname": "string4"
            },
            {
              "segmentid": 4,
              "segmentname": "string5"
            },
            {
              "segmentid": 5,
              "segmentname": "string7"
            }
          ],
        selectedPrincipleId:0,
        selectedSegmentId:0,
        newQuestion:'',
          token:''
        }
        this.handleQuestionContent = this.handleQuestionContent.bind(this);
        this.handleAddQuestion = this.handleAddQuestion.bind(this);
        this.handleSelectPrinciple = this.handleSelectPrinciple.bind(this);
        this.handleSelectSegment = this.handleSelectSegment.bind(this);
        this.onGetSegmentList = this.onGetSegmentList.bind(this);
        this.onGetPrincipleList = this.onGetPrincipleList.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.setState({
            token:token,
            selectedPrincipleId:this.state.principleList[0].principleid,
            selectedSegmentId:this.state.segmentList[0].segmentid
          })
          this.onGetPrincipleList(token)
        }
        console.log(this.state.selectedPrincipleId,this.state.selectedSegmentId);
    }

    onGetPrincipleList = (token)=>{
      this.setState({
        loading:true
      })
      getPrinciples4({},{token}).then((res)=>{
        const principleList = res;
        this.state({
          principleList:principleList,
          loading:false
        })
        this.onGetSegmentList()
      }).catch((error)=>{
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
          this.onGetSegmentList(this.state.selectedPrincipleId,token)
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
    this.setState({
        selectedSegmentId:e.target.selectedOptions[0].value
    })
    // this.onGetQuestionList(selectedPrincipleId,selectedSegmentId,token)
}


    handleQuestionContent =(e)=>{
      this.setState({
        newQuestion:e.target.value,
      })
    }

    handleAddQuestion = (e)=>{
      console.log(this.state.selectedSegmentId,this.state.selectedPrincipleId);
      this.setState({
        loading:true
      })
      if(this.state.newQuestion==''){
        message.error('nothing input,please input again!')
        this.setState({
          loading:false
        })
      }else{
        let token = sessionStorage.getItem("token");
      let principleObj = {
        "principleid": parseInt(this.state.selectedPrincipleId),
        "segmentid": parseInt(this.state.selectedSegmentId),
        "question":this.state.newQuestion
      }
      postAddQuestion4(principleObj,{token}).then((res)=>{
        this.setState({
          newQuestion:'',
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
                        Create New Question
                      </div>
                      
                      <div className='form-card' style={{width: '100%', marginTop: '4em'}}>
                        <Form>
                          <Form.Field required>
                            <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Question
                            </label>
                            <input placeholder='Add your question' value ={this.state.newSegment } onChange={this.handleSegmentContent}
                            style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                            <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Related Principle
                            </label>
                            <select name="" id="" onChange={this.handleSelectPrinciple} style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                                {(this.state.principleList||[]).map((item)=>{
                                        return(
                                            <option value={item.principleid} 
                                            style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                                              {item.principlename}                                              
                                            </option>
                                        )
                                    })}
                            </select> 

                            <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Related Segment
                            </label>
                            <select name="" id="" onChange={this.handleSelectSegment} style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                                {(this.state.segmentList||[]).map((item)=>{
                                        return(
                                            <option value={item.segmentid} 
                                            style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}>
                                              {item.segmentname}                                              
                                            </option>
                                        )
                                    })}
                            </select> 

                          <Button type='submit' positive onClick={this.handleAddQuestion}
                            style={{marginTop: '2em', fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
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

export default  AdministratorQuestionListNewQuestion
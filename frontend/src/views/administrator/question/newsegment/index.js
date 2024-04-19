import React, {Component} from 'react'
import './newsegment.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getPrinciples4,postAddSegment4} from '../../../../api/api'
import{
    Grid,
    Segment,
    Button,
    Dimmer,
    Loader,
    Form,
    Select,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class AdministratorQuestionListNewSegment extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          seletedPrinciple:'',
          newSegment:'',
          principleList:[],
          selectedPrincipleId:0,
          token:''
        }
        this.handleSegmentContent = this.handleSegmentContent.bind(this);
        this.handleAddSegment = this.handleAddSegment.bind(this);
        this.handleSelectPrinciple = this.handleSelectPrinciple.bind(this);
        this.onGetPrincipleList = this.onGetPrincipleList.bind(this)
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.onGetPrincipleList(token)
        }
        console.log(this.state.selectedPrincipleId);
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
     this.setState({
      selectedPrincipleId:e.target.value
     })
}


    handleSegmentContent =(e)=>{
      this.setState({
        newSegment:e.target.value,
      })
    }

    handleAddSegment = (e)=>{
      this.setState({
        loading:true
      })
      if(this.state.newSegment==''){
        message.error('nothing input,please input again!')
        this.setState({
          loading:false
        })
      }else{
        let token = sessionStorage.getItem("token");
      let principleObj = {
        "principleid": parseInt(this.state.selectedPrincipleId),
        "segment": this.state.newSegment
      }
      postAddSegment4(principleObj,{token}).then((res)=>{
        this.setState({
          newSegment:'',
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
      // console.log(this.state.principleList);
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
                        Create New Segment
                      </div>
                      
                      <div className='form-card' style={{ width: '700px', marginTop: '4em' }}>
                        <Form>
                          <Form.Field required>
                            <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Segment Name
                            </label>
                            <input placeholder='Segment Name' value ={this.state.newSegment } onChange={this.handleSegmentContent}
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

                          <Button type='submit' positive onClick={this.handleAddSegment}
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

export default  AdministratorQuestionListNewSegment
import React, {Component} from 'react'
import './newprinciple.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {postAddPrinciple4} from '../../../../api/api'
import{
    Grid,
    Segment,
    Button,
    Dimmer,
    Loader,
    Form,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class AdministratorQuestionListNewPrinciple extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          newPrinciple:'',
          token:''
        }
        this.handlePrincipleContent = this.handlePrincipleContent.bind(this)
        this.handAddPrinciple = this.handAddPrinciple.bind(this)
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.gotoHome();
        }else{
          this.setState({
            token:token
          })
        }
    }

    handlePrincipleContent =(e)=>{
      this.setState({
        newPrinciple:e.target.value,
      })
      console.log(this.state.newPrinciple);
    }

    handAddPrinciple = (e)=>{
      console.log(this.state.newPrinciple);
      this.setState({
        loading:true
      })
      if(this.state.newPrinciple==''){
        message.error('nothing input,please input again!')
        this.setState({
          loading:false
        })
      }else{
        let token = sessionStorage.getItem("token");
      let principleObj = {principle:this.state.newPrinciple}
      postAddPrinciple4(principleObj,{token}).then((res)=>{
        this.setState({
          newPrinciple:'',
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
                        Create New Principle
                      </div>
                      
                      <div className='form-card' style={{width: '700px', marginTop: '4em'}}>
                        <Form>
                          <Form.Field required>
                          <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Principle Name 
                          </label>
                            <input placeholder='Principle Name' value ={this.state.newPrinciple } onChange={this.handlePrincipleContent}
                            style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}/>

                          <Button type='submit' disabled={this.state.loading} positive onClick={this.handAddPrinciple}
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

export default  AdministratorQuestionListNewPrinciple
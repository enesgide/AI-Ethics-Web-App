import React, {Component} from 'react'
import './validator.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getCategorizeUserList4,deleteUser4} from '../../../../api/api'
import{
    Grid,
    Table,
    Segment,
    Button,
    Dimmer,
    Loader,
    Breadcrumb,
    Image
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'
import CustomButton from '../../../../component/customButton'

class AdministratorUserValidator extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          userType:'validator',
          userList:[]
        }
        this.gotoDetail = this.gotoDetail.bind(this)
        this.onGetCategorizeUserList4 = this.onGetCategorizeUserList4.bind(this);
        this.handleDeleteUser4 = this.handleDeleteUser4.bind(this)

      }
  
      componentDidMount(){
        let token = sessionStorage.getItem("token");
          if(token == null || token == -1){
              console.log("didn't login state");
              this.gotoHome();
          }else{
            this.onGetCategorizeUserList4(token)
          }
      }
  
  
      onGetCategorizeUserList4 = (token)=>{
        this.setState({loading:true})
        let supplier = 'validator'
        getCategorizeUserList4(supplier,{},{token}).then((res)=>{
          const userList = res;
          this.setState({
            userList:userList,
            loading:false
          })
        }).catch((error)=>{
          this.setState({
            loading:false
          })
          message.config({duration: 5});
          message.error(error);
        })
      }

      handleDeleteUser4=(e)=>{
        let username = e.target.value;
        let token = sessionStorage.getItem("token")
        this.setState({
          loading:true
        })
        deleteUser4(username,{},{token}).then((res)=>{
          this.setState({
            loading:false
          })
          this.onGetCategorizeUserList4(token);
        }).catch((error)=>{
          this.setState({
              loading:false
          })
          message.config({duration:5});
          message.error(error);
      })
      }

    gotoDetail =(e)=>{
      this.props.history.push({pathname:"/project4/users/detail",query:{username:e.target.value,userid:e.target.id,userType:e.target.dataset.userType}})
      console.log(e.target.value,e.target.id)
    }

    render(){
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

                      <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Validator List</div>
                        <div style={{marginTop: '4em'}}/>

                        <div celled color={'#A7C942'} inverted className='M-Table'>

                          <div>
                            {(this.state.userList||[]).map((item)=>{
                              return(
                                <div className='row user-row' style={{display:'flex', alignItems:'center', fontFamily: 'Montserrat', fontWeight: '600'}}>
                                  {/* <Image circular size='mini' src={item.userImage}/> */}
                                  {/*Placeholder*/}
                                  <Image circular size='mini' src="/images/userimage/defaultimage.png"/> 
                                  <div className='col col-text' style={{marginLeft:'10px'}}>{item.username}</div>
                                  <div className='col col-text'>
                                   {item.company || 'N/A'}
                                  </div>

                                  <div className='col'>
                                    <CustomButton message='Details' value={item.username} data-userType={this.state.userType} id={item.userid} onClick={this.gotoDetail}/>
                                  </div>
                                  <div className='col'>
                                    <CustomButton color='red' message='Delete' value={item.username} onClick={this.handleDeleteUser4}/>
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

export default  AdministratorUserValidator
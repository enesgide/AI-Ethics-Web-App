import React, {Component} from 'react'
import {
    Grid,
    Header,
    Image,
    Segment,
    Button,
    Divider,
    Form,
    Dimmer,
    Loader,
    Breadcrumb
} from 'semantic-ui-react'
import {message, Spin} from 'antd'
import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

import {saveAs} from 'file-saver'
import {getUserDetail4} from '../../../../api/api'

class UserDetail extends Component{
    // formRef = React.createRef();
    constructor(props){
        super(props);
        this.onGetUserDetail4 = this.onGetUserDetail4.bind(this);
        this.state = {
            loading: false,
            userInformation: {
              },
            username: '',
            usertype2:'',
            userid:0,
            // firstname: '',
            // lastname: '',
            // address1: '',
            // address2: '',
            // phone: '',
        }
        this.onGetUserDetail4 = this.onGetUserDetail4.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
       let username = sessionStorage.getItem("username")
       let userid = sessionStorage.getItem("userid")
       let usertype2 = sessionStorage.getItem("usertype2")
       console.log(userid,usertype2);
         if(username == null){
            let username = sessionStorage.setItem("username",this.props.location.query.username)
            let userid = sessionStorage.setItem("userid",this.props.location.query.userid)
            let usertype2 = sessionStorage.setItem("usertype",this.props.location.query.usertype2)
           this.setState({
             username:username,
             userid:userid,
             usertype:usertype2,
           })
           
         }else{
           this.setState({
             username:sessionStorage.getItem("username"),
             userid:sessionStorage.getItem("userid"),
             usertype2:sessionStorage.getItem("usertype2"),
           })
           console.log(1,this.state.userid,this.state.projectname);
         }
         if(token == null || token == -1){
             this.gotoHome();
             
         }else{
            this.onGetUserDetail4(token)
         }
        
    }

    componentWillUnmount(){
        sessionStorage.removeItem("username");
        sessionStorage.removeItem("userid");
        sessionStorage.removeItem("usertype2");
    }

    onGetUserDetail4 = (token) =>{
        let username = sessionStorage.getItem("username")
        this.setState({
            loading: true,
        });


        getUserDetail4(username,{},{token}).then(res => {
            let userinfoTemp = {};
            userinfoTemp = {
                username: res.username,
                email: res.email,
                createdtime:res.createdtime,
                company: res.company,
                usertype: res.usertype,
                firstname: res.firstname,
                lastname: res.lastname,
                address1: res.address1,
                address2: res.address2,
                phone: res.phone,
            };
            console.log(userinfoTemp);
            this.setState({
                userInformation: userinfoTemp,
                loading: false,
                username: res.username,
            });
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
            });
            this.logout();
            message.config({duration: 5});
            message.error(error);
        })
    }

    
    
    
    render(){
        return(
            <div className='User-Detail' style={{backgroundColor: '#f3f3f3'}}>
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
                        <div>
                            <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                                {sessionStorage.getItem("username")}'s Details
                            </div>
                        
                            <div className='form-card' style={{width: '100%', marginTop: '4em'}}>
                                <Form>
                                    <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{}}>Username</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.username}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{}}>User Role</label>
                                                <p style={{textTransform:'capitalize', paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.usertype}
                                                </p>
                                            </div>
                                        </div>                                        
                                        <Divider/>

                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Time Created</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.createdtime}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Email</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.email}
                                                </p>
                                            </div>
                                        </div>                                        
                                        <Divider/>

                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>First Name</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.firstname}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Company Name</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.company}
                                                </p>
                                            </div>
                                        </div>                                        
                                        <Divider/>

                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Last Name</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.lastname}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Address (Line 1)</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.address1}
                                                </p>
                                            </div>
                                        </div>                                        
                                        <Divider/>

                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Contact Number</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.phone}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Address (Line 2)</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {this.state.userInformation.address2}
                                                </p>
                                            </div>
                                        </div>                                        
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

export default UserDetail
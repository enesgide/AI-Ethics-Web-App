import React, {Children, Component} from 'react'
import './header.scss'

import {
    Segment,
    Menu,
    Container,
    Visibility,
    Image,
    Button,
    Header,
    Dropdown,
    Card,
    Divider,
    a,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { withRouter} from 'react-router-dom'
import logo from '../../assets/images/logo-e-lens.png'

import { getUserInfo} from '../../api/api'

class TopHeader extends Component{


    constructor(props){
        super(props);
//         this.gotoNews = this.gotoNews.bind(this);
//         this.gotoHome = this.gotoHome.bind(this);
//         this.gotoAbout = this.gotoAbout.bind(this);
//         this.gotoLogin = this.gotoLogin.bind(this);
//         this.gotoSignup = this.gotoSignup.bind(this);
//         this.gotoProfile = this.gotoProfile.bind(this);
//         this.gotoService = this.gotoService.bind(this);
//

        this.state = {
            isLoggedIn: false,
            activeItem: 'home',
            isHomeActive: false,
            isFeatureActive: false,
            isAboutActive: false,
            userInformation: [],
        };
        // this.state = { isHomeActive: false,
        //                isFeatureActive: false,
        //                isAboutActive: false,
        //              }
    }

    // state = {activeItem: 'home'}
    hideFixedHeader = () => this.setState({fixed: false})
    showFixedHeader = () => this.setState({fixed: true})
    handleItemClick = (e, {name}) => this.setState({activeItem: name})

  
    gotoHome(){
        window.location.href=('/index')
        this.setState({activeItem: 'index'})
    }

    gotoContact(){
        window.location.href=('/contact')
        this.setState({activeItem: 'contact'})
    }

    gotoAbout(){
        // this.props.history.push('/')
        window.location.href=('/about')
        this.setState({activeItem: 'about'})
    }

    gotoService(){
        window.location.href=('/service')
        this.setState({activeItem: 'service'})
    }

    gotoNews(){
        window.location.href=('/news')
        this.setState({activeItem: 'news'})
    }


    gotoLogin(){
        window.location.href=('/login')
    }

    gotoSignup(){
        window.location.href=('/signup')
    }

    

   


    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            console.log("didn't login state");
            this.setState({isLoggedIn: false});
            this.gotoHome();
        }
        else{
            // this.setState({isLoggedIn: true});
            this.onGetUserInfo(token);
        }
    }



    onGetUserInfo = (token) => {
        this.setState({
            isLoggedIn: true,
        });
        getUserInfo({}, {token}).then(res => {
            console.log(res);
            let userinfoTemp = [];
            let usertype = sessionStorage.getItem("userType");
            let type = "";
            if(usertype == 1){
                type = "AI SupplierAdmin";
            }
            else if(usertype == 2){
                type = "AI Supplier";
            }
            else if(usertype == 3){
                type = "Validator";
            }
            else if(usertype == 4){
                type = "Administrator";
            }
            else{
                type = "Regulator";
            }
            let imagepath = './images/userimage/';
            let path = imagepath.concat(res.image);
            userinfoTemp = {
                userImage: path,
                userName: res.username,
                userEmail: res.email,
                userCompany: res.company,
                userType: type,
            };
            // res.map((item) => {
            //     let usertype = item.usertype;
            //     switch (usertype){
            //         case 1:
            //             usertype = "AI SupplierAdmin";
            //         case 2:
            //             usertype = "AI Supplier";
            //         case 3:
            //             usertype = "Validator";
            //         case 4:
            //             usertype = "Administrator";
            //     }
            //     userinfoTemp.push({
            //         userImage: item.image,
            //         userName: item.username,
            //         userEmail: item.email,
            //         userCompany: item.company,
            //         userType: usertype,
            //     })
            // });
            this.setState({
                userInformation: userinfoTemp,
            });
            console.log(res)
            console.log(this.state.userInformation);
        }).catch(error => {
            console.log(error);
            this.setState({
                isLoggedIn: false
            });
            
        })
    }

    gotoProfile(){
        window.location.href=("/userinfo");
    }

    gotoLogout(){
        console.log('this====',this)

        sessionStorage.removeItem('token');
        sessionStorage.removeItem('userType');
        window.location.href=("/login");
    }


    render(){
        const {fixed} = this.state
        const {activeItem} = this.state
        const isLoggedIn = this.state.isLoggedIn;
        console.log(this.state.userInformation.userImage);


        return(
            <div className="random-header" style={{position:'Sticky', top:'0', zIndex:'1000'}}>
            <Visibility
                once={false}
                onBottomPassed={this.showFixedHeader}
                onBottomPassedReverse={this.hideFixedHeader}
            >
                <div
                  inverted
                  textAlign='left'
                  style={{minHeight: '10px', background: 'white', boxShadow: 'none'}}
                >
                    <Menu
                      fixed={fixed ? 'top' : null}
                      inverted={!fixed}
                      pointing={!fixed}
                      secondary={!fixed}
                      size='large'
                    >
                        <Container className='navigation-menu' style={{width: 'calc(97%)', paddingBottom: '15px', paddingTop: '0px'}}>
                            <Menu.Item as='h2' style={{top:'10px'}}>
                                
                               {/* <a href="/index" ><Image src={logo} style={{height:'15%', width:'15%'}} /></a> */}
                               <div style={{fontSize: '2rem', color: 'black', fontFamily: 'Poppins', fontWeight: '600'}}>{this.state.userInformation.userType}</div>
                                
                            </Menu.Item>

                         {/*<Menu.Item active={activeItem === 'index'} as='a' name='home' onClick={()=>{*/}
                         {/*this.gotoHome();*/}
                         {/*}} style={{marginLeft:'-550px', top:'-10px', fontfamily: 'Oswald, sans-serif' }}>*/}
                         {/*   HOME</Menu.Item>*/}
                         
                         {/*   <Menu.Item active={activeItem === 'about'} as='a' name='about' onClick={()=>{*/}
                         {/*       this.gotoAbout();*/}
                         {/*   }} style={{top:'-10px'}} >ABOUT</Menu.Item>*/}
                         {/*   <Menu.Item active={activeItem === 'service'} as='a' name='service' onClick={()=>{this.gotoService()}} style={{top:'-10px'}} >SERVICES</Menu.Item>*/}
                         {/*   <Menu.Item active={activeItem === 'news'} as='a' name='news' onClick={()=>{this.gotoNews()}} style={{top:'-10px'}} >NEWS</Menu.Item>*/}
                         {/*   <Menu.Item active={activeItem === 'contact'} as='a' name='contact' onClick={()=>{this.gotoContact()}} style={{top:'-10px'}} >CONTACT</Menu.Item>*/}



                            {isLoggedIn == true ? 
                            <Menu.Item position='right'>
                                <Image circular size='mini' src={this.state.userInformation.userImage}/>
                                <Dropdown text={this.state.userInformation.userName} floating simple direction='left' style={{marginLeft:'15px', color: 'black', fontFamily: 'Montserrat', fontWeight: '600'}}>
                                    {/* <Image src={this.state.userInformation.userImage} style={{borderRadius:"50%"}}/> */}
                                    <Dropdown.Menu>
                                        <Image size='small' style={{borderRadius: "50%", margin: '10px auto'}} src={this.state.userInformation.userImage}/>
                                        <Card style={{boxShadow: 'None', margin: '0 auto'}}>
                                            
                                            <Card.Content>
                                                <Card.Header textAlign='center'>{this.state.userInformation.userName}</Card.Header>
                                                <Card.Meta textAlign='center'>{this.state.userInformation.userType}</Card.Meta>
                                                <Card.Description textAlign='center'>{this.state.userInformation.userCompany}</Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                {/* <Button.Group> */}
                                                    <Button basic color='teal' style={{marginLeft:'15%'}} onClick={()=>{
                                                        this.gotoProfile();
                                                    }}>Profile</Button>
                                                    <Button color='teal' style={{marginLeft:'10px'}} onClick={()=>{
                                                        this.gotoLogout();
                                                    }}>Logout</Button>
                                                {/* </Button.Group> */}
                                                <Divider/>
                                                <Header as='h5' textAlign='center'>{this.state.userInformation.userEmail}</Header>
                                                <Header as='h5' textAlign='center'>Here can add other information.</Header>
                                            </Card.Content>
                                        </Card>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>
                            :
                            <Menu.Item position='right' style={{marginRight:'-250px'}}>
                                <Button inverted={!fixed} onClick={this.gotoLogin} >Login</Button>
                                <div class="or" style={{marginLeft:'12px', marginRight:'12px'}}>or</div>
                                <Button inverted={!fixed} onClick={this.gotoSignup} >Signup</Button>
                            </Menu.Item>
                            }
                        </Container>
                    </Menu>
                </div>
            </Visibility>
            </div>
        )
    }

    
}

export default withRouter(TopHeader)
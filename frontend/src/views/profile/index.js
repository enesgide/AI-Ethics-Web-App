import React, {Component} from 'react'
import {
    Grid,
    Header,
    Icon,
    Image,
    Segment,
    Card,
    Button,
    Divider,
    Form,
    Breadcrumb,
    Message,
    Dimmer,
    Loader,
    Modal,
} from 'semantic-ui-react'
import {message, Spin} from 'antd'
import SideMenu from '../../component/sideMenu'
import TopHeader from '../../component/header'

import {saveAs} from 'file-saver'
import {getUserInfo, putUserInfo, getPasswordToken, putResetImage} from '../../api/api'
import "./profile.scss"

class Profile extends Component{
    // formRef = React.createRef();
    constructor(props){
        super(props);
        this.onPutUserInfo = this.onPutUserInfo.bind(this);
        this.onGetUserInfo = this.onGetUserInfo.bind(this);
        this.resetUserInfo = this.resetUserInfo.bind(this);
        this.onGetPasswordToken = this.onGetPasswordToken.bind(this);
        this.onClear = this.onClear.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
        this.logout = this.logout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.openSelectImage = this.openSelectImage.bind(this);
        this.closeSelectImage = this.closeSelectImage.bind(this);
        this.onChangeUserImage = this.onChangeUserImage.bind(this);
        this.state = {
            isLoggedIn: false,
            loading: false,
            sendPWD: false,
            selectopen: false,
            userimage: [],
            userInformation: [],
            username: '',
            firstname: '',
            lastname: '',
            address1: '',
            address2: '',
            phone: '',
        }
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
            console.log(this.userName);
        }
    }

    onGetUserInfo = (token) =>{
        this.setState({
            isLoggedIn: true,
            loading: true,
        });

        getUserInfo({},{token}).then(res => {
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
            else{
                type = "Administrator";
            }

            let imagepath = './images/userimage/';
            let path = imagepath.concat(res.image);
            userinfoTemp = {
                userImage: path,
                userName: res.username,
                userEmail: res.email,
                userCompany: res.company,
                userType: type,
                firstName: res.firstname,
                lastName: res.lastname,
                address1: res.address1,
                address2: res.address2,
                phone: res.phone,
                verifiedEmail: res.verifiedemail,
            };
            this.setState({
                userInformation: userinfoTemp,
                loading: false,
                username: res.username,
                firstname: res.firstname,
                lastname: res.lastname,
                address1: res.address1,
                address2: res.address2,
                phone: res.phone,
                userImage:res.image,
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

    onPutUserInfo(){
        this.setState({
            loading: true,
        });
        let token = sessionStorage.getItem("token");
        const {username, firstname, lastname,address1, addresss2, phone} = this.state;

        if(username == null || username instanceof Number || username.length<3){
            this.setState({
                loading: false,
            });
            message.config({duration:5});
            message.warning("Invalid Username");
            return false;
        }else{
        putUserInfo({
            username: this.state.username,
            firstname: this.state.firstname == null ? "": this.state.firstname,
            lastname: this.state.lastname == null ? "": this.state.lastname,
            address1: this.state.address1 == null ? "": this.state.address1,
            address2: this.state.address2 == null ? "": this.state.address2,
            phone: this.state.phone == null ? "": this.state.phone,
        },{token}).then(res => {
            console.log("putUserInfo", res);
            this.setState({
                loading: false,
            });
            let updateusername = res.updateusername;
            if(updateusername){
                message.config({duration: 5});
                message.success('Success! You need to re-login.');
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("userType");
                
            }else{
                this.onGetUserInfo(token);
                message.config({duration: 5});
                message.success('Success update!');
            }
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
            });
            message.config({duration: 5});
            message.error(error);
            // this.logout();
        });
        }
    }

    onGetPasswordToken(){
        const token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            this.gotoLogin();
        }
        else{
            this.setState({
                loading: true,
            })
            getPasswordToken({},{token}).then(res => {
                console.log("getPasswordToken",res);
                this.setState({
                    loading: false,
                    sendPWD: true,
                });
            }).catch(error => {
                console.log(error);
                this.setState({
                    loading: false,
                });
                message.config({duration: 5});
                message.error(error);
            });
        }
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    resetUserInfo(){
        this.props.history.push("/userinfo");
        // let token = sessionStorage.getItem('token');
        // this.onGetUserInfo(token);
    }

    onClear = () => {
        this.setState({
            userInformation: [],
        });
    }

    gotoLogin(){
        this.props.history.push("/login");
    }

    logout = () =>{
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("userType");
        this.props.history.push("/login");
    }

    openSelectImage(){
        this.setState({
            selectopen: true,
        });
    }

    closeSelectImage(){
        this.setState({
            selectopen: false,
        });
    }

    onChangeUserImage(){
        this.setState({
            loading:true,
        })
        let token = sessionStorage.getItem("token");
        let formData = new FormData();
        let submit = {};
        const basename = this.state.userInformation.userName;
        const userimage =  document.getElementById("userimage").files[0];
        console.log(userimage.type);
        const imagetype = userimage.type;
        const imagename = basename.concat(userimage.name);
        if(!imagetype.startsWith("image")){
            message.config({duration: 5});
            message.error("Wrong format!");
        }else{
            // saveAs(userimage,"filename",);
            // const imagepath = "L:\AI Project\frontend\public\images\userimage\";
            // const basepath = "./images/userimage/";
            // const path = basepath.concat(imagename);
            // const check = document.execCommand("saveas",false,path);
            // console.log(check);
            submit.imagepath = userimage.name;
            formData.append("avatar",userimage);
            formData.append("req", new Blob([JSON.stringify(submit)], {type:'application/json'}));
            putResetImage(formData, {token}).then((res) => {
                let avatar = res.avatar;
                console.log(avatar);
                this.setState({
                    loading:false,
                    userimage:avatar,
                })
            }).catch((error)=> {
                this.setState({
                    loading:false,
                })
                message.config({duration:5});
                message.error(error);
            })
        }
        console.log(imagename);
        console.log(userimage);

        this.setState({
            selectopen: false,
        })
    }
    
    
    render(){
        const verifiedemail = this.state.userInformation.verifiedEmail;
        console.log(this.state.userInformation);
        
        return(
            <div className='User-Profile'>
                {this.state.selectopen == true ? 
                <Modal onClose={this.closeSelectImage} open={this.state.selectopen} dimmer='inverted'>
                    <Modal.Header>Select a Photo</Modal.Header>
                    <Modal.Content>
                        <Form>
                            <Form.Input id='userimage' type='file' name='userimage' onChange={this.handleChange}></Form.Input>
                        </Form>
                        <Modal.Description>
                            <Header as='h4'>Please check the selected image:</Header>
                            <p>Are your sure to save your change?</p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button onClick={this.onChangeUserImage}>Save</Button>
                        <Button onClick={this.closeSelectImage}>Cancel</Button>
                    </Modal.Actions>
                </Modal>
                : ""
                }
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                
                <Grid columns={2} style={{backgroundColor: "rgb(243, 243, 243)"}}>
                    <Grid.Column style={{width: '220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                    <Grid columns={2} style={{paddingLeft: '50px'}}>
                        <Grid.Column width={3} style={{marginRight: '10em'}}>
                        <Grid.Row style={{marginTop:'5em'}}>
                            <Grid.Column>
                                <Image 
                                    // src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                                    src={this.state.userInformation.userImage}
                                    style={{borderRadius:"50%", width:'290px'}}
                                />
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{this.state.userInformation.userName}</Card.Header>
                                        <Card.Meta>
                                            <span className='date'>{this.state.userInformation.userType}</span>
                                        </Card.Meta>
                                        <Card.Description>
                                            {this.state.userInformation.userEmail}
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button fluid animated='vertical' width='30px' onClick={this.openSelectImage}>
                                            <Button.Content hidden>Change Avatar</Button.Content>
                                            <Button.Content visible><Icon name='camera retro'/></Button.Content>
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid.Column>
                        <Grid.Column width={10}>
                        <Segment style={{marginTop:'5em', backgroundColor: "rgb(243, 243, 243)", border: 'none', boxShadow: 'none'}}>
                            {verifiedemail == 1 ?
                            <Message warning>
                                <Message.Header>You still did not verify your email.</Message.Header>
                                <p>You can check your email to get the verify link.</p>
                            </Message>
                            :  "" 
                            }
                            {this.state.sendPWD == true ?
                            <Message positive>
                                <Message.Header>Success Send Email!</Message.Header>
                                <p>You can check your email to get the reset password link.</p>
                            </Message>
                            : ""    
                            }
                            <Header as='h1' style={{fontSize:'3rem'}}>Profile</Header>
                            <Form>
                                <div className='form-card'>
                                    <Header as="h2">Reset Password</Header>
                                    <Form.Input 
                                        name="username" 
                                        label={'Username: '+this.state.userInformation.userName}
                                        rules={[
                                            {required: true,
                                            message: 'Please input your name!',
                                            },
                                        ]}
                                        placeholder={this.state.userInformation.userName}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Header as='h5'>Password: <Button onClick={this.onGetPasswordToken} style={{marginLeft:'5px'}}>Reset Password</Button></Header>
                                </div>
                                <div className='form-card'>
                                    <Header as="h2">Details</Header>
                                    <Header as='h5'>Email: <ins style={{marginLeft:'5px'}}>{this.state.userInformation.userEmail}</ins></Header>
                                    <Header as='h5'>Title: <ins style={{marginLeft:'5px'}}>{this.state.userInformation.userType}</ins></Header>
                                    <Form.Input
                                        name='firstname'
                                        label={'Firstname:  '+this.state.userInformation.firstName}
                                        placeholder = {this.state.userInformation.firstName}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Form.Input
                                        name='lastname'
                                        label={'Lastname:  '+this.state.userInformation.lastName}
                                        placeholder={this.state.userInformation.lastName}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Divider></Divider>
                                    <Header as='h5'>Company: <ins style={{marginLeft:'5px'}}>{this.state.userInformation.userCompany}</ins></Header>
                                    <Form.Input
                                        name='address1'
                                        label={'Address (Line 1):  '+this.state.userInformation.address1}
                                        placeholder={this.state.userInformation.address1}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Form.Input
                                        name='address2'
                                        label={'Address (Line 2):  '+this.state.userInformation.address2}
                                        placeholder = {this.state.userInformation.address2}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Form.Input
                                        name='phone'
                                        label={'Phone:  '+this.state.userInformation.phone}
                                        placeholder={this.state.userInformation.phone}
                                        onChange={this.handleChange}
                                    ></Form.Input>
                                    <Button color="teal" type='submit' onClick={this.onPutUserInfo}>Submit</Button>
                                    <Button basic color="teal" style={{marginLeft:'5px'}} onClick={this.resetUserInfo}>Reset</Button>
                                </div>
                                

                                {/* <Button style={{marginLeft:'5px'}}><ins>Clear all</ins></Button> */}
                            </Form>   
                        </Segment>
                        </Grid.Column>
                    </Grid>
                    </Grid.Column>

                    

                </Grid>
            </div>
        )
    }
}

export default Profile
import React, {Component} from 'react'
import './resetpwd.scss'
import {
    Button,
    Form,
    Grid,
    Header,
    Card,
} from 'semantic-ui-react'
import {message} from 'antd'

import {getResetPassword, putResetPassword} from '../../api/api'

class NewPWD extends Component{
    constructor(props){
        super(props);
        this.onValidatePasswordToken = this.onValidatePasswordToken.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onSubmitNewPassword = this.onSubmitNewPassword.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.state = {
            loading: false,
            password: '',
            showpage: true,
            username: '',
            token: '',
        }
    }

    componentDidMount(){
        this.onValidatePasswordToken();
    }

    onValidatePasswordToken(){
        this.setState({
            loading: true,
        });
        const url = window.location.pathname;
        let username = url.split('/')[3];
        let token = url.split('/')[4];
        console.log(url);
        console.log(username);
        console.log(token);

        getResetPassword({
            username: username,
            token: token,
        }).then(res => {
            console.log("getResetPassword",res);
            this.setState({
                loading: false,
            });
            // message.config({duration: 5});
            // message.success("success");
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
                showpage: false,
            });
            // message.config({duration: 5});
            // message.error("Wrong");
        })
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    onSubmitNewPassword(){
        const {password} = this.state;
        this.setState({
            loading: true,
            password: password,
        });
        
        if(password.length < 5){
            this.setState({
                loading: false,
            });
            message.config({duration: 5});
            message.warning("Your password is too short.");
            return false;
        }

        const url = window.location.pathname;
        const username = url.split('/')[3];
        const token = url.split('/')[4];
        
        this.setState({
            username: username,
            token: token,
        })
        console.log(url);
        console.log(username);
        console.log(token);

        putResetPassword({
            username: username,
            token: token,
            password: this.state.password,
        }).then(res => {
            console.log("putResetPassword",res);
            this.setState({
                loading: false,
                password: '',
            });
            message.config({duration: 5});
            message.success("Change success success!");
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
                password: '',
                showpage: false,
            });
            message.config({duration: 5});
            message.error("Fail to change password.");
        });
    }

    goToHome(){
        this.props.history.push("/home");
    }


    render(){
        return(
            <div className="P-ResetPWD">
                <Card fluid color='black' header='Reset Password'/>
                {this.state.showpage == true ?
                <Card fluid>
                    <Form>
                        <Grid columns={2}>
                            <Grid.Column width={3}>
                                <Header 
                                    as='h4' 
                                    content='New password:'
                                    style={{textAlign:'center', marginTop:'25px'}}
                                />
                            </Grid.Column>
                            <Grid.Column width={7}>
                                <Form.Input
                                    required
                                    name="password"
                                    style={{marginTop:'20px'}}
                                    onChange={this.handleChange}
                                >
                                </Form.Input>
                            </Grid.Column>
                        </Grid>
                        <Button
                            fluid
                            primary
                            style={{marginTop:'2rem'}}
                            onClick={this.onSubmitNewPassword}
                        >
                            Submit
                        </Button>
                    </Form>
                    <Button onClick={this.goToHome}>Back to Home</Button>
                </Card>
                :
                <div><Header as='h2'>Wrong link!</Header><p><Button onClick={this.goToHome}>Back to Home</Button></p></div>
                }
            </div>
        )
    }
}

export default NewPWD
import React, {Component} from 'react'
import './resetpwd.scss'
import {
    Button,
    Form,
    Card,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import {message} from 'antd'

import {postResetPassword} from '../../api/api'

class ResetPassword extends Component{
    constructor(props){
        super(props);
        this.onPostResetPassword = this.onPostResetPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
        this.state = {
            loading: false,
            username: '',
            email: '',
            response: '',
        }
    }

    onPostResetPassword(){
        const {username, email} = this.state;

        this.setState({
            loading: true,
            username: username,
            email: email,
        });

        if(username.length < 1){
            this.setState({
                loading: false,
            });
            message.config({duration: 5});
            message.error("Wrong format username");
            return false;
        }

        postResetPassword({
            username: this.state.username,
            email: this.state.email,
        }).then(res => {
            console.log("postResetPassword", res);
            this.setState({
                loading: false,
                response: res.message,
            });
            message.config({duration: 5});
            message.success("Change password successful!");
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
            });
            message.config({duration: 5});
            message.error("Wrong");
        })
    }

    handleChange = (e, {name, value}) => this.setState({[name]: value})

    gotoHome(){
        this.props.history.push("/home");
    }

    render(){
        return(
            <div className="P-ResetPWD">
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Card fluid color='black' header='Reset Password'/>
                <Card fluid>
                    <Card.Header>Please enter correct username and email:</Card.Header>
                    <Form>
                        <Form.Input
                            required
                            name = "username"
                            label="Username"
                            onChange={this.handleChange}
                        ></Form.Input>
                        <Form.Input
                            required
                            name = "email"
                            label="Email"
                            onChange={this.handleChange}
                        ></Form.Input>
                        <Button
                            fluid
                            primary
                            style={{marginTop:'2rem'}}
                            onClick={this.onPostResetPassword}
                        >
                            Submit
                        </Button>
                    </Form>
                    <Button 
                        fluid 
                        onClick={this.gotoHome}
                        style={{marginTop:'5px'}}
                    >Back To Home</Button>
                </Card>
            </div>
        )
    }
}

export default ResetPassword
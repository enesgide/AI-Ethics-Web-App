import React, {Component} from 'react'
import './verifyemail.scss'
import {Button, Dimmer, Loader} from 'semantic-ui-react'
import {message} from 'antd'

import {getVerifyEmail} from '../../api/api'

class VerifyEmail extends Component{
    constructor(props){
        super(props);
        this.gotoHome = this.gotoHome.bind(this);
        this.onGetVerifyEmail = this.onGetVerifyEmail.bind(this);
        this.state = {
            verified: false,
            loading: false,
        }
    }

    componentDidMount(){
        this.onGetVerifyEmail();
    }

    onGetVerifyEmail(){
        this.setState({
            loading: true,
        });

        const url = window.location.pathname;
        let username = url.split('/')[2];
        let useremail = url.split('/')[3];
        let emailtoken = url.split('/')[4];

        getVerifyEmail({
            username: username,
            useremail: useremail,
            token: emailtoken,
        }).then(res => {
            console.log("getVerifyEmail", res);
            this.setState({
                verified: true,
                loading: false,
            });
            
        }).catch(error => {
            console.log(error);
            this.setState({
                loading: false,
            });
        })
    }

    gotoHome(){
        this.props.history.push("/home");
    }

    render(){
        // const verified = true;
        return(
            <div className="P-VerifyEmail">
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                {this.state.verified == true ?
                    <h2>Congradulation! You have verified your email address, you can log into your account now.</h2>
                :
                    <h2>Sorry, Something wrong, please try again.</h2>
                }
                <Button primary onClick={this.gotoHome}><ins>Back To Home</ins></Button>
            </div>
        )
    }
}

export default VerifyEmail
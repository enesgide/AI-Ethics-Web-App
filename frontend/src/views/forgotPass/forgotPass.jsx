import React, { Component } from "react";
import {
    Button,
    Form,
    Card,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import {message} from 'antd'

import {postResetPassword} from '../../api/api'

class ForgotPass extends Component {

  constructor(props){
        super(props);
        this.onPostResetPassword = this.onPostResetPassword.bind(this);
        this.handleChange = this.handleChange.bind(this);

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

    //debug here
    handleChange = (e, {name, value}) => this.setState({[name]: value})


    render() {
        return (
            <div>
                <div id="preloader">
                    <div id="status">
                        <div className="text-center">
                            <img
                                src="/static/picture/logo-e-lens.png"
                                height="25"
                                alt=""
                            />{" "}
                        </div>
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>

                <div className="back-to-home rounded d-none d-sm-block">
                    <a
                        href="/index"
                        className="text-white rounded d-inline-block text-center"
                    >
                        <i className="mdi mdi-home"></i>
                    </a>
                </div>

                <section
                    className="vh-100 d-flex align-items-center"
                    style={{
                        backgroundImage: "url(/static/images/UTS_Stairs2.jpg)",
                    }}
                >
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4">
                                <div className="bg-white p-4 rounded box-shadow">
                                    <div className="text-center mb-4">
                                        <h4>
                                            <a href="index.html">
                                                <img
                                                    src="/static/picture/logo-e-lens.png"
                                                    height="20"
                                                    alt="logo"
                                                />
                                            </a>
                                        </h4>
                                    </div>
                                    <form className="login-form">
                                        <div className="row">
                                            <div className="col-lg-12 mt-2">
                                                <h6 className="text-uppercase">
                                                    Reset Password
                                                </h6>
                                                <div className="form-group">
                                                    <p className="mb-0">
                                                        Please enter correct Username and email address:
                                                    </p>
                                                    <p></p>

                                                    <input
                                                        required
                                                        className="form-control mt-2"
                                                        placeholder="Username"
                                                        name="username"
                                                        label="Username"
                                                        onChange={this.handleChange}
                                                    />


                                                    <input
                                                         required
                                                         className="form-control mt-2"
                                                         placeholder="Email Address"
                                                         name="email"
                                                         label="Email"
                                                         onChange={this.handleChange}
                                                        />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <button className="btn btn-custom w-100"  onClick={this.onPostResetPassword}>
                                                    Submit
                                                </button>
                                            </div>
                                            <div className="mx-auto mt-3">
                                                <p className="mb-0">
                                                    <small className="text-dark mr-2">
                                                        We'll sent you reset
                                                        link in your email
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default ForgotPass;

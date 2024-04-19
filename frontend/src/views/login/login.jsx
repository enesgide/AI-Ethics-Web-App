/* eslint-disable */
import React, { Component } from "react";
import CryptoJs from 'crypto-js';
import {
    Button,
    Divider,
    Form,
    Grid,
    Header,
    Segment,
    Image,
    Message,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import {message, Spin} from 'antd'
import {login} from '../../api/api'

class Login extends Component {

   constructor(props){
        super(props);
        this.state = {
            loading: false,
            username: "",
            password: "",
            verified: false,
            msg: true,
            msgcontent: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
//         if(token != null && token != -1){
//             this.props.history.push("/home");
//         }
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({
            loading: true
        });
        console.log(this.state.loading);

        login({
            username: this.state.username,
            password: this.state.password,
        }).then(res => {
            let username = res.username;
            let usertype = res.usertype;
            let token = res.jwttoken;
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userType", usertype);
            this.setState({
                verified: true,
                loading: false,
            });
            console.log(this.state.loading);
            if(res.usertype == 1)
                this.props.history.push("/project1"); ///userinfo suppAdmin
            else if(res.usertype == 2)
                this.props.history.push("/project2"); ///userinfo supp
            else if(res.usertype == 3)
                this.props.history.push("/project3"); ///userinfo valid
            else if(res.usertype == 4)
                this.props.history.push("/project4/projectlist"); ///userinfo admin
            else if(res.usertype == 5)
                this.props.history.push("/project5"); ///userinfo regulator
        }).catch(error => {
            console.log(error);
            message.config({duration:5});
            message.error("Something wrong! Please try again.")
            this.setState({
                loading: false
            });
            console.log(this.state.loading);

        })
    }


handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {
        return (
            <div>
                <div id="preloader">
                    <div id="status">
                        <div className="text-center">
                            <img
                                src="static/picture/logo-e-lens-2.png"
                                height="25"
                                alt=""
                            />
                        </div>
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>

                <div className="back-to-home rounded d-none d-sm-block">
                    <a
                        href="index.html"
                        className="text-white rounded d-inline-block text-center"
                    >
                        <i className="mdi mdi-home"></i>
                    </a>
                </div>
                <section
                    className="vh-100 d-flex align-items-center"
                    style={{backgroundImage: 'url(/static/images/UTS_Stairs2.jpg)'}}
                >
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-5">
                                <div className="bg-white p-4 rounded box-shadow">
                                    <div className="text-center mb-4">
                                        <a href="/index">
                                            <img
                                                src="/static/picture/logo-e-lens-2.png"
                                                height="60"
                                                alt="logo"
                                            />
                                        </a>
                                    </div>
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>
                                                        Username :
                                                    </label>
                                                    <input
                                                        name="username"
                                                        label='Username'

                                                        className="form-control"
                                                        placeholder="Username"

                                                         required
                                                         onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <label>Password :</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        label='Password'
                                                        name='password'
                                                        required
                                                        onChange={this.handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-lg-12">
                                                <div className="custom-control custom-checkbox">
                                                    <input
                                                        type="checkbox"
                                                        className="custom-control-input"
                                                        id="customCheck1"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        for="customCheck1"
                                                    >
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 mt-3">
                                                <button className="btn btn-custom w-100" type=" submit" onClick={this.handleSubmit}>
                                                    Sign in
                                                </button>
                                            </div>
                                            <div className="mx-auto">
                                                <p className="mb-0 mt-3">
                                                    <a
                                                        href="/forgotPass"
                                                        className="text-dark font-weight-bold"
                                                    >
                                                        Forgot your password ?
                                                    </a>
                                                </p>
                                            </div>
                                            <div className="mx-auto">
                                                <p className="mb-0 mt-3">
                                                    <small className="text-dark mr-2">
                                                        Don't have an account ?
                                                    </small>{" "}
                                                    <a
                                                        href="/signup"
                                                        className="text-dark font-weight-bold"
                                                    >
                                                        Sign Up
                                                    </a>
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

export default Login;

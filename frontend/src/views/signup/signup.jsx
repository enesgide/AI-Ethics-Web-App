/* eslint-disable */
import React, { Component } from 'react';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import {
    Button,
    Divider,
    Form,
    Header,
    Segment,
    Image,
    Message,
    Dimmer,
    Loader,
} from 'semantic-ui-react'
import {message} from 'antd'
import {getCompany, postSignup} from '../../api/api'


class Signup extends Component {


 formRef = React.createRef();

    constructor(props){
        super(props);
        this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            loading: false,
            companies: [],
            username: '',
            password: '',
            email: '',
            usertype: '',
            firstname: '',
            lastname: '',
            company: '',
            address1: '',
            address2: '',
            phone: '',
        }
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            this.onGetSignup();
        }
        else{
            this.props.history.push("/home");
        }
    }

    gotoLogin(){
        this.props.history.push('/login');
    }

    gotoHome(){
        this.props.history.push('/home');
    }

    onGetSignup(){
        console.log(1);
        getCompany().then(res => {
            console.log("getCompanies", res);
            let companyTemp = [];
            let id, name;
            res.map((item,key) => {
                id = item.companyid;
                name = item.companyname;
                companyTemp.push({
                    key: id,
                    text: name,
                    value: id,
                })
            });
            this.setState({
                companies: companyTemp
            });
        }).catch(error => {
            console.log(error);
        })
    }

    handleSubmitSignup(){
        console.log("click register")
        const {loading, username, password, email, usertype, firstname, lastname, company, address1, address2, phone} = this.state;

        this.setState({
            loading: true,
            username: username,
            password: password,
            email: email,
            usertype: usertype,
            firstname: firstname,
            lastname: lastname,
            company: company,
            address1: address1,
            address2: address2,
            phone: phone,
        });

        const type = parseInt(this.state.usertype);
        console.log("request", this.state.company);

        postSignup({
            username: this.state.username,
            email:this.state.email,
            password:this.state.password,
            company: this.state.company,
            usertype: type,
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            address1: this.state.address1,
            address2: this.state.address2,
            phone: this.state.phone,
        }).then(res => {
            alert("signup successful")
            console.log("signup",res);
            const msg = res.message;
           this.setState({loading: false});
            console.log("signupfeedback",msg);
            message.config({duration: 5});
            message.warning(msg);
            this.props.history.push('/login')
        }).catch(error => { 
            console.log(error);
            this.setState({loading: false});
            message.config({duration: 5});
            message.error("Something wrong! Please try again later.");
        })

        


    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }


    render() {


        let usertypes = [
            {key: '1', text: 'AI SupplierAdmin', value: '1'},
            {key: '2', text: 'AI Supplier', value: '2'},
            {key: '3', text: 'Validator', value: '3'},
            {key: '4', text: 'Administrator', value: '4'},
        ]


        return (
            <div>
        <div id="preloader">


        <Dimmer active={this.state.loading}>
            <Loader/>
        </Dimmer>


            <div id="status">
                <div className="text-center"><img src="/static/picture/logo-e-lens-2.png" height="25" alt=""/> </div>
                <div className="spinner">
                    <div className="double-bounce1"></div>
                    <div className="double-bounce2"></div>
                </div>
            </div>
        </div>      

        <div className="back-to-home rounded d-none d-sm-block">
            <a href="/index" className="text-white rounded d-inline-block text-center"><i className="mdi mdi-home"></i></a>
        </div>
        <section className="vh-100 d-flex align-items-center" style={{backgroundImage: 'url(/static/images/UTS_Stairs2.jpg)'}}>
            <div className="bg-overlay"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="bg-white p-4 rounded box-shadow">
                            <div className="text-center">
                                <h4><a href="index.html"><img src="/static/picture/logo-e-lens-2.png" height="40" alt="logo"/></a></h4>
                            </div>
                            <form className="login-form">
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="">Username :</label>
                                            <input type="text" value={this.state.username} className="form-control" placeholder="Username" name="username" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-5">
                                             <div className="form-group">
                                                           <label className="">Password :</label>
                                                           <input type="password" className="form-control" placeholder="Password" name="password" required onChange={this.handleChange}/>
                                             </div>
                                    </div>




                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="">Email :</label>
                                            <input type="email" className="form-control" placeholder="Email" name="email" required onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                    <div class="form-group">
                                           <label class="">User Type :</label>
                                           <select class="form-control" required onChange={this.handleChange} name="usertype" label='User Type' options={usertypes} placeholder='user type'>
                                           <option>  </option>
                                           <option value="1"> AI SupplierAdmin</option>
                                           <option value="2"> AI Supplier</option>

                                           </select>

                                    </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="form-group">
                                            <label className="">Firstname :</label>
                                            <input type="text" className="form-control" placeholder="Firstname" name="firstname" required onChange={this.handleChange}/>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                             <div className="form-group">
                                                 <label className="">Lastname :</label>
                                                 <input type="text" className="form-control" placeholder="Lastname" name="lastname" required onChange={this.handleChange}/>
                                             </div>
                                    </div>

                                    <div className="col-lg-5">
                                             <div className="form-group">
                                                 <label className="">Company :</label>
                                                 <input type="text" className="form-control" placeholder="company" name="company" required onChange={this.handleChange}/>
                                             </div>
                                    </div>

                                   {/* <div class="col-lg-7">
                                   <div class="form-group">
                                            <label class="">Company :</label>
                                            <select name="company" class="form-control" required onChange={this.handleChange} label='company' >
                                            <option>  </option>
                                            <option value="1">University of Technology Sydney</option>
                                            <option value="2">The University of New South Wales</option>


                                            </select>

                                   </div>
                                   </div> */}

                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="">Address(Line1) :</label>
                                            <input type="address1" className="form-control" placeholder="Address" name="address1" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="">Address(line2) :</label>
                                            <input type="address2" className="form-control" placeholder="Address" name="address2" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                   <div className="col-lg-6">
                                        <div className="form-group">
                                            <label className="">Contact Number :</label>
                                            <input type="phone" className="form-control" placeholder="Phone" name="phone" required onChange={this.handleChange}/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                            <label className="custom-control-label" for="customCheck1">I Accept <a href="#">Terms And Condition</a></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-4 mb-3">
                                        <button className="btn btn-custom w-100" onClick = {this.handleSubmitSignup}>Register</button>
                                    </div>
                                    <div className="mx-auto">
                                        <p className="mb-0 mt-2"><small className="text-dark mr-2">Already have an account ?</small> <a href="/login" className="text-dark font-weight-bold">Sign in</a></p>
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


export default Signup;
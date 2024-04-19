import React, { Component } from "react";
import "./internalsignup.scss";

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
  Grid,
  Table,
  Loader,
  Breadcrumb,
} from "semantic-ui-react";
import { message } from "antd";
import { getCompany, internalSignup } from "../../../../api/api";
import { withRouter } from "react-router-dom";
import SideMenu from "../../../../component/sideMenu";
import TopHeader from "../../../../component/header";

class InternalSignup extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.handleSubmitSignup = this.handleSubmitSignup.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      loading: false,
      companies: "",
      username: "",
      password: "",
      email: "",
      usertype: "",
      firstname: "",
      lastname: "",
      company: "",
      address1: "",
      address2: "",
      phone: "",
    };
  }

  componentDidMount() {
    let token = sessionStorage.getItem("token");
    if (token == null || token == -1) {
      this.props.history.push("/home");
    } else {
      this.onGetSignup();
    }
  }

  gotoHome() {
    this.props.history.push("/home");
  }

//   notify = () => toast("Wow so easy !");

  onGetSignup() {
    console.log(1);
    getCompany()
      .then((res) => {
        console.log("getCompanies", res);
        let companyTemp = [];
        let id, name;
        res.map((item, key) => {
          id = item.companyid;
          name = item.companyname;
          companyTemp.push({
            key: id,
            text: name,
            value: id,
          });
        });
        this.setState({
          companies: companyTemp,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleSubmitSignup() {
    const {
      loading,
      username,
      password,
      email,
      usertype,
      firstname,
      lastname,
      company,
      address1,
      address2,
      phone,
    } = this.state;

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
    let token = sessionStorage.getItem("token");
    const type = parseInt(this.state.usertype);
    console.log("request", this.state.company);

    internalSignup(
      {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        company: this.state.company,
        usertype: type,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        address1: this.state.address1,
        address2: this.state.address2,
        phone: this.state.phone,
      },
      token
    )
      .then((res) => {
        console.log("signup", res);
        const msg = res.message;
        this.setState({ loading: false });
        // message.config({ duration: 5 });
        // message.warning(msg);

        // toast("Wow so easy !");
        toast.success(msg, {
            icon: ({theme, type}) => <img src="https://flashphoto.oss-ap-southeast-2.aliyuncs.com/uts-alens-logo.jpg" width="20" height="20"/>
          });
        
        console.log("signupfeedback", msg);

        //window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        this.setState({ loading: false });
       // message.config({ duration: 5 });
        toast.error(error);
      });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  };

  render() {
    let usertypes = [
      { key: "1", text: "AI SupplierAdmin", value: "1" },
      { key: "2", text: "AI Supplier", value: "2" },
      { key: "3", text: "Validator", value: "3" },
      { key: "4", text: "Administrator", value: "4" },
    ];

    return(
      <div className="User-project">
          <Dimmer active={this.state.loading}>
              <Loader/>
          </Dimmer>

          <Grid columns={2} style={{background: '#f3f3f3'}}>
            <Grid.Column style={{width: '220px'}}>
                <SideMenu/>
            </Grid.Column>
            <Grid.Column style={{width:'calc(100% - 220px)'}}>
            <TopHeader/>    

            <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
              <div>
                <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                  Create New User
                </div>

                <div className='form-card' style={{float:'right', display:'flex', alignItems: 'center', padding:'20px'}}>
                  <Form.Checkbox
                    label="I agree to the Terms and Conditions"
                    required
                    style={{marginRight: '40px', fontFamily: 'Poppins', width: '100%'}}
                  />

                  <Button type='submit' positive onClick={this.handleSubmitSignup}
                    style={{fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
                    Create
                  </Button> 
                </div>                
                
                <div className='form-card' style={{width: '100%', marginTop: '4em'}}>
                  <Form style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Form.Field required style={{width: '47%', float: 'left'}}>
                      <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Username
                      </label>
                      <input placeholder='Username'
                      onChange={(e) => this.handleChange(e, { name: 'username', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>
                      
                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Password
                      </label>
                      <input placeholder='Password'
                      onChange={(e) => this.handleChange(e, { name: 'password', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>
                     
                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        User Role
                      </label>
                      <select name="usertype"
                        onChange={(e) => this.handleChange(e, { name: 'usertype', value: e.target.value })}
                        style={{marginTop: '15px', marginBottom: '1em', fontFamily: 'Poppins', width: '100%'}}>
                        <option value="" disabled selected>Select User Role</option>
                        {usertypes.map((item) => (
                          <option key={item.key} value={item.value}>
                            {item.text}
                          </option>
                        ))}
                      </select>

                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Email Address
                      </label>
                      <input placeholder='Email address'
                      onChange={(e) => this.handleChange(e, { name: 'email', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Company Name
                      </label>
                      <input placeholder='Company name'
                      onChange={(e) => this.handleChange(e, { name: 'company', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>
                    </Form.Field>

                    <Form.Field style={{width: '47%', float: 'right'}}>
                      <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        First Name
                      </label>
                      <input placeholder='First name'
                      onChange={(e) => this.handleChange(e, { name: 'firstname', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>
                      
                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Last Name
                      </label>
                      <input placeholder='Last name'
                      onChange={(e) => this.handleChange(e, { name: 'lastname', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Contact Number
                      </label>
                      <input placeholder='Contact number'
                      onChange={(e) => this.handleChange(e, { name: 'phone', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Address (Line 1)
                      </label>
                      <input placeholder='Address line 1'
                      onChange={(e) => this.handleChange(e, { name: 'address1', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>

                      <label style={{marginTop: '2em', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                        Address (Line 2)
                      </label>
                      <input placeholder='Address line 2'
                      onChange={(e) => this.handleChange(e, { name: 'address2', value: e.target.value })}
                      style={{marginTop: '15px', fontFamily: 'Poppins', width: '100%'}}/>
                    </Form.Field>    
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

export default InternalSignup;

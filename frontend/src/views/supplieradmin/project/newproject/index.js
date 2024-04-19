import React, {Component} from 'react'
import './newproject.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getNewProject1,postNewProject1} from '../../../../api/api'
import{
    Grid,
    Segment,
    Button,
    Form,
    Breadcrumb,
    Header,
    Dimmer,
    Loader
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class NewProject extends Component{
    constructor(props){
        super(props);
        this.state = {
          form:{
            projectname:'',
            description:'',
            ethicalconcerns:[]
          },
          selectedList:[],
          principleList:[],
          token:'',
          loading: false
        }
        this.goBack = this.goBack.bind(this)
        this.handleChangeProjectName = this.handleChangeProjectName.bind(this)
        this.handleChangeDescription = this.handleChangeDescription.bind(this)
        this.handleChangeChexbox = this.handleChangeChexbox.bind(this)
        this.onGetNewProject1 = this.onGetNewProject1.bind(this)
        this.onPostNewProject1 = this.onPostNewProject1.bind(this)

      }

      

      componentDidMount(){
        let token = sessionStorage.getItem("token");
          if(token == null || token == -1){
              this.gotoHome();
              
          }else{
              console.log(token);
              this.onGetNewProject1(token);
              console.log(this.state.loading,2);
              
          }
      }

  
    goBack(){
        this.props.history.go(-1)
    }

    handleChangeProjectName(event){
    const projectname=event.target.value;
    let form =this.state.form
    form.projectname = projectname
    this.setState({
      form:form})
  }

  handleChangeDescription(event){
    const description = event.target.value;
    let form =this.state.form
    form.description = description
    this.setState({
      form:form
    })
  }

  handleChangeChexbox(event) {
    let item = event.target.value;
    let items = this.state.selectedList.slice();
    let index = items.indexOf(item);
    index === -1 ? items.push(item) : items.splice(index, 1);
    this.setState({selectedList: items});
}

  onGetNewProject1=(token)=>{
    console.log(this.state.loading,3);
    this.setState({
      loading:true
    })
    console.log(this.state.loading,4);
    getNewProject1({},{token}).then(res=>{
      // let principleList = [];
      // principleList = res;
      this.setState({
        principleList:res,
        loading: false,
      })
      console.log(this.state.loading,5);
    }).catch(error=>{
      this.setState({
        loading: false,
    });
      message.config({duration: 5});
      message.error(error);
      })
      this.setState({
        loading:true
      })
      
    }
  

  onPostNewProject1=()=>{
    let token = sessionStorage.getItem("token");
    let selectedList = [];
    selectedList = this.state.selectedList
    let form = this.state.form
    form.ethicalconcerns=selectedList
    if(form.description==""||form.projectname==""||selectedList.length==0){
      message.error("everything must be writen")
    }else{
      postNewProject1(form,{token}).then(res=>{
        console.log(selectedList);
        message.success("success!")
        console.log(token)
        this.props.history.goBack()
      }).catch(error=>{
        message.config({duration: 5});
        message.error(error);
      })
    }
  }



  render(){
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
                    <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Project Form</div>
                    
                    <div style={{float: 'right', width: '360px',
                      display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>      
                        <Button
                          positive
                          style={{
                            marginRight: '20px',
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            width:'150px',
                            height:'50px'
                          }}
                          onClick={this.onPostNewProject1}
                          // onClick={this.onPostResetPassword}
                          >
                            Create
                          </Button> 

                          <Button
                          negative
                          style={{
                            fontFamily: 'Poppins',
                            fontWeight: '500',
                            width:'150px',
                            height:'50px'
                          }}
                          onClick={this.goBack}
                          >
                            Discard
                          </Button>
                      </div>                     
                  </div>
                </div>
                <Form style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div className='form-card' style={{width: '60%'}}>
                      <Form.Group widths='equal'>
                        <Form.Field required>
                          <label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>
                              Project Title 
                          </label>
                          <input
                              type="text"
                              placeholder="Project title"
                              onChange={this.handleChangeProjectName}
                              style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}
                          />
                        </Form.Field>
                      </Form.Group>
                      
                      <Form.TextArea
                          label={<label style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500'}}>Description</label>}
                          placeholder='Add a description about the project...'
                          required
                          onChange={this.handleChangeDescription}
                          style={{marginTop: '15px', marginBottom:'1em', fontFamily: 'Poppins', width: '100%'}}
                      />
                    </div>

                    <div className='form-card' style={{width: 'calc(40% - 3em)'}}>
                      <div style={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '500', marginBottom: '20px'}}>
                        Principles<span style={{color: '#db2828'}}> *</span>
                      </div>                  
                      <Form.Group inline required style={{flexDirection: 'column', alignItems:'flex-start'}}>                    
                        {(this.state.principleList||[]).map((item) => {
                            return (
                                <div style={{
                                    width: '10%',
                                    marginLeft: '3em',
                                    marginBottom: '5px',
                                    fontSize: '14px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400'                                
                                }}>
                                    <label style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        verticalAlign: 'middle',
                                        marginTop: '-2px'                                    
                                    }}>
                                        <input
                                            style={{
                                              marginRight: '20px',
                                            }}
                                            type="checkbox"
                                            name="fruit"
                                            value={item.priciplesid}
                                            onChange={this.handleChangeChexbox}
                                        />
                                        {item.priciplesname}
                                    </label>
                                </div>
                            );
                        })}
                      </Form.Group >                      
                    </div>
                  </div>                                          
                </Form>
              </Grid.Column>
          </Grid>
          
        </div>
    )
}
}

export default  NewProject
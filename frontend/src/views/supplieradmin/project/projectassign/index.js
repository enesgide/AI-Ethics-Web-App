import React, {Component} from 'react'
import './projectassign.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getAssignProject1,postAssignProject1} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Form,
    Header,
    Button,
    Dimmer,
    Loader
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class ProjectAssign extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            supplierList:[],
            selectedList:[],
            token:'',
            loading:false
        }
        this.goBack = this.goBack.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.onGetAssignProject1 = this.onGetAssignProject1.bind(this)
        this.onPostAssignProject1 = this.onPostAssignProject1.bind(this)

    }

    handleChange(event) {
        let item =parseInt(event.target.value) ;
        let items = this.state.selectedList.slice();
        let index = items.indexOf(item);
        index === -1 ? items.push(item) : items.splice(index, 1);
        this.setState({selectedList: items});
    }


    componentDidMount(){
      let token = sessionStorage.getItem("token");
      let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
          this.setState({
            projectname:projectname
          })
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname")
          })
        }
        // if(projectname == null){

        // }
        this.setState({
            projectname:projectname
        })
        if(token == null || token == -1){
            this.gotoHome();
            
        }else{
            this.setState({
                token:token
            })
            this.onGetAssignProject1(token);
        }
    }

    componentWillUnmount(){
        sessionStorage.removeItem("projectname")
      }

    onGetAssignProject1 = (token) =>{
        let projectname = ''
        projectname = sessionStorage.getItem("projectname")
        this.setState({
          loading:true
      })
      getAssignProject1(projectname,{},{token}).then(res => {
          let supplierList =[];
          supplierList = res;
          this.setState({
              supplierList:supplierList,
              loading:false
          })
          
      }).catch(error => {
        message.config({duration: 5});
        message.error(error);
        this.setState({
            loading:false
        })
      })
    //   getProjectDetail1()
    }

    onPostAssignProject1 = () => {
        let token = sessionStorage.getItem("token");
        let projectname = ''
        projectname = sessionStorage.getItem("projectname")
        let selectedList = []
        selectedList = this.state.selectedList
        this.setState({
            loading:true
        })
        postAssignProject1(projectname,selectedList,{token}).then(res => {
            message.success("success!");
            this.setState({
                loading:false
            })
            this.props.history.goBack()
        }).catch(error => {
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })
    }


    goBack(){
      this.props.history.go(-1)
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
                      <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                        Project Assignment
                      </div>

                      <div style={{float: 'right', width: '360px',
                        display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>      
                        <Button positive onClick={this.onPostAssignProject1}
                          style={{marginRight: '20px', fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
                            Confirm
                          </Button>

                          <Button negative onClick={this.goBack}
                          style={{fontFamily: 'Poppins', fontWeight: '500', width:'150px', height:'50px'}}>
                            Back
                          </Button>
                      </div>  

                    <div className='form-card' style={{ width: '100%', marginTop: '4em' }}>
                        <p style={{fontFamily: 'Montserrat', fontSize:'20px', fontWeight:'500', marginBottom:'2em'}}>
                            Click on the suppliers you wish to assign this project to.
                        </p>
                        <p style={{fontFamily: 'Montserrat', fontSize:'24px', fontWeight:'600'}}>Suppliers:</p>
                        <Form style={{ marginLeft: "5px" }}>
                            {(this.state.supplierList || []).map((item) => (
                            <div style={{display: 'inline-grid', width: "25%", fontSize: "16px", marginTop: "4px" }}>
                                <label style={{
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    fontWeight: '400',
                                    display: 'flex',
                                    alignItems: 'center',
                                    verticalAlign: 'middle',
                                    justifyContent: 'center',
                                    marginTop: '-2px'                                    
                                }}>
                                <input
                                    type="checkbox"
                                    name="fruit"
                                    value={item.supplierid}
                                    onChange={this.handleChange}
                                />
                                &nbsp;&nbsp;&nbsp; {item.username}-{item.company}
                                </label>
                                <br />
                            </div>
                            ))}
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

export default  ProjectAssign
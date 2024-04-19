import React, {Component} from 'react'
import './detail.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getProjectFeedback2} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Header,
    Container,
    Dimmer,
    Loader
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class MesDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            creatorname:'',
            feedbacktime:'',
            feedbackdetail:[],
            status:2,
            loading:false
        }
        this.goBack = this.goBack.bind(this)
        this.onGetFeedBack2 = this.onGetFeedBack2.bind(this)

    }

    goBack(){
      this.props.history.go(-1)
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
          let creatorname = sessionStorage.setItem("creatorname",this.props.location.query.creatorname)
          let feedbacktime = sessionStorage.setItem("feedbacktime",this.props.location.query.feedbacktime)
          this.setState({
            projectname:projectname,
            creatorname:creatorname,
            feedbacktime:feedbacktime
          })
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname"),
            creatorname:sessionStorage.getItem("creatorname"),
            feedbacktime:sessionStorage.getItem("feedbacktime")
          })
        }
        if(token == null || token == -1){
            this.gotoHome();
            this.setState({
                projectname:this.props.location.query.projectname,
                creatorname:this.props.location.query.creatorname,
                feedbacktime:this.props.location.query.feedbacktime
            })
        }else{
            this.onGetFeedBack2(token)
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname");
        sessionStorage.removeItem("creatorname");
        sessionStorage.removeItem("feedbacktime")
      }

    onGetFeedBack2= (token) => {
        let projectname = '';
        let creatorname = '';
        let feedbacktime = '';
        projectname = sessionStorage.getItem("projectname")
        creatorname = sessionStorage.getItem("creatorname")
        feedbacktime = sessionStorage.getItem("feedbacktime")
        let date = feedbacktime.slice(0,10);
        let time = feedbacktime.slice(11,19);
        feedbacktime =date+'\n'+time
        this.setState({
            loading:true
        })

        getProjectFeedback2(projectname,creatorname,feedbacktime,{},{token}).then(res=>{
            let feedbackdetail = [];
            feedbackdetail = res;
            this.setState({
                feedbackdetail:feedbackdetail,
                loading:false
            })
        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
        })
    }

    render(){
        return(
            <div className="User-project" style={{backgroundColor:'#f3f3f3'}}> 
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2}  style={{backgroundColor:'#f3f3f3'}}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                    <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Message: Details</div>
                        <div style={{marginTop: '3em'}}/>   

                        {(this.state.feedbackdetail||[]).map((item) => {
                            return(
                                <div className="form-card" style={{width:'100%', marginTop:'2em'}}>                                    
                                    <label className="form-label"
                                        style={{display:'block', marginLeft:'1em',marginBottom:'1em', marginTop:'1em', fontSize:'20px', fontWeight:'600'}}>
                                        Principle: <span style={{fontWeight:'500'}}>{item.principle}</span>
                                    </label>
                                    <label className="form-label"
                                        style={{display:'block', marginLeft:'1em',marginBottom:'1em', marginTop:'2em', fontSize:'22px', fontWeight:'600'}}>
                                        Segment: {item.segment}
                                    </label>

                                    <label className="form-label" 
                                        style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                        <span style={{fontWeight:'600'}}>Question Content:</span>
                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.questioncontent}</span>
                                    </label>

                                    <label className="form-label" 
                                        style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                        <span style={{fontWeight:'600'}}>Sub-Question Content:</span>
                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{item.subquescontent}</span>
                                    </label>

                                    <label className="form-label" 
                                        style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                        <span style={{fontWeight:'600'}}>Your Answer:</span>
                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                            {item.youranswer}
                                        </span>
                                    </label>

                                    <label className="form-label" 
                                        style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                        <span style={{fontWeight:'600'}}>Comments:</span>
                                        <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                            {item.comments}
                                        </span>
                                    </label>
                                </div>
                            )
                        })}    
                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  MesDetail
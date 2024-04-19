import React, {Component} from 'react'
import './detail.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getPrinciples4,getSegments4,getSubquestionDetail4} from '../../../../../api/api'
import{
    Grid,
    Segment,
    Dimmer,
    Loader,
    Divider,
    Form,
    List,
    Header,
    Breadcrumb
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../../component/sideMenu'
import TopHeader from '../../../../../component/header'

class AdministratorQuestionListDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
          loading:false,
          subquestionid :0,
          questioncontent: []

        }
        this.onGetSubquestionDetail4 = this.onGetSubquestionDetail4.bind(this)

    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let subquestionid  = sessionStorage.getItem("subquestionid ")
          if(subquestionid  == null){
             let subquestionid  = sessionStorage.setItem("subquestionid ",this.props.location.query.subquestionid )
            this.setState({
                subquestionid :subquestionid ,
            })
            console.log(subquestionid );
            
          }else{
            this.setState({
                subquestionid :sessionStorage.getItem("subquestionid ")
            })
            console.log(1,sessionStorage.getItem("subquestionid "));
          }
          if(token == null || token == -1){
              this.gotoHome();
              
          }else{
             this.onGetSubquestionDetail4(token)
          }
    }

    componentWillUnmount(){
        console.log("un");
         sessionStorage.removeItem("subquestionid ");
      }

    // onGetPrinciples4 =(token)=>{
    //     let subquestionid  = ''
    //     subquestionid  = sessionStorage.getItem("subquestionid ")
    // // // let projectid = ''
    // // // projectid = sessionStorage.getItem("projectid")
    //     this.setState({
    //         loading:true
    //     })
    //     getPrinciples4({},{token}).then((res)=>{
    //         let principleList = res;

    //     })
    

    // }

    // onGetSegments4 =()=>{

    // }

    onGetSubquestionDetail4 = (token)=>{
        let subquestionid  = ''
        subquestionid  = sessionStorage.getItem("subquestionid ");
        this.setState({
            loading:true
        })
        getSubquestionDetail4(subquestionid,{},{token}).then((res)=>{
            let questioncontent = res;
            this.setState({
                questioncontent:questioncontent,
                loading:false
            })
            message.config({duration: 5});
            message.success('success');
        }).catch((error)=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
              loading:false
            })
        })
    }

    render(){
      const questioncontent = this.state.questioncontent;
        return(
            <div className="User-project">                
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2} style={{background: '#f3f3f3'}}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                    
                    <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div>
                            <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>
                                Sub-Question Details
                            </div>
                        
                            <div className='form-card' style={{width: '100%', marginTop: '4em'}}>
                                <Form>
                                    <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                        <label className="form-label" style={{}}>Sub-Question</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {questioncontent.subquescontent}
                                        </p>
                                        <Divider/>

                                        <div class="row">
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Date Created</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {(questioncontent.createdtime||'').split('T')[0]}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Principle</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {questioncontent.principle}
                                                </p>
                                            </div>
                                            <div class="col">
                                                <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Segment</label>
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {questioncontent.segment}
                                                </p>
                                            </div>
                                        </div>                                        
                                        <Divider/>

                                        <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Question</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {questioncontent.question}
                                        </p>
                                        <Divider/>

                                        <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Question Type</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {questioncontent.questiontype}
                                        </p>
                                        <Divider/>

                                        <label className="form-label" style={{marginTop: '20px', textAlign: 'left'}}>Answers</label>
                                        <List divided verticalAlign='middle' style={{marginLeft:'2em'}}>
                                            {(this.state.questioncontent.answer||[]).map((item)=>{
                                                return(
                                                    <List.Item style={{marginTop:'1em', paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                        {item.answer == -1 ?
                                                        <div><List.Content style={{marginTop:'0.5em'}}>Answer：Yes</List.Content>
                                                        <List.Content style={{marginTop:'0.5em'}}>Point： {item.point}</List.Content></div>
                                                        :item.answer==1 ? <div><List.Content style={{marginTop:'0.5em'}}>Answer：No</List.Content>
                                                        <List.Content style={{marginTop:'0.5em'}}>Point： {item.point}</List.Content></div> 
                                                        : ""}                                                        
                                                    </List.Item>
                                                )
                                            })}                                    
                                        </List>

                                        <Divider/>
                                    </div>
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

export default  AdministratorQuestionListDetail
import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {message, Spin} from 'antd'
import './message.scss'
import 'semantic-ui-css/semantic.min.css'
import {getFeedback2} from '../../../api/api'
import{
    Grid,
    Segment,
    Input,
    Dimmer,
    Loader,
    Button,
    List,
    Pagination,
    Divider
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../component/sideMenu'
import TopHeader from '../../../component/header'

class Message extends Component{
    constructor(props){
        super(props);
        this.state = {
            nameList:[],
            messageList:[],
            inputProjectName:'',
            searching:false,
            loading:false

        }
        this.onGetMessageList = this.onGetMessageList.bind(this)

    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        if(token == null || token == -1){
            this.gotoHome();
            this.setState({
                projectname:this.props.location.query.projectname
            })
        }else{
            this.onGetMessageList(token)
        }
        
    }

    handleInputProjectName(event){
        let inputProjectName = event.target.value;
        this.setState({
            inputProjectName:inputProjectName
        })
    }

    handleSearch(){
        // 获取输入框文字，正在搜索状态
        // 使用获取的文字，
    }

    // setSelectList(){
    //     // const nameList = []
    //     // this.state.messageList.map((item) => {
    //     //     nameList.push({ key:item.creatorname , value: item.creatorname, text: item.creatorname })
    //     // })
    // }

    onGetMessageList = (token) =>{
        this.setState({
            loading:true
          })
        getFeedback2({},{token}).then(res => {
            let messageList = [];
            let nameList = [];
            messageList = res;
            this.setState({
                messageList:messageList,
                loading:false
            });
            this.setState({
                nameList:nameList
            })
        }).catch(error => {
            this.setState({
                loading:false
              })
            message.config({duration: 5});
            message.error(error);
        })
    }

    render(){
        return(
            <div style={{backgroundColor:'#f3f3f3', minHeight: 'calc(100vh + 14px)'}}>                
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
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Messages</div>
                        <div style={{marginTop: '3em'}}/> 

                        {(this.state.messageList||[]).map((item) => {
                            return(
                                <List style={{marginLeft:'3em'}}>
                                    <List.Item>
                                    <List.Content>
                                        {item.feedbacktype == 2 ? 
                                        <Link className="Message-List" to={{ pathname: '/message/detail' , 
                                        query : { projectname:item.projectname,creatorname:item.creatorname,
                                            feedbacktime:item.feedbacktime.slice(0,19) }}}>
                                            <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'15px'}}>
                                                Project Feedback:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.projectname} - validator:&nbsp;{item.creatorname}，{item.feedbacktime.slice(0,19)}
                                            </span>
                                        </Link>:
                                        <Link className="Message-List" to={{ pathname: '/message/projectassignment' , 
                                        query : { projectname:item.projectname }}}>
                                            <span style={{fontFamily:'Poppins', fontWeight:'500', fontSize:'15px'}}>
                                                Project Assignment:&nbsp;&nbsp;&nbsp;{item.projectname} - supplieradmin:&nbsp;{item.creatorname}，{item.feedbacktime.slice(0,19)}
                                            </span>
                                            <Divider style={{width:'100%'}}/>
                                        </Link>}
                                        
                                        
                                    </List.Content>
                                    </List.Item>
                                </List>
                            )
                        })}
                        {/* <Pagination
                            boundaryRange={0}
                            defaultActivePage={1}
                            ellipsisItem={null}
                            firstItem={null}
                            lastItem={null}
                            siblingRange={1}
                            totalPages={10}
                        /> */}
                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  Message
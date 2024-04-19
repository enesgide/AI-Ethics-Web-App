import React, {Component} from 'react'
import './summary.scss'
import 'semantic-ui-css/semantic.min.css'
import{
    Grid,
    Input,
    Segment,
    Button,
    Comment,
    Form,
    Container,
    Header
} from 'semantic-ui-react'

// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class Summary extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }

    render(){
        return(
            <div className="Validator-pro-ques-detail">
                <TopHeader/>
                <Grid columns={2}>
                    <Grid.Column width={2}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                      <Segment className="content" style={{marginTop:'10em',border:'none',marginLeft:'3em',}}>
                        <h2> Questionnaire Report - Project Name</h2>
                        
                        <Segment className="question-item ">
                            <h3>Segement 1: ....</h3>
                            <Container>
                                <Header as="h4" style={{margin:"0 0"}}>Question 1:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 2:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 3:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 4:...</Header>
                            </Container>
                            <Form reply >
                                <Input label='Summarization' style={{marginTop:"0.5em"}} small/>
                                <Button primary style={{ display:" block" ,marginTop:"0.5em"}} Tiny>Add</Button>
                            </Form>
                        </Segment>
                        <Segment className="question-item ">
                            <h3>Segement 1: ....</h3>
                            <Container>
                                <Header as="h4" style={{margin:"0 0"}}>Question 1:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 2:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 3:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 4:...</Header>
                            </Container>
                            {/* <Form reply >
                                <Input label='Summarization' style={{marginTop:"0.5em"}} small/>
                                <Button primary style={{ display:" block" ,marginTop:"0.5em"}} Tiny>Add</Button>
                            </Form> */}
                        </Segment>

                        <Segment className="question-item finished">
                            <h3>Segement 1: ....</h3>
                            <Container>
                                <Header as="h4" style={{margin:"0 0"}}>Question 1:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 2:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 3:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 4:...</Header>
                            </Container>
                            <Form reply >
                                <Input label='Summarization' style={{marginTop:"0.5em"}} small/>
                                <Button primary style={{ display:" block" ,marginTop:"0.5em"}} Tiny>Add</Button>
                            </Form>
                        </Segment>

                        <Segment className="question-item error">
                            <h3>Segement 1: ....</h3>
                            <Container>
                                <Header as="h4" style={{margin:"0 0"}}>Question 1:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 2:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 3:...</Header>
                                <Header as="h4" style={{margin:"0 0"}}>Question 4:...</Header>
                            </Container>
                            {/* <Form reply>
                                <Input label='Summarization' style={{marginTop:"0.5em"}} small/>
                                <Button primary style={{ display:" block" ,marginTop:"0.5em"}} Tiny>Add</Button>
                            </Form> */}
                        </Segment>

                        <Button positive>Pass</Button>
                        <Button positive>Send Feedback</Button>
                      </Segment>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  Summary
import React, {Component} from 'react'
import './footer.scss'
import 'semantic-ui-css/semantic.min.css'
import { withRouter} from 'react-router-dom';
import {
    Container,
    Header,
    Grid,
    List,
    Segment,
    Modal,
    Button,
    Image,
    Icon,
    Divider,
} from 'semantic-ui-react'
import AISupplierAdmin from '../../assets/images/AI SupplierAdmin.jpg'
import AISupplier from '../../assets/images/AI Supplier.jpg'
import Validator from '../../assets/images/Validator.jpg'
import Administrator from '../../assets/images/Administrator.jpg'
import logo from '../../assets/images/logo.jpg'

class HomeFooter extends Component{
    constructor(props){
        super(props);
        this.openTopicModal1 = this.openTopicModal1.bind(this);
        this.openTopicModal2 = this.openTopicModal2.bind(this);
        this.openTopicModal3 = this.openTopicModal3.bind(this);
        this.openTopicModal4 = this.openTopicModal4.bind(this);
        this.openUserModal1 = this.openUserModal1.bind(this);
        this.openUserModal2 = this.openUserModal2.bind(this);
        this.openUserModal3 = this.openUserModal3.bind(this);
        this.openUserModal4 = this.openUserModal4.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.state = {
            visibleTopicModal1: false,
            visibleTopicModal2: false,
            visibleTopicModal3: false,
            visibleTopicModal4: false,
            visibleUserModal1: false,
            visibleUserModal2: false,
            visibleUserModal3: false,
            visibleUserModal4: false,
        };
    }

    openTopicModal1(){
        this.setState({visibleTopicModal1: true,});
    }

    openTopicModal2(){
        this.setState({visibleTopicModal2: true,});
    }

    openTopicModal3(){
        this.setState({visibleTopicModal3: true,});
    }

    openTopicModal4(){
        this.setState({visibleTopicModal4: true,});
    }

    openUserModal1(){
        this.setState({visibleUserModal1: true,});
    }

    openUserModal2(){
        this.setState({visibleUserModal2: true,});
    }

    openUserModal3(){
        this.setState({visibleUserModal3: true,});
    }

    openUserModal4(){
        this.setState({visibleUserModal4: true,});
    }

    handleCancel(){
        this.setState({
            visibleTopicModal1: false,
            visibleTopicModal2: false,
            visibleTopicModal3: false,
            visibleTopicModal4: false,
            visibleUserModal1: false,
            visibleUserModal2: false,
            visibleUserModal3: false,
            visibleUserModal4: false,
        });
    }
    
    render(){

        return(
            <div className="M-Footer">
                <Segment className="bg-dark" vertical>
                    <Container>
                        <Grid divided inverted stackable>
                            <Grid.Row>
                                <Grid.Column width={4} className="tagline">
                                    <Header inverted as='h4'><Image circular size='mini' src={logo} style={{marginRight: '5px'}} />AI Project</Header>
                                    <p class="text-foot mt-4">These cases are perfectly simple and easy to free hour, when nothing prevents distinguish.</p>
                                    <div class="list-unstyled social-icon phone mt-4 mb-0" style={{display:'inline-block'}}>
                                        <a class="list-inline-item" href="#" style={{color:'#fff'}}><Icon bordered name='facebook'/></a>
                                        <a class="list-inline-item" href="#" style={{color:'#fff'}}><Icon bordered name='twitter'/></a>
                                        <a class="list-inline-item" href="#" style={{color:'#fff'}}><Icon bordered name='instagram'/></a>
                                        <a class="list-inline-item" href="#" style={{color:'#fff'}}><Icon bordered name='dribbble' /></a>
                                        <a class="list-inline-item" href="#" style={{color:'#fff'}}><Icon bordered name='print' /></a>
                                    </div>
                                </Grid.Column>
                                <Grid.Column width={3} className="tagline">
                                    <Header inverted as='h4' content='Topics'/>
                                    <List link inverted className="phone">
                                        <List.Item as='a' onClick={this.openTopicModal1}><Icon name='angle right'/>Principles</List.Item>
                                        <List.Item as='a' onClick={this.openTopicModal2}><Icon name='angle right'/>Segments</List.Item>
                                        <List.Item as='a' onClick={this.openTopicModal3}><Icon name='angle right'/>Questions</List.Item>
                                        <List.Item as='a' onClick={this.openTopicModal4}><Icon name='angle right'/>Subquestions</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={3} className="tagline">
                                    <Header inverted as='h4' content='Users'/>
                                    <List link inverted className="phone">
                                        <List.Item as='a' onClick={this.openUserModal1}><Icon name='angle right'/>AI SupplierAdmin</List.Item>
                                        <List.Item as='a' onClick={this.openUserModal2}><Icon name='angle right'/>AI Supplier</List.Item>
                                        <List.Item as='a' onClick={this.openUserModal3}><Icon name='angle right'/>Validator</List.Item>
                                        <List.Item as='a' onClick={this.openUserModal4}><Icon name='angle right'/>Administrator</List.Item>
                                    </List>
                                </Grid.Column>
                                <Grid.Column width={6}>
                                    <Header inverted as='h4'>
                                        About
                                    </Header>
                                    <p class="text-foot mt-4">Non-Biased Talent Shortlisting Algorithm: Ethical AI Validation Framework</p>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                    <div style={{width:'100%', height:'1em', padding:'8em'}}><Divider/><p class="text-foot" style={{textAlign:'center'}}>Copyright &copy; 2021.Company name All rights reserved.</p></div>
                    
                </Segment>
                <Modal
                    open={this.state.visibleTopicModal1}
                >
                    <Modal.Header>Transparency</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Principle Description:</Header>
                            <p>
                            The transparency concern is caused mainly from the “black box” issues of AI algorithms [1]. 
                            Users do not understand how the data is processed and why a prediction/classification is got. 
                            AI can perform tasks that are far more complex than ever before. It is also widely used in different areas including mission-critical disciplines.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleTopicModal2}
                >
                    <Modal.Header>Fairness</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Principle Description:</Header>
                            <p> 
                            Fairness is a complex and multi-faceted concept that depends on context and culture [5]. 
                            Narayanan [6] described at least 21 mathematical definitions of fairness from the literature ranging from statistical bias, group fairness, individual fairness, to process fairness and others.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleTopicModal3}
                >
                    <Modal.Header>Accountability</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Principle Description:</Header>
                            <p>
                            Accountability is about a clear acknowledgement and assumption of responsibility and “answerability” for actions, decisions, products and policies [8]. 
                            Three kinds of accountability related to AI exist in the current literature, each pointing to a different aspect for action 
                            </p>
                        </Modal.Description>
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleTopicModal4}
                >
                    <Modal.Header>Privacy</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Header>Principle Description:</Header>
                            <p>
                            AI usually requires huge volumes of data in order to learn and make decisions. 
                            Because of such heavy demand of data especially personal data from AI, the concern of privacy becomes one of important issues in AI. 
                            There is no fixed definition of privacy. Broadly speaking, privacy can refer to the right to be let alone, or freedom from publicity by surveillance, interference or intrusion , and have control over one’s own personal information . 
                            From the digital perspective, privacy implies on the ability to control how data especially personal data is being collected, stored, modified, used, and exchanged between different parties.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleUserModal1}
                >
                    <Modal.Header>AI SupplierAdmin</Modal.Header>
                    <Modal.Content image>
                        <Image size='massive' src={AISupplierAdmin} wrapped/>
                        <Modal.Description>
                            <Header>User Description:</Header>
                            <p>
                            The transparency concern is caused mainly from the “black box” issues of AI algorithms [1]. 
                            Users do not understand how the data is processed and why a prediction/classification is got. 
                            AI can perform tasks that are far more complex than ever before. It is also widely used in different areas including mission-critical disciplines.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleUserModal2}
                >
                    <Modal.Header>AI Supplier</Modal.Header>
                    <Modal.Content image>
                        <Image size='massive' src={AISupplier} wrapped/>
                        <Modal.Description>
                            <Header>User Description:</Header>
                            <p>
                            The transparency concern is caused mainly from the “black box” issues of AI algorithms [1]. 
                            Users do not understand how the data is processed and why a prediction/classification is got. 
                            AI can perform tasks that are far more complex than ever before. It is also widely used in different areas including mission-critical disciplines.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleUserModal3}
                >
                    <Modal.Header>Validator</Modal.Header>
                    <Modal.Content image>
                        <Image size='massive' src={Validator} wrapped/>
                        <Modal.Description>
                            <Header>User Description:</Header>
                            <p>
                            The transparency concern is caused mainly from the “black box” issues of AI algorithms [1]. 
                            Users do not understand how the data is processed and why a prediction/classification is got. 
                            AI can perform tasks that are far more complex than ever before. It is also widely used in different areas including mission-critical disciplines.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
                <Modal
                    open={this.state.visibleUserModal4}
                >
                    <Modal.Header>Administrator</Modal.Header>
                    <Modal.Content image>
                        <Image size='massive' src={Administrator} wrapped/>
                        <Modal.Description>
                            <Header>User Description:</Header>
                            <p>
                            The transparency concern is caused mainly from the “black box” issues of AI algorithms [1]. 
                            Users do not understand how the data is processed and why a prediction/classification is got. 
                            AI can perform tasks that are far more complex than ever before. It is also widely used in different areas including mission-critical disciplines.
                            </p>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='olive' onClick={this.handleCancel}>Close</Button>
                    </Modal.Actions>
                </Modal>
            </div>
        )
    }


}

export default withRouter(HomeFooter)
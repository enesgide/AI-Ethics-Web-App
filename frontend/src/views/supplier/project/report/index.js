import React, {Component} from 'react'
import './report.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getReport2} from '../../../../api/api'
import{
    Grid,
    Segment,
    Breadcrumb,
    Container,
    Header,
    Dimmer,
    Loader,
    Divider,
    Button
} from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'

class Report extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            reportcontent:{
                "content": [{
                    "principle": "Transparency",
                    "principlecontent": [{
                        "segment": "Segment-Transparency0",
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Transparency00",
                            "questioncontent": [{
                                "level": 0,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Transparency00",
                                "youranswer": "link: http://www.google.com"
                            }]
                        }],
                        "summary": {
                            "id": 20,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 94,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:25.000+0000"
                        }
                    }]
                }, {
                    "principle": "Privacy",
                    "principlecontent": [{
                        "segment": "Segment-Privacy1",
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy11",
                            "questioncontent": [{
                                "level": 1,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy11",
                                "youranswer": "http://www.google.com"
                            }, {
                                "level": 0,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy11",
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy10",
                            "questioncontent": [{
                                "level": 1,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy10",
                                "youranswer": "http://www.google.com"
                            }, {
                                "level": 0,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy10",
                                "youranswer": "link: http://www.google.com"
                            }]
                        }],
                        "summary": {
                            "id": 19,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 101,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:23.000+0000"
                        }
                    }, {
                        "segment": "Segment-Privacy0",
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy00",
                            "questioncontent": [{
                                "level": 1,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy00",
                                "youranswer": "http://www.google.com"
                            }, {
                                "level": 0,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy00",
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy01",
                            "questioncontent": [{
                                "level": 0,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy01",
                                "youranswer": "link: http://www.google.com"
                            }, {
                                "level": 1,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy01",
                                "youranswer": "http://www.google.com"
                            }]
                        }],
                        "summary": {
                            "id": 18,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 100,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:21.000+0000"
                        }
                    }]
                }],
                "createdtime": "2021-05-11T15:47:31.000+0000",
                "creator": {
                    "id": 142,
                    "username": "Test0ff",
                    "password": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwYXNzd29yZCJ9.XZ0-LKjKyhGzW76FpJzmGMPuobmaf_OeKfM0l52iSTs",
                    "email": "Test0@gmail.com",
                    "usertype": 1,
                    "firstname": "Test0",
                    "lastname": "Moment",
                    "companyid": 31,
                    "address1": "address10Test",
                    "address2": "address20Moment",
                    "phone": "00",
                    "createdtime": "2021-05-11T15:45:54.000+0000",
                    "verifiedemail": 1,
                    "passwordtoken": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJUZXN0MCJ9.ZoxVWLL4aR8apiQN4JR78wgzeuMKKK1CsHD2ZrNlBOc",
                    "emailtoken": "50129903adac26dd8c761743cd1de3f3",
                    "image": "defaultimage.png"
                },
                "description": "test1",
                "projectname": "projecttest1"
            },
            loading:false
        }
        this.onGetReport2 = this.onGetReport2.bind(this);
        this.printPDF = this.printPDF.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          let projectname = sessionStorage.setItem("projectname",this.props.location.query.projectname)
            
          this.setState({
            projectname:projectname,
          })
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname"),
          })
        }
        if(token == null || token == -1){
            console.log("didn't login state");
            this.setState({isLoggedIn: false});
            this.gotoHome();
        }else{
            this.onGetReport2(token)
           
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname");
      }
    onGetReport2=(token)=>{
        this.setState({
            loading:true
        })
        let projectname = '';
        projectname = sessionStorage.getItem("projectname");
        getReport2(projectname,{},token).then(res=>{
            let reportcontent = {};
            reportcontent = res;
            this.setState({
                reportcontent:reportcontent,
                loading:false
            })
        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })
    }

    printPDF() {
        this.setState({
            loading: true
        })

        var projectdescription = document.getElementById("projectdescriptiontable");
        var projectdetail = document.getElementById("projectdetailtable");
        var HTML_Width = projectdetail.offsetWidth;
        var HTML_Height = projectdetail.offsetHeight;
        var top_left_margin = 15;
        var PDF_Width = HTML_Width + (top_left_margin*2);
        var PDF_Height = (HTML_Width*1.5)+(top_left_margin*2);
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

        const doc = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        doc.setFont("helvetica");
        doc.setTextColor(46, 128,186);

        var today = new Date();
        let finalY0 = top_left_margin;
        doc.setFontSize(38);
        doc.text('Summary of Assurance of AI Ethics', HTML_Width/2 - top_left_margin, HTML_Height/5, 'center');
        doc.setFontSize(32);
        doc.text('Generated by Ethical AI Validation Platform', HTML_Width/2 - top_left_margin, HTML_Height/5+60, 'center');
        doc.setFontSize(26);
        doc.text('Date: '+today.toLocaleDateString(), HTML_Width/2 + top_left_margin, HTML_Height/5+90, 'center');
        finalY0 = HTML_Height/5 + 150;

        html2canvas(projectdescription, {
            allowTaint:true,
            useCORS: true,
        }).then(canvas => {
            canvas.getContext('2d');
            var imgUri1 = canvas.toDataURL("image/jpeg", 1.0);
            doc.setFontSize(26);
            let projectname = this.state.reportcontent.projectname;
            doc.text('Project: ' + projectname, HTML_Width/2 - top_left_margin, finalY0, {align:'center'});
            doc.addImage(imgUri1, 'jpeg', HTML_Width/3 + top_left_margin, finalY0+(top_left_margin*2));

            doc.addPage();
            
            let finalY1 = top_left_margin + 30;
            doc.setFontSize(26);
            doc.setTextColor(46, 128, 186);
            doc.text('Content:', HTML_Width/2 - top_left_margin, finalY1, {align:'center'});
            finalY1 = finalY1 + top_left_margin

            html2canvas(projectdetail, {
                allowTaint:true,
                useCORS: true,
            }).then(canvas => {
                var imgUri2 = canvas.toDataURL("image/jpeg", 1.0);
                doc.addImage(imgUri2, 'jpeg', top_left_margin, finalY1+top_left_margin, canvas_image_width, canvas_image_height);

                for(var i=1; i<=totalPDFPages; i++) {
                    doc.addPage();
                    doc.addImage(imgUri2, 'jpeg', top_left_margin, (top_left_margin*4) - (PDF_Height*i), canvas_image_width, canvas_image_height);
                }

                let finalY2 = HTML_Height - PDF_Height*totalPDFPages + 100;
                doc.setFontSize(20);
                doc.setTextColor(46, 128, 186);
                doc.text( 'Here is the end of the report', HTML_Width/2 - top_left_margin, finalY2, {align:'center'});

                doc.save('Summary of Assurance of AI Ethics Report.pdf');
                this.setState({
                    loading:false
                })
            });
            
        });  
    }

    render(){
        console.log(this.state.reportcontent.creator);
        return(
            <div className="Supplier-project-report" style={{backgroundColor: '#f3f3f3'}}>
                
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                    <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Report</div>
                        
                        <Button positive onClick={this.printPDF}
                            style={{float:'right', fontFamily: 'Poppins', fontWeight: '500', width:'170px', height:'50px'}}>
                                Download as PDF
                            </Button>
                        
                        <div style={{marginTop: '3em'}}/>  

                        <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                            <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                <label className="form-label">Project Title</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.reportcontent.projectname}
                                </p>
                                <Divider/>

                                <label className="form-label" style={{marginTop: '20px'}}>Description</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.reportcontent.description}
                                </p>
                                <Divider/>

                                <label className="form-label" style={{marginTop: '20px'}}>Creator</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.reportcontent.creator.username}
                                </p>
                                <Divider/>

                                <label className="form-label" style={{marginTop: '20px'}}>Date Created</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {(this.state.reportcontent.createdtime||'').slice(0,10)}
                                </p>
                                <Divider/>
                            </div>                         
                        </div>  

                        <div style={{fontFamily:'Montserrat', fontSize:'32px', fontWeight:'600', marginLeft:'3rem'}}>Content:</div>

                        {(this.state.reportcontent.content||[]).map((item)=>{
                            return(
                                <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                                    <center><label className="form-label" style={{fontSize:'25px', fontWeight:'600', marginBottom:'1em'}}>Principle: {item.principle}</label></center>
                                    {(item.principlecontent||[]).map((subItem)=>{
                                        return(
                                            <div>
                                                <label className="form-label"
                                                    style={{display:'block', marginLeft:'1em',marginBottom:'1em', marginTop:'2em', fontSize:'22px', fontWeight:'600'}}>
                                                    Segment: {subItem.segment}
                                                </label>
                                                <label className="form-label"
                                                    style={{display:'block', marginLeft:'1em',marginBottom:'1em', marginTop:'1em', fontSize:'20px', fontWeight:'600'}}>
                                                    Summary: <span style={{fontWeight:'500'}}>{subItem.summary.summary}</span>
                                                </label>
                                                <Divider/>

                                                {(subItem.segmentcontent||[]).map((segItem)=>{
                                                    return(
                                                        <div>
                                                            <label className="form-label"
                                                                style={{marginLeft:'2em',marginBottom:'1em', marginTop:'1em', fontSize:'18px', fontWeight:'400'}}>
                                                                    <span style={{fontWeight:'600'}}>Question:</span>
                                                                    <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{segItem.question}</span>
                                                            </label>
                                                            <Divider/>
                                                            {(segItem.questioncontent||[]).map((quesItem)=>{
                                                                return(
                                                                    <div style={{marginBottom:"3em",marginLeft:'2.5em', marginTop:'2em'}}>
                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Sub-Question:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>{quesItem.subquestion}</span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Your Answer:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.youranswer == 1 ? 'No' : quesItem.youranswer}
                                                                            </span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Point:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.point}
                                                                            </span>
                                                                        </label>

                                                                        <label className="form-label" 
                                                                            style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                            <span style={{fontWeight:'600'}}>Level:</span>
                                                                            <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                {quesItem.level}
                                                                            </span>
                                                                        </label>
                                                                        <Divider/>
                                                                    </div>
                                                                )
                                                            })}         
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        )
                                    })}
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

export default  Report
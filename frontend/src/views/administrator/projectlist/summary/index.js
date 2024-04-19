import React, {Component} from 'react'
import './summary.scss'
import 'semantic-ui-css/semantic.min.css'
import {message, Spin} from 'antd'
import {getSummary4,getProjectDetail4} from '../../../../api/api'
import {imageBase} from "./util";
import {answer, correctAnswer} from "./function";
import{
    Grid,
    Segment,
    Breadcrumb,
    Container,
    Header,
    Dimmer,
    Loader,
    Divider,
    Button,
} from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'
import fs from 'fs'
// import { withRouter} from 'react-router-dom';

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'


function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
class Project4Summary extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectname:'',
            projectsummary:{
                "principlegraph": {
                    "25": 0,
                    "28": 0
                },
                "project": {
                    "assignedsupplier": [],
                    "assignedvalidator": [],
                    "createdtime": "2021-05-11T15:47:31.000+0000",
                    "creator": {
                        "id": 142,
                        "username": "Test0",
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
                    "description": "test6",
                    "finishedtime": null,
                    "projectname": "projecttest1"
                },
                "questiongraph": {
                    "263": 0,
                    "264": 0,
                    "265": 0,
                    "266": 0,
                    "251": 0
                },
                "segmentgraph": {
                    "100": 0,
                    "101": 0,
                    "94": 0
                },
                "subquestiongraph": {
                    "1239": 0,
                    "1240": 0,
                    "1241": 0,
                    "1242": 0,
                    "1243": 0,
                    "1244": 0,
                    "1245": 0,
                    "1246": 0,
                    "1215": 0
                },
                "summary": [{
                    "principle": "Transparency",
                    "principlecontent": [{
                        "segment": "Segment-Transparency0",
                        "segmentcomment": {
                            "id": 20,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 94,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:25.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Transparency00",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Transparency00",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }]
                    }]
                }, {
                    "principle": "Privacy",
                    "principlecontent": [{
                        "segment": "Segment-Privacy0",
                        "segmentcomment": {
                            "id": 18,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 100,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:21.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy00",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy00",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy00",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy01",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy01",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy01",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }]
                        }]
                    }, {
                        "segment": "Segment-Privacy1",
                        "segmentcomment": {
                            "id": 19,
                            "projectid": 23,
                            "validatorid": 143,
                            "segmentid": 101,
                            "summary": "1",
                            "createdtime": "2021-05-11T15:51:23.000+0000"
                        },
                        "segmentcontent": [{
                            "question": "Quetion-Segment-Privacy11",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy11",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy11",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }, {
                            "question": "Quetion-Segment-Privacy10",
                            "questioncontent": [{
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test1Quetion-Segment-Privacy10",
                                "type": 10,
                                "youranswer": "http://www.google.com"
                            }, {
                                "answer": 2,
                                "point": 0,
                                "subquestion": "subquestion test0Quetion-Segment-Privacy10",
                                "type": 9,
                                "youranswer": "link: http://www.google.com"
                            }]
                        }]
                    }]
                }]
            },
            status :0,
            leftquestion:[],
            loading:false
        }
        this.onGetSummary = this.onGetSummary.bind(this);
        // this.onGetProjectDetail = this.onGetProjectDetail.bind(this);
        this.printPDF = this.printPDF.bind(this);
        this.printPDFWithComment = this.printPDFWithComment.bind(this);
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
        let projectname = sessionStorage.getItem("projectname")
        if(projectname == null){
          sessionStorage.setItem("projectname",this.props.location.query.projectname)
        }else{
          this.setState({
            projectname:sessionStorage.getItem("projectname"),
          })
        }
        if(token == null || token == -1){
            console.log("didn't login state");
        }else{
            this.onGetSummary(token);
            
          
        }
    }

    componentWillUnmount(){
        console.log("un");
        sessionStorage.removeItem("projectname");
      }
    onGetSummary=(token)=>{
        this.setState({
            loading:true
        })
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        getSummary4(projectname,{},{token}).then(res=>{
            let projectsummary = res;
            this.setState({
                projectsummary:projectsummary,
                loading:false
            })
            console.log(this.state.projectsummary);
            this.onGetProjectDetail(token)
        }).catch(error=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
                loading:false
            })
        })
    }

    onGetProjectDetail=(token)=>{
        let projectname = '';
        projectname = sessionStorage.getItem("projectname")
        this.setState({
            loading:true
        })
        getProjectDetail4(projectname,{},{token}).then(res=>{
            let status = 0;
            status = res.status;
            console.log(res);
            this.setState({
                status:status,
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
        // var PDF_Width = HTML_Width + (top_left_margin*2);
        // var PDF_Height = (HTML_Width*1.5)+(top_left_margin*2);
        var PDF_Width = 800;
        var PDF_Height = 1200;
        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

        const doc = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        doc.setFont("helvetica");
        doc.setTextColor(46, 128,186);

        var today = new Date();
        let finalY0 = top_left_margin;
        doc.addImage(  imageBase , 'jpeg', 0, 0, PDF_Width, PDF_Height);
        doc.setFont("helvetica");
        doc.setTextColor(242, 242,235);
        doc.setFontSize(30);
        doc.text('Summary of Assurance of AI Ethicss', PDF_Width/2 - top_left_margin, PDF_Height/2-60, 'center');
        // doc.setFontSize(35);
        // doc.text('Generated by Ethical AI Validation Platform', PDF_Width/2 - top_left_margin, PDF_Height/2, 'center');
        doc.setFontSize(48);
        doc.text(sessionStorage.getItem("projectname"),PDF_Width/2 + top_left_margin, PDF_Height/2, 'center')
        doc.setFontSize(30);
        doc.text('Date: '+today.toLocaleDateString(), PDF_Width/2 + top_left_margin, PDF_Height/2+60, 'center');
        doc.setFontSize(30);
        doc.text('Data Science Institute', PDF_Width/2 - top_left_margin, PDF_Height/1.1, {align:'center'});
        doc.addPage();

        doc.setTextColor(14,14,15);
        doc.text("Created time", PDF_Width/2 - top_left_margin, PDF_Height/6, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.createdtime.split("T")[0],PDF_Width/2 - top_left_margin, PDF_Height/5, {align:'center'} )
        doc.setFontSize(30);
        doc.text("Creator", PDF_Width/2 - top_left_margin, PDF_Height/4, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.creator.firstname, PDF_Width/2 - top_left_margin, PDF_Height/3.6, {align:'center'})
        doc.setFontSize(30);
        doc.text("Assigned Supplier", PDF_Width/2 - top_left_margin, PDF_Height/3.0, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.assignedsupplier, PDF_Width/2 - top_left_margin, PDF_Height/2.7, {align:'center'})
        doc.setFontSize(30);
        doc.text("Assigned Validator", PDF_Width/2 - top_left_margin, PDF_Height/2.2, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.assignedvalidator, PDF_Width/2 - top_left_margin, PDF_Height/2.0, {align:'center'})


        doc.setFontSize(32);

        doc.addPage();

        // doc.setFontSize(38);
        // doc.text('Summary of Assurance of AI Ethicss', HTML_Width/2 - top_left_margin, HTML_Height/5, 'center');
        // doc.setFontSize(32);
        // doc.text('Generated by Ethical AI Validation Platform test', HTML_Width/2 - top_left_margin, HTML_Height/5+60, 'center');
        // doc.setFontSize(26);
        // doc.text('Date: '+today.toLocaleDateString(), HTML_Width/2 + top_left_margin, HTML_Height/5+90, 'center');
        // finalY0 = HTML_Height/5 + 150;

        html2canvas(projectdescription, {
            allowTaint:true,
            useCORS: true,
        }).then(canvas => {
            // canvas.getContext('2d');
            // var imgUri1 = canvas.toDataURL("image/jpeg", 1.0);
            // doc.setFontSize(26);
            // let projectname = sessionStorage.getItem("projectname");
            // doc.text('Project: ' + projectname, HTML_Width/2 - top_left_margin, finalY0, {align:'center'});
            // doc.addImage(imgUri1, 'jpeg', HTML_Width/3 + top_left_margin, finalY0+(top_left_margin*2));
            //
            // doc.addPage();
            //
            // let finalY1 = top_left_margin + 30;
            // doc.setFontSize(26);
            // doc.setTextColor(46, 128, 186);
            // doc.text('Content', HTML_Width/2 - top_left_margin, finalY1, {align:'center'});
            // finalY1 = finalY1 + top_left_margin
            let finalY1 = top_left_margin + 30;
            let finalY2 = top_left_margin + 30;
            doc.setFontSize(35);
            // doc.setTextColor(46, 128, 186);
            doc.setTextColor(66,64,227);
            doc.text('Content', PDF_Width/2 - top_left_margin, finalY1+60, {align:'center'});
            finalY1 = finalY1 + top_left_margin*2;

            var summary = this.state.projectsummary.summary;
            console.log(summary);
            summary.map((item) => {
                console.log(summary);
                doc.setFontSize(26);
                doc.text('Principle: '+ item.principle, top_left_margin*8, finalY1 + 120, {align:'left'});
                finalY1 = finalY1 + top_left_margin*2;
                doc.setFontSize(22);
                // doc.setFontSize(26);
                // doc.text('Principle: '+ item.principle, top_left_margin*8, finalY1 + 140, {align:'left'});
                // finalY1 = finalY1 + top_left_margin*2;
                // doc.setFontSize(22);

                console.log(item.principlecontent[0].segment)

                doc.setTextColor(66,64,227);
                doc.text(item.principlecontent[0].segment, top_left_margin*8, finalY1 + 160, {align:'left'});
                finalY1 = finalY1 + top_left_margin*6;
                doc.setTextColor(14,14,15);
                doc.text(doc.splitTextToSize(item.principlecontent[0].segmentcontent[0].question, PDF_Width-top_left_margin*8),top_left_margin*8, finalY1+130, {align: 'left'});
                console.log(item.principlecontent[0]);
                item.principlecontent[0].segmentcontent[0].questioncontent.map((subquestion) => {
                    console.log(subquestion.subquestion);
                    finalY1 = finalY1 + top_left_margin*6;
                    doc.setFontSize(18);
                    doc.setFont("helvetica", "bold");
                    // doc.setFontType("bold");

                    doc.text(doc.splitTextToSize(subquestion.subquestion, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+150,{align: 'left'});
                    // doc.setFont(undefined, "bold", 900);
                    // doc.text("This is example paragraph", 11,13,).setFontSize(8).setFont(undefined, 'bold');
                    //
                    // doc.text("This is example paragraph", 11,13,).setFontSize(8).setFont(undefined, 'normal');
                    // doc.setFont("helvetica");
                    doc.text("Supplier Answer: ", top_left_margin*8, finalY1 + 200, {align: 'left'}).setFont("Arial", "bold");

                   // doc.setFont("normal");

                  //  doc.text(answer(subquestion.type, subquestion.youranswer), top_left_margin*10, finalY1 + 200, {align: 'left'});
                    // doc.setFont("helvetica");
                    // doc.setFont("helvetica");
                    doc.setFont("helvetica", "normal");
                    doc.text(answer(subquestion.type, subquestion.youranswer), PDF_Width/2-top_left_margin*3, finalY1 + 200, {align: 'right'})

                    doc.text("Correct Answer: "+ correctAnswer(subquestion.type, subquestion.answer), top_left_margin*8, finalY1 + 240, {align: 'left'});
                    doc.text("Point: "+ subquestion.point, top_left_margin*8, finalY1 + 280, {align: 'left'});
                    finalY1 = finalY1 + top_left_margin*7;


                })


                // item.principlecontent.map((subitem) =>{
                //     doc.setTextColor(66,64,227);
                //     doc.text(subitem.segment, top_left_margin*8, finalY1 + 210, {align:'left'});
                //     finalY1 = finalY1 + top_left_margin*2;
                //     doc.setTextColor(14,14,15);
                //     doc.text('Summary: '+ subitem.segmentcomment.summary, top_left_margin*9, finalY1 + 200, {align:'left'});
                //     finalY1 = finalY1 + top_left_margin*2;
                // });
                for(var i=1; i<item.principlecontent.length; i++){
                    finalY1 = 100 + top_left_margin*2;
                    // doc.setFont("helvetica");
                    doc.setFont("helvetica");

                    doc.addPage();
                    doc.setTextColor(66,64,227);
                    console.log(finalY1);
                    doc.setFontSize(22);
                    doc.text(item.principlecontent[i].segment, top_left_margin*8, finalY1, {align:'left'});
                    console.log(item.principlecontent[i]);

                    doc.setTextColor(14,14,15);
                    doc.text(doc.splitTextToSize(item.principlecontent[i].segmentcontent[0].question, PDF_Width-top_left_margin*8),top_left_margin*8, finalY1+60, {align: 'left'});
                    item.principlecontent[i].segmentcontent[0].questioncontent.map((subquestion) => {
                        console.log(subquestion.subquestion);
                       finalY1 = finalY1 + top_left_margin*6;
                        doc.setFontSize(16);
                        doc.setFont("helvetica", "bold");

                        doc.text(doc.splitTextToSize(subquestion.subquestion, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+100,{align: 'left'});
                        // doc.text("Supplier Answer: "+  answer(subquestion.type, subquestion.youranswer), top_left_margin*8, finalY1 + 140, {align: 'left'});

                        doc.text("Supplier Answer: ", top_left_margin*8, finalY1 + 140, {align: 'left'}).setFont("Arial", "bold");
                        doc.setFont("helvetica", "normal");

                        doc.text(" "+answer(subquestion.type, subquestion.youranswer), PDF_Width/2-top_left_margin*3, finalY1 + 140, {align: 'right'})

                        // doc.text(answer(subquestion.type, subquestion.youranswer),  PDF_Width/2-top_left_margin*3, finalY1 + 140, {align: 'left'}).setFont("Arial", "bold");

                        //  doc.text(answer(subquestion.type, subquestion.youranswer), PDF_Width/2-top_left_margin*3, finalY1 + 140, {align: 'right'})
                        doc.setFont("helvetica", "normal");

                        doc.text("Correct Answer: "+ correctAnswer(subquestion.type, subquestion.answer), top_left_margin*8, finalY1 + 180, {align: 'left'});
                        doc.text("Point: "+ subquestion.point, top_left_margin*8, finalY1 + 220, {align: 'left'});
                        finalY1 = finalY1 + top_left_margin*7;


                    })
                    // doc.setFontSize(18);



                }
                item.principlecontent.map((subitem) =>{
                    console.log(item.principlecontent.length);




                  //  finalY1 = finalY1 + top_left_margin*5;
                    // if(finalY1 > PDF_Height){
                    //     doc.addPage();
                    // }
                });
                finalY1 = finalY1 + top_left_margin*2 ;
            });

            html2canvas(projectdetail, {
                allowTaint:true,
                useCORS: true,
            }).then(canvas => {
                // var imgUri2 = canvas.toDataURL("image/jpeg", 1.0);
                // doc.addImage(imgUri2, 'jpeg', top_left_margin, finalY1+top_left_margin, canvas_image_width, canvas_image_height);
                //
                // for(var i=1; i<=totalPDFPages; i++) {
                //     doc.addPage();
                //     doc.addImage(imgUri2, 'jpeg', top_left_margin, (top_left_margin*4) - (PDF_Height*i), canvas_image_width, canvas_image_height);
                // }
                //
                // let finalY2 = HTML_Height - PDF_Height*totalPDFPages + 100;
                // doc.setFontSize(20);
                // doc.setTextColor(46, 128, 186);
                // doc.text( 'Here is the end of the report', HTML_Width/2 - top_left_margin, finalY2, {align:'center'});

                doc.save('Summary of Assurance of AI Ethics Report.pdf');
                this.setState({
                    loading:false
                })
            });
            
        });  
    }

    //edit here



    printPDFWithComment() {
        this.setState({
            loading: true
        })
        var projectdescription = document.getElementById("projectdescriptiontable");
        var PDF_Width = 800;
        var PDF_Height = 1200;
        const doc = new jsPDF('p', 'pt', [PDF_Width,PDF_Height]);
        var top_left_margin = 15;

        // doc.setFontSize(26);
        // doc.text('Date: '+today.toLocaleDateString(), PDF_Width/2 + top_left_margin, PDF_Height/5+90, {align:'center'});
        // finalY0 = PDF_Height/5 + 150;


        doc.addImage(  imageBase , 'jpeg', 0, 0, PDF_Width, PDF_Height);
        doc.setFont("helvetica");
        doc.setTextColor(242, 242,235);

        // var today = new Date();
        let finalY0 = top_left_margin;

        doc.setFontSize(30);
        doc.text('Summary of Assurance of AI Ethics', PDF_Width/2 - top_left_margin, PDF_Height/2, {align:'center'});
        doc.setFontSize(40);
        doc.text(sessionStorage.getItem("projectname"), PDF_Width/2 - top_left_margin, PDF_Height/1.8, {align: 'center'});
        doc.setFontSize(30);
        doc.text('Data Science Institute', PDF_Width/2 - top_left_margin, PDF_Height/1.1, {align:'center'});

        doc.addPage();
        doc.setTextColor(14,14,15);
        doc.text("Created time", PDF_Width/2 - top_left_margin, PDF_Height/6, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.createdtime.split("T")[0],PDF_Width/2 - top_left_margin, PDF_Height/5, {align:'center'} )
        doc.setFontSize(30);
        doc.text("Creator", PDF_Width/2 - top_left_margin, PDF_Height/4, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.creator.firstname, PDF_Width/2 - top_left_margin, PDF_Height/3.6, {align:'center'})
        doc.setFontSize(30);
        doc.text("Assigned Supplier", PDF_Width/2 - top_left_margin, PDF_Height/3.0, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.assignedsupplier, PDF_Width/2 - top_left_margin, PDF_Height/2.7, {align:'center'})
        doc.setFontSize(30);
        doc.text("Assigned Validator", PDF_Width/2 - top_left_margin, PDF_Height/2.2, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.projectsummary.project.assignedvalidator, PDF_Width/2 - top_left_margin, PDF_Height/2.0, {align:'center'})


        doc.setFontSize(32);
        // doc.text('Generated by Ethical AI Validation Platform tests', PDF_Width/2 - top_left_margin, PDF_Height/5+60, {align:'center'});
        // doc.addPage();

        html2canvas(projectdescription, {
            allowTaint:true,
            useCORS: true,
        }).then(canvas => {
            // canvas.getContext('2d');
            // var imgUri1 = canvas.toDataURL("image/jpeg", 1.0);
            // doc.setFontSize(26);
            // let projectname = sessionStorage.getItem("projectname");
            // doc.text('Project: ' + projectname, PDF_Width/2 - top_left_margin, finalY0, {align:'center'});
            // doc.addImage(imgUri1, 'jpeg', PDF_Width/3 + top_left_margin, finalY0+(top_left_margin*2));

            doc.addPage();

            let finalY1 = top_left_margin + 30;
            doc.setFontSize(35);
            // doc.setTextColor(46, 128, 186);
            doc.setTextColor(66,64,227);
            doc.text('Content', PDF_Width/2 - top_left_margin, finalY1+80, {align:'center'});
            finalY1 = finalY1 + top_left_margin*2;

            var summary = this.state.projectsummary.summary;
            summary.map((item) => {
                doc.setFontSize(26);
                doc.text('Principle: '+ item.principle, top_left_margin*8, finalY1 + 140, {align:'left'});
                finalY1 = finalY1 + top_left_margin*2;
                doc.setFontSize(22);
                item.principlecontent.map((subitem) =>{
                    doc.setTextColor(66,64,227);
                    doc.text(subitem.segment, top_left_margin*8, finalY1 + 210, {align:'left'});
                    finalY1 = finalY1 + top_left_margin*2;
                    doc.setTextColor(14,14,15);
                    doc.text('Summary: '+ subitem.segmentcomment.summary, top_left_margin*9, finalY1 + 200, {align:'left'});
                    finalY1 = finalY1 + top_left_margin*2;
                });
                finalY1 = finalY1 + top_left_margin*2 ;
            });
            doc.setFontSize(14);
            // doc.setTextColor(46, 128, 186);
            doc.setTextColor(66,64,227);
            doc.text( 'Here is the end of the report', PDF_Width/2 - top_left_margin, finalY1 + 180, {align:'center'});

            doc.save('Summary of Assurance of AI Ethics Report with Comments.pdf');
            this.setState({
                loading:false
            })
        }); 


    }

    
    render(){
        console.log(this.state.projectsummary);
        return(
            <div className="Supplier-project-report" style={{backgroundColor: '#f3f3f3', minHeight:'calc(100vh + 14px)'}}>                
                <Dimmer active={this.state.loading}>
                    <Loader/>
                </Dimmer>
                <Grid columns={2} style={{backgroundColor: '#f3f3f3'}}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>

                    <div style={{marginTop:'4em',border:'none',marginLeft:'3em', marginRight: '3em'}}>
                        <div style={{display:'inline-block', fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}>Summary</div>

                        <div style={{float: 'right', width: '450px',
                            display: 'flex', alignContent: 'center', justifyContent: 'flex-end'}}>      
                            <Button positive onClick={this.printPDFWithComment}
                                style={{marginRight: '20px',fontFamily: 'Poppins',fontWeight: '500',width:'180px',height:'50px'}}>
                                Download Summary as PDF
                            </Button> 

                            <Button positive onClick={this.printPDF}
                                style={{marginRight: '20px',fontFamily: 'Poppins',fontWeight: '500',width:'180px',height:'50px'}}>
                                Download Report as PDF
                            </Button> 
                        </div>  

                        <div className="form-card" style={{width:'100%', marginTop:'4em'}}>
                            <div style={{display: 'block', paddingLeft:'2em', margin:'0 !important'}}>
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Project Title</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {sessionStorage.getItem("projectname")}
                                        </p>
                                    </div>

                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Status</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.status==5?'Finished':'Not Finished'}
                                        </p>
                                    </div>
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Creator</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.projectsummary.project.creator.username||''}
                                        </p>
                                    </div>

                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Date Created</label>
                                        <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                            {this.state.projectsummary.project.createdtime.slice(0,10)||''}
                                        </p>
                                    </div>
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                                <label className="form-label" style={{marginTop: '20px'}}>Description</label>
                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                    {this.state.projectsummary.project.description||''}
                                </p>
                                <Divider style={{marginLeft:'0'}}/>

                                <div className="row">
                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Assigned Suppliers</label>
                                        {(this.state.projectsummary.project.assignedsupplier||[]).map((item)=>{
                                            return(
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {item}
                                                </p>
                                            )
                                        })}                                                                
                                    </div>    

                                    <div className="col">
                                        <label className="form-label" style={{marginTop: '20px'}}>Assigned Validators</label>
                                        {(this.state.projectsummary.project.assignedvalidator||[]).map((item)=>{
                                            return(
                                                <p style={{paddingLeft:"3em",color:'rgba(0,0,0,.87)',fontFamily:'Poppins',fontSize:'16px'}}>
                                                    {item}
                                                </p>
                                            )
                                        })}
                                    </div>                     
                                </div>
                                <Divider style={{marginLeft:'0'}}/>

                            </div>
                        </div>
                        
                        {this.state.status==5?
                            <div id="projectdetailtable" style={{marginTop:'1em'}}>
                                <Header as='h1' style={{paddingLeft:'5px'}}>Content:</Header>
                                {(this.state.projectsummary.summary||[]).map((item)=>{
                                return(
                                    <div className="form-card" style={{width:'100%', marginTop:'2em'}}>
                                        <center><label className="form-label" style={{fontSize:'25px', fontWeight:'600', marginBottom:'1em'}}>Principle: {item.principle}</label></center>
                                        {(item.principlecontent||[]).map((subItem)=>{
                                            return(
                                                <div>
                                                    <label className="form-label"
                                                        style={{ marginLeft:'1em',marginBottom:'1em', marginTop:'2em', fontSize:'22px', fontWeight:'600'}}>
                                                        Segment: {subItem.segment}
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
                                                                                <span style={{fontWeight:'600'}}>Supplier Answer:</span>
                                                                                <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                    {quesItem.youranswer == 1 ? 'No' : quesItem.youranswer}
                                                                                </span>
                                                                            </label>

                                                                            <label className="form-label" 
                                                                                style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                                <span style={{fontWeight:'600'}}>Correct Answer:</span>
                                                                                <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                    {quesItem.answer == -1 ? 'Yes' : quesItem.answer == 1 ? 'No' : 'No correct answer for this question'}
                                                                                </span>
                                                                            </label>

                                                                            <label className="form-label" 
                                                                                style={{display:'block', marginBottom:'1em', fontSize:'16px', fontWeight:'400'}}>
                                                                                <span style={{fontWeight:'600'}}>Point:</span>
                                                                                <span style={{marginLeft:'1em', fontFamily:'Poppins'}}>
                                                                                    {quesItem.point}
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
                        :""}

                    </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

export default  Project4Summary
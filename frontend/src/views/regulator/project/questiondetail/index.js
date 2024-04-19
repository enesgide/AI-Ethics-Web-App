import React, {Component} from 'react'
import './questiondetail.scss'
import 'semantic-ui-css/semantic.min.css'
import {message} from 'antd'
import {getQuestionnaireDetail3,postAddComment3,postAddSummary3,getPass3,getSendFeedback3} from '../../../../api/api'
import{
    Grid,
    Input,
    Segment,
    Button,
    Comment,
    Form,
    Container,
    Header,
    Breadcrumb,
    Label,
    Dropdown
} from 'semantic-ui-react'
import jsPDF from 'jspdf'
import 'jspdf-autotable'
import html2canvas from 'html2canvas'
// import { withRouter} from 'react-router-dom';
import {imageBase} from "./util";

import SideMenu from '../../../../component/sideMenu'
import TopHeader from '../../../../component/header'
import DropdownButton from 'antd/lib/dropdown/dropdown-button'

class QuestionDetail extends Component{
    constructor(props){
        super(props);
        this.state = {
            loading:false,
            questionDetail:{},
            projectname:'',
            comments:[],
             summarys:[],
            inputid:0,
            notSummary:[],
            pass:false,
            currentHeight : 1200
        }
        this.onGetQuestionnaireDetail3 = this.onGetQuestionnaireDetail3.bind(this);
        // this.onFindComment = this.onFindComment.bind(this);
        this.handAddComment=this.handAddComment.bind(this);
        this.handleInputComment = this.handleInputComment.bind(this);
        this.handAddSummary = this.handAddSummary.bind(this);
        this.handleInputSummary = this.handleInputSummary.bind(this);
        this.handleSendFeedback = this.handleSendFeedback.bind(this);
        this.handlePass = this.handlePass.bind(this);
        this.gotoBack = this.gotoBack.bind(this);
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
            console.log(1,this.state.projectname);
          }
          if(token == null || token == -1){
              this.gotoHome();
              
          }else{
             // this.onGetQuestionLis(token)
             this.onGetQuestionnaireDetail3(token)
          }
    }
 
    componentWillUnmount(){
     console.log("un");
     sessionStorage.removeItem("projectname");
   }

   onGetQuestionnaireDetail3 = (token)=>{
        let projectname = ''
        projectname = sessionStorage.getItem("projectname")
        this.setState({
            loading:true
        })
        getQuestionnaireDetail3(projectname,{},{token}).then((res)=>{
            let questionDetail = res;
            var notSummary = []
            res.content.forEach((item)=>{
                notSummary= item.principlecontent.find((item2)=>{
                    return item2.checksummary==0
                })
            })
            this.setState({
                questionDetail:questionDetail,
                loading:false,
                notSummary:notSummary
            })
        }).catch((error)=>{
            message.config({duration: 5});
            message.error(error);
            this.setState({
              loading:false
            })
        })
   }

   handleInputComment = (e)=>{
       const commentid = parseInt(e.target.id);
       const comment = e.target.value;
       const comments = this.state.comments;
       var live = false;
       comments.map((item)=>{
           if(item.commentid==commentid){
               item.comment=comment;
               live=true;
           }
       })
       if(!live){
           comments.push({comment:comment,commentid:commentid});
           this.setState({
               comments:comments
           })
       }else{
           this.setState({
               comments:comments
           })
       }
       console.log(comments);
   }

   handAddComment = (e)=>{
       console.log(e);
        const comments = this.state.comments;
        const commentid = parseInt(e.target.id);
        const passed = parseInt(e.target.dataset.passed)
        var comment ={};
        comments.forEach((item)=>{
            console.log(item);
            if(item.commentid==commentid){
                comment=item;
            }
        })
       if(comment.commentid==e.target.id){
            this.setState({
            loading:true
            })
            if(comment.comment==''){
            message.error('nothing input,please input again!');
            this.setState({
                loading:false
            })
            }else{
                let token = sessionStorage.getItem("token");
                let projectname = sessionStorage.getItem("projectname")
                let principleObj = {subquesid:commentid,comment:comment.comment,passed: passed}
                postAddComment3(projectname,principleObj,{token}).then((res)=>{
                    const index = comments.indexOf(comment);
                    comments[index].comment='';
                    this.setState({
                        comments:comments,
                        loading:false
                    })
                    message.config({duration:5});
                    message.success(res);
                    this.onGetQuestionnaireDetail3(sessionStorage.getItem("token"))
                }).catch((error)=>{
                    const index = comments.indexOf(comment);
                    comments[index].comment='';
                    this.setState({
                        comments:comments,
                        loading:false
                    })
                    message.config({duration:5});
                    message.error(error)
                })
            }
       }else{
        message.error('error');
       }
  }

  handleInputSummary = (e)=>{
    const summaryid = parseInt(e.target.id);
    const summary = e.target.value;
    const summarys = this.state.summarys;
    var live = false;
    summarys.map((item)=>{
        if(item.summaryid==summaryid){
            item.summary=summary;
            live=true;
        }
    })
    if(!live){
       summarys.push({summary:summary,summaryid:summaryid});
        this.setState({
           summarys:summarys
        })
    }else{
        this.setState({
           summarys:summarys
        })
    }
    console.log(summarys);
}

  handAddSummary = (e)=>{
    console.log(e);
    const summarys = this.state.summarys;
    const summaryid = parseInt(e.target.id);
    console.log(this.state.summarys);
    var summary ={};
    summarys.forEach((item)=>{
        console.log(item);
        if(item.summaryid==summaryid){
            summary=item;
        }
    })
    if(summary.summaryid==e.target.id){
         this.setState({
         loading:true
         })
         if(summary.summary==''){
         message.error('nothing input,please input again!');
         this.setState({
             loading:false
         })
         }else{
             let token = sessionStorage.getItem("token");
             let projectname = sessionStorage.getItem("projectname")
             let principleObj = {segmentid:summaryid,comment:summary.summary}
             postAddSummary3(projectname,principleObj,{token}).then((res)=>{
                 const index = summarys.indexOf(summary);
                 summarys[index].summary='';
                 this.setState({
                     summarys:summarys,
                     loading:false
                 })
                 message.config({duration:5});
                 message.success(res);
                 this.onGetQuestionnaireDetail3(sessionStorage.getItem("token"))
             }).catch((error)=>{
                 const index = summarys.indexOf(summary);
                 summarys[index].summary='';
                 this.setState({
                     summarys:summarys,
                     loading:false
                 })
                 message.config({duration:5});
                 message.error(error)
             })
         }
    }else{
     message.error('error');
    }
}

    handlePass=()=>{
        let projectname = sessionStorage.getItem("projectname");
        this.setState({
            loading:true
        })
        let token = sessionStorage.getItem("token")
        getPass3(projectname,{},{token}).then((res)=>{
            this.setState({
                loading:false
            })
            this.onGetQuestionnaireDetail3(sessionStorage.getItem("token"))
            message.success("pass success")
        }).catch((error)=>{
            this.setState({
                loading:false
            })
            message.config({duration:5});
            message.error(error)
        })
    }

    handleSendFeedback=()=>{
        let projectname = sessionStorage.getItem("projectname");
        this.setState({
            loading:true
        })
        let token = sessionStorage.getItem("token")
        getSendFeedback3(projectname,{},{token}).then((res)=>{
            this.setState({
                loading:false
            })
            this.onGetQuestionnaireDetail3(sessionStorage.getItem("token"))
            message.success("send feedback success")
        }).catch((error)=>{
            this.setState({
                loading:false
            })
            message.config({duration:5});
            message.error(error)
        })
    }

    gotoBack=()=>{
        this.props.history.go(-1)
    }

    printPDF() {
        this.setState({
            loading: true
        })

        var projectdetail = document.getElementById("projectdetailtable");
        var HTML_Width = projectdetail.offsetWidth;
        var HTML_Height = projectdetail.offsetHeight;
        var top_left_margin = 15;

        var PDF_Width = 800;
        var PDF_Height = 1200;

        var canvas_image_width = HTML_Width;
        var canvas_image_height = HTML_Height;
        var totalPDFPages = Math.ceil(HTML_Height/PDF_Height)-1;

        const doc = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        doc.setFont("helvetica");
        doc.setTextColor(46, 128,186);

        // var today = new Date();
        // let finalY0 = top_left_margin;
        // doc.setFontSize(38);
        // doc.text('Summary of Assurance of AI Ethics test', HTML_Width/2 - top_left_margin, HTML_Height/5, 'center');
        // doc.setFontSize(32);
        // doc.text('Generated by Ethical AI Validation Platform', HTML_Width/2 - top_left_margin, HTML_Height/5+60, 'center');
        // doc.setFontSize(26);
        // doc.text('Date: '+today.toLocaleDateString(), HTML_Width/2 + top_left_margin, HTML_Height/5+90, 'center');
        // doc.setFontSize(32);
        // finalY0 = HTML_Height/5 + 150;
        // let projectname = sessionStorage.getItem("projectname");
        // doc.text('Project: ' + projectname, HTML_Width/2 - top_left_margin, finalY0, {align:'center'});
        var today = new Date();
        let finalY0 = top_left_margin;
        doc.addImage(  imageBase , 'jpeg', 0, 0, PDF_Width, this.state.currentHeight);
        doc.setFont("helvetica");
        doc.setTextColor(242, 242,235);
        doc.setFontSize(30);
        doc.text('Summary of Assurance of AI Ethicss', PDF_Width/2 - top_left_margin, this.state.currentHeight/2-60, 'center');
        doc.setFontSize(35);
        doc.text('Generated by Ethical AI Validation Platform', PDF_Width/2 - top_left_margin, this.state.currentHeight/2, 'center');
        doc.setFontSize(48);
        doc.text(sessionStorage.getItem("projectname"),PDF_Width/2 + top_left_margin, this.state.currentHeight/2+60, 'center')
        doc.setFontSize(30);
        doc.text('Date: '+today.toLocaleDateString(), PDF_Width/2 + top_left_margin, this.state.currentHeight/2+120, 'center');
        doc.setFontSize(30);
        doc.text('Data Science Institute', PDF_Width/2 - top_left_margin,  this.state.currentHeight/1.1, {align:'center'});
        doc.addPage();
        doc.setTextColor(14,14,15);
        doc.text("Created time", PDF_Width/2 - top_left_margin, this.state.currentHeight/6, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.questionDetail.createdtime.split("T")[0],PDF_Width/2 - top_left_margin, this.state.currentHeight/5, {align:'center'} )
        doc.setFontSize(30);

        doc.text("Creator", PDF_Width/2 - top_left_margin, this.state.currentHeight/4, {align:'center'})
        doc.setFontSize(25)
        doc.text(this.state.questionDetail.creator, PDF_Width/2 - top_left_margin, this.state.currentHeight/3.6, {align:'center'})
        doc.setFontSize(30);
        doc.text("Principle", PDF_Width/2 - top_left_margin, this.state.currentHeight/2.8, {align:'center'})
        doc.setFontSize(25)

        doc.text(this.state.questionDetail.content[0].principle, PDF_Width/2 - top_left_margin, this.state.currentHeight/2.6, {align:'center'})


        // doc.addPage();
        html2canvas(projectdetail, {
            allowTaint:true,
            useCORS: true,
        }).then(canvas => {

            let finalY1 = top_left_margin + 30;

            // doc.setFontSize(35);
            // // doc.setTextColor(46, 128, 186);
            // doc.setTextColor(66,64,227);
            // doc.text('Content', PDF_Width/2 - top_left_margin, finalY1+60, {align:'center'});
            // finalY1 = finalY1 + top_left_margin*2;
            //
            // doc.setFontSize(26);
            // doc.text('Principle: '+ this.state.questionDetail.content[0].principle, top_left_margin*8, finalY1 + 120, {align:'left'});
            // finalY1 = finalY1 + top_left_margin*2;
            // doc.setFontSize(22);


            var questionDetail = this.state.questionDetail.content[0].principlecontent;
            console.log(questionDetail);

            // doc.setTextColor(66,64,227);
            // doc.text(this.state.questionDetail.content[0].principle, top_left_margin*8, finalY1 + 160, {align:'left'});
            // finalY1 = finalY1 + top_left_margin*6;

            let fontSize = 25;
            doc.setTextColor(14,14,15);
            for(var i = 0; i < questionDetail.length; i++){

                for (var j = 0; j < questionDetail[i].segmentcontent.length; j++){
                    for( var k = 0; k < questionDetail[i].segmentcontent[j].questioncontent.length; k++){
                        doc.addPage();
                       doc.setFont("helvetica", "bold");

                        doc.text(doc.splitTextToSize("Segment" + (parseInt(i)+1)  +": " + questionDetail[i].segment, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1, {align:'left'});
                        doc.setFont("helvetica", "bold");

                        doc.text("Question" + (parseInt(j)+1) +":", top_left_margin*8, finalY1+50, {align:'left'})
                        doc.setFont("helvetica", "normal");

                        doc.text(doc.splitTextToSize(  questionDetail[i].segmentcontent[j].question, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+fontSize*3, {align:'left'});


                        doc.setFont("helvetica", "bold");


                        doc.text("Subquestion" + (parseInt(k)+1) +":", top_left_margin*8, finalY1+fontSize*7, {align:'left'})

                        doc.setFont("helvetica", "normal");

                        doc.text(doc.splitTextToSize(  questionDetail[i].segmentcontent[j].questioncontent[k].subquestion, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+fontSize*8, {align:'left'});

                        doc.setFont("helvetica", "bold");

                        doc.text("Answer: ", top_left_margin*8, finalY1+fontSize*11, {align:'left'})

                        doc.setFont("helvetica", "normal");

                        doc.text(doc.splitTextToSize(questionDetail[i].segmentcontent[j].questioncontent[k].answer, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+fontSize*12,{align:'left'})

                        doc.setFont("helvetica", "bold");

                        doc.text(doc.splitTextToSize("Comment: ", PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+fontSize*14,{align:'left'})
                        doc.setFont("helvetica", "normal");
                       // doc.addPage();
                        for(var w = 0; w < questionDetail[i].segmentcontent[j].questioncontent[k].quescomment.length; w ++){
                           // console.log(questionDetail[i].segmentcontent[j].questioncontent[k].quescomment[w]);
                           doc.text(doc.splitTextToSize(questionDetail[i].segmentcontent[j].questioncontent[k].quescomment[w].commenter,PDF_Width-top_left_margin*10), top_left_margin*8, finalY1*w+80+fontSize*15,{align:'left'})

                           doc.text(doc.splitTextToSize(questionDetail[i].segmentcontent[j].questioncontent[k].quescomment[w].comment + " " + questionDetail[i].segmentcontent[j].questioncontent[k].quescomment[w].commenttime.split("T")[0], PDF_Width-top_left_margin*10), top_left_margin*8, finalY1*w+67+fontSize*14 + (fontSize * 2.4),{align:'left'})
                     //  doc.text(doc.splitTextToSize(questionDetail[i].segmentcontent[j].questioncontent[k].quescomment[w].commenter, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1+fontSize*14 + (fontSize * 2.4),{align:'left'})

                        }
                    }
                }

            }

            for (var i =0; i<questionDetail.length;i++){

                doc.addPage();
                for (var j = 0; j < questionDetail[i].segmentcontent.length; j++){
                    doc.setFont("helvetica", "bold");

                    doc.text(doc.splitTextToSize("Segment" + (parseInt(i)+1)  +": " + questionDetail[i].segment, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1*2, {align:'left'});
                    doc.setFont("helvetica", "bold");

                    doc.text("Question" + (parseInt(j)+1) +":", top_left_margin*8, finalY1*(4+j*4), {align:'left'})
                    doc.setFont("helvetica", "normal");

                    doc.text(doc.splitTextToSize(  questionDetail[i].segmentcontent[j].question, PDF_Width-top_left_margin*10), top_left_margin*8, finalY1*(5+j*4), {align:'left'});

                    doc.setFont("helvetica", "bold");

                    doc.text("Summarization:" + questionDetail[i].segmentcomment, top_left_margin*8, finalY1*(7+j*4), {align:'left'})



                }



            }

            // questionDetail.map((item) => {
            //     console.log(item);
            //
            //
            //
            //     doc.text("Segment: " + item.segment, top_left_margin*8, finalY1 + 160, {align:'left'});
            //     finalY1 = finalY1 + top_left_margin*6;
            //     doc.setTextColor(14,14,15);
            //
            // })
            // canvas.getContext('2d');
            // var imgUri1 = canvas.toDataURL("image/jpeg", 1.0);
            // doc.setFontSize(26);
            //
            // doc.addPage();
            // let finalY1 = top_left_margin + 30;
            // doc.setFontSize(26);
            // doc.setTextColor(46, 128, 186);
            // doc.text('Content:', HTML_Width/2 - top_left_margin, finalY1, {align:'center'});
            // doc.addImage(imgUri1, 'jpeg', top_left_margin, finalY1+top_left_margin, canvas_image_width, canvas_image_height);
            //
            // for(var i=1; i<=totalPDFPages; i++) {
            //     doc.addPage();
            //     doc.addImage(imgUri1, 'jpeg', top_left_margin, (top_left_margin*4) - (PDF_Height*i), canvas_image_width, canvas_image_height);
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
    }

    // Places the selected law into state for that particular question
    handleLawSelection = (event, data) => {
        this.setState({ selectedLaw: data.value }); // Update selectedLaw with the selected value
    }

    // Places the selected clause into state for that particular question
    handleClauseSelection = (event, data) => {
        this.setState({ selectedClause: data.value }); // Update selectedClause with the selected value
    }

    render(){
        // This is where all the laws need to be loaded to be used in the dropdown menus
        const lawOptions = [
            { value: 'law one', text: 'Law one' },
            { value: 'law two', text: 'law two' },
            { value: 'law three', text: 'Law three' },
            { value: 'law four', text: 'law four' }
        ];

        const clauseOptions = [
            { value: 'clause one', text: 'clause one' },
            { value: 'clause two', text: 'clause two' },
            { value: 'clause three', text: 'clause three' },
            { value: 'clause four', text: 'clause four' }
        ];

        console.log(this.state.questionDetail);
        return(
            <div className="Validator-pro-ques-detail" style={{backgroundColor:'#f3f3f3'}}>
                <Grid columns={2}>
                    <Grid.Column style={{width:'220px'}}>
                        <SideMenu/>
                    </Grid.Column>
                    <Grid.Column style={{width:'calc(100% - 220px)'}}>
                    <TopHeader/>
                      <div id="projectdetailtable" className="content" style={{marginTop:'3em',border:'none',marginLeft:'3em', boxShadow: 'none', marginRight:'3em'}}>
                        <h2 style={{fontSize: '3rem', fontFamily:'Poppins', fontWeight:'500'}}> Questionnaire Report - {sessionStorage.getItem("projectname")}</h2>
                        

                        
                    
                        {(this.state.questionDetail.content||[]).map((item)=>{
                                return(
                                    (item.principlecontent||[]).map((segItem)=>{
                                            return(
                                                (segItem.segmentcontent||[]).map((quesItem)=>{
                                                    return(
                                                        (quesItem.questioncontent||[]).map((subQuesItem)=>{
                                                        
                                                                if(subQuesItem.check==0){
                                                                    return(
                                                                        <div className="project-row question-item" style={{marginBottom:'2em', border: 'none'}}>
                                                                            <Grid columns={2} >
                                                                                <Grid.Column width={8}>
                                                                                    <div className="question-context">
                                                                                        {/* <h3>Segment {item.principlecontent.indexOf(segItem)+1}: </h3> */}
                                                                                        <h1 style={{marginLeft:"0em",fontSize:'32px'}}>{segItem.segment}</h1>
                                                                                        <h3 className='text-muted'>Question {segItem.segmentcontent.indexOf(quesItem)+1}: </h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}>{quesItem.question}</p>
                                                                                        <h3 className='text-muted'>SubQuestion {quesItem.questioncontent.indexOf(subQuesItem)+1}:</h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}> {subQuesItem.subquestion}</p>
                                                                                        <Container>
                                                                                            <Header as="h4">Supplier's Answer:</Header>
                                                                                            {subQuesItem.answer==1?<p className="answer">No</p>:(
                                                                                                (subQuesItem.answer||'').match(new RegExp("^link.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>Submit Link：{subQuesItem.answer.slice(5)}</p>
                                                                                                </div>
                                                                                                :(
                                                                                                    (subQuesItem.answer||'').match(new RegExp("^submitfile.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>SubmitFile Path：{subQuesItem.answer.slice(9)}</p>
                                                                                                </div>
                                                                                                :
                                                                                                <div className="answer">
                                                                                                    <p>Text：{subQuesItem.answer}</p>
                                                                                                </div>
                                                                                                )
                                                                                            )}
                                                                                        </Container>
                                                                                    </div>
                                                                                </Grid.Column>
                                                                                <Grid.Column width={8}>
                                                                                <div className="question-comment" style={{minHeight:'90%', border: 'none', padding:'10px'}}> 
                                                                                    {/* <Form reply>
                                                                                    <Form.TextArea className="text" rows="5" id ={subQuesItem.subquesid} onChange={this.handleInputComment} placeHolder="Please add a comment before pass/fail..."/>
                                                                                    <Form.Group inline style={{marginTop:'5em'}}>
                                                                                        <Button positive data-passed="1" primary id ={subQuesItem.subquesid} onClick={this.handAddComment} style={{marginRight:'1em'}} >Pass</Button>
                                                                                        <Button negative data-passed="0"  id ={subQuesItem.subquesid} onClick={this.handAddComment}  >Fail</Button>
                                                                                    </Form.Group>
                                                                                     </Form> */}
                                                                                    <Dropdown
                                                                                        placeholder='Select Law'
                                                                                        fluid
                                                                                        search
                                                                                        selection
                                                                                        options={lawOptions}
                                                                                        onChange={this.handleLawSelection}
                                                                                        style={{marginBottom:'15px'}}
                                                                                    />
                                                                                    <div style={{ marginBottom: '25px' }}>
                                                                                        Selected: {this.state.selectedLaw ? this.state.selectedLaw : 'No law selected.'}
                                                                                    </div>
                                                                                    <Dropdown
                                                                                        placeholder='Select Clause'
                                                                                        fluid
                                                                                        search
                                                                                        selection
                                                                                        options={clauseOptions}
                                                                                        onChange={this.handleClauseSelection}
                                                                                        style={{marginBottom:'15px'}}
                                                                                    />
                                                                                    <div style={{ marginBottom: '25px' }}>
                                                                                        Selected: {this.state.selectedClause ? this.state.selectedClause : 'No clause selected.'}
                                                                                    </div>
                                                                                </div>
                                                                                </Grid.Column>
                                                                            </Grid>
                                                                        </div>
                                                                    )
                                                                }else if(subQuesItem.check==2){
                                                                    return(
                                                                        <div className="question-item finished project-row" style={{marginBottom:'2em', border: 'none'}}>
                                                                            <Grid columns={2}>
                                                                                <Grid.Column width={8}>
                                                                                    <div className="question-context">
                                                                                        <h3>Segment{item.principlecontent.indexOf(segItem)+1}: </h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}>{segItem.segment}</p>
                                                                                        <h3>Question{segItem.segmentcontent.indexOf(quesItem)+1}: </h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}>{quesItem.question}</p>
                                                                                        <h3>SubQuestion {quesItem.questioncontent.indexOf(subQuesItem)+1}:</h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}> {subQuesItem.subquestion}</p>
                                                                                        <Container>
                                                                                            <Header as="h4">Answer:</Header>
                                                                                            {subQuesItem.answer==1?<p className="answer">No</p>:(
                                                                                                (subQuesItem.answer||'').match(new RegExp("^link.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>Submit Link：{subQuesItem.answer.slice(5)}</p>
                                                                                                </div>
                                                                                                :(
                                                                                                   ( subQuesItem.answer||'').match(new RegExp("^submitfile.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>SubmitFile Path：{subQuesItem.answer.slice(9)}</p>
                                                                                                </div>
                                                                                                :
                                                                                                <div className="answer">
                                                                                                    <p>Text：{subQuesItem.answer}</p>
                                                                                                </div>
                                                                                                )
                                                                                            )}
                                                                                        </Container>
                                                                                    </div>
                                                                                </Grid.Column>
                                                                                <Grid.Column width={8}>
                                                                                {/* <div className="question-comment" style={{minHeight:'90%', border: 'none', padding:'10px', backgroundColor:'#D5E8D4'}}>
                                                                                    <Comment className='form-card' style={{marginBottom:'1em', padding:'10px'}}>
                                                                                        {(subQuesItem.quescomment||[]).map((item)=>{
                                                                                            return(
                                                                                                <Comment.Content >
                                                                                                    <Comment.Author as='a' style={{display:"inline-block"}} >{item.commenter}&nbsp;&nbsp;</Comment.Author>
                                                                                                    <Comment.Metadata style={{display:"inline-block" ,fontSize:"10px"}}>
                                                                                                        {item.commenttime.slice(0,10)}
                                                                                                    </Comment.Metadata>
                                                                                                    <Comment.Text className="content">- {item.comment}</Comment.Text>
                                                                                                </Comment.Content>
                                                                                                )
                                                                                                
                                                                                            })}
                                                                                    </Comment> */}
                                                                                    {/* <Form reply>
                                                                                    <Input label='Comment' maxlength="80" large/>
                                                                                    <Button content='Add' labelPosition='left' icon='edit' primary />
                                                                                    </Form> */}
                                                                                {/* </div> */}
                                                                                </Grid.Column>
                                                                            </Grid>
                                                                        </div>
                                                                    )
                                                                }else if (subQuesItem.check==1){
                                                                    return(

                                                                        <div className="question-item finished project-row" style={{backgroundColor: "#F8CECC", marginBottom:'2em', border:'none'}}>
                                                                            <Grid columns={2}>
                                                                                <Grid.Column width={8}>
                                                                                    <div className="question-context">
                                                                                        <h3>Segment{item.principlecontent.indexOf(segItem)+1}: </h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}>{segItem.segment}</p>
                                                                                        <h3>Question{segItem.segmentcontent.indexOf(quesItem)+1}: </h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}>{quesItem.question}</p>
                                                                                        <h3>SubQuestion {quesItem.questioncontent.indexOf(subQuesItem)+1}:</h3>
                                                                                        <p style={{marginLeft:"1.5em",fontSize:'16px'}}> {subQuesItem.subquestion}</p>
                                                                                        <Container>
                                                                                            <Header as="h4">Answer:</Header>
                                                                                            {subQuesItem.answer==1?<p className="answer">No</p>:(
                                                                                                (subQuesItem.answer||'').match(new RegExp("^link.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>Submit Link：{subQuesItem.answer.slice(5)}</p>
                                                                                                </div>
                                                                                                :(
                                                                                                   ( subQuesItem.answer||'').match(new RegExp("^submitfile.*$"))?
                                                                                                <div className="answer">
                                                                                                    <p>Yes </p>
                                                                                                    <p>SubmitFile Path：{subQuesItem.answer.slice(9)}</p>
                                                                                                </div>
                                                                                                :
                                                                                                <div className="answer">
                                                                                                    <p>Text：{subQuesItem.answer}</p>
                                                                                                </div>
                                                                                                )
                                                                                            )}
                                                                                        </Container>
                                                                                    </div>
                                                                                </Grid.Column>
                                                                                <Grid.Column width={8}>
                                                                                <div className="question-comment" style={{minHeight:'90%', border: 'none', padding:'10px', backgroundColor: '#F8CECC'}}>
                                                                                    {/* <Comment className='form-card' style={{marginBottom:'1em', padding:'10px'}}>
                                                                                    <Comment>
                                                                                        {(subQuesItem.quescomment||[]).map((item)=>{
                                                                                            return(
                                                                                                <Comment.Content >
                                                                                                    <Comment.Author as='a' style={{display:"inline-block"}} >{item.commenter}&nbsp;&nbsp;</Comment.Author>
                                                                                                    <Comment.Metadata style={{display:"inline-block" ,fontSize:"12px"}}>
                                                                                                        {item.commenttime.slice(0,10)}
                                                                                                    </Comment.Metadata>
                                                                                                    <Comment.Text className="content">- {item.comment}</Comment.Text>
                                                                                                </Comment.Content>
                                                                                                )

                                                                                            })}
                                                                                    </Comment>
                                                                                    </Comment>
                                                                                    <Form reply style={{margin:'0px'}}> */}
                                                                                    {/* <h2 style={{display:'inline-block',marginTop:"1em", fontSize:"20px", marginLeft:"5px"}}>Comment</h2> */}
                                                                                    {/* <Form.TextArea className="text" rows="5" id ={subQuesItem.subquesid} onChange={this.handleInputComment} placeHolder="Please add a comment before pass/fail..."/>
                                                                                    <Form.Group inline style={{marginTop:'5em'}}>
                                                                                        <Button positive data-passed="1" primary id ={subQuesItem.subquesid} onClick={this.handAddComment} style={{marginRight:'1em'}} >Pass</Button>
                                                                                        <Button negative data-passed="0"  id ={subQuesItem.subquesid} onClick={this.handAddComment}  >Fail</Button>
                                                                                    </Form.Group>
                                                                                     </Form> */}
                                                                                </div>
                                                                                </Grid.Column>
                                                                            </Grid>
                                                                        </div>
                                                                    )
                                                                }
                                                        })
                                                    )
                                                })
                                            )
                                        
                                    })
                                )
                            
                            
                        })}
                        {(this.state.questionDetail.content||[]).map((item)=>{
                            return(
                                (item.principlecontent||[]).map((segItem)=>{
                                    var flag = false;
                                    var checknum = 0;
                                    var arrLen =0;
                                    segItem.segmentcontent.forEach((quesItem)=>{
                                            arrLen+=quesItem.questioncontent.length;
                                            checknum+=quesItem.questioncontent.filter((subQuesItem)=>{
                                                return(
                                                    subQuesItem.check==2
                                                )
                                            }).length
                                        
                                    })
                                    console.log(arrLen,checknum);
                                    checknum==arrLen?flag=true:flag=false;
                                    console.log(flag);

                                    if(flag){
                                        if(segItem.checksummary==0){
                                            return(
                                                <Segment className="question-item ">
                                                    <h3>Segement {item.principlecontent.indexOf(segItem)+1}: {segItem.segment}</h3>
                                                    <Container style={{width:"95%"}}>
                                                        {(segItem.segmentcontent||[]).map((quesItem)=>{
                                                            return(
                                                                <Header as="h4">Question {segItem.segmentcontent.indexOf(quesItem)+1}:{quesItem.question}</Header>
                                                            )
                                                            
                                                        })}
                                                    </Container>
                                                    <Form reply >
                                                        <Label style={{marginTop:"1em", fontSize:"16px"}}>Summarization</Label>
                                                        <Form.TextArea style={{marginTop:"1px"}} rows="3" id={segItem.segmentid} onChange={this.handleInputSummary}/>
                                                        <Button primary id={segItem.segmentid} style={{ display:" block" ,marginTop:"0.5em"}} onClick={this.handAddSummary} Tiny>Add</Button>
                                                    </Form>
                                                </Segment>
                                            )
                                        }else if(segItem.checksummary==1){
                                            return(
                                                <Segment className="question-item finished">
                                                    <h3>Segement {item.principlecontent.indexOf(segItem)+1}: {segItem.segment}</h3>
                                                    <Container style={{width:"95%"}}>
                                                        {(segItem.segmentcontent||[]).map((quesItem)=>{
                                                           return(
                                                            <Header as="h4">Question {segItem.segmentcontent.indexOf(quesItem)+1}:{quesItem.question}</Header>
                                                        )
                                                        })}
                                                    </Container>
                                                    <Form reply style={{marginTop:"1.5em"}} >
                                                        <Header as="h3">Summarization: <p style={{width:"95%", marginLeft:"2.5%"}}>{segItem.segmentcomment}</p></Header>
                                                        </Form>
                                                </Segment>
                                            )
                                        }else{
                                            return(
                                                <Segment className="question-item error">
                                                    <h3>Segement {item.principlecontent.indexOf(segItem)+1}: {segItem.segment}</h3>
                                                    <Container>
                                                        {(segItem.segmentcontent||[]).map((quesItem)=>{
                                                           return(
                                                            <Header as="h4" style={{margin:"0 0"}}>Question {segItem.segmentcontent.indexOf(quesItem)+1}:{quesItem.question}</Header>
                                                        )
                                                        })}
                                                    </Container>
                                                </Segment>
                                            )
                                        }
                                    }else{
                                        return ("")
                                    }
                                    
                                })
                            )
                        })}
                        
                        {this.state.questionDetail.finished? <Button positive onClick={this.printPDF}>Download as PDF test1</Button>:
                        (this.state.notSummary||[]).length==0?
                        <div style={{overflow:"hidden", float:"left"}}>
                            <Button positive onClick={this.handlePass} style={{width:"100px"}}>Pass</Button>
                        </div>
                        :<div> {/*<span>finished comment and summary,and you can use  buttons</span> */}
                        &nbsp;&nbsp;<Button positive onClick={this.handleSendFeedback}>Send Feedback</Button>
                        &nbsp;&nbsp;<Button positive secondary onClick={this.gotoBack}>Save and Exit</Button></div>}
                      </div>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}


export default  QuestionDetail
/* eslint-disable */
import React, {Component} from 'react'
import './index.css'
import TextTransition, {presets} from "react-text-transition";
import './index.scss'
import cssEffect from './component';
import Reveal from '../../component/reveal';
import RevealSlow from '../service/revealSlow';

const title = [
    "ETHICAL LENS (E-LENS) ASSURANCE OF AI ETHICS",
    "Access Data Bias and Model Bias Faithfully",
    "Provide Mitigation Approaches for Assurance of AI Ethnics Objectively",
    "Assess Compliance of AI with Ethical Principles Qualitatively",
    "Evaluate Quality of AI Explanations Quantitatively",
    "Report the Assurance of AI Ethics Evidently"
];

const content = [
    "Unique and extensible tools to make AI ethnics assurance accessible for customers with collaborative testing easily",
    "Innovative quantitative approaches to estimate data boas and model bias respectively and faithfully to understand AI fairness",
    "Effective opearble approaches to mitigate AI ethnics issues with systematic analysis of AI solutions",
    "Comprehensive qualitative approaches to make the assessment of ethical principles for AI simple and operable",
    "Advanced quantitative approches to understand whether and to what extend the AI explainability achieves the defined objective",
    "Comprehensive report to summarise the compliance of AI with ethical principles for easy sharing"
];

function Index() {

    const [index,
        setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => setIndex(index => index + 1), 6000); // every 3 seconds
        
        const diamonds = document.querySelectorAll('.diamond-item');
        for (let i = 0; i < diamonds.length; i++) {
            const angle = i * 90;
            diamonds[i].style.transform = `rotate(${angle}deg) translate(350px) rotate(${-angle}deg) rotate(${-45}deg)`;
          }  

        return () => clearTimeout(intervalId);
    }, []);
    return (
        <div>
            <div id="preloader">
                <div id="status">
                    <div className="text-center"><img src='/static/picture/logo-e-lens-2.png' height="50" alt=""/>
                    </div>
                    <div className="spinner">
                        <div className="double-bounce1"></div>
                        <div className="double-bounce2"></div>
                    </div>
                </div>
            </div>

            <header id="topnav" className="defaultscroll fixed-top navbar-sticky sticky">
                <div className="nav-contents">
                    <div>
                        <a href="index.html" className="logo">
                            <img src="static/picture/logo-e-lens-2.png" alt="missing_logo" height="60"/>
                        </a>
                    </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <a className="navbar-toggle" href="##">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div id="navigation">
                        <ul className="navigation-menu">
                            <li class="has-submenu">
                                <a href="/">Home</a>
                            </li>

                            <li class="has-submenu">
                                <a href="/about">About</a>
                            </li>
                            <li className="has-submenu">
                                <a href="/service">Services</a>
                            </li>

                            <li className="has-submenu">
                                <a href="/news">News</a>
                            </li>

                            <li className="has-submenu">
                                <a href="/contact">Contact</a>
                            </li>

                            <li className="mt-3">
                                <div className="col-lg-20">
                                    <a href="/login" className="login-btn btn btn-custom mr-3">Log in</a>
                                </div>
                            </li>

                            {/* <!-- <li className="dropdown d-none d-md-inline-block">
            <a className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown" href="#" role="button"
                aria-haspopup="false" aria-expanded="false">
                <i className="fas fa-search noti-icon"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-right dropdown-menu-search">
                <div>
                    <form role="search" className="navbar-form">
                        <input type="text" placeholder="Search..." name="s" className="form-control search-bar">
                        <a href="" className="btn-search"><i className="fa fa-search"></i></a>
                    </form>
                </div>
            </div>
        </li> --> */}
                        </ul>
                    </div>                    
                </div>  
                <div className="nav-fade-out"></div>              
            </header>

            <div className="flex-container hero" style={{
                        background: `
                        linear-gradient(to bottom, rgba(245, 246, 247, 0.2), rgba(248, 250, 251, 1)),
                        url("static/picture/abstract-bg-hexa.png") center/cover
                        `,
                        borderRadius: '0'
                    }}>
                <div className="flex-left">
                    <div className="text-container">
                        <h1 id="titleGar">
                            <TextTransition
                                style={{
                                color: "#67c750"
                            }}
                                text={title[index % title.length]}
                                springConfig={presets.gentle}/></h1>

                        <p className="contentGar">
                            <TextTransition
                                style={{
                                color: "#67c750"
                            }}
                                text={content[index % content.length]}
                                springConfig={presets.gentle}/>
                        </p>

                        {/* 

                        <p
                            className="contentGar"
                            style={{
                            animationDelay: "1.6s"
                        }}>
                            unique and extensible tools to make AI ethnics assurance accessible for
                            customers with collaborative testing easily
                        </p>

                        <p
                            className="contentGar"
                            style={{
                            animationDelay: "3.2s"
                        }}>
                            Innovative quantitative approaches to estimate data boas and model bias
                            respectively and faithfully to understand AI fairness
                        </p>

                        <p
                            className="contentGar"
                            style={{
                            animationDelay: "4.8s"
                        }}>
                            Effective opearble approaches to mitigate AI ethnics issues with systematic
                            analysis of AI solutions
                        </p>

                        <p
                            className="contentGar"
                            style={{
                            animationDelay: "6.4s"
                        }}>
                            Compreensive qualitative approaches to make the assessment of ethical principles
                            for AI simple and operable
                        </p>

                        <p
                            className="contentGar"
                            style={{
                            animationDelay: "8.0s"
                        }}>
                            Advanced quantitative approches to understand whether and to what extend the AI
                            explainability achieves the defined objective
                        </p>

                        <p
                            className="contentGar "
                            style={{
                            animationDelay: "9.6s"
                        }}>
                            Comprehensive report to summarise the compliance of AI with ethical principles
                            for easy sharing
                        </p> */}

                    </div>

                </div>

                <div className="flex-right">
                    <div className="section-top"></div>
                </div>
            </div>

            {/* <!-- ABOUT US START --> */}
            <div className="card-container">
                <Reveal>
                    <section className="section custom-card">
                        <div className="custom-image-background" style={{backgroundImage: 'url("static/picture/abstract-bg-diam.png")'}}></div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 col-md-6">
                                    <img
                                        src="static/picture/four-ethical-principles-3.png"
                                        className="img-fluid rounded "
                                        alt=""/> {/* <!-- shadow --> */}
                                </div>
                                <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                    <div className="section-title ml-lg-3">
                                        <h5 class="title text-uppercase mb-4 text-center large-title-greener" style={{fontSize: "1rem !important"}}>
                                            Assurance of Ethics for Responsible and Trustworthy AI
                                        </h5>
                                        <p className="text-muted">
                                            <p>E-LENS (Ethical-LENS) provides a comprehensive and extensible tool to define
                                                a series of qualitative and quantitative metrics by which organizations can seek
                                                validations for the ethics around AI solutions.
                                            </p>
                                            <p>The outcomes got from qualitative and quantitative metrics have to meet the
                                                necessary standards so that a certificate can be issued to AI on its compliance
                                                with ethical principles. This ethics certification would apply both to the AI
                                                itself and to the company’s processes in producing AI. The certification would
                                                operate as a “trust stamp” for companies that meet relevant ethical standards
                                                and independent auditing requirements.</p>
                                        </p>
                                        <div className="mt-4 text-center">
                                            <a href="about.html" className="btn btn-custom">read more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </Reveal>
                
            </div>  
            {/* <!-- ABOUT US END --> */}            
            {/* <!-- SERVICES START --> */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-md-12">
                                <div class="mb-4 pb-2 text-center">
                                    <h1 class="title text-uppercase mb-4 large-title-greener">
                                        Our Services
                                    </h1>
                                </div>
                            <div className="section-title mb-4 pb-2 text-center">
                                <h3 class="text-center mb-4 pb-2">
                                    We provide services for various aspects of
                                    assurance of AI ethics. Innovative qualitative and quantitative approaches are
                                    utilised for the assessment of the compliance of AI with various ethical
                                    principles.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <Reveal>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Best Practice of Assurance</h4>
                                    <p className="text-muted mb-0">Provide a best practice to validate ethical
                                        principles qualitatively and quantitatively collaborating with customers.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fas fa-chalkboard-teacher"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Evaluation of AI Transparency</h4>
                                    <p className="text-muted mb-0">Evaluate the traceability, communication, and
                                        explainability of AI solutions with qualitative and quantitative metrics.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fas fa-hand-holding-heart"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fas fa-wrench"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Assessment of AI Fairness</h4>
                                    <p className="text-muted mb-0">Assess bias of data and model, and accessibility
                                        and universal design with qualitative and quantitative metrics.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fas fa-wrench"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Assessment of Accountability</h4>
                                    <p className="text-muted mb-0">Validate the auditability, negative impact,
                                        trade-offs, and ability to redress of AI solutions with innovative metrics.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fas fa-layer-group"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fab fa-sketch"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Assurance of AI Privacy</h4>
                                    <p className="text-muted mb-0">Assure the respect for privacy and data
                                        protection, and quality and integrity of data with structured checklists.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fab fa-sketch"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fa fa-adjust"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Mitigation for AI Ethics</h4>
                                    <p className="text-muted mb-0">Provide suggestions objectively to mitigate
                                        ethical issues that AI solutions have for the ethical use of AI.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fa fa-adjust"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div
                                className="types-of-service text-center border p-4 rounded position-relative overflow-hidden bg-white">
                                <div className="icon">
                                    <i className="fa fa-newspaper"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Research on AI Ethics</h4>
                                    <p className="text-muted mb-0">Conduct extensive research on AI ethics by
                                        developing advanced algorithms and innovative approaches.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fa fa-newspaper"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fa fa-users-cog"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Consulting on AI Ethics</h4>
                                    <p className="text-muted mb-0">Provide support to achieve responsible and safe
                                        use of AI with the latest AI ethical frameworks and regulations.</p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fa fa-users-cog"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded bg-white">
                                <div className="icon">
                                    <i className="fa fa-user-check"></i>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">Customised Assessment</h4>
                                    <p className="text-muted mb-0">Provide customised assessment of AI ethical
                                        principles according to client’s requirements and applications.
                                    </p>
                                </div>
                                <div className="feature-hover-icon">
                                    <i className="fa fa-user-check"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                    <Reveal>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 my-5 pt-2">
                            <div className="types-of-service text-center border p-4 rounded-15 bg-white">
                                <div className="icon">
                                    <a
                                        href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                        target="_blank">
                                        <i className="fa fa-book-open"></i>
                                    </a>
                                </div>
                                <div className="service-head mt-3">
                                    <h4 className="title">
                                        <a
                                            href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                            target="_blank">Short Course on AI Ethics</a>
                                    </h4>
                                    <p className="text-muted mb-0">Deliver a comprehensive short course on AI ethics
                                        for AI ethical challenges and key ethical principles.</p>
                                </div>
                                {/* <!-- <div className="feature-hover-icon">
                <i className="fa fa-book-open"></i>
            </div> --> */}
                            </div>
                        </div>

                        {/* <!-- <div className="col-lg-4 col-md-6 mt-4 pt-2">
        <div className="types-of-service p-4 rounded border">
            <div className="service-icon text-custom">
                <i className="fas fa-chalkboard-teacher text-custom float-left mb-0 mr-3"></i>
            </div>
            <div className="service-head overflow-hidden d-block">
                <h4 className="title">Fast processing</h4>
                <p className="text-muted mb-0">There are many variations of passages of Ipsum available alteration in some form.</p>
            </div>
            <div className="feature-hover-icon">
                <i className="fas fa-chalkboard-teacher text-custom float-left mb-0 mr-3"></i>
            </div>
        </div>
    </div> --> */}
                        {/* </div> */}
                    </div>
                    </Reveal>
                </div>
            </section>
            {/* <!-- ETHICAL PRINCIPLES START --> */}
            <section className='section' style={{paddingBottom: '200px'}}>
                <div className='container'>
                    <div className="mindmap-container">
                        <Reveal>
                        <div className='mindmap-diamond mx-auto'>
                            <div className='diamond-txt'>
                                <b className='diamond-txt' style={{fontSize: '2rem', marginBottom: '1rem'}}>AI Ethical Principles</b>
                            </div>                            

                            <div className="mindmap-line line-top-left"></div>
                            <div className="mindmap-line line-top-right"></div>
                            <div className="mindmap-line line-bottom-left"></div>
                            <div className="mindmap-line line-bottom-right"></div>

                                <div class="diamond-item text-center">
                                    <div class="diamond-content">
                                        <i class="fas fa-check text-custom" style={{ fontSize: '3rem', marginTop: '10px' }}></i>
                                        <div className="mb-0">
                                            <b style={{ fontSize: '1.2rem' }}>Accountability</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="diamond-item text-center">
                                    <div class="diamond-content">
                                        <i class="fas fa-balance-scale text-custom" style={{ fontSize: '3rem', marginTop: '10px' }}></i>
                                        <div className="mb-0">
                                            <b style={{ fontSize: '1.2rem' }}>Fairness</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="diamond-item text-center">
                                    <div class="diamond-content">
                                        <i class="fas fa-glasses text-custom" style={{ fontSize: '3rem', marginTop: '10px' }}></i>
                                        <div className="mb-0">
                                            <b style={{ fontSize: '1.2rem' }}>Transparency</b>
                                        </div>
                                    </div>
                                </div>
                                <div class="diamond-item text-center">
                                    <div class="diamond-content">
                                        <i class="fas fa-lock text-custom" style={{ fontSize: '3rem', marginTop: '10px' }}></i>
                                        <div className="mb-0">
                                            <b style={{ fontSize: '1.2rem' }}>Privacy</b>
                                        </div>
                                    </div>
                                </div>
                        </div> 
                        </Reveal>
                    </div>
                </div>
            </section>
            {/* Activities START */}
            <section className="section" hidden={true}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <h3 className="title text-uppercase mb-4">Our AI Ethics Assurance Activities</h3>
                            </div>
                        </div>
                        <div className="portfolio-box rounded position-relative overflow-hidden">
                            <a className="mfp-image" href="images/work/work-1.jpg" title="Business Post">
                                <img
                                    src="static/picture/our-activities.png"
                                    className="img-fluid"
                                    alt="member-image"/>
                            </a>
                        </div>
                    </div>

                </div>
            </section>
            {/* Activities END */}

            {/* WORK START */}
            <section className="section bg-light">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div class="mb-4 pb-2 text-center">
                                <h1 class="title text-uppercase mb-4 large-title-greener">
                                    Our Projects
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{margin: '0 15rem'}}>
                <div className="container-fluid">
                    <div className="port portfolio-masonry">
                        <div className="portfolioContainer row">
                            <div className="col-lg-3 col-md-6 mt-4 pt-2 part">
                                <div className="stakeholder-card rounded position-relative overflow-hidden">
                                    <a className="mfp-image" href="images/work/work-1.jpg" title="Business Post">
                                        <img src="static/picture/work-1.jpg" className="img-fluid" alt="member-image"/>
                                    </a>
                                    <div className="gallary-title text-center bg-light py-4">
                                        <h6>
                                            <a href="work-single.html" className="text-dark">AI Ethics Assurance for Talent Shortlisting Algorithm</a>
                                        </h6>
                                        <span className="text-muted">Human Resources</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 pt-2 part">
                                <div className="stakeholder-card rounded position-relative overflow-hidden">
                                    <a className="mfp-image" href="images/work/work-2.jpg" title="Business Post">
                                        <img src="static/picture/work-2.jpg" className="img-fluid" alt="member-image"/>
                                    </a>
                                    <div className="gallary-title text-center bg-light py-4">
                                        <h6>
                                            <a href="work-single.html" className="text-dark">AI Ethics Assurance for Water Pipe Failure Prediction</a>
                                        </h6>
                                        <span className="text-muted">Infrastructure</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 pt-2 account">
                                <div className="stakeholder-card rounded position-relative overflow-hidden">
                                    <a className="mfp-image" href="images/work/work-3.jpg" title="Business Post">
                                        <img src="static/picture/work-3.jpg" className="img-fluid" alt="member-image"/>
                                    </a>
                                    <div className="gallary-title text-center bg-light py-4">
                                        <h6>
                                            <a href="work-single.html" className="text-dark">AI Ethics Assurance for Traffic Delay Prediction</a>
                                        </h6>
                                        <span className="text-muted">Transport</span>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-4 pt-2 account">
                                <div className="stakeholder-card rounded position-relative overflow-hidden">
                                    <a className="mfp-image" href="images/work/work-4.jpg" title="Business Post">
                                        <img src="static/picture/work-4.jpg" className="img-fluid" alt="member-image"/>
                                    </a>
                                    <div className="gallary-title text-center bg-light py-4">
                                        <h6>
                                            <a href="work-single.html" className="text-dark">AI Ethics Assurance for Crop Yield Prediction</a>
                                        </h6>
                                        <span className="text-muted">Agriculture</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-4 pt-2">
                            <div className="text-center">
                                <a href="projects.html" className="btn btn-custom">See More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            {/* WORK END */}

            {/* <!-- TESTIMONIAL START--> */}
            <div className="card-container">
            <Reveal>
            <section className="section custom-card inverse-colourway">
                <div className="custom-image-background" style={{backgroundImage: 'url("static/picture/abstract-bg-wave.png")'}}></div>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="section-title mb-4 pb-2 text-center">
                                <h3 className="title text-uppercase mb-4">Happy Clients Say</h3>
                                {/* <!-- <p className="text-muted mx-auto para-desc mb-0">Donec sodales sagittis magna. Excepturi sint
                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia
                animi.</p> --> */}
                            </div>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-lg-8 pt-2">
                            <div id="owl-single" className="owl-carousel owl-theme">
                                <div className="customer-testi pt-4 px-4 pb-0 text-center">
                                    <img
                                        src="static/picture/img-1.jpg"
                                        className="img-thumbnail avatar avatar-medium rounded-pill mx-auto shadow"
                                        style={{
                                        width: 'auto'
                                    }}
                                        alt=""/>
                                    <h6 className="text-custom text-uppercase mb-0 mt-3">Harvey Z.</h6>
                                    <p className="mb-0">Founder</p>
                                    <p className="text-muted mt-3">" E-LENS validated the ethics of our AI solutions
                                        and helped us mitigated our important ethical issues.It is the world first work
                                        in my field."</p>
                                    <ul className="list-unstyled text-custom">
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>

                                <div className="customer-testi pt-4 px-4 pb-0 text-center">
                                    <img
                                        src="static/picture/img-4.jpg"
                                        className="img-thumbnail avatar avatar-medium rounded-pill mx-auto shadow"
                                        style={{
                                        width: 'auto'
                                    }}
                                        alt=""/>
                                    <h6 className="text-custom text-uppercase mb-0 mt-3">Mike R.</h6>
                                    <p className="mb-0">Founder</p>
                                    <p className="text-muted mt-3">" The comprehensive qualitative and quantitative
                                        assessment of AI ethics for our AI product allowed us to redress possible ethics
                                        issues objectively."
                                    </p>
                                    <ul className="list-unstyled text-custom">
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star"></i>
                                        </li>
                                        <li className="list-inline-item">
                                            <i className="fas fa-star-half-alt"></i>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </Reveal>
            </div>
            {/* <!-- TESTIMONIAL END --> */}
            <div className="container mw-100 px-0">
                <div className="row">
                <section className='card-container col ml-5'>
                    <div className="container">
                        <Reveal>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mt-4 mx-5 large-title-greener" style={{fontSize: "5rem"}}>
                                We're
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mx-5 large-title-greener" style={{fontSize: "5rem"}}>
                                just
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mx-5 large-title-greener" style={{fontSize: "5rem"}}>
                                getting
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mb-5 mx-5 large-title-greener" style={{fontSize: "5rem"}}>
                                started.
                            </div>
                        </Reveal>
                    </div>
                </section>
                <div className="card-container container col pl-5 mr-5">
                    <section
                        className="section custom-card"
                        style={{
                        background: 'url(static/images/bg-counter.jpg) center center',
                        maxWidth: "100%"
                    }}>
                        <div className="bg-overlay" style={{borderRadius: "20px"}}></div>
                        <div className="container">
                            <div className="row justify-content-center" id="counter">
                                <div className="col-lg-3 col-md-6 mt-4 mt-sm-0">
                                    <div className="text-center py-4 text-white">
                                        <h1>
                                            <i
                                                className="pe-7s-wristwatch"
                                                style={{
                                                color: '#a3c85e'
                                            }}></i>
                                        </h1>
                                        <h2 className="counter-value text-white" data-count="64">4</h2>
                                        <p className="counter-name mb-0">Consultings</p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 mt-4 mt-sm-0">
                                    <div className="text-center py-4 text-white">
                                        <h1>
                                            <i
                                                className="pe-7s-note2"
                                                style={{
                                                color: '#a3c85e'
                                            }}></i>
                                        </h1>
                                        <h2 className="counter-value text-white" data-count="40">10</h2>
                                        <p className="counter-name mb-0">Projects</p>
                                    </div>
                                </div>
                        </div>  
                        <div className="row justify-content-center" id='counter'>
                            <div className="col-lg-3 col-md-6 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1>
                                        <i
                                            className="pe-7s-users"
                                            style={{
                                            color: '#a3c85e'
                                        }}></i>
                                    </h1>
                                    <h2 className="counter-value text-white" data-count="23">5</h2>
                                    <p className="counter-name mb-0">Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1>
                                        <i
                                            className="pe-7s-wine"
                                            style={{
                                            color: '#a3c85e'
                                        }}></i>
                                    </h1>
                                    <h2 className="counter-value text-white" data-count="53">2</h2>
                                    <p className="counter-name mb-0">Contributors</p>
                                </div>
                            </div>
                        </div>
                            
                        </div>
                    </section>
                    </div>
                    </div>
                    </div>
                    <section className="section bg-light">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div class="mb-4 pb-2 text-center">
                                    <h1 class="title text-uppercase mb-4 large-title-greener">
                                        Our Team
                                    </h1>
                                </div>
                                <h3 class="text-center mb-4 pb-2">
                                    Our team is the industry’s leading Research & Development (R&D) team featuring
                                    world-leading:
                                </h3>
                            </div>
                        </div>
                        <div className="row my-5" style={{marginLeft: '140px', marginRight: '140px'}}>
                            <div className="col text-center stakeholder-card py-5 mx-3">
                                <RevealSlow>
                                    <div>
                                        <i class="fas fa-flask text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <div className="mb-3">
                                        <b style={{fontSize: '1.5rem'}}>Data Scientists</b>
                                    </div>
                                    <p></p>
                                </RevealSlow>
                            </div>
                            <div className="col text-center stakeholder-card py-5 mx-3">
                                <RevealSlow>
                                    <div>
                                        <i class="fas fa-industry text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <div className="mb-3">
                                        <b style={{fontSize: '1.5rem'}}>Industrial Engineers</b>
                                    </div>
                                    <p></p>
                                </RevealSlow>
                            </div>
                            <div className="col text-center stakeholder-card py-5 mx-3">
                                <RevealSlow>
                                    <div>
                                        <i class="fas fa-book text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <div className="mb-3">
                                        <b style={{fontSize: '1.5rem'}}>Law Experts</b>
                                    </div>
                                    <p></p>
                                </RevealSlow>
                            </div>
                            <div className="col text-center stakeholder-card py-5 mx-3">
                                <RevealSlow>
                                    <div>
                                        <i class="fas fa-handshake text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                    </div>
                                    <div className="mb-3">
                                        <b style={{fontSize: '1.5rem'}}>Social Scientists</b>
                                    </div>
                                    <p></p>
                                </RevealSlow>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mb-4 pt-2">
                                <div className="text-center">
                                    <a href="/about" className="btn btn-custom">See More
                                    </a>
                                </div>
                            </div>
                        </div>  
                    </section>

            {/* <!-- BLOG START --> */}
            {/*<section className="section">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row justify-content-center">*/}
            {/*            <div className="col-12">*/}
            {/*                <div className="section-title mb-4 pb-2 text-center">*/}
            {/*                    <h3 className="title text-uppercase mb-4">Latest News</h3>*/}
            {/*                    /!* <!-- <p className="text-muted mx-auto para-desc mb-0">Donec sodales sagittis magna. Excepturi sint *!/*/
        }
        {/*                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia*/
        }
        {/*                    /!* animi.</p> --> *!/*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*        <div className="row">*/}
            {/*            <div className="col-lg-4 col-md-6 mt-4 pt-2">*/}
            {/*                <div className="blog-post rounded border position-relative overflow-hidden d-block">*/}
            {/*                    <img src="static/picture/news-ai-ethics-world-first.jpg" className="img-fluid" alt="" />*/}

            {/*                    <div className="content p-3">*/}
            {/*                        <ul className="list-unstyled">*/}
            {/*                            <li className="float-right"><i className="mdi mdi-calendar"></i> Dec 08, 2020</li>*/}
            {/*                            <li><a href="#" className="text-custom "><i className="mdi mdi-bookmark"></i> Branding</a></li>*/}
            {/*                        </ul>*/}

            {/*                        <h5><a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"*/}
            {/*                            target="_blank" className="text-dark title"> A world first for ethical AI</a></h5>*/}
            {/*                        <p className="text-muted">Delivered the ‘non-biased talent shortlisting algorithm validation’*/}
            {/*                            project, a pioneering independent validation of Ethical AI.</p>*/}

            {/*                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">*/}
            {/*                            <li className="float-right"><a*/}
            {/*                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"*/}
            {/*                                target="_blank" className="readmore text-dark">Read More <i*/}
            {/*                                    className="mdi mdi-chevron-right"></i></a></li>*/}
            {/*                            <li>*/}
            {/*                                <ul className="list-unstyled">*/}
            {/*                                    <li className="d-inline-block mr-2"><a href="#" className="like text-dark"><i*/}
            {/*                                        className="mdi mdi-heart-outline"></i> <small>29</small></a></li>*/}
            {/*                                    <li className="d-inline-block"><a href="#" className="comment text-dark"> <i*/}
            {/*                                        className="mdi mdi-comment-outline"></i>*/}
            {/*                                        <small>40</small></a>*/}
            {/*                                    </li>*/}
            {/*                                </ul>*/}
            {/*                            </li>*/}
            {/*                        </ul>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* <!-- BLOG END --> */}

            {/* <!-- PARTNER START --> */}
            {/*<section className="section-two bg-light">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row">*/}
            {/*            <div className="col-lg-12 p-0">*/}
            {/*                <div className="slider autoplay">*/}
            {/*                    <div><img src="static/picture/partner-hcai-austria.png" className="mx-auto d-block img-fluid"*/}
            {/*                        alt="img-missing" /></div>*/}
            {/*                    <div><img src="static/picture/partner-theyield.svg" className="mx-auto d-block img-fluid"*/}
            {/*                        alt="img-missing" /></div>*/}
            {/*                    <div><img src="static/picture/partner-data61.png" className="mx-auto d-block img-fluid"*/}
            {/*                        alt="img-missing" /></div>*/}
            {/*                    <div><img src="static/picture/partner-facrc.svg" className="mx-auto d-block img-fluid"*/}
            {/*                        alt="img-missing" /></div>*/}
            {/*                    <div><img src="static/picture/partner-reejig.png" className="mx-auto d-block img-fluid"*/}
            {/*                        alt="img-missing" /></div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* <!-- PARTNER END --> */}
            {/* <!-- PARTNER START --> */}

            {/* <!-- PARTNER END --> */}

            {/* <!-- CONTACT END --> */}
            {/*<section className="section-two bg-custom">*/}
            {/*    <div className="container">*/}
            {/*        <div className="row justify-content-center">*/}
            {/*            <div className="col-lg-8 col-md-12">*/}
            {/*                <div className="section-title text-center">*/}
            {/*                    <h5 className="title text-light text-uppercase font-weight-normal">Do You Want To Work With E-LENS ?*/}
            {/*                    </h5>*/}
            {/*                    <div className="mt-4">*/}
            {/*                        <a href="contact.html" className="btn btn-light">Contact Us</a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</section>*/}
            {/* <!-- CONTACT END --> */}

            {/* <!-- FOOTER START --> */}
            <footer className="footer bg-dark">
                <div className="container">
                    {/* <!--Footer Info --> */}
                    <div className="row footer-info">
                        <div className="col-lg-4 col-md-12">
                            <a href="index.html" className="logo">
                                <img src="static/picture/logo-e-lens-white.png" alt="missing_logo" height="50"/>
                            </a>
                            {/* <!-- <p className="text-foot mt-4">These cases are perfectly simple and easy to free hour, when nothing */
                        }
                        {/* prevents distinguish.</p> --> */}
                            <div>
                                <ul className="list-unstyled social-icon social mt-4 mb-0">
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <i className="fab fa-apple"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <i className="fab fa-dribbble"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li className="list-inline-item">
                                        <a href="javascript:void(0)" className="rounded">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="footer-head">
                                <h6 className="title mb-0">E-LENS</h6>
                            </div>
                            <div className="footer-item mt-4">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="login.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Log in</a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            About us</a>
                                    </li>
                                    <li>
                                        <a href="service.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Services</a>
                                    </li>
                                    <li>
                                        <a href="about.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Our Team</a>
                                    </li>
                                    <li>
                                        <a href="projects.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Projects</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                            <div className="footer-head">
                                <h6 className="title mb-0">Useful</h6>
                            </div>
                            <div className="footer-item mt-4">
                                <ul className="list-unstyled mb-0">
                                    <li>
                                        <a href="http://www.hcai-lab.org" target="_blank">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Research</a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                            target="_blank">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Short Course</a>
                                    </li>
                                    <li>
                                        <a href="news.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            News</a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
                                            <i className="mdi mdi-chevron-right"></i>
                                            Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0"> */
                    }
                    {/*<div className="footer-head">*/
                    }
                    {/*    <h6 className="title mb-0">Newsletter</h6>*/
                    }
                    {/*</div>*/
                    }
                    {/*<div className="footer-news mt-4">*/
                    }
                    {/*    <p className="text-foot">Subscribe to our email newsletter to receive useful articles and special*/
                    }
                    {/*        offers.</p>*/
                    }
                    {/*    <form>*/
                    }
                    {/*        <div className="row">*/
                    }
                    {/*            <div className="col-lg-12">*/
                    }
                    {/*                <div className="form-group">*/
                    }
                    {/*                    <input type="email" name="email" id="emailsubscribe"*/
                    }
                    {/*                        className="form-control rounded" placeholder="Your email : " required />*/
                    }
                    {/*                </div>*/
                    }
                    {/*            </div>*/
                    }
                    {/*            <div className="col-lg-12">*/
                    }
                    {/*                <input type="submit" id="submitsubscribe" name="send"*/
                    }
                    {/*                    className="btn btn-custom rounded w-100" value="Subscribe" />*/
                    }
                    {/*            </div>*/
                    }
                    {/*        </div>*/
                    }
                    {/*    </form>*/
                    }
                    {/*</div>*/
                    }
                    {/* </div> --> */}

                    </div>
                    {/* <!-- End Footer Info --> */}
                </div>
            </footer>
            <footer className="footer bg-dark footer-bar py-4">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="text-center">
                                <p className="text-foot mb-0">Copyright &copy; 2021. E-LENS All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* <!-- FOOTER END --> */}

            {/* <!-- Back to top --> */}
            <a href="#" className="back-to-top rounded text-center" id="back-to-top">
                <i className="mdi mdi-chevron-up d-block"></i>
            </a>
        </div>
    )
}

export default Index;
// class Index extends Component {     render() {         return ( <div>
// <div id="preloader">                     <div id="status">              <div
// className="text-center"><img src='/static/picture/logo-e-lens.png'
// height="50" alt="" /> </div>   <div className="spinner">
//        <div className="double-bounce1"></div>
// <div className="double-bounce2"></div>                         </div> </div>
//                </div>                 <header id="topnav"
// className="defaultscroll fixed-top navbar-sticky sticky"> <div
// className="container">                         <div>         <a
// href="index.html" className="logo">  <img
// src="static/picture/logo-e-lens.png" alt="missing_logo" height="60" />
//              </a>                         </div>          <div
// className="menu-extras">                             <div
// className="menu-item">                                 <a
// className="navbar-toggle" href="##">                                     <div
// className="lines">                                         <span></span>
//                          <span></span>            <span></span>
//              </div>                       </a>            </div>
// </div>                         <div id="navigation">            <ul
// className="navigation-menu"> <li class="has-submenu">
//             <a href="/">Home</a>                                 </li>
//    <li class="has-submenu">                                <a
// href="/about">About</a>             </li>                 <li
// className="has-submenu">    <a href="/service">Services</a>
//               </li>                 <li className="has-submenu">
//  <a href="/news">News</a>                                 </li>
// <li className="has-submenu">                   <a href="/contact">Contact</a>
//    </li>                                 <li className="mt-3">
//       <div className="col-lg-20"> <a href="/login" className="btn btn-custom
// mr-3">Log in</a>            </div>                                 </li>
//  {/* <!-- <li className="dropdown d-none d-md-inline-block">             <a
// className="nav-link dropdown-toggle arrow-none" data-toggle="dropdown"
// href="#" role="button" aria-haspopup="false" aria-expanded="false">
//          <i className="fas fa-search noti-icon"></i>          </a>  <div
// className="dropdown-menu dropdown-menu-right dropdown-menu-search">
//               <div>                                <form role="search"
// className="navbar-form"> <input type="text" placeholder="Search..." name="s"
// className="form-control search-bar">     <a href="" className="btn-search"><i
// className="fa fa-search"></i></a>                              </form>
// </div>                   </div>                     </li> --> */}     </ul>
//                       </div>                     </div>  </header>
//      <div className="flex-container">             <div className="flex-left">
//                         <div className="text-container">
//        <h1 id="titleGar" style={{animationDelay: "1.6s"}}>ETHICAL LENS
// (E-LENS) ASSURANCE OF AI ETHICS</h1>                             <h1
// id="titleGar" style={{animationDelay: "3.2s"}}>Access Data Bias and Model
// Bias Faithfully</h1>                             <h1 id="titleGar"
// style={{animationDelay: "4.8s"}}>Provide Mitigation Approaches for Assurance
// of AI Ethnics Objectively</h1>                             <h1 id="titleGar"
// style={{animationDelay: "6.4s"}}>Assess Compliance of AI with Ethical
// Principles Qualitatively</h1>                             <h1 id="titleGar"
// style={{animationDelay: "8.0s"}}>Evaluate Quality of AI Explanations
// Quantitatively</h1>                             <h1 id="titleGar"
// style={{animationDelay: "9.6s"}}>Report the Assurance of AI Ethics
// Evidently</h1>                             <p className="contentGar"
// style={{animationDelay: "1.6s"}}>                                 unique and
// extensible tools to make AI ethnics assurance accessible for customers with
//                           collaborative testing easily          </p>
//             <p className="contentGar" style={{animationDelay: "3.2s"}}>
//                           Innovative quantitative approaches to estimate data
// boas and model bias respectively and faithfully to understand AI fairness
//                         </p>   <p className="contentGar"
// style={{animationDelay: "4.8s"}}>                 Effective opearble
// approaches to mitigate AI ethnics issues with systematic analysis of AI
// solutions                   </p>               <p className="contentGar"
// style={{animationDelay: "6.4s"}}> Compreensive qualitative approaches to make
// the assessment of ethical principles for AI simple and operable
//               </p>               <p className="contentGar"
// style={{animationDelay: "8.0s"}}>                             Advanced
// quantitative approches to understand whether and to what extend the AI
// explainability achieves the defined objective
// </p>  <p className="contentGar " style={{animationDelay: "9.6s"}}>
//      Comprehensive report to summarise the compliance of AI with ethical
// principles for easy sharing                       </p>                </div>
//                    </div>                   <div className="flex-right">
//                    <div className="cube-container">
// <div className="cube">                       {/*<div
// className="top"></div>*/}          <div>                          <span
// style={{"--i":0}}></span>            <span style={{"--i":1}}></span> <span
// style={{"--i":2}}></span>                                 <span
// style={{"--i":3}}></span>                             </div>        </div>
//                   </div>                         <div
// className="section-top">                         </div> </div>  </div>
//          {/* <!-- ABOUT US START --> */} <section className="section">
//              <div className="container">                         <div
// className="row align-items-center">                <div className="col-lg-5
// col-md-6">      <img src="static/picture/four-ethical-principles-3.png"
// className="img-fluid rounded " alt="" />                                 {/*
// <!-- shadow --> */}                           </div>    <div
// className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0"> <div
// className="section-title ml-lg-3">          <h4 className="title mb-4
// font-weight-normal text-uppercase">Assurance of AI Ethics for Responsible
//          and Trustworthy Artificial Intelligence</h4> <p
// className="text-muted">          <p>E-LENS (Ethical-LENS) provides a
// comprehensive and extensible tool to define a series of qualitative and
// quantitative metrics by which organizations can seek validations for the
//                                   ethics around AI solutions. </p>
//                        <p>The outcomes got from qualitative and quantitative
// metrics have to meet the necessary          standards so that a certificate
// can be issued to AI on its compliance with ethical              principles.
// This ethics certification would apply both to the AI itself and to the
//     company’s processes in producing AI. The certification would operate as a
// “trust stamp”                                             for companies that
// meet relevant ethical standards and independent auditing    requirements.</p>
//                                     </p>           <div className="mt-4">
//        <a href="about.html" className="btn btn-custom">read more</a> </div>
//                               </div> </div>                         </div>
//     </div> </section>                 {/* <!-- ABOUT US END --> */}
//       {/* <!-- SERVICES START --> */} <section className="section bg-light">
//         <div className="container">                         <div
// className="row justify-content-center">                             <div
// className="col-lg-8 col-md-12">                                 <div
// className="section-title mb-4 pb-2 text-center">        <h3 className="title
// text-uppercase mb-4">Our Services</h3>    <p className="text-muted mb-0">We
// provide services for various aspects of assurance of AI ethics. Innovative
// qualitative and quantitative approaches are utilised for the assessment of
// the  compliance of AI with various ethical principles.</p>          </div>
//                        </div> </div>           <div className="row">
//                    <div className="col-lg-4 col-md-6 mt-4 pt-2">
//                    <div className="types-of-service text-center border p-4
// rounded">   <div className="icon">     <i className="fas
// fa-chalkboard-teacher"></i>      </div>
// <div className="service-head mt-3">
// <h4 className="title">Best Practice of Assurance</h4>             <p
// className="text-muted mb-0">Provide a best practice to validate ethical
// principles qualitatively and quantitatively collaborating with customers.</p>
// </div>                                     <div
// className="feature-hover-icon">                                         <i
// className="fas fa-chalkboard-teacher"></i>  </div>      </div> </div>
//                     <div className="col-lg-4 col-md-6 mt-4 pt-2">
//                     <div className="types-of-service text-center border p-4
// rounded">                    <div className="icon">     <i className="fas
// fa-hand-holding-heart"></i>         </div>                              <div
// className="service-head mt-3">                            <h4
// className="title">Evaluation of AI Transparency</h4>
//                <p className="text-muted mb-0">Evaluate the traceability,
// communication, and explainability of
//    AI solutions with qualitative and quantitative metrics.</p>      </div>
//               <div className="feature-hover-icon">                 <i
// className="fas fa-hand-holding-heart"></i>  </div>
// </div> </div>                             <div className="col-lg-4 col-md-6
// mt-4 pt-2">                                 <div className="types-of-service
// text-center border p-4 rounded">                    <div className="icon">
//  <i className="fas fa-wrench"></i> </div>                  <div
// className="service-head mt-3"> <h4 className="title">Assessment of AI
// Fairness</h4>      <p className="text-muted mb-0">Assess bias of data and
// model, and accessibility and universal               design with qualitative
// and quantitative                      metrics.</p>      </div>
//                     <div className="feature-hover-icon">
//              <i className="fas fa-wrench"></i>
// </div>                   </div>                       </div> </div>
// <div className="row">                             <div className="col-lg-4
// col-md-6 mt-4 pt-2">                                 <div
// className="types-of-service text-center border p-4 rounded">   <div
// className="icon">     <i className="fas fa-layer-group"></i>  </div>
//                          <div className="service-head mt-3">
//                <h4 className="title">Assessment of Accountability</h4>
//        <p className="text-muted mb-0">Validate the auditability, negative
// impact, trade-offs, and ability to redress of AI solutions with innovative
// metrics.</p>                       </div> <div
// className="feature-hover-icon"> <i className="fas fa-layer-group"></i> </div>
// </div> </div>                             <div className="col-lg-4 col-md-6
// mt-4 pt-2">                                 <div className="types-of-service
// text-center border p-4 rounded">                                     <div
// className="icon">                                         <i className="fab
// fa-sketch"></i>                                     </div> <div
// className="service-head mt-3">                <h4 className="title">Assurance
// of AI Privacy</h4>                             <p className="text-muted
// mb-0">Assure the respect for privacy and data protection, and quality
//            and              integrity of data with structured checklists.</p>
// </div>                             <div className="feature-hover-icon">
//                      <i className="fab fa-sketch"></i>
// </div>                             </div>            </div>
//   <div className="col-lg-4 col-md-6 mt-4 pt-2">                     <div
// className="types-of-service text-center border p-4 rounded">
//                    <div className="icon">                                <i
// className="fa fa-adjust"></i>                       </div>    <div
// className="service-head mt-3">  <h4 className="title">Mitigation for AI
// Ethics</h4>           <p className="text-muted mb-0">Provide suggestions
// objectively to mitigate ethical issues that
//           AI                                solutions have for the ethical
// use of AI.</p>                                    </div>             <div
// className="feature-hover-icon">            <i className="fa fa-adjust"></i>
// </div>                                 </div> </div> </div>
//       <div className="row">    <div className="col-lg-4 col-md-6 mt-4 pt-2">
//   <div className="types-of-service text-center border p-4 rounded
// position-relative overflow-hidden">                                     <div
// className="icon">                                        <i className="fa
// fa-newspaper"></i>                                  </div> <div
// className="service-head mt-3"> <h4 className="title">Research on AI
// Ethics</h4>            <p className="text-muted mb-0">Conduct extensive
// research on AI ethics                                             by
// developing advanced algorithms and innovative approaches.</p> </div>
//                   <div className="feature-hover-icon">
//    <i className="fa fa-newspaper"></i>                     </div>
//                   </div>               </div>                       <div
// className="col-lg-4 col-md-6 mt-4 pt-2">                       <div
// className="types-of-service text-center border p-4 rounded">
//                    <div className="icon">
// <i className="fa fa-users-cog"></i>                              </div>
//        <div className="service-head mt-3">            <h4
// className="title">Consulting on AI Ethics</h4>          <p
// className="text-muted mb-0">Provide support to achieve responsible and safe
// use of AI with the latest AI ethical frameworks and regulations.</p>
// </div>                                     <div
// className="feature-hover-icon">                                         <i
// className="fa fa-users-cog"></i>                                     </div>
//                           </div>                             </div>
//     <div className="col-lg-4 col-md-6 mt-4 pt-2">     <div
// className="types-of-service text-center border p-4 rounded">
//            <div className="icon">         <i className="fa
// fa-user-check"></i> </div>                                     <div
// className="service-head mt-3">                                         <h4
// className="title">Customised Assessment</h4>        <p className="text-muted
// mb-0">Provide customised assessment of AI ethical principles according
//                               to client’s requirements and applications. </p>
//    </div>                                     <div
// className="feature-hover-icon">                                         <i
// className="fa fa-user-check"></i>                                     </div>
//                              </div>                             </div>
//       </div>                         <div className="row">           <div
// className="col-lg-4 col-md-6 mt-4 pt-2"> <div className="types-of-service
// text-center border p-4 rounded">                         <div
// className="icon">     <a
//
// href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Cours
// e %20Factsheet%202021.pdf" target="_blank"><i className="fa
// fa-book-open"></i></a>               </div>   <div className="service-head
// mt-3"> <h4 className="title"><a
// href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Cours
// e %20Factsheet%202021.pdf" target="_blank">Short Course on AI
// Ethics</a></h4>              <p className="text-muted mb-0">Deliver a
// comprehensive short course on AI ethics for AI ethical  challenges and key
// ethical principles.</p>   </div>                                     {/* <!--
// <div className="feature-hover-icon">                             <i
// className="fa fa-book-open"></i>                         </div> --> */}
//       </div>                            </div>     {/* <!-- <div
// className="col-lg-4 col-md-6 mt-4 pt-2">  <div className="types-of-service
// p-4 rounded border"> <div className="service-icon text-custom">
//               <i className="fas fa-chalkboard-teacher text-custom float-left
// mb-0 mr-3"></i>                     </div>                         <div
// className="service-head overflow-hidden d-block"> <h4 className="title">Fast
// processing</h4>                             <p className="text-muted
// mb-0">There are many variations of passages of Ipsum available alteration in
// some form.</p>                         </div>                 <div
// className="feature-hover-icon">    <i className="fas fa-chalkboard-teacher
// text-custom float-left mb-0 mr-3"></i>                         </div>
//     </div>        </div> --> */}                             {/* </div> */}
//          </div>                     </div> </section>           {/*
// Activities START */}                 <section className="section"
// hidden={true}>                     <div className="container">
//          <div className="row justify-content-center">
//     <div className="col-12">                                 <div
// className="section-title mb-4 pb-2 text-center">
//        <h3 className="title text-uppercase mb-4">Our AI Ethics Assurance
// Activities</h3> </div>                             </div>        <div
// className="portfolio-box rounded position-relative overflow-hidden">
//               <a className="mfp-image" href="images/work/work-1.jpg"
// title="Business Post">            <img
// src="static/picture/our-activities.png" className="img-fluid"
// alt="member-image" /> </a>                             </div>         </div>
//             </div>                 </section> {/* Activities END */}
//        {/* WORK START */} <section className="section bg-light">
//        <div className="container">                         <div
// className="row justify-content-center">                    <div
// className="col-12"> <div className="section-title mb-4 pb-2 text-center">
//         <h3 className="title text-uppercase mb-4">Our Projects</h3>
// </div>                             </div>               </div>
// </div>                     <div className="container-fluid">
// <div className="port portfolio-masonry">        <div
// className="portfolioContainer row">   <div className="col-lg-3 col-md-6 mt-4
// pt-2 part">     <div className="portfolio-box rounded position-relative
// overflow-hidden">                                <a className="mfp-image"
// href="images/work/work-1.jpg" title="Business Post">                 <img
// src="static/picture/work-1.jpg" className="img-fluid" alt="member-image" />
//                                     </a>      <div className="gallary-title
// text-center bg-light py-4">     <h6><a href="work-single.html"
// className="text-dark">AI Ethics Assurance for Talent
// Shortlisting Algorithm</a></h6>          <span className="text-muted">Human
// Resources</span>                   </div> </div>
//    </div> <div className="col-lg-3 col-md-6 mt-4 pt-2 part">          <div
// className="portfolio-box rounded position-relative overflow-hidden">
//                       <a className="mfp-image" href="images/work/work-2.jpg"
// title="Business Post">                 <img src="static/picture/work-2.jpg"
// className="img-fluid" alt="member-image" />
//     </a>      <div className="gallary-title text-center bg-light py-4">
// <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for
// Water Pipe                            Failure Prediction</a></h6>
//  <span className="text-muted">Infrastructure</span>
// </div> </div>                                 </div> <div className="col-lg-3
// col-md-6 mt-4 pt-2 account">             <div className="portfolio-box
// rounded position-relative overflow-hidden">                                <a
// className="mfp-image" href="images/work/work-3.jpg" title="Business Post">
//              <img src="static/picture/work-3.jpg" className="img-fluid"
// alt="member-image"/>                                      </a>     <div
// className="gallary-title text-center bg-light py-4">    <h6><a
// href="work-single.html" className="text-dark">AI Ethics Assurance for Traffic
// Delay                               Prediction</a></h6>       <span
// className="text-muted">Transport</span> </div>
//      </div> </div>                                 <div className="col-lg-3
// col-md-6 mt-4 pt-2 account">        <div className="portfolio-box rounded
// position-relative overflow-hidden">
// <a className="mfp-image" href="images/work/work-4.jpg" title="Business Post">
//                                       <img src="static/picture/work-4.jpg"
// className="img-fluid" alt="member-image" />     </a>      <div
// className="gallary-title text-center bg-light py-4">
// <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for
// Crop Yield       Prediction</a></h6>              <span
// className="text-muted">Agriculture</span>                        </div>
//                         </div>                            </div>
//         </div>                </div> <div className="row">
// <div className="col-md-12 mt-4 pt-2">           <div className="text-center">
// <a href="projects.html" className="btn btn-custom">See More <i className="fas
// fa-angle-right"></i></a>                                 </div> </div>
//                  </div> </div>                 </section>           {/* WORK
// END */}      {/* <!-- TESTIMONIAL START--> */}     <section
// className="section">                     <div className="container">
//       <div className="row justify-content-center">           <div
// className="col-12">               <div className="section-title mb-4 pb-2
// text-center"> <h3 className="title text-uppercase mb-4">Happy Client's
// Says</h3>                      {/* <!-- <p className="text-muted mx-auto
// para-desc mb-0">Donec sodales sagittis magna. Excepturi sint
// occaecati cupiditate non provident, similique sunt in culpa qui officia
// deserunt mollitia                             animi.</p> --> */}      </div>
//                            </div>                </div>                <div
// className="row justify-content-center">           <div className="col-lg-8
// pt-2"> <div id="owl-single" className="owl-carousel owl-theme">
//  <div className="customer-testi pt-4 px-4 pb-0 text-center">
// <img src="static/picture/img-1.jpg" className="img-thumbnail avatar
// avatar-medium rounded-pill mx-auto shadow" style={{width: 'auto'}} alt=""/>
//                                       <h6 className ="text-custom
// text-uppercase mb-0 mt-3">Harvey Z.</h6>               <p className
// ="mb-0">Founder</p>                       <p className ="text-muted mt-3">"
// E-LENS validated the ethics of our AI solutions and helped us    mitigated
// our important ethical issues.It is the world first work in my field."</p> <ul
// className ="list-unstyled text-custom">       <li className
// ="list-inline-item"><i className ="fas fa-star"></i></li>
//           <li className ="list-inline-item"><i className ="fas
// fa-star"></i></li>                                         <li className
// ="list-inline-item"><i className ="fas fa-star"></i></li>
// <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
//                                   <li className ="list-inline-item"><i
// className ="fas fa-star-half-alt"></i></li>                             </ul>
//    </div>   <div className="customer-testi pt-4 px-4 pb-0 text-center">
//                   <img src="static/picture/img-4.jpg"
// className="img-thumbnail avatar avatar-medium rounded-pill mx-auto shadow"
//                                    style={{width: 'auto'}} alt=""/>
//                    <h6 className ="text-custom text-uppercase mb-0 mt-3">Mike
// R.</h6>  <p className ="mb-0">Founder</p>                <p className
// ="text-muted mt-3">" The comprehensive qualitative and quantitative
// assessment of AI         ethics for our AI product allowed us to redress
// possible ethics issues objectively."
// </p>          <ul className ="list-unstyled text-custom">   <li className
// ="list-inline-item"><i className ="fas fa-star"></i></li>
//                 <li className ="list-inline-item"><i className ="fas
// fa-star"></i></li>                               <li className
// ="list-inline-item"><i className ="fas fa-star"></i></li>
//           <li className ="list-inline-item"><i className ="fas
// fa-star"></i></li>                               <li className
// ="list-inline-item"><i className ="fas fa-star-half-alt"></i></li> </ul>
//                           </div>    </div> </div>
// </div>                   </div>  </section>                 {/* <!--
// TESTIMONIAL END --> */} <section className="section" style={{background:
// 'url(static/images/bg-counter.jpg) center center'}}>                <div
// className="bg-overlay"></div>                     <div className="container">
//                         <div className="row" id="counter">          <div
// className="col-lg-3 col-md-3 mt-4 mt-sm-0">             <div
// className="text-center py-4 text-white">                 <h1><i
// className="pe-7s-wristwatch" style={{color: '#a3c85e'}}></i></h1>
//             <h2 className="counter-value" data-count="64">4</h2>
//                       <p className="counter-name mb-0">Consultings</p> </div>
//            </div>                             <div className="col-lg-3
// col-md-3 mt-4 mt-sm-0">                                 <div
// className="text-center py-4 text-white"> <h1><i className="pe-7s-note2"
// style={{color: '#a3c85e'}}></i></h1>                           <h2
// className="counter-value" data-count="40">10</h2>         <p
// className="counter-name mb-0">Projects</p> </div>            </div>
//                   <div className="col-lg-3 col-md-3 mt-4 mt-sm-0"> <div
// className="text-center py-4 text-white"> <h1><i className="pe-7s-users"
// style={{color: '#a3c85e'}}></i></h1>                     <h2
// className="counter-value" data-count="23">5</h2>
//   <p className="counter-name mb-0">Clients</p> </div>
//     </div>                             <div className="col-lg-3 col-md-3 mt-4
// mt-sm-0"> <div className="text-center py-4 text-white">     <h1><i
// className="pe-7s-wine" style={{color: '#a3c85e'}}></i></h1>
//            <h2 className="counter-value" data-count="53">2</h2>        <p
// className="counter-name mb-0">Contributors</p>  </div>                </div>
//                        </div>                 </div>               </section>
//                 <section className="section bg-light">
// <div className="container">      <div className="row justify-content-center">
//                    <div className="col-12"> <div className="section-title
// mb-4 pb-2 text-center">         <h3 className="title text-uppercase mb-4">Our
// Team</h3>             <p className="text-muted mx-auto para-desc mb-0">
//                 Our team is the industry’s leading Research & Development
// (R&D) team with a group of             world-leading data scientists,
// industrial engineers, law experts, and social scientists committed to
// applying cutting-edge data science research and ethics research to
//                              the challenges and opportunities facing
// business, government and community. Our team focuses     on
//                       assurance of ethics of AI solutionsfor various sectors
// including infrastructure      management, transport, education,
// telecommunications, finance, energy, healthcare, dwelling
// and many others to improve productivity, enhance human wellbeing, and improve
// responsible use of AI.                                 </p>       </div>
// </div> </div>                         <div className="row" hidden={true}>
//          <div className="col-lg-3 col-md-6 mt-4 pt-2"> <div
// className="team-box rounded shadow position-relative overflow-hidden
// d-block">                                     <div className="team-box-img">
//                                       <img src="static/picture/image-1.jpg"
// alt="" className="img-fluid" />                        </div>
//     <div className="team-info py-3 text-center">   <h5
// className="mb-0">Shophie Cassidy</h5>       <small
// className="text-muted">CEO/Founder</small>                   <div
// className="text-center mt-3">                    <ul className="list-unstyled
// social-icon mb-0 mt-3">                                           <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i className="mdi mdi-facebook"
// title="Facebook"></i></a></li>                               <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-instagram"
// title="Instagram"></i></a></li>   <li className="list-inline-item"><a
// href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter"
// title="Twitter"></i></a></li>                             <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-linkedin"
// title="Linkedin"></i></a></li> </ul>    {/* <!--end icon--> */}
//                       </div>  </div>                                 </div>
// </div> <div className="col-lg-3 col-md-6 mt-4 pt-2"> <div className="team-box
// rounded shadow position-relative overflow-hidden d-block">          <div
// className="team-box-img">   <img src="static/picture/image-2.jpg" alt=""
// className="img-fluid"/>                </div>
//     <div className="team-info py-3 text-center">   <h5 className="mb-0">Steve
// Mitchell</h5>      <small className="text-muted">Project Manager</small>
//            <div className="text-center mt-3">                       <ul
// className="list-unstyled social-icon mb-0 mt-3">                 <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i className="mdi mdi-facebook"
// title="Facebook"></i></a></li>                               <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-instagram"
// title="Instagram"></i></a></li>   <li className="list-inline-item"><a
// href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter"
// title="Twitter"></i></a></li>                             <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-linkedin"
// title="Linkedin"></i></a></li> </ul>    {/* <!--end icon--> */}
//                       </div>  </div>                                 </div>
// </div> <div className="col-lg-3 col-md-6 mt-4 pt-2"> <div className="team-box
// rounded shadow position-relative overflow-hidden d-block">          <div
// className="team-box-img">   <img src="static/picture/image-3.jpg" alt=""
// className="img-fluid" />                  </div>
//        <div className="team-info py-3 text-center">   <h5
// className="mb-0">William Beck</h5>    <small className="text-muted">Web
// Designer</small>   <div className="text-center mt-3">                  <ul
// className="list-unstyled social-icon mb-0 mt-3">            <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-facebook"
// title="Facebook"></i></a></li>  <li className="list-inline-item"><a
// href="javascript:void(0)" className="rounded"><i className="mdi
// mdi-instagram" title="Instagram"></i></a></li>  <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-twitter"
// title="Twitter"></i></a></li> <li className="list-inline-item"><a
// href="javascript:void(0)" className="rounded"><i className="mdi mdi-linkedin"
// title="Linkedin"></i></a></li>                           </ul> {/* <!--end
// icon--> */}                                         </div>           </div>
//                               </div>    </div>
// <div className="col-lg-3 col-md-6 mt-4 pt-2">
// <div className="team-box rounded shadow position-relative overflow-hidden
// d-block">          <div className="team-box-img">  <img
// src="static/picture/image-4.jpg" alt="" className="img-fluid" />
//                 </div>                                  <div
// className="team-info py-3 text-center">   <h5 className="mb-0">Lisa Mark</h5>
// <small className="text-muted">Graphics Designer</small>
// <div className="text-center mt-3">            <ul className="list-unstyled
// social-icon mb-0 mt-3">                             <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i className="mdi mdi-facebook"
// title="Facebook"></i></a></li>                               <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-instagram"
// title="Instagram"></i></a></li>   <li className="list-inline-item"><a
// href="javascript:void(0)" className="rounded"><i className="mdi mdi-twitter"
// title="Twitter"></i></a></li>                             <li
// className="list-inline-item"><a href="javascript:void(0)"
// className="rounded"><i                        className="mdi mdi-linkedin"
// title="Linkedin"></i></a></li> </ul>    {/* <!--end icon--> */}
//                       </div>  </div>                                 </div>
// </div>                         </div>                    </div>    </section>
//                 {/* <!-- BLOG START --> */} {/*<section
// className="section">*/}                 {/*    <div className="container">*/}
//                 {/*        <div className="row justify-content-center">*/}
//              {/*            <div className="col-12">*/}                 {/*
//              <div className="section-title mb-4 pb-2 text-center">*/}
//         {/*        <h3 className="title text-uppercase mb-4">Latest
// News</h3>*/}     {/*                    /!* <!-- <p className="text-muted
// mx-auto para-desc mb-0">Donec sodales sagittis magna. Excepturi sint *!/*/}
//   {/*                    occaecati cupiditate non provident, similique sunt
// in culpa qui officia deserunt mollitia*/}                 {/*   /!*
// animi.</p> --> *!/*/}                 {/*  </div>*/} {/*            </div>*/}
//                 {/*  </div>*/}                 {/*      <div
// className="row">*/}  {/*            <div className="col-lg-4 col-md-6 mt-4
// pt-2">*/}    {/*                <div className="blog-post rounded border
// position-relative overflow-hidden d-block">*/} {/*         <img
// src="static/picture/news-ai-ethics-world-first.jpg" className="img-fluid"
// alt="" />*/}                 {/* <div className="content p-3">*/}
//     {/* <ul className="list-unstyled">*/}                 {/*    <li
// className="float-right"><i className="mdi mdi-calendar"></i> Dec 08,
// 2020</li>*/}                 {/*                            <li><a href="#"
// className="text-custom "><i className="mdi mdi-bookmark"></i>
// Branding</a></li>*/}                 {/*                        </ul>*/}
//  {/*                        <h5><a
// href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employme
// n t-practices"*/}                 {/* target="_blank" className="text-dark
// title"> A world first for ethical AI</a></h5>*/}                 {/*
//      <p className="text-muted">Delivered the ‘non-biased talent shortlisting
// algorithm validation’*/}                 {/*        project, a pioneering
// independent validation of Ethical AI.</p>*/}             {/*
//     <ul className="post-meta pt-2 border-top list-unstyled mb-0">*/}
//        {/*                            <li className="float-right"><a*/}
//           {/*
//
// href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employme
// n t-practices"*/}                 {/* target="_blank" className="readmore
// text-dark">Read More <i*/}  {/* className="mdi
// mdi-chevron-right"></i></a></li>*/}                 {/* <li>*/}
//   {/*                                <ul className="list-unstyled">*/}
//          {/*        <li className="d-inline-block mr-2"><a href="#"
// className="like text-dark"><i*/}                {/* className="mdi
// mdi-heart-outline"></i> <small>29</small></a></li>*/}        {/* <li
// className="d-inline-block"><a href="#" className="comment text-dark"> <i*/}
//             {/*                                        className="mdi
// mdi-comment-outline"></i>*/}                 {/* <small>40</small></a>*/}
//             {/*             </li>*/}     {/* </ul>*/}                 {/*
//                        </li>*/} {/*                        </ul>*/}
//       {/* </div>*/}     {/*                </div>*/}                 {/*
//    </div>*/}          {/*        </div>*/}                 {/* </div>*/}
// {/*</section>*/}                 {/* <!-- BLOG END --> */} {/* <!-- PARTNER
// START --> */} {/*<section className="section-two bg-light">*/}
//  {/*    <div className="container">*/}       {/*        <div
// className="row">*/}                 {/*            <div className="col-lg-12
// p-0">*/}     {/*                <div className="slider autoplay">*/} {/*
//               <div><img src="static/picture/partner-hcai-austria.png"
// className="mx-auto d-block img-fluid"*/}                 {/*
// alt="img-missing" /></div>*/}         {/* <div><img
// src="static/picture/partner-theyield.svg" className="mx-auto d-block
// img-fluid"*/}                 {/*       alt="img-missing" /></div>*/}
//         {/* <div><img src="static/picture/partner-data61.png"
// className="mx-auto d-block img-fluid"*/}                 {/*
//       alt="img-missing" /></div>*/}                 {/*
// <div><img src="static/picture/partner-facrc.svg" className="mx-auto d-block
// img-fluid"*/}                 {/*                        alt="img-missing"
// /></div>*/}                 {/*                    <div><img
// src="static/picture/partner-reejig.png" className="mx-auto d-block
// img-fluid"*/}                 {/*                        alt="img-missing"
// /></div>*/}                 {/*                </div>*/}                 {/*
//         </div>*/}                 {/*        </div>*/}                 {/*
// </div>*/}                 {/*</section>*/}                 {/* <!-- PARTNER
// END --> */}                 {/* <!-- PARTNER START --> */} {/* <!-- PARTNER
// END --> */}                 {/* <!-- CONTACT END --> */} {/*<section
// className="section-two bg-custom">*/} {/*    <div className="container">*/}
//               {/*        <div className="row justify-content-center">*/}
//            {/* <div className="col-lg-8 col-md-12">*/}                 {/*
// <div className="section-title text-center">*/}                 {/*
// <h5 className="title text-light text-uppercase font-weight-normal">Do You
// Want To Work With E-LENS ?*/}           {/*                   </h5>*/}
//          {/*   <div className="mt-4">*/}                 {/*
//       <a href="contact.html" className="btn btn-light">Contact Us</a>*/}
// {/*            </div>*/}                 {/* </div>*/}                 {/*
//  </div>*/}                 {/* </div>*/}                 {/*    </div>*/}
//            {/*</section>*/}               {/* <!-- CONTACT END --> */}
//       {/* <!-- FOOTER START --> */}                 <footer className="footer
// bg-dark">         <div className="container">           {/* <!--Footer Info
// --> */}                         <div className="row footer-info">
//          <div className="col-lg-4 col-md-12">             <a
// href="index.html" className="logo">          <img
// src="static/picture/logo-e-lens-white.png" alt="missing_logo" height="50" />
//                               </a>       {/* <!-- <p className="text-foot
// mt-4">These cases are perfectly simple and easy to free hour, when nothing
// */} {/* prevents distinguish.</p> --> */} <div>
// <ul className ="list-unstyled social-icon social mt-4 mb-0">
//                <li className ="list-inline-item"><a href="javascript:void(0)"
// className ="rounded"><i                       className ="fab
// fa-apple"></i></a></li>      <li className ="list-inline-item"><a
// href="javascript:void(0)" className ="rounded"><i     className ="fab
// fa-facebook-f"></i></a></li>    <li className ="list-inline-item"><a
// href="javascript:void(0)" className ="rounded"><i
//     className ="fab fa-dribbble"></i></a></li>
//  <li className ="list-inline-item"><a href="javascript:void(0)" className
// ="rounded"><i                       className ="fab
// fa-instagram"></i></a></li>              <li className ="list-inline-item"><a
// href="javascript:void(0)" className ="rounded"><i     className ="fab
// fa-twitter"></i></a></li> </ul>                               </div> </div>
//                           <div className="col-lg-2 col-md-4 mt-4 mt-lg-0 pt-2
// pt-lg-0">            <div className="footer-head"> <h6 className="title
// mb-0">E-LENS</h6>                                 </div>
//        <div className="footer-item mt-4">       <ul className="list-unstyled
// mb-0">                    <li><a href="login.html"><i className="mdi
// mdi-chevron-right"></i> Log in</a></li> <li><a href="about.html"><i
// className="mdi mdi-chevron-right"></i> About us</a></li>
//                    <li><a href="service.html"><i className="mdi
// mdi-chevron-right"></i> Services</a></li>
//     <li><a href="about.html"><i className="mdi mdi-chevron-right"></i> Our
// Team</a></li>                                         <li><a
// href="projects.html"><i className="mdi mdi-chevron-right"></i>
// Projects</a></li>                </ul>                                 </div>
//           </div>       <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2
// pt-lg-0">                       <div className="footer-head">           <h6
// className="title mb-0">Useful</h6>    </div>                             <div
// className="footer-item mt-4">                 <ul className="list-unstyled
// mb-0">                    <li><a href="http://www.hcai-lab.org"
// target="_blank"><i className="mdi mdi-chevron-right"></i>
// Research</a></li>          <li><a
// href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Cours
// e %20Factsheet%202021.pdf" target="_blank"><i className="mdi
// mdi-chevron-right"></i> Short Course</a></li>         <li><a
// href="news.html"><i className="mdi mdi-chevron-right"></i> News</a></li>
//                               <li><a href="contact.html"><i className="mdi
// mdi-chevron-right"></i> Contact</a></li>               </ul>
//                </div>        </div>                             {/* <!-- <div
// className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0"> */}
//            {/*<div className="footer-head">*/}
// {/*    <h6 className="title mb-0">Newsletter</h6>*/} {/*</div>*/}
// {/*<div className="footer-news mt-4">*/}                             {/*
// <p className="text-foot">Subscribe to our email newsletter to receive useful
// articles and special*/}                             {/* offers.</p>*/}
//                      {/*    <form>*/}           {/*       <div
// className="row">*/}                             {/* <div
// className="col-lg-12">*/}                             {/* <div
// className="form-group">*/}                             {/*      <input
// type="email" name="email" id="emailsubscribe"*/}            {/*
// className="form-control rounded" placeholder="Your email : " required />*/}
//                           {/*             </div>*/}                    {/*
//         </div>*/}                          {/*       <div
// className="col-lg-12">*/}                      {/* <input type="submit"
// id="submitsubscribe" name="send"*/}        {/*          className="btn
// btn-custom rounded w-100" value="Subscribe" />*/}                         {/*
//            </div>*/} {/*       </div>*/}                             {/*
// </form>*/}  {/*</div>*/}                             {/* </div> --> */}
// </div>                         {/* <!-- End Footer Info --> */}
// </div>                 </footer>     <footer className="footer bg-dark
// footer-bar py-4"> <div className="container"> <div className="row
// justify-content-center">                             <div
// className="col-lg-12">                                 <div
// className="text-center">                                     <p
// className="text-foot mb-0">Copyright &copy; 2021. E-LENS All rights
// reserved.</p>                                 </div>    </div>
// </div>                     </div>       </footer> {/* <!-- FOOTER END --> */}
// {/* <!-- Back to top --> */}                 <a href="#"
// className="back-to-top rounded text-center" id="back-to-top">     <i
// className="mdi mdi-chevron-up d-block"> </i>                 </a> </div>
//    )     } } export default Index;
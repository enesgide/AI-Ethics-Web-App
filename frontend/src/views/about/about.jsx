/* eslint-disable */
import React, { Component } from 'react'
import Reveal from '../../component/reveal';
import RevealSlow from '../service/revealSlow';
import '../index/index.css';


class About extends Component {
    render() {
        return (
            <div>

    <div id="preloader">
        <div id="status">
            <div className="text-center"><img src="static/picture/logo-e-lens-2.png" height="50" alt=""/> </div>
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
                    <a className="navbar-toggle">
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
                    <li className="has-submenu">
                        <a href="index">Home</a>
                    </li>

                    <li className="has-submenu">
                        <a href="about">About</a>
                    </li>
                    <li className="has-submenu">
                        <a href="service">Services</a>
                    </li>

                    <li className="has-submenu">
                        <a href="news">News</a>
                    </li>

                    <li className="has-submenu">
                        <a href="contact">Contact</a>
                    </li>

                    <li className="mt-3">
                        <div className="col-lg-20">
                            <a href="login" className="login-btn btn btn-custom mr-3">Log in</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <section
        class="bg-custom-page-title d-flex align-items-center justify-content-center w-100"
        // style={{backgroundImage: 'url(/static/images/UTS_Library2.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center center'}}
        // style={{backgroundColor: '#bdd9c3'}}
    >
        {/* <div class="bg-overlay"></div> */}
        <div className="custom-image-background" style={{
            background: `
            linear-gradient(to bottom, transparent 80%, rgb(245, 246, 247)),
            url("static/picture/abstract-bg-hexa.png") center/cover
            `,
            borderRadius: '0'
        }}></div>
        <div class="container">
            <div class="row justify-content-center pt-5">
                <div class="col-lg-12">
                    <div class="page-next-level text-white">
                    <Reveal>
                        <h3 class="title text-uppercase mb-5 text-center large-header-greener mb-3">
                            Who we are
                        </h3>
                    </Reveal>
                        {/* <ul class="page-next pl-0 mb-0">
                            <li class="list-inline-item">
                                <a
                                    href="index.html"
                                    class="text-uppercase h6 text-white"
                                >
                                    Home
                                </a>
                            </li>
                            <li class="list-inline-item">
                                <span class="text-uppercase h6 text-custom">
                                    Services
                                </span>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="section card-container" style={{padding: '200px 0'}}>
        <Reveal>
        <div className="container custom-card" style={{padding: '20px'}}>
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                    <div className="section-title text-right mr-lg-3">
                        <div className="col-12">
                            <div class="mb-4 pb-2 text-center">
                                <h5 class="title text-uppercase mb-4 large-title-greener" style={{fontSize: "1rem !important"}}>
                                    We're knowledgeable about AI ethics
                                </h5>
                            </div>
                        </div>
                        <p className="text-muted">
                            We are the industry’s leading Research & Development (R&D) team with a group of
                            world-leading data scientists, industrial engineers, law experts, and social scientists
                            committed to applying cutting-edge data science research and ethics research to
                            the challenges and opportunities facing business, government and community. We focus
                            on assurance of ethics of AI solutionsfor various sectors including infrastructure
                            management, transport, education, telecommunications, finance, energy, healthcare, dwelling
                            and many others to improve productivity, enhance human wellbeing, and improve responsible
                            use of AI.
                        </p>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="about-pic">
                        <img src="static/images/UTS_library1.jpg" className="img-fluid rounded" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </Reveal>
    </section>
    <section className="section card-container" style={{padding: '200px 0'}}>
        <Reveal>
            
            <section className="container custom-card py-5" style={{padding: '20px'}}>
                <div className="container">
                
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div class="mb-4 pb-2 text-center">
                                <h1 class="title text-uppercase mb-4 large-title-greener">
                                    Our Platform
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col py-5 px-5">
                            <div id="owl-single" className="owl-carousel owl-theme">
                                <div className="customer-testi mb-4 pt-2 px-4 pb-0 text-center">
                                    <h2 className="text-muted mt-3 mx-5">E-LENS (Ethical-LENS) is a platform that allows AI product suppliers to evaluate the compliance of their AI products/solutions with AI ethical
                                        principles. </h2>
                                </div>

                                <div className="customer-testi mb-4 pt-2 px-4 pb-0 text-center">
                                    <h2 className="text-muted mt-3 mx-5">E-Lens also finds potential ethical issues, and suggests approaches
                                        to mitigate ethical issues in AI products/solutions.
                                    </h2>
                                </div>

                                <div className="customer-testi mb-4 pt-2 px-4 pb-0 text-center">
                                    <h2 className="text-muted mt-3 mx-5">E-LENS allows the close collaboration between AI suppliers and E-LENS experts to validate AI
                                        ethical principles for their AI products/solutions with innovative tools for the
                                        responsible and safe use of AI.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Reveal>
    </section>
    <section className="section bg-light">
        <div className="card-container row px-0 mw-100">
            <div className="col card-container">
                <section className=''>
                    <div className="container">
                        <Reveal>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mt-4 mx-5 large-title-greener" style={{fontSize: "8rem"}}>
                                Why
                            </div>
                            <div className="title mb-3 font-weight-bold text-uppercase mw-50 mx-5 large-title-greener" style={{fontSize: "8rem"}}>
                                us?
                            </div>
                        </Reveal>
                    </div>
                </section>
            </div>
            <div className="col card-container mw-40">
                <Reveal>
                <div className="row my-4">
                    <div className="types-of-service text-center border p-4 position-relative overflow-hidden stakeholder-card" style={{borderRadius: '15px'}}>
                        <div className='pb-4'>
                            <div className="icon">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                            <div className="service-head mt-3">
                                <h4 className="title">World First for Practices</h4>
                                <p className="text-muted mb-0">E-LENS is the world first platform which has been applied in
                                    real-world industry practices.</p>
                            </div>
                            <div className="feature-hover-icon">
                                <i className="fas fa-chalkboard-teacher"></i>
                            </div>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row my-4">
                    <div className="types-of-service text-center border p-4 position-relative overflow-hidden stakeholder-card" style={{borderRadius: '15px'}}>
                        <div className="icon">
                            <i className="fas fa-hand-holding-heart"></i>
                        </div>
                        <div className="service-head mt-3">
                            <h4 className="title">Qualitative Evaluations</h4>
                            <p className="text-muted mb-0">E-LENS develops innovative qualitative approaches for
                                the inherent subjective nature of ethics.</p>
                        </div>
                        <div className="feature-hover-icon">
                            <i className="fas fa-hand-holding-heart"></i>
                        </div>
                    </div>
                </div>
                </Reveal>
                <Reveal>
                <div className="row my-4">
                    <div className="types-of-service text-center border p-4 position-relative overflow-hidden stakeholder-card" style={{borderRadius: '15px'}}>
                        <div className="icon">
                            <i className="fas fa-wrench"></i>
                        </div>
                        <div className="service-head mt-3">
                            <h4 className="title">Quantitative Assessments</h4>
                            <p className="text-muted mb-0">E-LENS develops advanced quantitative algorithms for the
                                computable nature of AI outcomes.</p>
                        </div>
                        <div className="feature-hover-icon">
                            <i className="fas fa-wrench"></i>
                        </div>
                    </div>
                </div>
                </Reveal>
            </div>
        </div>
    </section>
 
    <section className="section py-5">
        <div className="container">
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
            <div className="row" style={{marginBottom: '200px'}}>
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
            <Reveal>
            <h3 class="text-center mb-4 pb-2" style={{paddingTop: "100px"}}>
                We apply cutting-edge data science research and ethics research to the challenges and opportunities facing
            </h3>
            </Reveal>
            <div className="row" style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '200px'}}>
                <RevealSlow>
                <div className="circular-card mx-3 text-center mw-20">
                    <b className='text-white' style={{fontSize: '2rem'}}>Business</b>
                </div>
                </RevealSlow>
                <RevealSlow>
                <div className="circular-card mx-3 text-center">
                    <b className='text-white' style={{fontSize: '2rem'}}>Government</b>
                </div>
                </RevealSlow>
                <RevealSlow>
                <div className="circular-card mx-3 text-center">
                    <b className='text-white' style={{fontSize: '2rem'}}>Community</b>
                </div>
                </RevealSlow>
            </div>
            <div className="row" hidden={true}>
                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                    <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                        <div className="team-box-img">
                            <img src="static/picture/image-1.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="team-info py-3 text-center">
                            <h5 className="mb-0">Shophie Cassidy</h5>
                            <small className="text-muted">CEO/Founder</small>
                            <div className="text-center mt-3">
                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                    <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                        <div className="team-box-img">
                            <img src="static/picture/image-2.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="team-info py-3 text-center">
                            <h5 className="mb-0">Steve Mitchell</h5>
                            <small className="text-muted">Project Manager</small>
                            <div className="text-center mt-3">
                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                        </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                    <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                        <div className="team-box-img">
                            <img src="static/picture/image-3.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="team-info py-3 text-center">
                            <h5 className="mb-0">William Beck</h5>
                            <small className="text-muted">Web Designer</small>
                            <div className="text-center mt-3">
                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 pt-2">
                    <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                        <div className="team-box-img">
                            <img src="static/picture/image-4.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="team-info py-3 text-center">
                            <h5 className="mb-0">Lisa Mark</h5>
                            <small className="text-muted">Graphics Designer</small>
                            <div className="text-center mt-3">
                                <ul className="list-unstyled social-icon mb-0 mt-3">
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-facebook" title="Facebook"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-instagram" title="Instagram"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-twitter" title="Twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                                className="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className='section' style={{paddingBottom: '200px'}}>
        <div className='container'>
            <div className="mindmap-container">
                <div className='mindmap-circle mx-auto'>
                    <b className='circle-txt' style={{fontSize: '2rem'}}>Our Sectors Include</b>
                    <RevealSlow>
                        <div class="circle-item deg-0 text-center">
                            <div>
                                <i class="fas fa-road text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.1rem'}}>Infrastructure</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-45 text-center">
                            <div>
                                <i class="fas fa-bus text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Transport</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-90 text-center">
                            <div>
                                <i class="fas fa-school text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Education</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-135 text-center">
                            <div>
                                <i class="fas fa-phone text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Telecom</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-180 text-center">
                            <div>
                                <i class="fas fa-landmark text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Finance</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-225 text-center">
                            <div>
                                <i class="fas fa-lightbulb text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Energy</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-270 text-center">
                            <div>
                                <i class="fas fa-stethoscope text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Healthcare</b>
                            </div>
                        </div>
                    </RevealSlow>
                    <RevealSlow>
                        <div class="circle-item deg-315 text-center">
                            <div>
                                <i class="fas fa-key text-custom" style={{fontSize: '3rem', marginTop: '10px'}}></i>
                            </div>
                            <div className="mb-0">
                                <b style={{fontSize: '1.2rem'}}>Dwelling</b>
                            </div>
                        </div>
                    </RevealSlow>
                </div> 
            </div>
        </div>
    </section>
    <section className='section'>
        <div className="container px-1 py-1">
        <Reveal>
        <div class="mb-4 pb-2 text-center">
            <h1 class="title text-uppercase mb-4 large-title-greener">
                Our Goals
            </h1>
        </div>
        </Reveal>
        <Reveal>
        <section className='section row' style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="col mx-5">
                <img src="static/picture/graph.svg" className="img-fluid rounded" alt=""/>
            </div>
            <div className="col my-auto mx-5">
                <h3 class="title text-uppercase text-center large-header-greener" style={{fontSize: '3.6rem'}}>
                    Increase Productivity
                </h3>
            </div>
        </section>
        </Reveal>
        <Reveal>
        <section className='section row' style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="col my-auto mx-5">
                <h3 class="title text-uppercase text-center large-header-greener" style={{fontSize: '3.6rem'}}>
                    Enhance Human Wellbeing
                </h3>
            </div>
            <div className="col mx-5">
                <img src="static/picture/wellbeing-graphic.svg" className="img-fluid rounded" alt=""/>
            </div>
        </section>
        </Reveal>
        <Reveal>
        <section className='section row' style={{paddingTop: '100px', paddingBottom: '100px'}}>
            <div className="col mx-5">
                <img src="static/picture/ai-graphic.svg" className="img-fluid rounded" alt=""/>
            </div>
            <div className="col my-auto mx-5">
                <h3 class="title text-uppercase text-center large-header-greener" style={{fontSize: '3.6rem'}}>
                    Improve the Responsible Use of AI
                </h3>
            </div>
        </section>
        </Reveal>
        </div>
    </section>


    {/*<section className="section-two bg-custom">*/}
    {/*    <div className="container">*/}
    {/*        <div className="row justify-content-center">*/}
    {/*            <div className="col-lg-8 col-md-12">*/}
    {/*                <div className="section-title text-center">*/}
    {/*                    <h5 className="title text-light text-uppercase font-weight-normal">Do You Want To Work With E-LENS ?*/}
    {/*                    </h5>*/}
    {/*                    <div className="mt-4">*/}
    {/*                        <a href="contact" className="btn btn-light">Contact Us</a>*/}
    {/*                    </div>*/}
    {/*                </div>*/}
    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    {/*</section>*/}
    <footer className="footer bg-dark">
        <div className="container">
            <div className="row footer-info">
                <div className="col-lg-4 col-md-12">
                    <a href="index.html" className="logo">
                        <img src="static/picture/logo-e-lens-white.png" alt="missing_logo" height="50"/>
                    </a>
                    <div>
                        <ul className="list-unstyled social-icon social mt-4 mb-0">
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                        className="fab fa-apple"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                        className="fab fa-facebook-f"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                        className="fab fa-dribbble"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                        className="fab fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="javascript:void(0)" className="rounded"><i
                                        className="fab fa-twitter"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="footer-head">
                        <h6 className="title mb-0">E-LENS</h6>
                    </div>
                    <div className="footer-item mt-4">
                        <ul className="list-unstyled mb-0">
                            <li><a href="login.html"><i className="mdi mdi-chevron-right"></i> Log in</a></li>
                            <li><a href="about.html"><i className="mdi mdi-chevron-right"></i> About us</a></li>
                            <li><a href="service.html"><i className="mdi mdi-chevron-right"></i> Services</a></li>
                            <li><a href="about.html"><i className="mdi mdi-chevron-right"></i> Our Team</a></li>
                            <li><a href="projects.html"><i className="mdi mdi-chevron-right"></i> Projects</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                    <div className="footer-head">
                        <h6 className="title mb-0">Useful</h6>
                    </div>
                    <div className="footer-item mt-4">
                        <ul className="list-unstyled mb-0">
                            <li><a href="http://www.hcai-lab.org" target="_blank"><i className="mdi mdi-chevron-right"></i>
                                    Research</a></li>
                            <li><a href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                    target="_blank"><i className="mdi mdi-chevron-right"></i> Short Course</a></li>
                            <li><a href="news.html"><i className="mdi mdi-chevron-right"></i> News</a></li>
                            <li><a href="contact.html"><i className="mdi mdi-chevron-right"></i> Contact</a></li>
                        </ul>
                    </div>
                </div>
               
            </div>
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
    <a href="#" className="back-to-top rounded text-center" id="back-to-top">
        <i className="mdi mdi-chevron-up d-block"> </i>
    </a>
            </div>
        )
    }
}

export default About;


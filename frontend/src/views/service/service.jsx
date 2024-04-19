/* eslint-disable */
import React from "react";
import './service.css';
import Reveal from "./reveal";
import RevealSlow from "./revealSlow";
import '../index/index.css';


class Service extends React.Component {
    render() {
        return (
            <div>
                
                {/* <!-- Loader --> */}
                <div id="preloader">
                    <div id="status">
                        <div class="text-center">
                            <img
                                src="/static/picture/logo-e-lens-2.png"
                                height="50"
                                alt=""
                            />{" "}
                        </div>
                        <div class="spinner">
                            <div class="double-bounce1"></div>
                            <div class="double-bounce2"></div>
                        </div>
                    </div>
                </div>

                {/* <!-- Tagline Start --> */}
                {/* <!-- <div class="tagline"> */}
                <div class="container">
                    <div class="float-left">
                        <div class="phone d-inline-block">
                            <a href="tel:+152534-468-854" class="text-white">
                                <i class="fas fa-phone"></i> +1 123 456 78 90
                            </a>
                        </div>
                    </div>
                    <div class="float-right">
                        <ul class="top_socials list-unstyled mb-0">
                            <li class="list-inline-item text-right p-0 mr-0">
                                <a href="#" class="text-white">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li class="list-inline-item text-right p-0 mr-0">
                                <a href="#" class="text-white">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li class="list-inline-item text-right p-0 mr-0">
                                <a href="#" class="text-white">
                                    <i class="fab fa-instagram"></i>
                                </a>
                            </li>
                            <li class="list-inline-item text-right p-0 mr-0">
                                <a href="#" class="text-white">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </li>
                            <li class="list-inline-item text-right p-0 mr-0">
                                <a href="#" class="text-white">
                                    <i class="fab fa-pinterest"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </div>
                {/* </div> --> */}
                {/* <!-- Tagline End --> */}

                {/* <!-- Navigation Bar--> */}
                <header
                    id="topnav"
                    class="defaultscroll fixed-top navbar-sticky sticky"
                >
                <link rel="stylesheet" href="src/views/service/service.css" />
                    <div class="nav-contents">
                        {/* <!-- Logo container--> */}
                        <div>
                            <a href="index" class="logo">
                                <img
                                    src="/static/picture/logo-e-lens-2.png"
                                    alt="missing_logo"
                                    height="60"
                                />
                            </a>
                        </div>
                        {/* <!-- End Logo container--> */}
                        <div class="menu-extras">
                            <div class="menu-item">
                                {/* <!-- Mobile menu toggle--> */}
                                <a class="navbar-toggle">
                                    <div class="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                {/* <!-- End mobile menu toggle--> */}
                            </div>
                        </div>

                        <div id="navigation">
                            {/* <!-- Navigation Menu--> */}
                            <ul class="navigation-menu">
                                <li class="has-submenu">
                                    <a href="/index">Home</a>
                                </li>

                                <li class="has-submenu">
                                    <a href="/about">About</a>
                                </li>
                                <li class="has-submenu">
                                    <a href="/service">Services</a>
                                </li>

                                <li class="has-submenu">
                                    <a href="/news">News</a>
                                </li>

                                <li class="has-submenu">
                                    <a href="/contact">Contact</a>
                                </li>

                                <li class="mt-3">
                                    <div class="col-lg-20">
                                        <a
                                            href="login"
                                            class="login-btn btn btn-custom mr-3"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </li>

                                {/* <!-- <li class="dropdown d-none d-md-inline-block"> */}
                                <a
                                    class="nav-link dropdown-toggle arrow-none"
                                    data-toggle="dropdown"
                                    href="#"
                                    role="button"
                                    aria-haspopup="false"
                                    aria-expanded="false"
                                >
                                    <i class="fas fa-search noti-icon"></i>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-menu-search">
                                    <div>
                                        <form role="search" class="navbar-form">
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                name="s"
                                                class="form-control search-bar"
                                            />
                                            <a href="" class="btn-search">
                                                <i class="fa fa-search"></i>
                                            </a>
                                        </form>
                                    </div>
                                </div>
                                {/* </li> --> */}
                            </ul>
                            {/* <!-- End navigation menu--> */}
                        </div>
                    </div>
                </header>
                {/* <!-- End Navigation Bar--> */}

                {/* <!-- HOME START--> */}
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
                                        Welcome
                                    </h3>
                                </Reveal>
                                <Reveal>
                                    <h3 class="title text-uppercase my-5 text-center large-title-greener">
                                        To AI Ethics Assurance Solutions
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
                {/* <!-- HOME END--> */}
                {/* <!-- ABOUT START --> */}  
                <section class="section" hidden={true}>
                    <div class="container">
                        <Reveal>
                        <section class="custom-card" style={{backgroundColor: '#fff'}}>
                            <div class="row align-items-center">
                                <div class="col-md-5">
                                    <div class="about-two-img">
                                        <img
                                            src="/static/picture/uts-building-1.jpg"
                                            class="img-fluid rounded"
                                            alt="w"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-7 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                    <div class="section-title ml-lg-4">

                                        <p class="text-muted">
                                            E-LENS provides a set of comprehensive
                                            solutions for the assurance of AI
                                            ethics.
                                        </p>
                                        <p class="text-muted">
                                            Nor again is there anyone who loves or
                                            pursues or desires to obtain pain of
                                            itself, because it is pain, but because
                                            occasionally circumstances occur in
                                            which toil and pain can procure him some
                                            great pleasure. Nam libero tempore, cum
                                            soluta nobis est eligendi optio cumque
                                            nihil impedit quo minus id quod maxime
                                            placeat facere possimus, omnis voluptas
                                            assumenda est, omnis dolor repellendus.{" "}
                                        </p>
                                        <div class="mt-4">
                                            <a href="#" class="btn btn-custom">
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        </Reveal>
                    </div>
                </section>
                {/* <!-- ABOUT END --> */}

                {/* <!-- E-LENS PROCESS START --> */}
                <section class="section pb-3">
                    <div class="container" style={{marginTop: "80px"}}>
                        <div class="row justify-content-center">
                            <div class="col-12">
                                    <div class="mb-4 pb-2 text-center">
                                        <h1 class="title text-uppercase mb-4 large-title-greener">
                                            The AI Ethics Assurance Process
                                        </h1>
                                    </div>
                                    <h3 class="text-center mb-4 pb-2">
                                        AI suppliers and E-LENS experts
                                        collaborately work on the AI ethics
                                        assurance by considering the inherent
                                        nature of both ethics and AI.
                                    </h3>
                                <div className="row my-5">
                                    <div className="col text-center stakeholder-card py-5 mx-3">
                                        <RevealSlow>
                                            <div>
                                                <i class="fas fa-brain text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                            </div>
                                            <div className="mb-3">
                                                <b style={{fontSize: '1.5rem'}}>AI Supplier</b>
                                            </div>
                                            <p>A user who completes questions assigned to the AI project/AI solution.</p>
                                        </RevealSlow>
                                    </div>
                                    <div className="col text-center stakeholder-card py-5 mx-3">
                                        <RevealSlow>
                                            <div>
                                                <i class="fas fa-user text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                            </div>
                                            <div className="mb-3">
                                                <b style={{fontSize: '1.5rem'}}>AI Supplier Admin</b>
                                            </div>
                                            <p>A user
                                                who submits an AI project for
                                                assurance of AI ethics and
                                                assigns AI Suppliers to complete
                                                AI ethics questions.</p>
                                        </RevealSlow>
                                    </div>
                                    <div className="col text-center stakeholder-card py-5 mx-3">
                                        <RevealSlow>
                                            <div>
                                                <i class="fas fa-check text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                            </div>
                                            <div className="mb-3">
                                                <b style={{fontSize: '1.5rem'}}>Validator</b>
                                            </div>
                                            <p>A user who
                                                    validates question answers from
                                                    AI suppliers and gives comments
                                                    to question answers.</p>
                                        </RevealSlow>
                                    </div>
                                    <div className="col text-center stakeholder-card py-5 mx-3">
                                        <RevealSlow>
                                            <div>
                                                <i class="fas fa-laptop text-custom mb-3" style={{fontSize: '3rem'}}></i>
                                            </div>
                                            <div className="mb-3">
                                                <b style={{fontSize: '1.5rem'}}>Admin</b>
                                            </div>
                                            <p>A user who is the
                                                    administrator of the system.</p>
                                        </RevealSlow>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio-box rounded position-relative overflow-hidden">
                                {/* <a
                                    class="mfp-image"
                                    href="/static/picture/assurance-process.png"
                                    title="Assurance Process"
                                >
                                    <img
                                        src="/static/picture/assurance-process.png"
                                        class="img-fluid"
                                        alt="member-image"
                                    />
                                </a> */}
                                
                            </div>
                        </div>
                    </div>
                </section>
                <section class="section">
                    <div className="timeline">
                        <Reveal>
                            <div className="timeline-container timeline-left-container">
                                <img src="/static/picture/assurance-process1.2.png" alt="" />
                                <div className="timeline-textbox">
                                    <h2>AI Supplier Admin</h2>
                                    <p>Submits an AI project</p>
                                    <span className="timeline-left-container-arrow"></span>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="timeline-container timeline-right-container">
                                <img src="/static/picture/assurance-process2.2.png" alt="" />
                                <div className="timeline-textbox">
                                    <h2>System Admin</h2>
                                    <p>Approves the project</p>
                                    <span className="timeline-right-container-arrow"></span>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="timeline-container timeline-left-container">
                                <img src="/static/picture/assurance-process3.2.png" alt="" />
                                <div className="timeline-textbox">
                                    <h2>AI Supplier</h2>
                                    <p>Answers questions on the ethics of the project</p>
                                    <span className="timeline-left-container-arrow"></span>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="timeline-container timeline-right-container">
                                <img src="/static/picture/assurance-process4.2.png" alt="" />
                                <div className="timeline-textbox">
                                    <h2>Validator</h2>
                                    <p>Validates questions and provides comments</p>
                                    <span className="timeline-right-container-arrow"></span>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div className="timeline-container timeline-left-container">
                                <img src="/static/picture/assurance-process5.2.png" alt="" />
                                <div className="timeline-textbox">
                                    <h2>System Admin</h2>
                                    <p>Generates assurance report when Validator accepts all answers from the AI supplier</p>
                                    <span className="timeline-left-container-arrow"></span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </section>

                {/* <!-- E-LENS PROCESS END --> */}
                {/* <!-- SERVICES START --> */}
                <section class="section">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-8 col-md-12 mb-3">
                                <div class="mb-4 pb-2 text-center">
                                    <h2 class="title text-uppercase mb-4 large-title-greener">
                                        Our Services
                                    </h2>
                                    <h3 class="mb-0">
                                        We provide services for various aspects
                                        of assurance of AI ethics. Innovative
                                        qualitative and quantitative approaches
                                        are utilised for the assessment of the
                                        compliance of AI with various ethical
                                        principles.
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <Reveal>
                            <div class="row my-5">
                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fas fa-chalkboard-teacher text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Best Practice of Assurance
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Provide a best practice to validate
                                                ethical principles qualitatively and
                                                quantitatively collaborating with
                                                customers.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fas fa-chalkboard-teacher"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fas fa-hand-holding-heart text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Evaluation of AI Transparency
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Evaluate the traceability,
                                                communication, and explainability of
                                                AI solutions with qualitative and
                                                quantitative metrics.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fas fa-hand-holding-heart"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white pb-5">
                                        <div class="service-icon text-custom">
                                            <i class="fas fa-wrench text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Assessment of AI Fairness
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Assess bias of data and model, and
                                                accessibility and universal design
                                                with qualitative and quantitative
                                                metrics.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fas fa-layer-group"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div class="row my-5">
                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fas fa-layer-group text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Assessment of Accountability
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Validate the auditability, negative
                                                impact, trade-offs, and ability to
                                                redress of AI solutions with
                                                innovative metrics.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fas fa-layer-group"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fab fa-sketch text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Assurance of AI Privacy
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Assure the respect for privacy and
                                                data protection, and quality and
                                                integrity of data with structured
                                                checklists.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fab fa-sketch"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fa fa-adjust text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Mitigation for AI Ethics
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Provide suggestions objectively to
                                                mitigate ethical issues that AI
                                                solutions have for the ethical use
                                                of AI.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fa fa-adjust"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div class="row my-5">
                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fa fa-newspaper text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Research on AI Ethics
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Conduct extensive research on AI
                                                ethics by developing advanced
                                                algorithms and innovative
                                                approaches.
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fa fa-newspaper"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fa fa-users-cog text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Consulting on AI Ethics
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Provide support to achieve
                                                responsible and safe use of AI with
                                                the latest AI ethical frameworks and
                                                regulations.{" "}
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fa fa-users-cog"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fa fa-user-check text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Customised Assessment
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Provide customised assessment of AI
                                                ethical principles according to
                                                client’s requirements and
                                                applications.{" "}
                                            </p>
                                        </div>
                                        <div class="feature-hover-icon">
                                            <i class="fa fa-user-check"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal>
                            <div class="row my-5">
                                <div class="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div class="types-of-service p-4 rounded border bg-white">
                                        <div class="service-icon text-custom">
                                            <i class="fa fa-book-open text-custom float-left mb-0 mr-3"></i>
                                        </div>
                                        <div class="service-head overflow-hidden d-block">
                                            <h4 class="title">
                                                Short Course on AI Ethics
                                            </h4>
                                            <p class="text-muted mb-0">
                                                Deliver a comprehensive short course
                                                on AI ethics for AI ethical
                                                challenges and key ethical
                                                principles.
                                                <a
                                                    href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                                    target="_blank"
                                                    class="text-custom"
                                                >
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    {/* </div> */}
                </section>
                {/* <!-- SERVICES END --> */}

                {/* <!-- SERVICES START */}
                <section class="section bg-light" hidden={true}>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-12">
                                <div class="section-title text-center mb-4 pb-2">
                                    <h3 class="title text-uppercase mb-4">
                                        What We Offer ?
                                    </h3>
                                    <p class="text-muted para-desc mx-auto mb-0">
                                        Donec sodales sagittis magna. Excepturi
                                        sint occaecati cupiditate non provident,
                                        similique sunt in culpa qui officia
                                        deserunt mollitia animi.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-12 mt-4 pt-2">
                                <div
                                    id="owl-three"
                                    class="owl-carousel owl-theme"
                                >
                                    <div class="owl-services mx-1">
                                        <div class="img">
                                            <img
                                                src="static/picture/img-1.jpg"
                                                alt="service_img"
                                                class="img-fluid rounded"
                                            />
                                        </div>
                                        <div class="owl-service-head pt-3 px-4 text-center">
                                            <h5>
                                                <a
                                                    href="javascript:void(0)"
                                                    class="text-dark"
                                                >
                                                    Financial Analysis
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">
                                                Nam libero tempore, cum soluta
                                                nobis est eligendi optio cumque
                                                nihil placeat facere possimus,
                                                omnis voluptas assumenda est.
                                            </p>
                                            <div class="mt-3">
                                                <a href="#" class="text-custom">
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="owl-services mx-1">
                                        <div class="img">
                                            <img
                                                src="/static/picture/img-2.jpg"
                                                alt="service_img"
                                                class="img-fluid rounded"
                                            />
                                        </div>
                                        <div class="owl-service-head pt-3 px-4 text-center">
                                            <h5>
                                                <a
                                                    href="javascript:void(0)"
                                                    class="text-dark"
                                                >
                                                    Best Advisors
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">
                                                I will give you a complete
                                                account of the system, and
                                                expound the actual teachings of
                                                the great explorer.
                                            </p>
                                            <div class="mt-3">
                                                <a href="#" class="text-custom">
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="owl-services mx-1">
                                        <div class="img">
                                            <img
                                                src="/static/picture/img-3.jpg"
                                                alt="service_img"
                                                class="img-fluid rounded"
                                            />
                                        </div>
                                        <div class="owl-service-head pt-3 px-4 text-center">
                                            <h5>
                                                <a
                                                    href="javascript:void(0)"
                                                    class="text-dark"
                                                >
                                                    Research Management
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">
                                                Contrary to popular belief,
                                                Lorem Ipsum is not simply random
                                                text has roots in a piece of
                                                classical Latin literature.
                                            </p>
                                            <div class="mt-3">
                                                <a href="#" class="text-custom">
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="owl-services mx-1">
                                        <div class="img">
                                            <img
                                                src="/static/picture/img-4.jpg"
                                                alt="service_img"
                                                class="img-fluid rounded"
                                            />
                                        </div>
                                        <div class="owl-service-head pt-3 px-4 text-center">
                                            <h5>
                                                <a
                                                    href="javascript:void(0)"
                                                    class="text-dark"
                                                >
                                                    Work Deadline
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">
                                                Nor again is there anyone who
                                                loves or pursues which is said
                                                to have originated or desires to
                                                obtain pain of itself.
                                            </p>
                                            <div class="mt-3">
                                                <a href="#" class="text-custom">
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="owl-services mx-1">
                                        <div class="img">
                                            <img
                                                src="/static/picture/img-5.jpg"
                                                alt="service_img"
                                                class="img-fluid rounded"
                                            />
                                        </div>
                                        <div class="owl-service-head pt-3 px-4 text-center">
                                            <h5>
                                                <a
                                                    href="javascript:void(0)"
                                                    class="text-dark"
                                                >
                                                    Investment Trade
                                                </a>
                                            </h5>
                                            <p class="text-muted mb-0">
                                                The standard chunk of Lorem
                                                Ipsum used since the 1500s is
                                                reproduced below for those
                                                interested.
                                            </p>
                                            <div class="mt-3">
                                                <a href="#" class="text-custom">
                                                    Read More{" "}
                                                    <i class="mdi mdi-chevron-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- CONTACT END --> */}
                {/*<section class="section-two bg-custom">*/}
                {/*    <div class="container">*/}
                {/*        <div class="row justify-content-center">*/}
                {/*            <div class="col-lg-8 col-md-12">*/}
                {/*                <div class="section-title text-center">*/}
                {/*                    <h5 class="title text-light text-uppercase font-weight-normal">*/}
                {/*                        Do You Want To Work With E-LENS ?*/}
                {/*                    </h5>*/}
                {/*                    <div class="mt-4">*/}
                {/*                        <a*/}
                {/*                            href="contact.html"*/}
                {/*                            class="btn btn-light"*/}
                {/*                        >*/}
                {/*                            Contact Us*/}
                {/*                        </a>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/* <!-- CONTACT END --> */}

                {/* <!-- FOOTER START --> */}
                <footer class="footer bg-dark">
                    <div class="container">
                        {/* <!--Footer Info --> */}
                        <div class="row footer-info">
                            <div class="col-lg-4 col-md-12">
                                <a href="index.html" class="logo">
                                    <img
                                        src="/static/picture/logo-e-lens-white.png"
                                        alt="missing_logo"
                                        height="50"
                                    />
                                </a>
                                {/* <!-- <p class="text-foot mt-4">These cases are perfectly simple and easy to free hour, when nothing
                        prevents distinguish.</p> --> */}
                                <div>
                                    <ul class="list-unstyled social-icon social mt-4 mb-0">
                                        <li class="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i class="fab fa-apple"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i class="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li class="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                class="rounded"
                                            >
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-2 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <div class="footer-head">
                                    <h6 class="title mb-0">E-LENS</h6>
                                </div>
                                <div class="footer-item mt-4">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a href="login.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Log in
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Our Team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="projects.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Projects
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                                <div class="footer-head">
                                    <h6 class="title mb-0">Useful</h6>
                                </div>
                                <div class="footer-item mt-4">
                                    <ul class="list-unstyled mb-0">
                                        <li>
                                            <a
                                                href="http://www.hcai-lab.org"
                                                target="_blank"
                                            >
                                                <i class="mdi mdi-chevron-right"></i>
                                                Research
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                                target="_blank"
                                            >
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Short Course
                                            </a>
                                        </li>
                                        <li>
                                            <a href="news.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                News
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i class="mdi mdi-chevron-right"></i>{" "}
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- <div class="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0"> */}

                        </div>
                        {/* <!-- End Footer Info --> */}
                    </div>
                </footer>
                <footer class="footer bg-dark footer-bar py-4">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12">
                                <div class="text-center">
                                    <p class="text-foot mb-0">
                                        Copyright &copy; 2021. E-LENS All rights
                                        reserved.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* <!-- FOOTER END --> */}

                {/* <!-- Back to top --> */}
                <a
                    href="#"
                    class="back-to-top rounded text-center"
                    id="back-to-top"
                >
                    <i class="mdi mdi-chevron-up d-block"> </i>
                </a>
                {/* <!-- Back to top --> */}

                {/* <!-- Back to top --> */}
                <a
                    href="#"
                    class="back-to-top rounded text-center"
                    id="back-to-top"
                >
                    <i class="mdi mdi-chevron-up d-block"> </i>
                </a>
                {/* <!-- Back to top --> */}
            </div>
        );
    }
}

export default Service;

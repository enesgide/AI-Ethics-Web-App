/* eslint-disable */
import React, { Component } from 'react'
import TextTransition, { presets } from "react-text-transition";

import logo from '../../assets/images/logo-e-lens.png'
// import blog11 from '../../assets/images/blog-11.jpg'



class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

   


    render() {
        return (
            <div>
                <div id="preloader">
                    <div id="status">
                        <div className="text-center"><img src={logo} height="50" alt="" /> </div>
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>

                <header id="topnav" className="defaultscroll fixed-top navbar-sticky sticky">
                    <div className="container">
                        <div>
                            <a href="index.html" className="logo">
                                <img src={logo} alt="missing_logo" height="60" />
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
                                        <a href="/login" className="btn btn-custom mr-3">Log in</a>
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
                </header>

                {/*<section className="home-slider position-relative">*/}
                {/*    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">*/}
                {/*        <div className="carousel-inner">*/}
                {/*            <div className="carousel-item active">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/501.jpg'}}>*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-center pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-center">*/}
                {/*                                    <h1 className="heading text-white">E-LENS (Ethical LENS) for Assurance of AI Ethics*/}
                {/*                                    </h1>*/}
                {/*                                    <p className="text-white-50 para-desc mx-auto">Unique and extensible tools to make*/}
                {/*                                        AI ethics assurance accessible for customers with collaborative testing*/}
                {/*                                        easily</p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                            <a href="#" className="btn btn-outline-custom">Learn More</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!* <!--end carousel item--> *!/*/}

                {/*            <div className="carousel-item">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/bg-building-3.jpg'}}*/}
                {/*                    >*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-start pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-left">*/}
                {/*                                    <h1 className="heading text-white">Assess Compliance of AI with Ethical Principles*/}
                {/*                                        Qualitatively</h1>*/}
                {/*                                    <p className="text-white-50 para-desc ml-auto">Comprehensive qualitative approaches*/}
                {/*                                        to make the assessment of ethical principles for AI simple and operable</p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!* <!--end carousel item--> *!/*/}

                {/*            <div className="carousel-item">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/501.jpg'}}>*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-end pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-right">*/}
                {/*                                    <h1 className="heading text-white">Evaluate Quality of AI Explanations*/}
                {/*                                        Quantitatively</h1>*/}
                {/*                                    <p className="text-white-50 para-desc mr-auto">Advanced quantitative approaches to*/}
                {/*                                        understand whether and to what extent the AI explainability achieves the*/}
                {/*                                        defined objective</p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                            <a href="#" className="btn btn-outline-custom">Learn More</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!* <!--end carousel item--> *!/*/}

                {/*            <div className="carousel-item">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/501.jpg'}}>*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-end pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-left">*/}
                {/*                                    <h1 className="heading text-white">Assess Data Bias and Model Bias Faithfully</h1>*/}
                {/*                                    <p className="text-white-50 para-desc mr-auto">Innovative quantitative approaches to*/}
                {/*                                        estimate data bias and model bias respectively and faithfully to understand*/}
                {/*                                        AI fairness</p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                            <a href="#" className="btn btn-outline-custom">Learn More</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            /!* <!--end carousel item--> *!/*/}

                {/*            <div className="carousel-item">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/501.jpg'}}>*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-end pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-right">*/}
                {/*                                    <h1 className="heading text-white">Provide Mitigation Approaches for Assurance of AI*/}
                {/*                                        Ethics Objectively</h1>*/}
                {/*                                    <p className="text-white-50 para-desc mr-auto">Effective operable approaches to*/}
                {/*                                        mitigate AI ethics issues with systematic analysis of AI solutions</p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                            <a href="#" className="btn btn-outline-custom">Learn More</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className="carousel-item">*/}
                {/*                <div className="vh-100 d-flex align-items-center w-100"*/}
                {/*                    style={{background:'static/images/bg-home-5.jpg'}}>*/}
                {/*                    <div className="bg-overlay"></div>*/}
                {/*                    <div className="container">*/}
                {/*                        <div className="row justify-content-end pt-5">*/}
                {/*                            <div className="col-lg-8">*/}
                {/*                                <div className="title-heading text-left">*/}
                {/*                                    <h1 className="heading text-white">Report the Assurance of AI Ethics Evidently</h1>*/}
                {/*                                    <p className="text-white-50 para-desc mr-auto">Comprehensive report to summarise the*/}
                {/*                                        compliance of AI with ethical principles for easy sharing </p>*/}
                {/*                                    /!* <!-- <div className="mt-3">*/}
                {/*                            <a href="#" className="btn btn-custom mr-3">Contact Us</a>*/}
                {/*                            <a href="#" className="btn btn-outline-custom">Learn More</a>*/}
                {/*                        </div> --> *!/*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">*/}
                {/*        <span className="carousel-control-prev-icon" aria-hidden="true"></span>*/}
                {/*        <span className="sr-only">Previous</span>*/}
                {/*    </a>*/}
                {/*    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">*/}
                {/*        <span className="carousel-control-next-icon" aria-hidden="true"></span>*/}
                {/*        <span className="sr-only">Next</span>*/}
                {/*    </a>*/}
                {/*</section>*/}

                {/* <!-- ABOUT US START --> */}
                <section className="section">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-md-6">
                                <img src="static/picture/four-ethical-principles-3.png" className="img-fluid rounded " alt="" />
                                {/* <!-- shadow --> */}
                            </div>

                            <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title ml-lg-3">
                                    <h4 className="title mb-4 font-weight-normal text-uppercase">Assurance of AI Ethics for Responsible
                                        and Trustworthy Artificial Intelligence</h4>
                                    <p className="text-muted">
                                        <p>E-LENS (Ethical-LENS) provides a comprehensive and extensible tool to define a series of
                                            qualitative and quantitative metrics by which organizations can seek validations for the
                                            ethics around AI solutions. </p>
                                        <p>The outcomes got from qualitative and quantitative metrics have to meet the necessary
                                            standards so that a certificate can be issued to AI on its compliance with ethical
                                            principles. This ethics certification would apply both to the AI itself and to the
                                            company’s processes in producing AI. The certification would operate as a “trust stamp”
                                            for companies that meet relevant ethical standards and independent auditing
                                            requirements.</p>
                                    </p>
                                    <div className="mt-4">
                                        <a href="about.html" className="btn btn-custom">read more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ABOUT US END --> */}

                {/* <!-- SERVICES START --> */}
                <section className="section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4">Our Services</h3>
                                    <p className="text-muted mb-0">We provide services for various aspects of assurance of AI ethics.
                                        Innovative qualitative and quantitative approaches are utilised for the assessment of the
                                        compliance of AI with various ethical principles.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Best Practice of Assurance</h4>
                                        <p className="text-muted mb-0">Provide a best practice to validate ethical principles
                                            qualitatively and quantitatively collaborating with customers.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fas fa-chalkboard-teacher"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fas fa-hand-holding-heart"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Evaluation of AI Transparency</h4>
                                        <p className="text-muted mb-0">Evaluate the traceability, communication, and explainability of
                                            AI solutions with qualitative and quantitative metrics.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fas fa-hand-holding-heart"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fas fa-wrench"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Assessment of AI Fairness</h4>
                                        <p className="text-muted mb-0">Assess bias of data and model, and accessibility and universal
                                            design with qualitative and quantitative
                                            metrics.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fas fa-wrench"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
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

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fab fa-sketch"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Assurance of AI Privacy</h4>
                                        <p className="text-muted mb-0">Assure the respect for privacy and data protection, and quality
                                            and
                                            integrity of data with structured checklists.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fab fa-sketch"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fa fa-adjust"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Mitigation for AI Ethics</h4>
                                        <p className="text-muted mb-0">Provide suggestions objectively to mitigate ethical issues that
                                            AI
                                            solutions have for the ethical use of AI.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fa fa-adjust"></i>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded position-relative overflow-hidden">
                                    <div className="icon">
                                        <i className="fa fa-newspaper"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Research on AI Ethics</h4>
                                        <p className="text-muted mb-0">Conduct extensive research on AI ethics
                                            by developing advanced algorithms and innovative approaches.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fa fa-newspaper"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fa fa-users-cog"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Consulting on AI Ethics</h4>
                                        <p className="text-muted mb-0">Provide support to achieve responsible and safe use of AI
                                            with the latest AI ethical frameworks and regulations.</p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fa fa-users-cog"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <i className="fa fa-user-check"></i>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title">Customised Assessment</h4>
                                        <p className="text-muted mb-0">Provide customised assessment of AI ethical principles according
                                            to client’s requirements and applications. </p>
                                    </div>
                                    <div className="feature-hover-icon">
                                        <i className="fa fa-user-check"></i>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 mt-4 pt-2">
                                <div className="types-of-service text-center border p-4 rounded">
                                    <div className="icon">
                                        <a
                                            href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                            target="_blank"><i className="fa fa-book-open"></i></a>
                                    </div>
                                    <div className="service-head mt-3">
                                        <h4 className="title"><a
                                            href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                            target="_blank">Short Course on AI Ethics</a></h4>
                                        <p className="text-muted mb-0">Deliver a comprehensive short course on AI ethics for AI ethical
                                            challenges and key ethical principles.</p>
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
                    </div>
                </section>
                {/* Activities START */}
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4">Our AI Ethics Assurance Activities</h3>
                                </div>
                            </div>
                            <div className="portfolio-box rounded position-relative overflow-hidden">
                                <a className="mfp-image" href="images/work/work-1.jpg" title="Business Post">
                                    <img src="static/picture/our-activities.png" className="img-fluid" alt="member-image" />
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
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4">Our Projects</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="port portfolio-masonry">
                            <div className="portfolioContainer row">
                                <div className="col-lg-3 col-md-6 mt-4 pt-2 part">
                                    <div className="portfolio-box rounded position-relative overflow-hidden">
                                        <a className="mfp-image" href="images/work/work-1.jpg" title="Business Post">
                                            <img src="static/picture/work-1.jpg" className="img-fluid" alt="member-image" />
                                        </a>
                                        <div className="gallary-title text-center bg-light py-4">
                                            <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for Talent
                                                Shortlisting Algorithm</a></h6>
                                            <span className="text-muted">Human Resources</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-4 pt-2 part">
                                    <div className="portfolio-box rounded position-relative overflow-hidden">
                                        <a className="mfp-image" href="images/work/work-2.jpg" title="Business Post">
                                            <img src="static/picture/work-2.jpg" className="img-fluid" alt="member-image" />
                                        </a>
                                        <div className="gallary-title text-center bg-light py-4">
                                            <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for Water Pipe
                                                Failure Prediction</a></h6>
                                            <span className="text-muted">Infrastructure</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-4 pt-2 account">
                                    <div className="portfolio-box rounded position-relative overflow-hidden">
                                        <a className="mfp-image" href="images/work/work-3.jpg" title="Business Post">
                                            <img src="static/picture/work-3.jpg" className="img-fluid" alt="member-image"/>
                                        </a>
                                        <div className="gallary-title text-center bg-light py-4">
                                            <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for Traffic Delay
                                                Prediction</a></h6>
                                            <span className="text-muted">Transport</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-3 col-md-6 mt-4 pt-2 account">
                                    <div className="portfolio-box rounded position-relative overflow-hidden">
                                        <a className="mfp-image" href="images/work/work-4.jpg" title="Business Post">
                                            <img src="static/picture/work-4.jpg" className="img-fluid" alt="member-image" />
                                        </a>
                                        <div className="gallary-title text-center bg-light py-4">
                                            <h6><a href="work-single.html" className="text-dark">AI Ethics Assurance for Crop Yield
                                                Prediction</a></h6>
                                            <span className="text-muted">Agriculture</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 mt-4 pt-2">
                                <div className="text-center">
                                    <a href="projects.html" className="btn btn-custom">See More <i className="fas fa-angle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* WORK END */}


                {/* <!-- TESTIMONIAL START--> */}
                <section className="section">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4">Happy Client's Says</h3>
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
                                        <img src="static/picture/img-1.jpg"
                                            className="img-thumbnail avatar avatar-medium rounded-pill mx-auto shadow"
                                            style={{width: 'auto'}} alt=""/>
                                        <h6 className ="text-custom text-uppercase mb-0 mt-3">Harvey Z.</h6>
                                        <p className ="mb-0">Founder</p>
                                        <p className ="text-muted mt-3">" E-LENS validated the ethics of our AI solutions and helped us
                                        mitigated our important ethical issues.It is the world first work in my field."</p>
                                        <ul className ="list-unstyled text-custom">
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star-half-alt"></i></li>
                                        </ul>
                                    </div>

                                    <div className="customer-testi pt-4 px-4 pb-0 text-center">
                                        <img src="static/picture/img-4.jpg"
                                            className="img-thumbnail avatar avatar-medium rounded-pill mx-auto shadow"
                                            style={{width: 'auto'}} alt=""/>
                                        <h6 className ="text-custom text-uppercase mb-0 mt-3">Mike R.</h6>
                                        <p className ="mb-0">Founder</p>
                                        <p className ="text-muted mt-3">" The comprehensive qualitative and quantitative assessment of AI
                                        ethics for our AI product allowed us to redress possible ethics issues objectively."
                                        </p>
                                        <ul className ="list-unstyled text-custom">
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star"></i></li>
                                        <li className ="list-inline-item"><i className ="fas fa-star-half-alt"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- TESTIMONIAL END --> */}


                <section className="section" style={{background: 'url(static/images/bg-counter.jpg) center center'}}>
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row" id="counter">
                            <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1><i className="pe-7s-wristwatch" style={{color: '#a3c85e'}}></i></h1>
                                    <h2 className="counter-value" data-count="64">4</h2>
                                    <p className="counter-name mb-0">Consultings</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1><i className="pe-7s-note2" style={{color: '#a3c85e'}}></i></h1>
                                    <h2 className="counter-value" data-count="40">10</h2>
                                    <p className="counter-name mb-0">Projects</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1><i className="pe-7s-users" style={{color: '#a3c85e'}}></i></h1>
                                    <h2 className="counter-value" data-count="23">5</h2>
                                    <p className="counter-name mb-0">Clients</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 mt-4 mt-sm-0">
                                <div className="text-center py-4 text-white">
                                    <h1><i className="pe-7s-wine" style={{color: '#a3c85e'}}></i></h1>
                                    <h2 className="counter-value" data-count="53">2</h2>
                                    <p className="counter-name mb-0">Contributors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="section bg-light">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4">Our Team</h3>
                                    <p className="text-muted mx-auto para-desc mb-0">
                                        Our team is the industry’s leading Research & Development (R&D) team with a group of
                                        world-leading data scientists, industrial engineers, law experts, and social scientists
                                        committed to applying cutting-edge data science research and ethics research to
                                        the challenges and opportunities facing business, government and community. Our team focuses
                                        on
                                        assurance of ethics of AI solutionsfor various sectors including infrastructure
                                        management, transport, education, telecommunications, finance, energy, healthcare, dwelling
                                        and many others to improve productivity, enhance human wellbeing, and improve responsible
                                        use of AI.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                                    <div className="team-box-img">
                                        <img src="static/picture/image-1.jpg" alt="" className="img-fluid" />
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
                                            {/* <!--end icon--> */}
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
                                            {/* <!--end icon--> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                                    <div className="team-box-img">
                                        <img src="static/picture/image-3.jpg" alt="" className="img-fluid" />
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
                                            {/* <!--end icon--> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 mt-4 pt-2">
                                <div className="team-box rounded shadow position-relative overflow-hidden d-block">
                                    <div className="team-box-img">
                                        <img src="static/picture/image-4.jpg" alt="" className="img-fluid" />
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
                                            {/* <!--end icon--> */}
                                        </div>
                                    </div>
                                </div>
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
                {/*                    /!* <!-- <p className="text-muted mx-auto para-desc mb-0">Donec sodales sagittis magna. Excepturi sint *!/*/}
                {/*                    occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia*/}
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

                {/*<!-- collaborators start -->*/}
                {/*<!-- collaborators end-->*/}

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
                                    <img src="static/picture/logo-e-lens-white.png" alt="missing_logo" height="50" />
                                </a>
                                {/* <!-- <p className="text-foot mt-4">These cases are perfectly simple and easy to free hour, when nothing */}
                            {/* prevents distinguish.</p> --> */}
                                <div>
                                <ul className ="list-unstyled social-icon social mt-4 mb-0">
                                <li className ="list-inline-item"><a href="javascript:void(0)" className ="rounded"><i
                                className ="fab fa-apple"></i></a></li>
                                <li className ="list-inline-item"><a href="javascript:void(0)" className ="rounded"><i
                                className ="fab fa-facebook-f"></i></a></li>
                                <li className ="list-inline-item"><a href="javascript:void(0)" className ="rounded"><i
                                className ="fab fa-dribbble"></i></a></li>
                                <li className ="list-inline-item"><a href="javascript:void(0)" className ="rounded"><i
                                className ="fab fa-instagram"></i></a></li>
                                <li className ="list-inline-item"><a href="javascript:void(0)" className ="rounded"><i
                                className ="fab fa-twitter"></i></a></li>
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
                            {/* <!-- <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0"> */}
                            {/*<div className="footer-head">*/}
                            {/*    <h6 className="title mb-0">Newsletter</h6>*/}
                            {/*</div>*/}
                            {/*<div className="footer-news mt-4">*/}
                            {/*    <p className="text-foot">Subscribe to our email newsletter to receive useful articles and special*/}
                            {/*        offers.</p>*/}
                            {/*    <form>*/}
                            {/*        <div className="row">*/}
                            {/*            <div className="col-lg-12">*/}
                            {/*                <div className="form-group">*/}
                            {/*                    <input type="email" name="email" id="emailsubscribe"*/}
                            {/*                        className="form-control rounded" placeholder="Your email : " required />*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*            <div className="col-lg-12">*/}
                            {/*                <input type="submit" id="submitsubscribe" name="send"*/}
                            {/*                    className="btn btn-custom rounded w-100" value="Subscribe" />*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </form>*/}
                            {/*</div>*/}
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
                    <i className="mdi mdi-chevron-up d-block"> </i>
                </a>
            </div>
        )
    }
}

export default Index;
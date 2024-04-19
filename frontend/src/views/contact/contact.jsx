/* eslint-disable */
import React, { Component, useRef } from "react";
// import GoogleMaps, {containerStyle} from './component';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './contact.css'
import emailjs from '@emailjs/browser';
import Email from './Email';
import Reveal from "../service/reveal";
import RevealSlow from "../service/revealSlow";

class Contact extends Component {


    render() {
        console.log("render=====");
        const containerStyle = {
            width: '400px',
            height: '400px',
        }

        const onLoad = infoWindow => {
            console.log('infoWindow: ', infoWindow)
        }
        // const contactForm = useRef();
        //
        //
        // const sendEmail = (e) => {
        //     e.preventDefault();
        //
        //     emailjs.sendForm('service_tos2gg7', 'template_j9ly3bf', contactForm.current, 'user_8GDxoibzOCpYb5jXz5H3k')
        //         .then((result) => {
        //             console.log(result.text);
        //         }, (error) => {
        //             console.log(error.text);
        //         });
        // };


        return (

            <div>
                <div id="preloader">
                    <div id="status">
                        <div className="text-center">
                            <img
                                src="/static/picture/logo-e-lens-2.png"
                                height="50"
                                alt=""
                            />{" "}
                        </div>
                        <div className="spinner">
                            <div className="double-bounce1"></div>
                            <div className="double-bounce2"></div>
                        </div>
                    </div>
                </div>

                <header
                    id="topnav"
                    className="defaultscroll fixed-top navbar-sticky sticky"
                >
                    <div className="nav-contents">
                        <div>
                            <a href="index.html" className="logo">
                                <img
                                    src="/static/picture/logo-e-lens-2.png"
                                    alt="missing_logo"
                                    height="60"
                                />
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
                                        Get in Touch
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
                <section className="section">
                    <div className="container mx-auto px-0">
                    <Reveal>
                    <div className="row mt-lg-5 mt-md-3 mt-sm-30 justify-content-center">
                        <div className="col-lg-3 col-md-6 stakeholder-card mx-3">
                            <div className="contact-details text-center mt-4 p-2">
                                <h2>
                                    {" "}
                                    <a
                                        href="https://goo.gl/maps/oAwuw8g31kA3h4mx8"
                                        target="_blank"
                                    >
                                        <i
                                            className="fas fa-map-marker-alt"
                                            style={{color: '#67c750', fontSize: '3rem'}}
                                        ></i>{" "}
                                    </a>
                                </h2>
                                <div className="contact-head">
                                    <h6 className="mb-0">Location</h6>
                                    <p className="mb-0">
                                        <a
                                            href="https://goo.gl/maps/oAwuw8g31kA3h4mx8"
                                            target="_blank"
                                            className="text-muted"
                                        >
                                            15 Broadway, Ultimo, NSW 2007,
                                            Australia
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 stakeholder-card mx-3">
                            <div className="contact-details text-center mt-4 p-2">
                                <h2>
                                    <i
                                        className="fas fa-envelope"
                                        style={{color: '#67c750', fontSize: '3rem'}}
                                    ></i>
                                </h2>
                                <div className="contact-head">
                                    <h6 className="mb-0">Email</h6>
                                    <p className="mb-0">
                                        <a href="#" className="text-muted">
                                            analytics.enterprise@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 stakeholder-card mx-3">
                            <div className="contact-details text-center mt-4 p-2">
                                <h2>
                                    <i
                                        className="fas fa-globe"
                                        style={{color: '#67c750', fontSize: '3rem'}}
                                    ></i>
                                </h2>
                                <div className="contact-head">
                                    <h6 className="mb-0">Website</h6>
                                    <p className="mb-0">
                                        <a href="#" className="text-muted">
                                            www.hcai-lab.org
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </Reveal>
                    </div>
                </section>

                <section className="section">
                    <RevealSlow>
                    <div className="container custom-card px-5 py-5">
                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-md-12">
                                <div className="section-title mb-4 pb-2 text-center">
                                    <h3 className="title text-uppercase mb-4 text-custom">
                                        Get In Touch !
                                    </h3>
                                    <p className="text-muted mb-0">
                                        You are welcome to get in touch with us
                                        on assurance of AI ethics.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="column-left">
                                {/*<Email/>*/}
                                <Map google={this.props.google}  initialCenter={{
                                    lat: -33.883242648890096,
                                    lng: 151.20049808282508
                                }} zoom={14}  style={containerStyle}
                                >
                                    <Marker
                                        title={'UTS'}
                                        name={'Dolores park'}
                                        position={{lat: -33.883242648890096, lng:  151.20049808282508}} />

                                    <Marker />
                                    <InfoWindow
                                        visible={true}
                                        onLoad={onLoad}


                                    >
                                        <div>
                                            test
                                        </div>
                                    </InfoWindow>

                                </Map>
                            </div>
                            <div className="column-footer">

                                <div className="custom-form">

                                    <div id="message"></div>

                                    <Email />
                                    {/*<form*/}
                                    {/*    method="post"*/}
                                    {/*    action="php/contact.php"*/}
                                    {/*    name="contact-form"*/}
                                    {/*    id="contact-form"*/}
                                    {/*>*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-md-6">*/}
                                    {/*            <div className="form-group app-label">*/}
                                    {/*                <input*/}
                                    {/*                    name="name"*/}
                                    {/*                    id="name"*/}
                                    {/*                    type="text"*/}
                                    {/*                    className="form-control"*/}
                                    {/*                    placeholder="Your name :"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-md-6">*/}
                                    {/*            <div className="form-group app-label">*/}
                                    {/*                <input*/}
                                    {/*                    name="email"*/}
                                    {/*                    id="email"*/}
                                    {/*                    type="email"*/}
                                    {/*                    className="form-control"*/}
                                    {/*                    placeholder="Your email :"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-md-12">*/}
                                    {/*            <div className="form-group app-label">*/}
                                    {/*                <input*/}
                                    {/*                    name="subject"*/}
                                    {/*                    id="subject"*/}
                                    {/*                    className="form-control"*/}
                                    {/*                    placeholder="Your subject :"*/}
                                    {/*                />*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*        <div className="col-md-12">*/}
                                    {/*            <div className="form-group app-label">*/}
                                    {/*                <textarea*/}
                                    {/*                    name="comments"*/}
                                    {/*                    id="comments"*/}
                                    {/*                    rows="3"*/}
                                    {/*                    className="form-control"*/}
                                    {/*                    placeholder="Enter message :"*/}
                                    {/*                ></textarea>*/}
                                    {/*            </div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*    <div className="row">*/}
                                    {/*        <div className="col-sm-12">*/}
                                    {/*            <input*/}
                                    {/*                type="submit"*/}
                                    {/*                id="submit"*/}
                                    {/*                name="send"*/}
                                    {/*                className="submitBnt btn btn-custom w-100"*/}
                                    {/*                value="Send Message"*/}
                                    {/*            />*/}
                                    {/*            <div id="simple-msg"></div>*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</form>*/}
                                </div>
                            </div>
                        </div>

                        {/*<div className="row align-items-center">*/}
                        {/*    <div className="col-md-6 mt-4 pt-2">*/}
                        {/*       <div className="map map-1">*/}

                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="col-md-6 mt-4 pt-2">*/}

                        {/*    </div>*/}
                        {/*</div>*/}

                        
                    </div>
                    </RevealSlow>
                </section>

                {/*<section className="section-two bg-custom">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row justify-content-center">*/}
                {/*            <div className="col-lg-8 col-md-12">*/}
                {/*                <div className="section-title text-center">*/}
                {/*                    <h5 className="title text-light text-uppercase font-weight-normal">*/}
                {/*                        Do You Want To Work With E-LENS ?*/}
                {/*                    </h5>*/}
                {/*                    <div className="mt-4">*/}
                {/*                        <a*/}
                {/*                            href="contact.html"*/}
                {/*                            className="btn btn-light"*/}
                {/*                        >*/}
                {/*                            Contact Us*/}
                {/*                        </a>*/}
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
                                    <img
                                        src="/static/picture/logo-e-lens-white.png"
                                        alt="missing_logo"
                                        height="50"
                                    />
                                </a>
                                <div>
                                    <ul className="list-unstyled social-icon social mt-4 mb-0">
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                className="rounded"
                                            >
                                                <i className="fab fa-apple"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                className="rounded"
                                            >
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                className="rounded"
                                            >
                                                <i className="fab fa-dribbble"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                className="rounded"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a
                                                href="javascript:void(0)"
                                                className="rounded"
                                            >
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
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Log in
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Our Team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="projects.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Projects
                                            </a>
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
                                            <a
                                                href="http://www.hcai-lab.org"
                                                target="_blank"
                                            >
                                                <i className="mdi mdi-chevron-right"></i>
                                                Research
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://www.uts.edu.au/sites/default/files/2021-03/Ethical%20AI%20Course%20Factsheet%202021.pdf"
                                                target="_blank"
                                            >
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Short Course
                                            </a>
                                        </li>
                                        <li>
                                            <a href="news.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                News
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.html">
                                                <i className="mdi mdi-chevron-right"></i>{" "}
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Footer Info --> */}
                    </div>
                </footer>
                <footer className="footer bg-dark footer-bar py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <p className="text-foot mb-0">
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
                    className="back-to-top rounded text-center"
                    id="back-to-top"
                >
                    <i className="mdi mdi-chevron-up d-block"> </i>
                </a>
                {/* <!-- Back to top --> */}
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBe7BVxQB9Hq-SBBWE3DwMccpuZK_OS7SA")
})(Contact);

// export default Contact;

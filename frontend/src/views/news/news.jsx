/* eslint-disable */

import React, { Component } from "react";
import Reveal from '../../component/reveal';
import RevealSlow from '../service/revealSlow';
import '../index/index.css';

class News extends Component {
    render() {
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
                    <li className="has-submenu">
                        <a href="/">Home</a>
                    </li>

                    <li className="has-submenu">
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
                            <a
                                href="/login"
                                className="login-btn btn btn-custom mr-3"
                            >
                                Log in
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>

    <section class="bg-custom-page-title d-flex align-items-center justify-content-center w-100">
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
                            Recent News
                        </h3>
                    </Reveal>
                    </div>
                </div>
            </div>
        </div>
    </section>

                <section className="section" style={{paddingTop: "150px"}}>
                    <div className="container my-5">
                        <div class="mb-4 pb-2">
                            <h1 class="title text-uppercase mb-4 large-title">
                                New AI Models
                            </h1>
                        </div>
                        <div className="row mb-5" style={{paddingBottom: "150px"}}>
                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="about.html" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="about.html" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/*<div className="col-12">*/}
                            {/*    <ul className="pagination justify-content-center mb-0 list-unstyled">*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                {" "}*/}
                            {/*                Prev*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li className="active">*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                1*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                2*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                3*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                4*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*        <li>*/}
                            {/*            <a*/}
                            {/*                href="#"*/}
                            {/*                className="pr-3 pl-3 pt-2 pb-2 border"*/}
                            {/*            >*/}
                            {/*                Next{" "}*/}
                            {/*            </a>*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}
                        </div>
                        <div class="mb-4 pb-2 mt-5">
                            <h1 class="title text-uppercase mb-4 large-title">
                                AI Ethics Updates
                            </h1>
                        </div>
                        <div className="row" style={{paddingBottom: "150px"}}>
                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="about.html" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="about.html" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 mb-4 pb-2">
                                <div className="blog-post position-relative overflow-hidden d-block">
                                    <img
                                        src="/static/picture/news-ai-ethics-world-first.jpg"
                                        className="img-fluid"
                                        alt=""
                                    />

                                    <div className="content p-3">
                                        <ul className="list-unstyled">
                                            <li className="float-right news-date">
                                                <i className="mdi mdi-calendar"></i>{" "}
                                                Dec 08, 2020
                                            </li>
                                            <li>
                                                <a
                                                    href="#"
                                                    className="text-custom news-branding"
                                                >
                                                    <i className="mdi mdi-bookmark"></i>{" "}
                                                    Branding
                                                </a>
                                            </li>
                                        </ul>
                                        <h5>
                                            <a
                                                href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                target="_blank"
                                                className="text-dark title"
                                            >
                                                {" "}
                                                A world first for ethical AI
                                            </a>
                                        </h5>
                                        <p className="text-muted news-info">
                                            Delivered the ‘non-biased talent
                                            shortlisting algorithm validation’
                                            project, a pioneering independent
                                            validation of Ethical AI.
                                        </p>
                                        <ul className="post-meta pt-2 border-top list-unstyled mb-0">
                                            <li className="float-right">
                                                <a
                                                    href="https://www.scimex.org/newsfeed/a-word-first-for-ethical-ai-in-employment-practices"
                                                    target="_blank"
                                                    className="readmore text-dark"
                                                >
                                                    
                                                    <a href="about.html" className="read-more btn btn-custom">read more</a>
                                                </a>
                                            </li>
                                            <li>
                                                <ul className="list-unstyled">
                                                    <li className="d-inline-block mr-2">
                                                        <a
                                                            href="#"
                                                            className="like text-dark news-small"
                                                        >
                                                            <i className="mdi mdi-heart-outline"></i>{" "}
                                                            29
                                                        </a>
                                                    </li>
                                                    <li className="d-inline-block">
                                                        <a
                                                            href="#"
                                                            className="comment text-dark news-small"
                                                        >
                                                            {" "}
                                                            <i className="mdi mdi-comment-outline"></i>
                                                            40
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            {/* <!-- <div className="col-lg-3 col-md-4 mt-4 mt-lg-0 pt-2 pt-lg-0">
                <div className="footer-head">
                    <h6 className="title mb-0">Newsletter</h6>
                </div>
                <div className="footer-news mt-4">
                    <p className="text-foot">Subscribe to our email newsletter to receive useful articles and special
                        offers.</p>
                    <form>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <input type="email" name="email" id="emailsubscribe"
                                        className="form-control rounded" placeholder="Your email : " required/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <input type="submit" id="submitsubscribe" name="send"
                                    className="btn btn-custom rounded w-100" value="Subscribe"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
                        </div>
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
                <a
                    href="#"
                    className="back-to-top rounded text-center"
                    id="back-to-top"
                >
                    <i className="mdi mdi-chevron-up d-block"> </i>
                </a>
            </div>
        );
    }
}

export default News;

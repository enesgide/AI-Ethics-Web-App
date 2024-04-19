import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Email = () => {
    const contactForm = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_tos2gg7', 'template_j9ly3bf', contactForm.current, 'user_8GDxoibzOCpYb5jXz5H3k')
            .then((result) => {
                console.log(result);
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("send email successfully")
    };

    return (

        // <form name="contact-form"
        //       id="contact-form" ref={contactForm} onSubmit={sendEmail}>
        //     <label>Name</label>
        //     <input type="text" name="user_name" />
        //     <label>Email</label>
        //     <input type="email" name="user_email" />
        //     <label>Message</label>
        //     <textarea name="message" />
        //     <input type="submit" value="Send" />
        // </form>

        <form
            name="contact-form"
            id="contact-form"
            ref={contactForm} onSubmit={sendEmail}
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group app-label">
                        <input
                            name="name"
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Your name :"
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="form-group app-label">
                        <input
                            name="email"
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Your email :"
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group app-label">
                        <input
                            name="subject"
                            id="subject"
                            className="form-control"
                            placeholder="Your subject :"
                        />
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-group app-label">
                                                    <textarea
                                                        name="message"
                                                        id="comments"
                                                        rows="3"
                                                        className="form-control"
                                                        placeholder="Enter message :"
                                                    ></textarea>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <input
                        type="submit"
                        id="submit"
                        name="send"
                        className="submitBnt btn btn-custom w-100"
                        value="Send"
                    />
                    <div id="simple-msg"></div>
                </div>
            </div>
        </form>
    );
};

export default Email;
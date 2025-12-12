import React, { useState } from 'react';
import '../Styles/contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Message sent!');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <div className="contact-section" id='contact'>
            <h1 className="section_contact text-center">Contact</h1>

            <p className="contact-description">
                We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. If you’re interested in collaborating on a project, don’t hesitate to ask — our team is here to help and will get back to you as soon as possible.
            </p>


            <div className="contact-content">
                <div className="contact-info">
                    <div className="info-block">
                        <div className="cicon">
                            <i className="bi bi-geo-alt-fill"></i>
                        </div>
                        <div>
                            <strong>Address</strong>
                            <p>Lalitpur,Nepal</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="cicon">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div>
                            <strong>Call Me</strong>
                            <p>+977 9843433452</p>
                        </div>
                    </div>

                    <div className="info-block">
                        <div className="cicon">
                            <i className="bi bi-envelope-fill"></i>
                        </div>
                        <div>
                            <strong>Email Me</strong>
                            <p>sakshyamkhadka982@gmail.com</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />

                    <a href="mailto:khadkasakshyam60.gmailcom">
                        <button type="submit" className="send-btn" >
                            Send Message
                        </button>
                    </a>
                </form>
            </div>
        </div>
    );
};

export default Contact;

import React from "react";
import {
  FaDownload,
  FaEnvelope,
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaCheckCircle,
  FaStar,
  FaStarHalfAlt
} from "react-icons/fa";

import SkillsSection from "../Components/Skillsection";
import "../Styles/About.css";

const About = () => {
  return (
    <section className="container about-section" id="about">

      <div className="about-layout">

        <div className="about-left  d-flex flex-column ">
          <div className="profile-pic-wrapper">
            <img src="/Images/profile.png" alt="Profile" className="profile-pic" />
            <span className="online-indicator"></span>
          </div>

          <h2 className="name">Sakshyam Khadka</h2>
          <p className="title">Full Stack Developer</p>

          <div className="rating">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
            <span>4.8</span>
          </div>

          <div className="stats">
            <div className="stat"><h3>6</h3><p>PROJECTS</p></div>
            <div className="stat"><h3>3+</h3><p>YEARS</p></div>
            <div className="stat"><h3>2</h3><p>AWARDS</p></div>
          </div>

          <a href="../Sakshyam-CV.pdf" download><button className="btn btn-download">
            <FaDownload /> Download CV
          </button></a>

          <a href="#contact"><button className="btn btn-contact"><FaEnvelope /> Contact</button></a>

          <div className="about-left-social-box">
            <a href="https://www.facebook.com/sakshyam.khadka.438160"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/saksh_yam12/"><i className="bi bi-instagram"></i></a>
            <a href="https://github.com/sakshyamkhadka"><i className="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/sakshyam-khadka-826b98223/"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>

        <div className="about-right-container cotainer">
          <div className="about-right">
            <span className="section-label">ABOUT ME</span>
            <h1 className="main-title">Transforming Ideas into Digital Reality</h1>

            <p className="description">
              Hello! I'm Sakshyam Khadka, a passionate Full Stack Developer and Data Scientist.
            </p>

            <p className="description">
              I love building fast, scalable, beautiful digital experiences.
            </p>

            <p className="description">
              I specialize in frontend, backend, APIs, and data analytics.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="info-cards">
            <div className="info-card">
              <FaBriefcase className="icon" />
              <div><p className="info-label">EXPERIENCE</p><p className="info-value">2+ Years</p></div>
            </div>

            <div className="info-card">
              <FaGraduationCap className="icon" />
              <div><p className="info-label">DEGREE</p><p className="info-value">BCA (Ongoing)</p></div>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="icon" />
              <div><p className="info-label">BASED IN</p><p className="info-value">Lalitpur, Nepal</p></div>
            </div>

            <div className="info-card">
              <FaEnvelope className="icon" />
              <div><p className="info-label">EMAIL</p><p className="info-value">sakshyamkhadka982@gmail.com</p></div>
            </div>

            <div className="info-card">
              <FaPhone className="icon" />
              <div><p className="info-label">PHONE</p><p className="info-value">(+977) 9820092462</p></div>
            </div>

            <div className="info-card">
              <FaCheckCircle className="icon" />
              <div><p className="info-label">AVAILABILITY</p><p className="info-value">Open to Work</p></div>
            </div>
          </div>

          {/* SKILLS SECTION */}
          <div className="skills-wrapper">
            <SkillsSection />
          </div>

        </div>

      </div>

    </section>
  );
};

export default About;

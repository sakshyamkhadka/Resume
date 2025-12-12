import React from "react";
import "../Styles/resume.css";


const DATA = {
  experience: [
    {
      title: "MERN Stack Development",
      company: "Evolve It Hub",
      period: "2022 – Present",
      description:
        "Developing full-stack web applications using MongoDB, Express, React, and Node.js. Collaborating with teams to build scalable APIs, improve UI responsiveness, and optimize performance.",
      tags: ["Full-Stack", "React", "Node.js"],
    },
    {
      title: "Machine Learning",
      company: "Evolve It Hub",
      period: "2020 – 2023",
      description:
        "Designed and trained machine learning models for prediction, classification, and automation tasks. Worked with datasets, feature engineering, and model evaluation using Python, TensorFlow, and Scikit-learn.",
      tags: ["Machine Learning", "Python", "AI"],
    },
    {
      title: "UX Designer",
      company: "Creative Studio Inc",
      period: "2023 – Present",
      description:
        "Creating user-centered designs through research, wireframing, prototyping, and usability testing. Working closely with developers and clients to build intuitive digital experiences.",
      tags: ["UX", "Wireframes", "Prototyping"],
    },
  ],

  education: [
    { title: "School Education", school: "Emerald Academy", period: "—" },
    { title: "College Education", school: "United Academy", period: "—" },
    { title: "Bachlors in BCA", school: "Pascel National College", period: "Present" },
  ],
};

export default function Resume() {
  return (
    <div className="resume-section container py-5" id="resume">
      <div className="text-center mb-5">
        <h1 className="section-title-title">Resume</h1>
        <p className="section-desc w-75 mx-auto text-center">
          A professional timeline of my experience and education.
        </p>
      </div>
  {/* Experience */}
  <div className="container_resume row   ">

      <div className=" experience col-12 mb-5 col-sm-12 col-lg-6 ">
        <h3 className="  section-title mb-4">Experience</h3>
        <h3>Professional Journey</h3>
        {DATA.experience.map((item, index) => (
          <div key={index} className="card mb-3  p-3 ">
            <h5>{item.title}</h5>
            <p className="text">
              {item.company} | {item.period}
            </p>
            <p>{item.description}</p>
            <div>
              {item.tags.map((tag, idx) => (
                <span key={idx} className="badge  me-2">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education col-12 col-sm-12 col-lg-6 ">
        <h3 className="section-title mb-4">Education</h3>
        <h4>Academic  Journey</h4>
        <div className="container d-flex customcss ">
        <div className="timeline">
          <div className="balls"><i class="bi bi-laptop"></i></div>
          <div className="balls"><i class="bi bi-filetype-ai"></i></div>
          <div className="balls"><i class="bi bi-bezier"></i></div>
        </div>
        <div className="text  flex-column ms-5 w-100 ">
        {DATA.education.map((edu, index) => (
          <div key={index} className="card mb-3  p-3 ">
            <h5>{edu.title}</h5>
            <p className="text">
              {edu.school}
            </p>
          </div>
        ))}
      </div>
      </div>
      </div>
  </div>

    </div>
  );
}

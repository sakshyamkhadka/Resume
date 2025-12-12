// Service.jsx
import React from "react";
import {
  FaUserAlt,
  FaLaptopCode,
  FaChartLine,
  FaBookOpen,
  FaBrain,
  FaPaintBrush,
  FaKeyboard
} from "react-icons/fa";
import "../Styles/ServicesPage.css";

const cards = [
  {
    icon: <FaLaptopCode size={30} />,
    text: "MERN Stack Developer",
    description:
      "I build full-stack web applications using MongoDB, Express.js, React, and Node.js.",
    link: "#",
    featured: true,
  },
  {
    icon: <FaUserAlt size={30} />,
    text: "UI/UX Designer",
    description:
      "I design clean and user-friendly interfaces with a focus on exceptional user experience.",
    link: "#",
  },
  {
    icon: <FaChartLine size={30} />,
    text: "Digital Marketing",
    description:
      "I grow brands through SEO, social media management, and online marketing strategies.",
    link: "#",
  },
  {
    icon: <FaBrain size={30} />,
    text: "Data Science",
    description:
      "I analyze data, build machine learning models, and extract actionable insights.",
    link: "#",
  },
  {
    icon: <FaBookOpen size={30} />,
    text: "MS Word Specialist",
    description:
      "I create structured, well-formatted documents, reports, and business files.",
    link: "#",
  },
  {
    icon: <FaPaintBrush size={30} />,
    text: "Basic Photo Editing",
    description:
      "I edit and enhance images using simple tools like Photoshop, Canva, and mobile apps.",
    link: "#",
  },
  {
    icon: <FaPaintBrush size={30} />,
    text: "Canva Designing",
    description:
      "I design social media posts, flyers, banners, and logos using Canva.",
    link: "#",
  },
  {
    icon: <FaKeyboard size={30} />,
    text: "Typing & Data Entry",
    description:
      "I type documents, enter data, and maintain accuracy with fast typing skills.",
    link: "#",
  },
];

const Service = () => {
  return (
    <div className="container mt-5" id="services">
      <h1 className="section-head text-center  ">Service</h1>

      <div className="row">
        {cards.map((card, index) => (
          <div className="col-md-3 col-sm-6 mb-4" key={index}>
            <div className={`service-card-custom ${card.featured ? "featured" : ""}`}>
              <div className="service-card-icon">{card.icon}</div>
              <div className="service-card-body">
                <h5 className="service-card-title">{card.text}</h5>
                <p className="service-card-text">{card.description}</p>
                <a href={card.link} className="explore-btn">
                  Explore <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;

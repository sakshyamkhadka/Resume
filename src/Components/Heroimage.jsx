import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "../Styles/heroimage.css"; 

const HeroImage = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Web Developer.", "Data Scientist.", "Creative Thinker."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm Sakshyam Khadka</h1>
          <p className="hero-typed fs-3">
            I'm a <span ref={typedRef}></span>
          </p>
          <p className="hero-subtitle">
            I create beautiful web experiences that bring ideas to life.
          </p>
          <div className="hero-social">
            <a
              href="https://www.facebook.com/sakshyam.khadka.100"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/saksh_yam12/"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sakshyam-khadka-826b98223/"
              target="_blank"
              rel="noreferrer"
              className="social-circle"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroImage;

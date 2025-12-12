import { useEffect, useRef, useState } from "react";
import "../Styles/skill.css";

const skillsData = [
  { name: "React & Next.js", value: 95 },
  { name: "Node.js & Express", value: 90 },
  { name: "UI/UX & Figma", value: 88 },
  { name: "MongoDB & PostgreSQL", value: 85 },
  { name: "Machine Learning", value: 89 },
];

export default function SkillsSection() {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="skills-container">
      <h2 className="title">Technical Proficiency</h2>

      {skillsData.map((skill, index) => (
        <div key={index} className="mb-4">
          <div className="d-flex justify-content-between">
            <h5 className="skill-name">{skill.name}</h5>
            <span className="skill-value">{skill.value}%</span>
          </div>

          <div className="progress bg-dark">
            <div
              className="progress-bar gradient-bar"
              role="progressbar"
              style={{
                width: animate ? `${skill.value}%` : "0%",
                transition: "width 1.8s ease",
              }}
            ></div>
          </div>
        </div>
      ))}
    </section>
  );
}

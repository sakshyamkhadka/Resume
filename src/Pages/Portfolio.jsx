import React from 'react';
import CardComponent from '../Components/CardComponents';

const Portfolio = () => {
const projects = [
  {
    title: 'Smart Agriculture Platform',
    description: 'A modern web solution that helps users manage agricultural tasks efficiently with real-time tracking and productivity tools.',
    imageUrl: 'Images/Project1.png',
    link: 'https://agriculture-website-git-main-sakshyamkhadkas-projects.vercel.app/'
  },
  {
    title: 'Personal Portfolio Website',
    description: 'A sleek and responsive portfolio built with React, designed to showcase projects, skills, and accomplishments effectively.',
    imageUrl: '/Images/Project2.png',
    link: '#'
  },
  {
    title: 'College Management System',
    description: 'A comprehensive platform that streamlines academic and administrative tasks, including student records and course management.',
    imageUrl: '/Images/Project3.png',
    link: '#'
  },
  {
    title: 'Admin Dashboard & Analytics',
    description: 'A dynamic dashboard featuring real-time analytics, intuitive UI components, and data-driven insights for efficient administration.',
    imageUrl: '/Images/Project4.png',
    link: '#'
  },
  {
    title: 'Online Learning Platform',
    description: 'An interactive learning system offering courses, progress tracking, and user-friendly tools for both students and instructors.',
    imageUrl: '/Images/Project5.png',
    link: '#'
  },
];


  return (
    <div className="container mt-5" id='portfolio'>
      <h1 className="section text-center">My Portfolio</h1>
      <div className="portfolio row">
        {projects.map((project, index) => (
          <CardComponent
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;

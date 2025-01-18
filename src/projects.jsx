import React from 'react';
import './css/projects.css';
import ProjectCard from './project_card.jsx';

function Projects() {
    const projects = [
        {
            title: "Gender Classification using CNN & VGG16",
            description: "Developed a CNN for the 'All Ages Faces Dataset' improving accuracy from 50% to 85% by integrating VGG pre-trained models and techniques from 'Deep Learning Based Approach for Gender Classification.'",
            githubLink: "https://github.com/pranav-85/gender_classification",
            image: "./src/assets/cv-cover.jpg",
        },
        {
            title: "Note taking Web App",
            description: "Built a full-stack note-taking app with Django REST API backend, React frontend, and MySQL database, featuring note creation, editing, deletion, pinning, secure authentication, and sorting.",
            githubLink: "https://github.com/pranav-85/NoteIt",
            image: "./src/assets/pexels-pixabay-270404.jpg", 
        },
        {
            title: "OCR-Driven Document Extraction Web Application",
            description: "Developed a React and Flask web app offering OCR services for extracting details from scanned driver's license images, enhancing accuracy with image preprocessing and Roboflow 3.0 object detection.",
            githubLink: "https://github.com/pranav-85/driver_license_data_validation",
            image: "./src/assets/doc-cover.jpg", 
        },
    ];

    return (
        <section className="projects">
            <h1>My Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>
        </section>
    );
}

export default Projects;

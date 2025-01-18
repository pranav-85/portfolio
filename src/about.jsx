import './css/about.css';

function About(){
    return(
        <section className="about">
            <div className="about-content">
                <h1>About me</h1>
                <p>I am a <b>pre-final year computer science student at IIITDM Kancheepuram</b> with a passion for problem solving and machine learning. I have experience in building web applications using <b>React, Django</b>. I have also worked on projects involving <b>computer vision</b> and <b>deep learning</b>. I am always eager to learn new technologies and improve my skills.</p>
            </div>
            <div className="work-experience">
                <h1>Work Experience</h1>
                <div className="positions">
                    <div className="position">
                        <h3>Research Intern</h3>
                        <p>Hybrid Intelligence Lab, IIITDM Kancheepuram</p>
                        <p><i>Dec 2024 - Present</i></p>
                        
                    </div>
                    <div className="position">
                        <h3>Data Analyst Intern</h3>
                        <p>NoQs Digital</p>
                        <p><i>Dec 2022 - Jan 2023</i></p>
                    </div>
                </div>
            </div>
            <div className="work-experience">
                <h1>Education</h1>
                <div className="positions">
                    <div className="position">
                        <h3>Bachelor of Technology Computer Science Engineering, IIITDM Kancheepuram</h3>
                        <p><b>CGPA:</b> 8.18 / 10</p>
                        <p><i>Nov 2022 - present</i></p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;
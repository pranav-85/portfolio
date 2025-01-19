import './css/home.css';
import { useEffect, useState } from 'react';

function Home() {
    const roles = ['Software Dev', 'ML Enthusiast', 'Problem Solver'];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const handleDownload = () => {
        const resumeUrl = 'public/resume.pdf'; // Path to your resume file
    
        const link = document.createElement('a'); // Create an invisible link
        link.href = resumeUrl;
        link.download = 'Pranav_Resume.pdf'; // Name of the downloaded file
        document.body.appendChild(link); // Add link to the DOM
        link.click(); // Trigger the click
        document.body.removeChild(link); // Clean up
      };

    useEffect(() => {
        const currentRole = roles[currentRoleIndex];
        let timer;

        if (!isDeleting && displayText.length < currentRole.length) {
            timer = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
            }, typingSpeed);
        } else if (isDeleting && displayText.length > 0) {
            timer = setTimeout(() => {
                setDisplayText(currentRole.slice(0, displayText.length - 1));
            }, typingSpeed / 2);
        } else if (!isDeleting && displayText.length === currentRole.length) {
            timer = setTimeout(() => {
                setIsDeleting(true);
            }, 1500); // Pause before deleting
        } else if (isDeleting && displayText.length === 0) {
            setIsDeleting(false);
            setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roles, currentRoleIndex, typingSpeed]);

    return (
        <>
            <section className="container">
                <div className="hello-text">
                    <p>Hey! My name is Pranav</p>
                    <div className="second-line">
                        <p>I am a</p>
                        <div className="role">&nbsp;{displayText}</div>
                        <span className='cursor'>|</span>
                    </div>
                    <button className="resume-download" onClick={handleDownload}><img src="https://img.icons8.com/?size=100&id=83988&format=png&color=000000" alt="" /> Download Resume</button>
                </div>

                <div className="profile-pic">
                    <img src="/assets/bitmoji-C0joG_aO.png" alt="pranav" />
                </div>
            </section>
            
        </>
    );
}

export default Home;

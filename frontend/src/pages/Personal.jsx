import React from 'react';

const Personal = () => {
    return (
        <div className="personal-container">
            <div className="personal-info">
                <h1>John Doe</h1>
                <h2>Software Developer</h2>
                
                <div className="info-section">
                    <h3>About Me</h3>
                    <p>Passionate software developer with experience in web development and problem-solving.</p>
                </div>
                
                <div className="info-section">
                    <h3>Contact</h3>
                    <ul>
                        <li>Email: john.doe@example.com</li>
                        <li>Location: New York, USA</li>
                        <li>LinkedIn: linkedin.com/in/johndoe</li>
                    </ul>
                </div>
                
                <div className="info-section">
                    <h3>Skills</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Personal;
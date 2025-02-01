import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
    const iconStyle={
        marginLeft:'10px'
    };
    const linkStyle={
        userSelect:'none'
    };
    const handleClick=(url)=>{

        window.open(url,'_blank', 'noopener,noreferrer');
    }
    const sendEmail=(url)=>{
        const email = url;
        const subject = 'Contact Request';
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
        window.location.href = mailtoUrl;
    }
    return (
        <div>

            <h1>
            Facebook 
            <span onClick={() => handleClick('https://www.facebook.com/duy.long.658223')} style={linkStyle}>
                    <FontAwesomeIcon icon={faFacebook} style={iconStyle}/> 
                </span>
          

            </h1>

            <h1>
                Github
                <span onClick={() => handleClick('https://github.com/DuyLongCode')} style={linkStyle}>
                    <FontAwesomeIcon icon={faGithub} style={iconStyle}/> 
                </span>
            </h1>

            <h1>
                Email
                <span onClick={()=>sendEmail('duylongmind432001@gmail.com')} style={linkStyle}>
                    <FontAwesomeIcon icon={faEnvelope} style={iconStyle}/> 
                </span>
            </h1>

        </div>
    );
};

export default Contact;
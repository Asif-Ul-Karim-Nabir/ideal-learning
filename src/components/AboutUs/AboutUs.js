import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory } from 'react-router';

const AboutUs = () => {
    const history = useHistory();
    const handleSupportClick = () =>{
        history.push('./support')
    }
    return (
        <div className="aboutUs-container">          
           <h3>About us</h3> 
           <br />
           <h2  className="text-info">Changing learning for the better</h2> 
           <p>Whether you want to learn or to share what you know, you’ve come to the right place. <br /> As a global destination for online learning, we connect people through knowledge.</p>   
           <h1 className="text-info">Our Instructor</h1>          
            <h3>Arafat Roman</h3>
            <h3>Rifat Ahmed</h3>
            <h3>Arif Azad</h3>
            <h3>Jahangir Alam</h3>   
            <h3>Rafiqul Islam</h3>   
            <h3>Asif-Ul Karim</h3>   
            <Button onClick={handleSupportClick} className="details-btn mt-2 mb-4">Support Team</Button>{' '}            
        </div>
    );
};

export default AboutUs;
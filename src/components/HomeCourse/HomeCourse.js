import React from 'react';
import './HomeCourse.css'

const HomeCourse = (props) => {
    const {name , img, duration} = props.homeCourse
    return (
        <div className="homeCourse-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>Duration : {duration}</p>
        </div>
    );
};

export default HomeCourse;
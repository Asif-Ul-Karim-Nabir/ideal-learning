import React from 'react';
import './HomeCourse.css'

const HomeCourse = (props) => {
    const {name , img,fee, duration} = props.homeCourse
    return (
        <div className="homeCourse-container">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Price : ${fee}</h5>
            <p>Duration : {duration}</p>
        </div>
    );
};

export default HomeCourse;
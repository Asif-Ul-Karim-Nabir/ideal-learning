import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect( () => {
        fetch('./courses.json')
        .then( res => res.json() )
        .then( data => setCourses(data))
    },[])
    return (
        <div>
            <h3 className="my-4">Total Course : {courses.length}</h3>           
            <Row xs={1} md={2} className="courses-container"> 
            {
                courses.map(course => <Course 
                    key={course.key}
                    course={course}
                    ></Course>)
            }
            </Row>
        </div>
    );
};

export default Courses;
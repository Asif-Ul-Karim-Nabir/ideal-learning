// import React, { useEffect } from 'react';
import { useParams } from 'react-router';

const CourseDetails = (props) => {
    const{ courseId} = useParams();
    // useEffect( () => {
    //     fetch('./courses.json')
    //     .then( res => res.json())
    //     .then(data => console.log(data))
    // },[])
    // console.log(courseId);
    return (
        <div>
            <h3>course details</h3>
            <h3>{courseId}</h3>
        </div>
    );
};

export default CourseDetails;
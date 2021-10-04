import React from 'react';
import { useParams } from 'react-router';

const CourseDetails = (props) => {
    const{ courseId} = useParams();
    return (
        <div>
            <h3>Course Details</h3>
            <h3>ID : {courseId}</h3>
        </div>
    );
};

export default CourseDetails;
import React from 'react';
import { Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const {name,duration,key , fee ,img, details} = props.course
    return (
            <div className="course-container">
            <Card className="w-75 mx-auto h-100 course-card">
                <Card.Img variant="top" src={img} className="course-img" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text> Price: ${fee} </Card.Text>
                        <Card.Text> Duration: ${duration} </Card.Text>
                        <Card.Text>  {details} </Card.Text>
                        <Link to={`/course/${key}`}>
                            <button className="details-btn">Details</button>
                        </Link>
                    </Card.Body>              
            </Card>
            </div>               
    );
};

export default Course;
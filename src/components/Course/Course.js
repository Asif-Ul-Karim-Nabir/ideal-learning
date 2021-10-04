import React from 'react';
import { Card, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Course.css'

const Course = (props) => {
    const {name, key , fee ,img, details} = props.course
    return (
            <Col>
            <Card className="w-75 mx-auto">
                <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>  {key} </Card.Text>
                        <Card.Text>  {fee} </Card.Text>
                        <Card.Text>  {details} </Card.Text>
                        <Link to={`/course/${key}`}>
                            <button >Details</button>
                        </Link>
                    </Card.Body>              
            </Card>
            </Col>               
    );
};

export default Course;
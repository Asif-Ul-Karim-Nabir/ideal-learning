import React from 'react';
import { Container } from 'react-bootstrap';
import notFoundImg from '../../images/404-not-found.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <Container>
            <img src={notFoundImg} className="notFound-img" alt="" />
        </Container>
    );
};

export default NotFound;
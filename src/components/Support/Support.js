import React from 'react';
import './Support.css'
import img from '../../images/support-banner-image.png'
import { Col, Container, Row } from 'react-bootstrap';

const Support = () => {
    return (
        <div className="support-container">
            <Container fluid>
            <Row>
            <Col xs={12} md={6} lg={6}>
                <h2 className="mt-5">Get Exciting Customer Support from our Expert Professional Support Team!</h2>
                <p>We take our customer's queries seriously and try level best to offer the best solutions. We follow Envato’s standard support policy for providing item support for any Envato items. For EnvyTheme.com, we follow EnvyTheme’s standard support policy.
                </p>
            </Col>
            <Col xs={12} md={6} lg={6}>
                <img src={img} className="support-img" alt="" />
            </Col>
            </Row>
            </Container>
        </div>
    );
};

export default Support;
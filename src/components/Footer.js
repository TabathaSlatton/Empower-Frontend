import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

const Footer = () => {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    <Col>
                        <h3>Empowerment</h3>
                        <ListGroup className="footer-list">
                            <ListGroup.Item className="bg-transparent border-0">253-320-6936</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">Lawrence, NJ</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">valbatha@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                    <h3>Featured</h3>
                        <ListGroup className="footer-list">
                            <ListGroup.Item className="bg-transparent border-0">253-320-6936</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">Lawrence, NJ</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">valbatha@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                    <h3>More From Me</h3>
                        <ListGroup className="footer-list">
                            <ListGroup.Item className="bg-transparent border-0">253-320-6936</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0"> Lawrence, NJ</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">valbatha@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                    <hr/>
                <Row>
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} EMPOWERMENT, INC. | All rights reserved | Terms of service | Privacy
                    </p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;

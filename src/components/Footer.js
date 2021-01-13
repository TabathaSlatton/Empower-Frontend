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
                            <ListGroup.Item action className="bg-transparent border-0" href="https://www.forbes.com/power-women/#13249bad5e25" target="_blank" style={{color: "darkgray"}}>Most Influential Women of 2020</ListGroup.Item>
                            <ListGroup.Item action className="bg-transparent border-0" href="https://clintonwhitehouse4.archives.gov/women/gresources.html" target="_blank" style={{color: "darkgray"}}>Government Resources for Women</ListGroup.Item>
                            {/* <ListGroup.Item action className="bg-transparent border-0" href="https://www.forbes.com/power-women/#13249bad5e25" target="_blank" style={{color: "darkgray"}}>valbatha@gmail.com</ListGroup.Item> */}
                        </ListGroup>
                    </Col>

                    <Col>
                    <h3>More From Me</h3>
                        <ListGroup className="footer-list">
                        <ListGroup.Item action className="bg-transparent border-0" href="https://github.com/TabathaSlatton" target="_blank" style={{color: "darkgray"}}>GitHub</ListGroup.Item>
                            <ListGroup.Item action className="bg-transparent border-0" href="https://tabathaslatton.github.io/" target="_blank" style={{color: "darkgray"}}>Blog</ListGroup.Item>
                            <ListGroup.Item action className="bg-transparent border-0" href="https://www.linkedin.com/in/tabatha-slatton" target="_blank" style={{color: "darkgray"}}>LinkedIn</ListGroup.Item>
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

import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import Copyright from './Copyright.js'

const MainFooter = () => {
    return(
        <div class="main-footer">
            <Container align="center" fluid >

                <Row style={{backgroundColor: '#F3E98B', paddingTop: '1rem'}}>
                    <Col>
                    <p class="footer-text-bold">About the Developer</p>
        
                    <p class="footer-text">created by Sascha Kala</p>
                    </Col>
                </Row>

                <Row style={{backgroundColor: '#F3E98B', paddingBottom: '1em'}}>
                    <Col>
                        <Nav.Link href="https://github.com/saschakala" target="_blank">GitHub</Nav.Link>
                    </Col>

                    <Col>
                        <Nav.Link href="https://saschakala.medium.com/" target="_blank">Medium</Nav.Link>
                    </Col>

                    <Col>
                        <Nav.Link href="https://www.linkedin.com/in/saschakala/" target="_blank">LinkedIn</Nav.Link>
                    </Col>

                    <Col>
                        <Nav.Link href="https://twitter.com/saschakala" target="_blank">Twitter</Nav.Link>
                    </Col>
                </Row>
                
                
        

                <Row style={{backgroundColor: '#ECEAEC', padding: '1rem'}}>
                    <Col>
                            <p class="footer-text-bold">Gratitude</p>
                            <p class="footer-text" style={{fontStyle: 'italic'}}>A very special thank you to everyone that submitted resources and helped me to compile this database - I couldn't have done it without you.</p>
                    </Col>
                </Row>

                <Copyright/>

            </Container>

        </div>
    )


}

export default MainFooter 
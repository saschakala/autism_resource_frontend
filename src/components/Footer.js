import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Copyright from './Copyright.js'

const Footer = () => {
    return(
        <div class="main-footer">
            <Container align="center" fluid>
                <Row style={{backgroundColor: '#ECEAEC', padding: '1rem'}}>
                    <Col>
                        <p class="footer-text">
                            A very special thank you to everyone that submitted resources and helped me to compile this database - I couldn't have done it without you.
                        </p>
                    </Col>


                    <Col>
                        <p style={{fontWeight: 'bold', fontSize: '1em', textAlign: 'left'}}>About</p>
                    </Col>

                </Row>

                <Copyright/>
            </Container>

        </div>
    )


}

export default Footer 
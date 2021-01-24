import React from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import Copyright from './Copyright.js'

const Footer = () => {
    return(
        <div class="main-footer">
            <Container align="center" fluid>
                <Row style={{backgroundColor: '#ECEAEC', padding: '1rem'}}>
                    <Col>
                        <p style={{fontWeight: 'bold', fontSize: '1em', textAlign: 'left'}}>About</p>
                        <ListGroup className="footer-list">
                            <ListGroup.Item className="bg-transparent border-0">253-320-6936</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">Lawrence, NJ</ListGroup.Item>
                            <ListGroup.Item className="bg-transparent border-0">valbatha@gmail.com</ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col>
                        <p style={{fontWeight: 'bold', fontSize: '1em', textAlign: 'left'}}>About</p>
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
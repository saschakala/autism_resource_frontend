import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Tabs, Tab, Modal, Row, Button, Col, Form, Card, Container} from "react-bootstrap";

class TestTabs extends Component{
    constructor(props) {
        super(props);
      
    }

    render() {
        return (
            <Container>
                <Card>
                    
                <Card.Header>
                        <Tabs defaultActiveKey="home" 
                              id="controlled-tab-example">
                                  
                        
                            <Tab eventKey="home" title="Home">
                            <Card.Body>
                                <p>Tab 1 body</p>
                            </Card.Body>
                            </Tab>
                        
                        
                            <Tab eventKey="profile" title="Profile">
                            <Card.Body>
                            <p>Tab 2 body</p>
                            </Card.Body>
                            </Tab>
                        
                        </Tabs>
                        </Card.Header>
                </Card>
            </Container>
        );
    }
}

export default TestTabs;
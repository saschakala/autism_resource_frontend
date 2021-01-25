import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'


class FeedbackPage extends React.Component {
  
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Feedback</h1>
                        </Col>
                    </Row>
                </Container>
        )
    }
  }
  
  
  export default FeedbackPage 
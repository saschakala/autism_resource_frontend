import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import FeedbackList from '../components/FeedbackList';
import {fetchFeedback} from '../actions/fetchFeedback';


class FeedbackPage extends React.Component {

componentDidMount() {
    this.props.fetchFeedback()
    }
    
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Feedback</h1>
                        </Col>
                    </Row>

                    <FeedbackList/>

                    <Row>
                        <Col>
                        <Form style={{paddingBottom: '2rem'}}>
                            <Form.Group controlId="feedbackTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Your thoughts..." />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" placeholder="...go here" />
                            </Form.Group>

                            <Form.Group controlId="feedbackName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>

                        </Form>
                        </Col>
                    </Row>


                </Container>
        )
    }
  }

  const mapStateToProps = state => {
    return {
      feedback: state.feedback[0],
    }
  }
  
  
  export default connect(mapStateToProps,{fetchFeedback})(FeedbackPage);
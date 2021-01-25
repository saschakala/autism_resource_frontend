import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {connect} from 'react-redux';
import FeedbackList from '../components/FeedbackList';
import {fetchFeedback} from '../actions/fetchFeedback';
import {addFeedback} from '../actions/addFeedback';


class FeedbackPage extends React.Component {

state = {
    title: '',
    feedback: '',
    name: ''
    }


handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
    }

handleSubmit = (event) => {
    // event.preventDefault()
    this.props.addFeedback(this.state)
    this.setState({
        title: '',
        feedback: '',
        name: ''
        })
    }


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
                        <Form onSubmit={this.handleSubmit} style={{paddingBottom: '2rem'}}>
                            <Form.Group controlId="feedbackTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control type="text" placeholder="Your thoughts..." name="title" value={this.state.title} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Body</Form.Label>
                                <Form.Control as="textarea" placeholder="...go here" name="feedback" value={this.state.feedback} onChange={this.handleChange}/>
                            </Form.Group>

                            <Form.Group controlId="feedbackName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
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
  
  
  export default connect(mapStateToProps,{fetchFeedback, addFeedback})(FeedbackPage);
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
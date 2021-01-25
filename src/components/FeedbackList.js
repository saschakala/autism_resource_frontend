import React from 'react';
import { Row, Col } from 'react-bootstrap';
import {connect} from 'react-redux';
import Feedback from './Feedback.js'

const FeedbackList = (props) => {
  
    return( 
        <div className="feedback-list">
            {props.feedback && props.feedback.map(
                feedback => <Feedback key = {feedback.id} {...feedback}/>
            )
            }
        </div>

    )
}

const mapStateToProps = state => {
    return {
      feedback: state.feedback[0],
    }
  }

  export default connect(mapStateToProps)(FeedbackList);
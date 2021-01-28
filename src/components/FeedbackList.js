import React from 'react';
import {connect} from 'react-redux';
import Feedback from './Feedback.js';
import {fetchFeedback} from '../actions/fetchFeedback';



class FeedbackList extends React.Component {

componentDidMount() {
    this.props.fetchFeedback()
    console.log(this.props.feedback)
}
    
    render() {
  
    return( 
        <div className="feedback-list">
            {this.props.feedback && this.props.feedback.map(
                feedback => <Feedback key = {feedback.id} {...feedback}/>
            )
            }
        </div>

    )
}
}

const mapStateToProps = state => {
    return {
      feedback: state.feedback,
    }
  }

  export default connect(mapStateToProps, {fetchFeedback})(FeedbackList);
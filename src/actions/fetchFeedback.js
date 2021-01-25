export function fetchFeedback() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/feedbacks')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'FETCH_FEEDBACK',
        payload: data.data 
      }))
    }
  }
export const addFeedback = (data) => {

    const bodyData = 
        {feedback: data}

    return (dispatch) => {
      fetch('http://localhost:3000/api/v1/feedbacks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      })
      .then(response => response.json())
      .then(data => {dispatch({
          type: 'ADD_FEEDBACK', 
          payload: data.data})
        }
      )
      
    }
  }
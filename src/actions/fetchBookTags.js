export function fetchBookTags() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/tags/books')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'FETCH_BOOKTAGS',
        payload: data.data 
      }))
    }
  }
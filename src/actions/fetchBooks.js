export function fetchBooks() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/books')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'FETCH_BOOKS',
        payload: data.data 
      }))
    }
  }
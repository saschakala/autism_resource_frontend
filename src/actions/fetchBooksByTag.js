export const fetchBooksByTag = (data) => { 
    return (dispatch) => {
        fetch(`http://localhost:3000/api/v1/books/${data}`)
          .then(resp => resp.json())
          .then(data => dispatch({
            type: 'FETCH_BOOKS_BY_TAG',
            payload: data.data 
          }))
        }
}
export function fetchArticles() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/sources/articles')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'FETCH_ARTICLES',
        payload: data.data 
      }))
    }
  }
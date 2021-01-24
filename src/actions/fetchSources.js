export function fetchSources() {
    return (dispatch) => {
    fetch('http://localhost:3000/api/v1/sources')
      .then(resp => resp.json())
      .then(data => dispatch({
        type: 'FETCH_SOURCES',
        payload: data.data 
      }))
    }
  }
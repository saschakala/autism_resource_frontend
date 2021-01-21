import React from 'react';

import JumboTron from './components/JumboTron'
import SourceThumbnails from './components/SourceThumbnails'

import Container from 'react-bootstrap/Container';


class App extends React.Component {

componentDidMount() {
  fetch('http://localhost:3000/api/v1/sources/books')
    .then(resp => resp.json())
    .then(data => console.log(data))
}

  render() {
    return (
      <Container>
        <div className="App">
          <JumboTron />
          <SourceThumbnails />
        </div>
      </Container>
    );
  }
}


export default App;
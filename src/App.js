import React from 'react';
import JumboTron from './components/JumboTron'


class App extends React.Component {

componentDidMount() {
  fetch('http://localhost:3000/api/v1/sources/books')
    .then(resp => resp.json())
    .then(data => console.log(data))
}

  render() {
    return (
      <div className="App">
        <JumboTron/>
      </div>
    );
  }
}


export default App;
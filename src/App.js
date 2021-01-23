import React from 'react';
import {connect} from 'react-redux'
import {fetchBooks} from '../actions/fetchBooks'

import JumboTron from './components/JumboTron'
import SourceThumbnails from './components/SourceThumbnails'

import Container from 'react-bootstrap/Container';


class App extends React.Component {

componentDidMount() {
  this.props.fetchBooks()
}

  render() {
    return (
        <div className="App">
          <JumboTron />
          {/* <SourceThumbnails /> */}
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sources: state.books
  }
}


export default (mapStateToProps, {fetchBooks}) App;
import React from 'react';
import {connect} from 'react-redux'
import {fetchBooks} from '../actions/fetchBooks'

import JumboTron from '../components/JumboTron'
import SourceThumbnails from '../components/SourceThumbnails'

import BookContainer from './BookContainer'


class App extends React.Component {

componentDidMount() {
  this.props.fetchBooks()
}

  render() {
    return (
        <div className="App">
          <JumboTron />
          {/* <SourceThumbnails /> */}
          <BookContainer books={this.props.books}/>
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books
  }
}


export default connect(mapStateToProps, {fetchBooks})(App);
import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';

import JumboTron from '../components/JumboTron';
import SourceThumbnails from '../components/SourceThumbnails';
import TestComponent from '../components/TestComponent';
import Router from '../components/Router'

import BookPage from './BookPage';
import HomePage from './HomePage';

import { Switch, Route } from 'react-router-dom'





class App extends React.Component {

componentDidMount() {
  this.props.fetchBooks()
}

  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/books' render={(routerProps) => <BookPage {...routerProps} books={this.props.books}/>}/>
            <Route exact path="/" component = { HomePage }/>
          </Switch>

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



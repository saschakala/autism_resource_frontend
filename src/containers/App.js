import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
          <NavBar/>

          <Switch>
            <Route path='/books' render={(routerProps) => <BookPage {...routerProps} books={this.props.books}/>}/>
            <Route exact path="/" component = { HomePage }/>
          </Switch>

          <Footer/>

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



import React from 'react';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';
import {fetchArticles} from '../actions/fetchArticles';

import NavBar from '../components/NavBar';
import MainFooter from '../components/MainFooter';

import BookPage from './BookPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';

import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

componentDidMount() {
  this.props.fetchBooks()
  this.props.fetchArticles()
}

  render() {
    return (
        <div className="App">
          <NavBar/>

          <Switch>
            <Route path='/books' render={(routerProps) => <BookPage {...routerProps} books={this.props.books}/>}/>
            <Route path='/articles' render={(routerProps) => <ArticlePage {...routerProps} articles={this.props.articles}/>}/>
            <Route exact path="/" component = { HomePage }/>
          </Switch>

          <MainFooter/>

        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.books,
    articles: state.articles
  }
}


export default connect(mapStateToProps, {fetchBooks, fetchArticles})(App);



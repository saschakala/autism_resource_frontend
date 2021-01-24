import React from 'react';
import {connect} from 'react-redux';
import {fetchSources} from '../actions/fetchSources';

import NavBar from '../components/NavBar';
import MainFooter from '../components/MainFooter';

import BookPage from './BookPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';

import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

books = () => {
  return this.props.sources.filter(source => source.attributes.source_type === "Book")
}

articles = () => {
  return this.props.sources.filter(source => source.attributes.source_type === "Article")
}

componentDidMount() {
  this.props.fetchSources()
}

  render() {
    return (
        <div className="App">
          <NavBar/>

          <Switch>
            <Route path='/books' render={(routerProps) => <BookPage {...routerProps} books={this.books()}/>}/>
            <Route path='/articles' render={(routerProps) => <ArticlePage {...routerProps} articles={this.articles()}/>}/>
            <Route exact path="/" component = { HomePage }/>
          </Switch>

          <MainFooter/>

        </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    sources: state.sources
  }
}



export default connect(mapStateToProps, {fetchSources})(App);



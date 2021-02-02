import React from 'react';
import {connect} from 'react-redux';
import {fetchSources} from '../actions/fetchSources';
import {fetchBookTags} from '../actions/fetchBookTags';
import history from '../history';


import NavBar from '../components/NavBar';
import MainFooter from '../components/MainFooter';

import BookPage from './BookPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import FeedbackPage from './FeedbackPage';

import { Router, Switch, Route } from 'react-router-dom'


class App extends React.Component {

componentDidMount() {
  this.props.fetchSources() 
  this.props.fetchBookTags()
}


  render() {
    return (
        <div className="App">
          <NavBar/>

          <Router history={history}>
            <Switch>
              <Route exact path='/books' component = { BookPage } />
              <Route path='/articles' render={(routerProps) => <ArticlePage {...routerProps} articles={this.props.sources &&this.props.sources.filter(source => source.attributes.source_type === "Article")}/>}/>
              <Route exact path="/feedback" component = { FeedbackPage }/>
              <Route exact path="/" component = { HomePage }/>
            </Switch>
          </Router>

          <MainFooter/>

        </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    sources: state.sources,
    tags: state.tags,
  }
}





export default connect(mapStateToProps, {fetchSources, fetchBookTags})(App);



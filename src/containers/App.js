import React from 'react';
import {connect} from 'react-redux';
import {fetchSources} from '../actions/fetchSources';
import {fetchBookTags} from '../actions/fetchBookTags';


import NavBar from '../components/NavBar';
import MainFooter from '../components/MainFooter';

import BookPage from './BookPage';
import HomePage from './HomePage';
import ArticlePage from './ArticlePage';
import FeedbackPage from './FeedbackPage';

import { Switch, Route } from 'react-router-dom'


class App extends React.Component {

componentDidMount() {
  this.props.fetchSources() 
}

// books = () => {
//   return this.props.sources.filter(source => source.attributes.source_type === "Book")
// }

// articles = () => {
//   return this.props.sources.filter(source => source.attributes.source_type === "Article")
// }


  render() {
    return (
        <div className="App">
          <NavBar/>

          <Switch>
            <Route path='/books' render={(routerProps) => <BookPage {...routerProps} books={this.props.sources && this.props.sources.filter(source => source.attributes.source_type === "Book")} tags={this.props.tags}/>}/>
            <Route path='/articles' render={(routerProps) => <ArticlePage {...routerProps} articles={this.props.sources &&this.props.sources.filter(source => source.attributes.source_type === "Article")}/>}/>
            <Route exact path="/feedback" component = { FeedbackPage }/>
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



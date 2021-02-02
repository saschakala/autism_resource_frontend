import React from 'react';
import BookCards from '../components/BookCards';
import { Container, Row, Col } from 'react-bootstrap';
import BookFilter from './BookFilter';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';

class BookPage extends React.Component {

componentDidMount() {
    this.props.fetchBooks() 
    // this.props.fetchBookTags()
    }
  
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Books</h1>
                        </Col>
                        <Col>
                            {/* <BookFilter tags={this.props.tags}/> */}
                        </Col>
                    </Row>
                    <BookCards books={this.props.books}/>
                </Container>
        )
    }
  }

const mapStateToProps = state => {
    return {
      books: state.books,
    }
  }
  
  
  export default connect (mapStateToProps, {fetchBooks}) (BookPage)
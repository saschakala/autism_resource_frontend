import React from 'react';
import BookCards from '../components/BookCards';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BookFilter from './BookFilter';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';
import {fetchBookTags} from '../actions/fetchBookTags';

class BookPage extends React.Component {

    componentDidMount() {
        this.props.fetchBooks() 
        this.props.fetchBookTags()
    }


    // handleChange = (event) => {
    //     this.props.fetchBooks(event.target.value)
    // }


    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Books</h1>
                        </Col>
                        <Col>

                            <BookFilter tags={this.props.book_tags}/>

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
      book_tags: state.book_tags
    }
  }
  
  
  export default connect (mapStateToProps, {fetchBooks, fetchBookTags}) (BookPage)

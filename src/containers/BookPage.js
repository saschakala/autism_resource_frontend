import React from 'react';
import BookCards from '../components/BookCards';
import { Container, Row, Col, Form } from 'react-bootstrap';
import BookFilter from './BookFilter';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';
import {fetchBookTags} from '../actions/fetchBookTags';
import {fetchBooksByTag} from '../actions/fetchBooksByTag';

class BookPage extends React.Component {
    constructor() {
        super();
        this.state = {
            tag: '',
        }
    }

    componentDidMount() {
        this.props.fetchBooks() 
        this.props.fetchBookTags()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.props.fetchBooksByTag(this.state.tag)
        this.setState({
            tag: ''
        })
    }


    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Books</h1>
                        </Col>
                        <Col>

                        <Form>
                            <Form.Group controlId="bookSelect">
                                <Form.Label>Filter books by category</Form.Label>
                                <Form.Control as="select" onChange={this.handleChange}name="tag">
                                <option>all</option>
                                {this.props.book_tags.map(tag => tag.attributes).map(attribute => 
                                    <option>{attribute.tag_name}</option>)}
                                </Form.Control>
                            </Form.Group>
                        </Form>

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
  
  
  export default connect (mapStateToProps, {fetchBooks, fetchBookTags, fetchBooksByTag}) (BookPage)
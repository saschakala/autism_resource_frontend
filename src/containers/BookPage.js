import React from 'react';
import BookCards from '../components/BookCards';
import { Container, Row, Col } from 'react-bootstrap'
import BookFilter from './BookFilter'

class BookPage extends React.Component {
  
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', padding: '1.3rem'}}>
                        <Col style={{backgroundColor: '#F86A4A', padding: '1.3rem'}}>
                        <h1>Books</h1>
                        </Col>
                        <Col>
                            <BookFilter tags={this.props.tags}/>
                        </Col>
                    </Row>
                    <BookCards books={this.props.books}/>
                </Container>
        )
    }
  }
  
  
  export default BookPage
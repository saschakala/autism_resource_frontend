import React from 'react';
import BookCards from '../components/BookCards';
import { Container, Row, Col } from 'react-bootstrap'

class BookPage extends React.Component {
  
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', backgroundColor: '#F86A4A', width: '30%', padding: '1.3rem'}}>
                        <Col>
                        <h1>Books</h1>
                        </Col>
                    </Row>
                    <BookCards books={this.props.books}/>
                </Container>
        )
    }
  }
  
  
  export default BookPage
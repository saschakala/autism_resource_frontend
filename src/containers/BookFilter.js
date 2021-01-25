import React from 'react';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';

class BookFilter extends React.Component {
  
    render() {
        
        return (
            <Form>
                <Form.Group controlId="bookSelect">
                    <Form.Label>Filter books by category</Form.Label>
                    <Form.Control as="select">
                    <option>personal</option>
                    <option>queer</option>
                    <option>research</option>
                    <option>comedy</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>

            </Form>
 
        )
    }
  }
  
  
  export default BookFilter
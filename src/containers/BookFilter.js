import React from 'react';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';
import {fetchBooks} from '../actions/fetchBooks';



class BookFilter extends React.Component {


    handleChange = (event) => {
        this.props.fetchBooks(event.target.value)
    }

  
    render() {
        
        return (
            <div>
            
            <Form>
                <Form.Group controlId="bookSelect">
                    <Form.Label>Filter books by category</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}name="tag">
                    <option>all</option>
                    {this.props.tags.map(tag => tag.attributes).map(attribute => 
                        <option>{attribute.tag_name}</option>)}
                    </Form.Control>
                </Form.Group>

            </Form>
            </div>
 
        )
    }
  }

 
  
  
  export default connect (null, {fetchBooks}) (BookFilter)

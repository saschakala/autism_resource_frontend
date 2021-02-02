import React from 'react';
import Form from 'react-bootstrap/Form';
import {connect} from 'react-redux';



class BookFilter extends React.Component {

state = {
    tag: '',
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}


  
    render() {
        
        return (
            <div>
            
            <Form>
                <Form.Group controlId="bookSelect">
                    <Form.Label>Filter books by category</Form.Label>
                    <Form.Control as="select" onChange={this.handleChange}name="tag">
                    {this.props.tags.map(tag => tag.attributes).map(attribute => 
                        <option>{attribute.tag_name}</option>)}
                    </Form.Control>
                </Form.Group>

            </Form>
            </div>
 
        )
    }
  }

 
  
  
  export default BookFilter

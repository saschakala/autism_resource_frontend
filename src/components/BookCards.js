import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



const BookCards = (props) => {
    return (
        <div>
            {props.books && props.books.map(book =>
              <li>{book.attributes.title}</li>  
                )}

      </div>
        
    )
}

export default BookCards
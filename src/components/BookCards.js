import React from 'react';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';



const BookCards = (props) => {
    return (
        // iterating through all the books resources and displaying them on individual cards
        <Container> 
            <CardColumns> 
            {props.books && props.books.map(book =>
                <Card>
                    <Card.Body>
                        <Card.Title>{book.attributes.title}</Card.Title>
                    </Card.Body>
                </Card>
            )}
            </CardColumns>
        </Container>
        
    )
}

export default BookCards
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
                <Card key={book.id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem'}}>
                

                    <Card.Body>
                        <Card.Img variant="top" src={book.attributes.img_url} />
                        <br></br>
                        <Card.Title>{book.attributes.title}</Card.Title>
                        {book.attributes.creators.map(creator =>
                            <Card.Subtitle className="mb-2 text-muted">{creator.first_name} {creator.last_name}</Card.Subtitle>
                          )}
                        <Card.Text>{book.attributes.description}</Card.Text>
                        <Card.Link href={book.attributes.url}>See More</Card.Link>
                    </Card.Body>                    
                </Card>
            )}
            </CardColumns>

        </Container>
        
    )
}

export default BookCards
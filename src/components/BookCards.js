import React from 'react';

import { Container, Card, CardColumns } from 'react-bootstrap'


const BookCards = (props) => {
    const { books } = props 

    return (
        // iterating through all the books resources and displaying them on individual cards
        <Container > 

            <CardColumns> 
            {books && books.map(({ id, attributes: {img_url, title, creators, description, url}}) =>
                <Card key={id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>

                    <Card.Body>
                        <Card.Img variant="top" src={img_url} />
                        <br></br>
                        <Card.Title style={{marginTop: '1em'}}>{title}</Card.Title>
                        {creators.map(({first_name, last_name, pronouns}) =>
                            <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name} ({pronouns})</Card.Subtitle>
                          )}
                        <Card.Text style={{marginTop: '1em'}}>{description}</Card.Text>
                        <Card.Link href={url}>See More</Card.Link>
                    </Card.Body>                    
                </Card>
            )}
     
            </CardColumns>

        </Container>
        
    )
}

export default BookCards
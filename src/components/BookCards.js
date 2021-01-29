import React from 'react';

import { Container, Card, CardColumns, Nav, Tab, Tabs} from 'react-bootstrap'


const BookCards = (props) => {
    const { books } = props 

    return (
        // iterating through all the books resources and displaying them on individual cards
        <Container > 

            <CardColumns> 
            {books && books.map(({ id, attributes: {img_url, title, creators, description, url}}) =>
                <Card key={id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>
                      <Card.Body>
                      <Tabs defaultActiveKey={id} 
                              id="book-card-tabs">
                        <Tab eventKey={id} title="Overview">
                            <Card.Body >
                                
                                <Card.Img variant="top" src={img_url} />
                                <br></br>
                                <Card.Title style={{marginTop: '1em', fontStyle: 'italic'}}>{title}</Card.Title>
                                {creators.map(({first_name, last_name, pronouns}) =>
                                    <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name} ({pronouns})</Card.Subtitle>
                                )}
                                <Card.Link href={url} target="_blank">See on Goodreads</Card.Link>
                            </Card.Body> 
                        </Tab>

                        <Tab eventKey={title} title="Description">
                            <Card.Body >
                            <Card.Title style={{marginTop: '1em', fontStyle: 'italic'}}>{title}</Card.Title>
                                <Card.Text style={{marginTop: '1em'}}>{description}</Card.Text>
                            </Card.Body> 
                        </Tab>
                    </Tabs>
                    </Card.Body>



  

     

                </Card>
            )}
     
            </CardColumns>

        </Container>
        
    )
}

export default BookCards
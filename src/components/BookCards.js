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
                      <Card.Header>
                        <Nav variant="tabs" defaultActiveKey={id}>
                        <Nav.Item>
                            <Nav.Link eventKey={id}>Overview</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={title}>Description</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey={url}>
                            Author Info
                            </Nav.Link>
                        </Nav.Item>
                        </Nav>
                    </Card.Header>

                    <Tabs>
                        <Tab eventKey={id}>
                            <Card.Body >
                                
                                <Card.Img variant="top" src={img_url} />
                                <br></br>
                                <Card.Title style={{marginTop: '1em'}}>{title}</Card.Title>
                                {creators.map(({first_name, last_name, pronouns}) =>
                                    <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name} ({pronouns})</Card.Subtitle>
                                )}
                                <Card.Link href={url}>See More</Card.Link>
                            </Card.Body> 
                        </Tab>

                        <Tab eventKey={title}>
                            <Card.Body >
                                <Card.Text style={{marginTop: '1em'}}>{description}</Card.Text>
                            </Card.Body> 
                        </Tab>
                    </Tabs>

  

     

                </Card>
            )}
     
            </CardColumns>

        </Container>
        
    )
}

export default BookCards
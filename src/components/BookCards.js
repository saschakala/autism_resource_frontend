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
                              id="book-card-tabs" variant="pills">
                        <Tab eventKey={id} title="Overview" >
                            <Card.Body >
                                
                                <Card.Img variant="top" src={img_url} />
                                <br></br>
                                <Card.Title style={{marginTop: '1em'}}>{title}</Card.Title>
                                {creators.map(({first_name, last_name, pronouns}) =>
                                    <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name}
                                        <p style={{fontStyle: 'italic'}}>  ({pronouns})</p>
                                    </Card.Subtitle>
                                )}
                                <Card.Link href={url} target="_blank">See on Goodreads</Card.Link>
                            </Card.Body> 
                        </Tab>

                        <Tab eventKey={title} title="Description">
                            <Card.Body >
                            <Card.Title style={{marginTop: '1em'}}>{title}</Card.Title>
                                <Card.Text style={{marginTop: '1em'}}>{description}</Card.Text>
                            </Card.Body> 
                        </Tab>
                        
                        <Tab eventKey={url} title="Author Info">
                        {creators.map(({first_name, last_name, url, autistic, pronouns, title, bio}) =>
                            <Card.Body> 
                                <Card.Title>
                                    {title} {first_name} {last_name}
                                    <p style={{fontSize: '0.8em', fontStyle: 'italic'}}>  ({pronouns})</p>
                                </Card.Title>

                                {autistic &&
                                <Card.Subtitle style={{marginTop: '0.5em'}} className="mb-2 text-muted">
                                    Autistic: yes
                                </Card.Subtitle>
                                } 
                                {!autistic &&
                                    <Card.Subtitle style={{marginTop: '0.5em'}} className="mb-2 text-muted">
                                    Autistic: no
                                    </Card.Subtitle>
                                }
                                
                                <Card.Text>
                                    {bio}
                                </Card.Text>

                                <Card.Link href={url} target="_blank">Author Website</Card.Link>

                                
                            </Card.Body>
                            )}
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
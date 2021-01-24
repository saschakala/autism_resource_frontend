import React from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap'

const ArticleCards = (props) => {
    const { articles } = props 
 

    return(
        <Container > 
            <CardColumns> 
            {articles && articles.map(({ id, attributes: {img_url, title, creators, description, url}})  => 

                <Card key={id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>

                    <Card.Body>
                        <Card.Img variant="top" src={img_url} />
                        <br></br>
                        <Card.Title>{title}</Card.Title>
                        {creators.map(({first_name, last_name, pronouns}) =>
                            <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name} ({pronouns})</Card.Subtitle>
                        )}
                        <Card.Text>{description}</Card.Text>
                        <Card.Link href={url}>See Full Article</Card.Link>
                    </Card.Body>   

                </Card>
            )}
            </CardColumns>
            
        </Container>
    )
}

export default ArticleCards
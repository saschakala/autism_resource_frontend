import React from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap'

const ArticleCards = (props) => {

    return(
        <Container > 

        <CardColumns> 
        {props.articles && props.articles.map(article =>
            <Card key={article.id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>

                <Card.Body>
                    <Card.Img variant="top" src={article.attributes.img_url} />
                    <br></br>
                    <Card.Title>{article.attributes.title}</Card.Title>
                    {article.attributes.creators.map(creator =>
                        <Card.Subtitle className="mb-2 text-muted">{creator.first_name} {creator.last_name} ({creator.pronouns})</Card.Subtitle>
                      )}
                    <Card.Text>{article.attributes.description}</Card.Text>
                    <Card.Link href={article.attributes.url}>See More</Card.Link>
                </Card.Body>                    
            </Card>
        )}
 
        </CardColumns>

    </Container>
    )
}

export default ArticleCards
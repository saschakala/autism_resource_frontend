import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const SourceThumbnails = () => {
    return (
        <Container align="center">
            <CardDeck>
                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Articles</Card.Title>
                    </Card.Body>
                </Card>

                <Card>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>Social Media Accounts</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
        </Container>

    )
}

export default SourceThumbnails

// <Row>
// <Col>1 of 3</Col>
// <Col>2 of 3</Col>
// <Col>3 of 3</Col>
// </Row>
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'
import CardColumns from 'react-bootstrap/CardColumns';

const SourceThumbnails = () => {
    return (
        <Container align="center">

            <CardColumns>
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
                </CardColumns>

                <CardColumns>
                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>Multimedia</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>Miscellaneous</Card.Title>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>Queer</Card.Title>
                        </Card.Body>
                    </Card>
                </CardColumns>

               
                    <Card>
                        <Card.Img variant="top" />
                        <Card.Body>
                            <Card.Title>By Autists</Card.Title>
                        </Card.Body>
                    </Card>
              

            </Container>

    )
}

export default SourceThumbnails


import React from 'react';
import { Container, Card, CardColumns } from 'react-bootstrap'
// import { useHistory } from "react-router-dom";
import history from '../history';
import '../css/custom.css';

const SourceThumbnails = () => {
    return (
        <Container align="center"  style={{marginBottom:'3rem'}}>

            <CardColumns >
                <Card id="books" onClick={() => history.push("/books")}>
                    <Card.Body>
                        <Card.Title>Books</Card.Title>
                    </Card.Body>
                </Card>

                <Card id="articles" onClick={() => history.push("/articles")}>
                    <Card.Body>
                        <Card.Title>Articles</Card.Title>
                    </Card.Body>
                </Card>

                <Card id="social-media-accounts">
                    <Card.Body>
                        <Card.Title>Social Media Accounts</Card.Title>
                    </Card.Body>
                </Card>
            </CardColumns>

            <CardColumns>
                <Card id="multimedia">
                    <Card.Body>
                        <Card.Title>Multimedia</Card.Title>
                    </Card.Body>
                </Card>

                <Card id="misc">
                    <Card.Body>
                        <Card.Title>Miscellaneous</Card.Title>
                    </Card.Body>
                </Card>

                <Card id="queer">
                    <Card.Body>
                        <Card.Title>Queer</Card.Title>
                    </Card.Body>
                </Card>
            </CardColumns>

            
                <Card id="autists">
                    <Card.Body>
                        <Card.Title>By Autists</Card.Title>
                    </Card.Body>
                </Card>

              

            </Container>

    )
}

export default SourceThumbnails


import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const JumboTron = () => {
    return (
        <Jumbotron>
            <Container>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            </Container>
        </Jumbotron>
        
    )
}

export default JumboTron
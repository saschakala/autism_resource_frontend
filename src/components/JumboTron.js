import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const JumboTron = () => {
    return (
        <Jumbotron align = "center">
            <Container>
            <h1 align="center">Autism Resource Compendium</h1>
            <p>
                This site is a collection of resources compiled by autists for autists (or those in search of answers). 
            </p>
            
            <p>
                This collection focuses on resources that aren't centered on the cis-male experience.
            </p>
            </Container>
        </Jumbotron>
        
    )
}

export default JumboTron
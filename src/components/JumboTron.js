import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'

const JumboTron = () => {
    return (
        <Jumbotron align = "center" style={{marginTop: '3rem', backgroundColor: '#86DEF0'}}>
            <Container>
            <h1 align="center">Autism Resource Compendium</h1>
            <br></br>
            <p style={{fontWeight: 'bold', fontSize: '1.2em'}}>
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
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

const SourceThumbnails = () => {
    return (
        <Container align="center">

                <Row style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        
                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>
                </Row>

                <Row style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        
                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    test
                    </Col>
                </Row>

        </Container>

    )
}

export default SourceThumbnails


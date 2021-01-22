import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image'

const SourceThumbnails = () => {
    return (
        <Container align="center">

                <Row style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        
                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    <Button variant="primary" size="lg">Books</Button>
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    <Button variant="primary">Articles</Button>
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                    <Button variant="primary">Social Media Accounts</Button>
                    </Col>
                </Row>

                <Row style={{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                    }}>
                        
                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Books
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Books
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col class="col-sm-2" style={{margin: '3rem'}}>
                        <Card>
                            <Card.Body>
                                <Card.Title>
                                    Books
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" thumbnail />
    </Col>
  </Row>

        </Container>

    )
}

export default SourceThumbnails


import React from 'react';
import Collapse from 'react-bootstrap/Collapse';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';

class TestComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
	}

	render() {
		const { open } = this.state;
		return (
            
            <Container> 

            <CardColumns> 
            {this.props.books && this.props.books.map(book =>
                <Card key={book.id}>
                

                    <Card.Body>
                    <Card.Img variant="top" src={book.attributes.img_url} />
                        <Card.Title>{book.attributes.title}</Card.Title>
                        {book.attributes.creators.map(creator =>
                            <Card.Subtitle className="mb-2 text-muted">{creator.first_name} {creator.last_name}</Card.Subtitle>
                          )}
                    </Card.Body>

                <Collapse in={this.state.open}>
				    <div id={book.id}>
                    <Card.Body>
                        <Card.Text>{book.attributes.description}</Card.Text>
                    </Card.Body>

                    </div>
				</Collapse>

                    
                    <Button key={book.id}
					onClick={() => this.setState({ open: !open })}
					aria-controls={book.id}
					aria-expanded={open}>Description</Button>

                </Card>
            )}
            </CardColumns>


        </Container>
		);
	}
}

export default TestComponent
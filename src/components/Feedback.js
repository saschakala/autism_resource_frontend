import React from 'react';
import { Container, Card } from 'react-bootstrap'

const Feedback = (props) => {
    const {attributes: {title, feedback, name}} = props
    

    return(
        <div className="feedback">
            <Card style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>
                <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{feedback}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">{name}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )


}

export default Feedback 
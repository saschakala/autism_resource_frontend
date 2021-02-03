import React from 'react';
import { Container, Card, CardColumns, Nav, Tab, Tabs, Button} from 'react-bootstrap';
import BookCard from './BookCard.js'


class BookCards extends React.Component {


render() {
    return (
        // iterating through all the books resources and displaying them on individual cards
        <Container > 

            <CardColumns> 
            {this.props.books && this.props.books.map( book =>
            <BookCard key = {book.id} {...book}/>
            )}
                
     
            </CardColumns>

        </Container>
        
    )
}

}
export default BookCards

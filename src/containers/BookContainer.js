import React from 'react';
import BookCards from '../components/BookCards';

class BooksContainer extends React.Component {
  
    render() {
        return (
            <div>
                <BookCards books={this.props.books}/>
            </div>
        )
    }
  }
  
  
  export default BooksContainer
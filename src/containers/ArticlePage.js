import React from 'react';
import ArticleCards from '../components/ArticleCards';
import { Container, Row, Col } from 'react-bootstrap'

class ArticlePage extends React.Component {
  
    render() {
        
        return (
                <Container >
                    <Row style={{marginTop: '3rem', backgroundColor: '#F86A4A', width: '30%', padding: '1.3rem'}}>
                        <Col>
                        <h1>Articles</h1>
                        </Col>
                    </Row>
                    <ArticleCards articles={this.props.articles}/>
                </Container>
        )
    }
  }
  
  
  export default ArticlePage
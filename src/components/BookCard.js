import React, { Component } from 'react';
import { Card, Tab, Tabs, Button} from 'react-bootstrap';

class BookCard extends Component {

    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    increment = () => {
        const newCount = this.state.count + 1
        this.setState({
          count: newCount
        })
      }

    render() {
        return (
            <div>
                <Card key={this.props.id} style={{backgroundColor: '#ffffff', color:'#000000', margin: '3rem', cursor: 'default'}}>
                      <Card.Body>
                      <Tabs defaultActiveKey={this.props.id} 
                              id="book-card-tabs" variant="pills">
                        <Tab eventKey={this.props.id} title="Overview" >
                            <Card.Body >
                                
                                <Card.Img variant="top" src={this.props.attributes.img_url} />
                                <br></br>
                                <Card.Title style={{marginTop: '1em'}}>{this.props.title}</Card.Title>
                                {this.props.attributes.creators.map(({first_name, last_name, pronouns}) =>
                                    <Card.Subtitle className="mb-2 text-muted">{first_name} {last_name}
                                        <p style={{fontStyle: 'italic'}}>  ({pronouns})</p>
                                    </Card.Subtitle>
                                )}
                                <Card.Link href={this.props.attributes.url} target="_blank">See on Goodreads</Card.Link>

                                <Button onClick={this.increment.bind(this)} name="count">Up vote</Button>
                                <Card.Text>Vote count: {this.state.count}</Card.Text>

                            </Card.Body> 
                        </Tab>

                        <Tab eventKey={this.props.attributes.title} title="Description">
                            <Card.Body >
                            <Card.Title style={{marginTop: '1em'}}>{this.props.attributes.title}</Card.Title>
                                <Card.Text style={{marginTop: '1em'}}>{this.props.attributes.description}</Card.Text>
                            </Card.Body> 
                        </Tab>
                        
                        <Tab eventKey={this.props.attributes.url} title="Author Info">
                        {this.props.attributes.creators.map(({first_name, last_name, url, autistic, pronouns, title, bio}) =>
                            <Card.Body> 
                                <Card.Title>
                                    {title} {first_name} {last_name}
                                    <p style={{fontSize: '0.8em', fontStyle: 'italic'}}>  ({pronouns})</p>
                                </Card.Title>

                                {autistic &&
                                <Card.Subtitle style={{marginTop: '0.5em'}} className="mb-2 text-muted">
                                    Autistic: yes
                                </Card.Subtitle>
                                } 
                                {!autistic &&
                                    <Card.Subtitle style={{marginTop: '0.5em'}} className="mb-2 text-muted">
                                    Autistic: no
                                    </Card.Subtitle>
                                }
                                
                                <Card.Text>
                                    {bio}
                                </Card.Text>

                                <Card.Link href={url} target="_blank">Author Website</Card.Link>

                                
                            </Card.Body>
                            )}
                        </Tab>
                    </Tabs>
                    </Card.Body>



  

     

                </Card>
            
                
            </div>
        );
    }
}

export default BookCard;
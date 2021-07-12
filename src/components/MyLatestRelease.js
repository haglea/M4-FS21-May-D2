import { Component } from 'react';
import { Container, Row, Col, Badge, Card } from 'react-bootstrap';
import './MyLatestRelease.css';

class MyLatestRelease extends Component {

    render () {
       
        return (
            <Container style={{ paddingBottom: "1rem"}}>
                <Row>
            { this.props.books.slice(0, 18).map(book => (
                <Col md={2} >
                    <Card className="cardstyle d-flex flex-wrap" >                                                
                        <Card.Link href="#"> <Card.Img variant="top" src={book.img} /></Card.Link>
                        <Badge pill variant="secondary" className="badge" >{book.price}</Badge>
                        <Card.Body>
                            <Card.Title ><small>{book.title.substring(0, 25)}...</small></Card.Title>
                        </Card.Body> 
                    </Card>
                </Col>
            ))}
            
            </Row>
            </Container>
        )
    }
}

export default MyLatestRelease
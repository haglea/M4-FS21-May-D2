import { Component } from 'react'
import { Container, Row, Col, Card, Badge } from 'react-bootstrap'
import fantasy from '../data/fantasy.json'
import './MyLatestRelease.css'

class MyLatestRelease extends Component {

    render () {     
        

        return (
            <Container style={{ paddingBottom: "1rem"}}>
                <Row>                    

            { fantasy.slice(0, 18).map(book => (
                <Col md={2} >
                        <Card className="cardstyle">                                                
                        <Card.Link href="#"> <Card.Img variant="top" src={book.img} /></Card.Link>
                        <Badge pill variant="secondary" className="badge">{book.price}</Badge>
                        {/* <Card.Body>
                            <Card.Title>{book.title}</Card.Title>
                        </Card.Body> */}
                        </Card>
                        </Col>
            ))}
            
            </Row>
            </Container>
        )

}
}

export default MyLatestRelease
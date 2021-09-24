import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Product = (props) => {
    const handleName = (mark) => alert(`The product mark is ${props.mark}`)
    // console.log(props)
    return (
        <div style={{display:'flex'}}>
            <Card style={{ width: '18rem' }}>
                {props.children}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.price}</Card.Text>
                    <Card.Text>{props.mark}</Card.Text>
                    <Button variant="primary" onClick={handleName}>Click Me</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Product

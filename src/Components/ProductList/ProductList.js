import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const ProductList = (props) => {
    const { _id, name, price, quantity, imgURL } = props.product;
    const history = useHistory()
    const handleCheckout = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div className="text-center">
            <Container>
                <Row>
                    <Col style={{ backgroundColor: "#FCF6F5FF" }} xs={12} md={6}><Image src={imgURL} fluid /></Col>
                    <Col style={{ backgroundColor: "#89ABE3FF" }} xs={12} md={6}>
                        <br/>
                        <br/>
                        <h1>Product Name: {name}</h1>
                        <h1>Product Price: {price}</h1>
                        <h1>Product Quantity: {quantity}</h1>
                        <Button onClick={() => handleCheckout(_id)} variant="primary">Buy</Button>
                        <br/>
                        <br/>
                    </Col>
                </Row>
                <br />
            </Container>
            {/* <h1>Product Name: {name}</h1>
            
            <img src={imgURL} alt="" />
            
            <hr /> */}
        </div>
    );
};

export default ProductList;
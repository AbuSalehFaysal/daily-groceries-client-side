import { Button } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router';

const ProductList = (props) => {
    const { _id, name, price, quantity, imgURL } = props.product;
    const history = useHistory()
    const handleCheckout = (_id) => {
        history.push(`/checkout/${_id}`);
    }
    return (
        <div>
            <h1>Product Name: {name}</h1>
            <h1>Product Price: {price}</h1>
            <h1>Product Quantity: {quantity}</h1>
            <img src={imgURL} alt=""/>
            <Button onClick={() => handleCheckout(_id)} variant="primary">Buy</Button>
            <hr/>
        </div>
    );
};

export default ProductList;
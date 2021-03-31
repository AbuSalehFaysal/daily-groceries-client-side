import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';


const Checkout = () => {
    const { id } = useParams();
    // console.log(id);
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    }, [])
    const {name, price, quantity} = product;
    return (
        <div>
            <h1>This is Checkout Route</h1>
            <h1>{name} -- {price} -- {quantity}</h1>
            <Button variant="primary">Place Order</Button>
        </div>
    );
};

export default Checkout;
import React from 'react';

const ProductList = (props) => {
    const { _id, name, price, quantity } = props.product;
    return (
        <div>
            <h1>Product Name: {name}</h1>
            <h1>Product Price: {price}</h1>
            <h1>Product Quantity: {quantity}</h1>
            <hr/>
        </div>
    );
};

export default ProductList;
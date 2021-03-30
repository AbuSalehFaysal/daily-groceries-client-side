import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://daily-groceries-server.herokuapp.com/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>This is Product List</h1>
            {
                products.map(product => <ProductList product={product}></ProductList>)
            }
        </div>
    );
};

export default Products;
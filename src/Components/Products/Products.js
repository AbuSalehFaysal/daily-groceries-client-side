import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1>This is Product List</h1>
            {
                products.map(product => <ProductList key={product._id} product={product}></ProductList>)
            }
        </div>
    );
};

export default Products;
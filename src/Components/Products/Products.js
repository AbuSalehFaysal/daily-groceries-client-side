import React, { useEffect, useState } from 'react';
import ProductList from '../ProductList/ProductList';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://secure-hollows-18485.herokuapp.com/products")
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
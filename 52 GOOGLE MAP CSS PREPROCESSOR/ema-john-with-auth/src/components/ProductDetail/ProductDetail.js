import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
    document.title = 'Product Detail'
    const { productKey } = useParams();
    const [loading, setLoading] = useState(true);
    // const product = fakeData.find(pd => pd.key === productKey);
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('/product/' + productKey)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
    });
    return (
        <div>
            <h1>Your Product Details.</h1>
            {
                loading ? <p>Loading...</p> :
                    <Product showAddToCart={false} product={product}></Product>

            }
        </div>
    );
};

export default ProductDetail;
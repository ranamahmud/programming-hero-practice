
import React, { useEffect } from 'react';
import { useContext } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';
import { useState } from 'react';

const allProducts = [
    { name: 'Lenevo', category: 'laptop' },
    { name: 'Asus', category: 'laptop' },
    { name: 'HP', category: 'laptop' },
    { name: 'Dell', category: 'laptop' },
    { name: 'Samsung', category: 'mobile' },
    { name: 'Nokia', category: 'mobile' },
    { name: 'Apple', category: 'mobile' },
    { name: 'XioMI', category: 'mobile' },
    { name: 'Canon', category: 'camera' },
    { name: 'Nikkon', category: 'camera' },
    { name: 'Sony', category: 'camera' },

]

const Categories = (props) => {
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() == category.toLowerCase() && category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your category: {category}</h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>
                )
            }

        </div>
    );
};

export default Categories;
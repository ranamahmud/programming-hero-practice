import React from 'react';
import {useContext} from 'react'
import { CategoryContext } from '../../App';
const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h2>This is your Category Detail</h2>
            <h6>Selected Category {name}</h6>
        </div>
    );
};

export default CategoryDetail;
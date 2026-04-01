import React from 'react';

const Product = ({category}) => {
    const {name, price} = category;
    return (
        <div className='bg-red-200'>
            <h3>Hello {name}</h3>
            <p>${price}</p>
        </div>
    );
};

export default Product;
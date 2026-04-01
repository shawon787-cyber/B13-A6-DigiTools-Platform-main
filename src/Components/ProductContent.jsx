import { useEffect, useState } from 'react';
import Product from './Product';

const ProductContent = () => {
    const [categories, setCategories] = useState([]);
    useEffect (()=>{
        fetch('/public/category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err));
    })
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6 mb-16'>
            {
                categories.map(category => <Product category ={category}></Product>)
            }
        </div>
    );
};

export default ProductContent;
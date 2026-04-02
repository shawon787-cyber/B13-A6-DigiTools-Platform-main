import { useEffect, useState } from 'react';
import Product from './Product';

const ProductContent = ({cart, setCart}) => {
    const [categories, setCategories] = useState([]);
    useEffect (()=>{
        fetch('/category.json')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(err => console.error(err));
    },[])
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
            {
                categories.map(category => <Product key={category.id} category ={category} cart ={cart} setCart ={setCart}></Product>)
            }
        </div>
    );
};

export default ProductContent;
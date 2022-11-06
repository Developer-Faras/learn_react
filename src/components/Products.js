import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    return (
        <div className='products_wraper'>
            {
                products.map((product) => <Product key={product.id} {...product} />)
            }
        </div>
    )
}

export default Products
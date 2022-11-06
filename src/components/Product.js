import React from 'react'

const Product = ({ title, price, description, image, rating }) => {
    return (
        <div className='product'>
            <img src={image} alt="" className="product_image" />

            <h3 className="product_title">{title}</h3>
            <p className="product_price">Price: {price}</p>
            <p className="rating">Rating: {rating.rate} / {rating.count}</p>

            <p className="product_description">{description}</p>
            <button className="product_cart_button">Add To Cart</button>
        </div>
    )
}

export default Product
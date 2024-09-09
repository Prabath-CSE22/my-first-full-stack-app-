import React from 'react'
import { useNavigate } from 'react-router-dom'

import './card.css'

const card = ({product}) => {

    const navigate = useNavigate();

    const gotocart = () => {
      navigate('/cart');
    }
    
    const Goto = () => {
        navigate(`/product/${product.ID}`);
    }
    

    return (
        <div className="product-card" > 
                <div onClick={Goto}>
                    <img src={`./src/assets/${product.ID}.jpeg`} alt={product.product_name} />
                    <h2>{product.product_name}</h2>
                    <p>{product.product_des}</p>
                </div>
                <div className='price-n-cart'>
                    <p id='pricetag'>${product.price}</p>
                    <button onClick={gotocart}>Add to cart</button>
                </div>
        </div>
    )
}

export default card

import React, { useEffect } from 'react'
import '/src/components/Cartcard.css'
const Cartcard = ({product}) => {
    
    return (
        <div className='cartele'>
            <img src={`./src/assets/${product.ID}.jpeg`} alt={product.product_name} />
            <div className='btnz'>
                <button>Buy</button>
                <button>Remove</button>
            </div>
        </div>
    )
}

export default Cartcard

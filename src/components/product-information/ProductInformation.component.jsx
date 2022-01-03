import React from 'react'
import './ProductInformation.styles.scss'

const ProductInformation = () => {
    return (
        <div>
            <h3 className='product-brand'>SNEAKER COMPANY</h3>
            <h1 className='product-title'>Fall Limited Edition Sneakers</h1>
            <p className='product-info'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            
            <div className='prices'>
            <div className='product-price'>
            <h1>$125.00</h1>
            <span>50%</span>
            </div>
            <span className="real-price">$250.00</span>
            </div>
            
        </div>
    )
}

export default ProductInformation

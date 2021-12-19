import React from 'react'

const ProductInformation = () => {
    return (
        <div>
            <h3 className='title'>SNEAKER COMPANY</h3>
            <h1 style={{fontSize: '3rem', marginTop: '0'}}>Fall Limited Edition Sneakers</h1>
            <p style={{lineHeight:'2rem'}}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='product-price'>
            <h1>$125.00</h1>
            <span>50%</span>
            </div>
            <span className="real-price" >$250.00</span>
        </div>
    )
}

export default ProductInformation

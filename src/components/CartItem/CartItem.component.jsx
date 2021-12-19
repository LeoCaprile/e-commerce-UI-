import React from 'react'
import ProductImage from '../../images/image-product-1.jpg'
import Delete from '../../images/icon-delete.svg'
import './CartItem.styles.scss'

const CartItem = ({price,cant,name}) => {

    

    return (
        <div key={Math.random()} className='item'>
            <img className='item-image' src={ProductImage} alt={name}></img>
            <div className='item-description'>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x {cant} <strong>${(price * cant).toFixed(2)}</strong></p>
            </div>
            <img className='item-delete' src={Delete} alt="delete"/>
        </div>
    )
}

export default CartItem

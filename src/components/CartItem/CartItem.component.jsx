import React, {useContext} from 'react'
import ProductImage from '../../images/image-product-1.jpg'
import Delete from '../../images/icon-delete.svg'
import './CartItem.styles.scss'
import { contextCart } from '../../Contexts/CartContext'

const CartItem = ({price,cant,name,id}) => {

const {items,setItems,setTotal,total} = useContext(contextCart)

function handleDelete(cart, item){
    const newCart = cart.filter(selItem => selItem.id!==item.id)
    return newCart
}


    
    

    return (
        <div key={Math.random()} className='item'>
            <img className='item-image' src={ProductImage} alt={name}></img>
            <div className='item-description'>
            <p>Fall Limited Edition Sneakers</p>
            <p>$125.00 x {cant} <strong>${(price * cant).toFixed(2)}</strong></p>
            </div>
            <img className='item-delete' onClick={()=>{setItems(handleDelete(items,{id:id}));setTotal(total - cant);}} src={Delete} alt="delete"/>
        </div>
    )
}

export default CartItem

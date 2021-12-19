import React, {useState,useContext} from 'react'
import CustomButton from '../CustomButton/CustomButton.component'
import CartImagen from '../../images/icon-cart.svg'
import CartItem from '../CartItem/CartItem.component'
import './Cart.styles.scss'
import { contextCart } from '../../Contexts/CartContext'
import EmptyCart from '../EmptyCart/EmptyCart.component'
const Cart = (props) => {
    const [hide, setHide] = useState(true)
    const {items,total} = useContext(contextCart)
    

    return (
        
        <div className={props.className}>
            {total===0?'':<span className='cart-num'>{total>9?'+9':total}</span>}
            <img onClick={()=>{hide?setHide(false):setHide(true);}} className='cart-img' src={CartImagen} alt="Cart"/>
            <div className='cart-detail' hidden={hide}>
                <div className='cart__detail__title'><strong>Cart</strong></div>
                <div className='cart__detail__items'>
                    {(items.length)?items.map(item=><CartItem {...item}></CartItem>):(<EmptyCart></EmptyCart>)}
                    {(items.length)?<CustomButton className="cart-checkout"><strong>Checkout</strong></CustomButton>:null}
                </div>
            </div>
        </div>
    )
}

export default Cart

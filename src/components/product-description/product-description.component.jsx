import React, {useContext} from 'react'
import Counter from '../Counter/Counter.component'
import CustomButton from '../CustomButton/CustomButton.component'
import ProductInformation from '../product-information/ProductInformation.component'
import Cart from '../../images/icon-cart.svg'
import './product-description.styles.scss'
import CartImg from '../CartImg/CartImg.component'
import { contextCart } from '../../Contexts/CartContext'

const ProductDescription = () => {

   const {setItems,count,items,setTotal} = useContext(contextCart)

   const addItem = (cart, item) =>{
    const newCart = cart;
    newCart.push(item)
    return newCart
    }

    return (
        <div className='product-description'>
        <ProductInformation></ProductInformation>
            <div className="description-buttons">
                <Counter></Counter>
                <CustomButton onClick={()=>{
                    
                setItems(addItem(items,{cant:count,name:'Fall Limited Edition Sneakers',price:125.00,}));
                setTotal(items.reduce((acc,el)=>{acc+=el.cant;return acc},0))
            
                    }
            } className="addtocart-button"><CartImg fill='white' className="cart-img"></CartImg> Add to cart</CustomButton>
            
            </div>
        </div>
    )
}

export default ProductDescription

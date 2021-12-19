import React from 'react'
import Logo from '../../images/logo.svg'
import ProfileAvatar from '../../images/image-avatar.png'
import './header.styles.scss'
import Cart from '../Cart/Cart.component'
const Header = () => {
    return (
        <nav className='navbar'>
            <img src={Logo} alt="sneakers"></img>
            
            <a href="#">Collections</a>
            <a href="#">Man</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>

       
            <Cart className='cart'></Cart>
            <img className='profile-avatar' src={ProfileAvatar} height="60"></img>
            
        </nav>
    )
}

export default Header

import React, { useState } from 'react'
import Logo from '../../images/logo.svg'
import ProfileAvatar from '../../images/image-avatar.png'
import './header.styles.scss'
import Cart from '../Cart/Cart.component'
import CloseButton from '../../images/icon-close.svg'


const Header = () => {

    const [activeBurger, setActiveBurger] = useState(false)

    return (
        <nav className='navbar'>
            <div onClick={()=>{setActiveBurger(!activeBurger)}} className='navbar-burguer'>
            <div></div>
            <div></div>
            <div></div>
            </div>
            <img src={Logo} alt="sneakers"></img>

            
            <a className='links-desktop' href="#">Collections</a>
            <a className='links-desktop' href="#">Man</a>
            <a className='links-desktop' href="#">Women</a>
            <a className='links-desktop' href="#">About</a>
            <a className='links-desktop' href="#">Contact</a>
            

            <div className={`nav-bar-links-burger ${activeBurger?'active':''}`}>
            <div className='burguer-items'>
            <img onClick={()=>{setActiveBurger(!activeBurger)}} src={CloseButton} className='close-button'></img>
            <div className='links'>
            <a href="#">Collections</a>
            <a href="#">Man</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
            </div>
            </div>
            </div>

            <Cart className='cart'></Cart>
            <img className='profile-avatar' src={ProfileAvatar} height="60"></img>
            
        </nav>
    )
}

export default Header

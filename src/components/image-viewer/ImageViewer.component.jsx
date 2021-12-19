import React from 'react'
import Thumbnail from '../thumbnail/thumbnail.component'
import ProductImage from '../../images/image-product-1.jpg'
import './ImageViewer.styles.scss'
const ImageViewer = () => {
    return (
        <div className='image-viewer'>
            <div className='product-image'>
                <img src={ProductImage} alt='ProductPage' height=""></img>
            </div>
            <Thumbnail></Thumbnail>
        </div>
    )
}

export default ImageViewer

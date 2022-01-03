import React from 'react'
import Thumbnail from '../thumbnail/thumbnail.component'
import ProductImage1 from '../../images/image-product-1.jpg'
import ProductImage2 from '../../images/image-product-2.jpg'
import ProductImage3 from '../../images/image-product-3.jpg'
import ProductImage4 from '../../images/image-product-4.jpg'

import './ImageViewer.styles.scss'
import ImageCarrusel from '../ImageCarrusel/ImageCarrusel.component'
const ImageViewer = ({setActiveModal, activeModal, setImage, image}) => {
    
const imgArray = [ProductImage1,ProductImage2,ProductImage3,ProductImage4]
    

    return (
        <div className='image-viewer'>
            <ImageCarrusel onClick={()=>{setActiveModal(!activeModal)}} src={imgArray[image]}/>
            <Thumbnail image={image} setImage={setImage}></Thumbnail>
        </div>
    )
}

export default ImageViewer

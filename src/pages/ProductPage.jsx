import React from 'react'
import ImageViewer from '../components/image-viewer/ImageViewer.component'
import ProductDescription from '../components/product-description/product-description.component'
import './ProductPage.styles.scss'
const ProductPage = () => {
    return (
        
        <div className='product-page'>
            <ImageViewer></ImageViewer>
            <ProductDescription></ProductDescription>
        </div>
       
    )
}

export default ProductPage

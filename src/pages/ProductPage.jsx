import React, {useState} from 'react'
import ImageViewer from '../components/image-viewer/ImageViewer.component'
import ImageModal from '../components/ImageModal/ImageModal.component'
import ProductDescription from '../components/product-description/product-description.component'
import './ProductPage.styles.scss'
const ProductPage = () => {

    const [activeModal, setActiveModal] = useState(true)
    const [image, setImage] = useState(0)
  

   

    return (
        
        <div className='product-page'>
            <ImageModal setImage={setImage} image={image} setActiveModal={setActiveModal} activeModal={activeModal}/>

                <ImageViewer setImage={setImage} image={image}  setActiveModal={setActiveModal} activeModal={activeModal}></ImageViewer>

            <ProductDescription></ProductDescription>
        </div>
       
    )
}

export default ProductPage

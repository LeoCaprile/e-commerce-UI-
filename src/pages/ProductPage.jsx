import React, {useState} from 'react'
import ImageViewer from '../components/image-viewer/ImageViewer.component'
import ImageModal from '../components/ImageModal/ImageModal.component'
import ProductDescription from '../components/product-description/product-description.component'
import './ProductPage.styles.scss'
import {ReactComponent as PrevIcon} from '../images/icon-previous.svg'
import {ReactComponent as NextIcon} from '../images/icon-next.svg'
import CustomButton from '../components/CustomButton/CustomButton.component'
const ProductPage = () => {

    const [activeModal, setActiveModal] = useState(true)
    const [image, setImage] = useState(0)
  

   

    return (
        
        <div className='product-page'>
            <ImageModal setImage={setImage} image={image} setActiveModal={setActiveModal} activeModal={activeModal}/>
            
            <CustomButton onClick={()=>{setImage(image===0?image:image-1)}} className='prev-picture-button'><PrevIcon></PrevIcon></CustomButton>

                <ImageViewer setImage={setImage} image={image}  setActiveModal={setActiveModal} activeModal={activeModal}></ImageViewer>
                
            <CustomButton onClick={()=>{setImage(image===3?image:image+1)}} className='next-picture-button'><NextIcon></NextIcon></CustomButton>


            <ProductDescription></ProductDescription>
        </div>
       
    )
}

export default ProductPage

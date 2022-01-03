import React from 'react'
import ImageViewer from '../image-viewer/ImageViewer.component'
import CustomButton from '../CustomButton/CustomButton.component'
import {ReactComponent as PrevIcon} from '../../images/icon-previous.svg'
import {ReactComponent as NextIcon} from '../../images/icon-next.svg'

import './ModalImageViewer.styles.scss'



const ModalImageViewer = ({setActiveModal,setImage,image}) => {


 
 
    return (
        <div className='modal-image-viewer-container'>
        <CustomButton onClick={()=>{setImage(image===0?image:image-1)}} className='modal-prev-picture-button'><PrevIcon></PrevIcon></CustomButton>
            <ImageViewer setImage={setImage} image={image} setActiveModal={setActiveModal}/>
        <CustomButton onClick={()=>{setImage(image===3?image:image+1)}} className='modal-next-picture-button'><NextIcon></NextIcon></CustomButton>
        </div>
    )
}

export default ModalImageViewer

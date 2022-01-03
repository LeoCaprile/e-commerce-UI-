import React from 'react'
import {ReactComponent as CloseButton} from '../../images/icon-close.svg'
import './ImageModal.styles.scss'
import ModalImageViewer from '../ModaImageViewer/ModalImageViewer.component'

const ImageModal = ({activeModal, setActiveModal,setImage, image, style}) => {
    return (
        <div style={style} className={`modal-container ${activeModal?'hidden':''}`}>    
                <CloseButton onClick={()=>{setActiveModal(activeModal?false:true)}}  className='modal-close-button'></CloseButton>
                <ModalImageViewer setImage={setImage} image={image} setActiveModal={setActiveModal} className='className="modal-image-viewer"'/>
        </div>
    )
}

export default ImageModal

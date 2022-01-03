import React from 'react'
import ImageThumb1 from '../../images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../../images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../../images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../../images/image-product-4-thumbnail.jpg'
import './thumbnail.styles.scss'
const Thumbnail = ({setImage, image, style}) => {
    return (
        <div style={style} className='thumbnails'>
          
            <img onClick={()=>{setImage(0)}} className={image===0?'image-selected':''} src={ImageThumb1} alt=" " />
        
           
            <img onClick={()=>{setImage(1)}} className={image===1?'image-selected':''} src={ImageThumb2} alt=" " />
       
         
            <img onClick={()=>{setImage(2)}} className={image===2?'image-selected':''} src={ImageThumb3} alt=" " />
       
            
            <img onClick={()=>{setImage(3)}} className={image===3?'image-selected':''} src={ImageThumb4} alt=" " />
           
        </div>
    )
}

export default Thumbnail

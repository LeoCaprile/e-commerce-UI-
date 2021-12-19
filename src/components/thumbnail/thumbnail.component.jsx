import React from 'react'
import ImageThumb1 from '../../images/image-product-1-thumbnail.jpg'
import ImageThumb2 from '../../images/image-product-2-thumbnail.jpg'
import ImageThumb3 from '../../images/image-product-3-thumbnail.jpg'
import ImageThumb4 from '../../images/image-product-4-thumbnail.jpg'
import './thumbnail.styles.scss'
const Thumbnail = () => {
    return (
        <div className='thumbnails'>
            <img src={ImageThumb1} alt=" " />
            <img src={ImageThumb2} alt=" " />
            <img src={ImageThumb3} alt=" " />
            <img src={ImageThumb4} alt=" " />
        </div>
    )
}

export default Thumbnail

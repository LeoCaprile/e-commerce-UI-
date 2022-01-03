import React, {useContext} from 'react'
import './Counter.styles.scss'
import { contextCart } from '../../Contexts/CartContext'
const Counter = (props) => {
    const {setCount,count} = useContext(contextCart);

    return (
       <div className='counter-container'>
            <button onClick={()=>{if(count===1)return;setCount(count-1)}} className='minus'>-</button>
            <span>{count}</span>
            <button onClick={()=>{setCount(count+1)}} className='plus'>+</button>
       </div>
    )
}

export default Counter

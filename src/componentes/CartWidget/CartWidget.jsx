import React from 'react'
import { BsCartPlus } from 'react-icons/bs';
import { useCartContext } from "../../context/ContextCart"
import '../CartWidget/CartWidget.css'

function CartWidget() {
    const { cantidadTotal } = useCartContext()
    return (
        <div>
            {cantidadTotal() === 0 ? undefined : <div className='cantidadTotal'>{cantidadTotal()}</div>}
            <div className='cartWidget' >
            <BsCartPlus style={{color:"white"}}/>
            </div>
        </div>
    )
}

export default CartWidget

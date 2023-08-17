import React from 'react'
import Stillar from "./Cart.module.css"

const Cart = (props) => {
    const Style = Stillar.card + ' ' + props.className
  return (
    <div className={Style}>
       {props.children}
    </div>
  )
}


export default Cart
import React from 'react'
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { CiBellOn } from "react-icons/ci";
const CartWidget = () => {
  return (
    <div>
         <CiBellOn/>
         <span>0</span>
        <PiShoppingCartSimpleThin />
       
    </div>
  )
}

export default CartWidget
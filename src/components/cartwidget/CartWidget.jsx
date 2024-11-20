import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import '../navbar/navbar.css'

function CartWidget () {
    return (
    <div className="cart">
       
        <MdOutlineShoppingCart size="35px" />
        <span className="badge">5</span>
        </div>
)
}

export default CartWidget
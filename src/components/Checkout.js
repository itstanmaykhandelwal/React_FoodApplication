import React from 'react'
import './Checkout.css'
import { useStateValue } from './StateProveider'

const Checkout = ({id,imgsrc,sname,price}) => {

    const [{basket},dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
    return (
        <div className="checkout justify-content-lg-evenly">
            <img className="checkout_image" src={imgsrc} alt="" />
            <div className="checkout_info">
                <p className="checkout_title">{sname}</p>
                <p className="checkout_price">
                    <small>Rs</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromBasket} className="btn btn-outline-warning">Remove from cart</button>
            </div>
        </div>
    )
}

export default Checkout

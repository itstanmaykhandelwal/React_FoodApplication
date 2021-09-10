import React from 'react'
import Checkout from '../components/Checkout'
import { useStateValue } from '../components/StateProveider'
import Subtotal from '../components/Subtotal'
import './Cart.css'

const Cart = () => {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="cart py-16">
            <div className="order container mx-auto xl:w-1/2">
                <div className="flex item-center border-b border-gray-300 pb-4">
                    <img src="" alt="" />
                    <h1 className="font-bold ml-4 text-2xl text-center">Order Summary</h1>
                    {basket.map(props =>(
                        <Checkout 
                        id={props.id}
                        imgsrc={props.imgsrc}
                        sname={props.sname}
                        price={props.price}
                        />
                    ))} 
                </div>
            </div>
            <div className="subtotal_cart">
                <Subtotal/>
            </div>
        </div>
        
    )
}

export default Cart

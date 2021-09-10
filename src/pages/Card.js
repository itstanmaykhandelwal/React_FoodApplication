import React from 'react'
import { useStateValue } from '../components/StateProveider'


const Card = (props) => {

    const [{basket}, dispatch] = useStateValue()
    console.log("this is the basket >>>",basket)

    const addToBasket = () => {
        // dispatch the food to add to cart page
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:props.id,
                imgsrc:props.imgsrc,
                sname:props.sname,
                price:props.price
            }
        })
    }
    return (
       <>
            <div className="col">
                <div className="cards">
                    <div className="card  w-75">
                        <img src={props.imgsrc} alt="" className="card_img" />
                        <div className="card_info">
                            <div className="product_info d-flex justify-content-around">
                                <h3 className="card_title">{props.sname}</h3>
                                <h3 className="card_price"><small>Rs {props.price}</small></h3>
                            </div>
                            <span class="size py-1 px-4 rounded-full text-xs">
                            <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                                <option value="1">Small</option>
                                <option value="2">Large</option>
                            </select>
                            <button onClick={addToBasket} type="button" class="btn btn-outline-success">Add to Cart</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
       </>
    )
}

export default Card

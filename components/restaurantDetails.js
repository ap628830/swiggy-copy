import { useEffect, useState } from "react"
import { CloudnaryImageBaseURL } from "../constants/urls"
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cartSlice'

const RestaurantDetails = ({restaurantDetails})=>{
    console.log("props ",restaurantDetails)
    const [show,setShow] = useState(false)
    const dispatch= useDispatch()

    const addToCart = (details)=>{
        dispatch(addItem(details))
    }

    useEffect(()=>{
        setTimeout(()=>{
            setShow(true)
        },100)
    },)
    return (<div className={`restaurantCardDetails ${show?'show':''}`}>
        {restaurantDetails.map(details=>{
            const {name,price,defaultPrice,description} = details.card.info
            return (<div key={details.card.info.id} className="cardDetailWrapper">
                <div className="cardDetailsData">
                     <div className="cardName">
                         {name}
                     </div>
                     <div className="cardPrice">
                        <span>{'\u20B9'}</span> &nbsp;
                         {(price || defaultPrice)/100}
                     </div>
                     <div>
                        {description}
                     </div>
                </div>
                <div className="cardImageSection">
                    <img src={CloudnaryImageBaseURL+details.card.info.imageId} alt="card logo" className="cardImage" />
                    <button className="addCardButton" onClick={()=>addToCart(details.card.info)}>Add</button>
                </div>
            </div>)
        })}
    </div>)
}

export default RestaurantDetails
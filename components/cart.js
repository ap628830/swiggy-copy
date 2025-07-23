import { useDispatch, useSelector } from "react-redux"
import { CloudnaryImageBaseURL } from "../constants/urls"
import { removeItem } from "../utils/cartSlice";
import { cleanCart } from "../utils/cartSlice";

const Cart =()=>{
    const cartItems = useSelector(state=>state.cart)
    const dispatch = useDispatch()
    const items = cartItems.items
    console.log("cart Items ",cartItems)

    const removeCartItem = (id)=>{
        dispatch(removeItem(id))
    }

    const emptyCart = ()=>{
        dispatch(cleanCart())
    }

    if(items.length == 0) return <h3>No data Availabe</h3>


    return <>
    <div className=" restaurantCard">
        {items.map(item=>{
            const {name,categpry,imageId,price,defaultPrice,id} = item
            return (
                <div className="card"  key={item.id}>
                    <div>
                        <i className="fa-solid fa-xmark" style={{fontWeight: 'bold', float: 'right', margin: '2px 10px', fontSize: '20px', color: 'darkred'}} onClick={()=>removeCartItem(id)}></i>
                     <img src={CloudnaryImageBaseURL+imageId} alt="img" className="cardImage" />
                    </div>
                    <h4>{name}</h4>
                    <div>{categpry}</div>
                    <div> {(price || defaultPrice)/100}</div>
                </div>
            )
        })}
    </div>
    <button onClick={emptyCart} className="cleanCart">Clean Cart</button>
    </>
}

export default Cart
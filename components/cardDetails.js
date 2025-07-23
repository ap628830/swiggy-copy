import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {cardDetails} from "../constants/urls";
import RestaurantDetails from './restaurantDetails'
import Shimmer from "./shimmer";



const CardDetails = () => {
    const {id} = useParams()
    const [data, setData] = useState([])
    const [selectedIndex,setIndex] = useState(0)
    const [open,setOpenStatus] = useState(true)

    const fetchDetail = async()=>{
        const url = cardDetails+id
        const data = await fetch(url)
        const jsonData = await data.json()
        const cardGroupData = jsonData?.data?.cards.filter(data=>data.groupedCard)
        const cardData = cardGroupData?.[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        const itemCards = cardData.filter(cards=>cards.card.card.itemCards)
        setData(itemCards)
        console.log("json data ",itemCards)
    }

    const toggleIndex = (i)=>{
        if(i== selectedIndex) {
            setOpenStatus(!open)
        } else {
            setIndex(i)
            setOpenStatus(true)
        }
    }

    useEffect(()=>{
        fetchDetail()
    },[])

    return (
        <div>
            {data.length==0? <Shimmer/> : data.map((cardData,i)=>{
                return (<div key={cardData.card.card.title}>
                    <div >
                        <div className="cardTitle" onClick={e=>toggleIndex(i)}>{cardData.card.card.title}</div>
                        <div>
                           {(i==selectedIndex && open)? <RestaurantDetails restaurantDetails = {cardData.card.card.itemCards}></RestaurantDetails> :<></>}
                        </div>
                    </div>

                </div>)
            })}
            
        </div>
    )
}

export default CardDetails

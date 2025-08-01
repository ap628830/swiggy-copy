import {SwiggyAPI} from '../constants/urls'
import UserContext from '../utils/userContext'
import Card from './card'
import Shimmer from './shimmer'

import { useContext, useEffect, useState } from "react"

const RestaurantCard =()=>{
    const [data,setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const {setUser} = useContext(UserContext)
  
    const fetchData = async ()=>{
        const data = await fetch(SwiggyAPI)
        const jsonData = await data.json()
        console.log("json data ",jsonData)
        const cardData = jsonData.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        console.log("restaurant cards ",jsonData.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setData(cardData)
        setFilteredData(cardData)
    }

    const searchRestaurant = ()=>{
        const selectedData = data.filter(card=>card.info.name.toLowerCase().includes(name.toLowerCase()))
        setFilteredData(selectedData)
    }

    const updateUsername = (e)=>{
        setUserName(e.target.value)
        setUser(e.target.value)
    }

    useEffect(()=>{
    fetchData()
    },[])

    return <>
    <div className='searchBox'>
        <input type="text" value={name} placeholder='Search Restaurant' onChange={e=>setName(e.target.value)} />
        <button onClick={searchRestaurant}>Search</button>
        <button onClick={()=>setFilteredData(data)}>Reset</button>
        <label>Username: </label>
        <input type="text" value={userName} onChange={updateUsername} />
    </div>
    {data.length == 0 ?<Shimmer></Shimmer> : ( <div className='restaurantCard'>
        {filteredData.map(res=>{
           return <Card key={res.info.id} data={res.info}/>  
        })}
          
    </div>)}
  
    </>
}

export default RestaurantCard
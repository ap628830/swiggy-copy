import { CloudnaryImageBaseURL } from "../constants/urls"

const Card = (props)=>{
    const {name,cloudinaryImageId,cuisines,costForTwo,avgRatingString} = props.data
    return <>
    <div className="cardWrapper">
        <div className="card">
            <div >
                <img src={CloudnaryImageBaseURL+cloudinaryImageId} alt="" className="cardImage"/>
            </div> 
            <div className="cardDetail">
            <h4>{name}</h4>
            <div>{cuisines.join(', ')}</div>
            <div>{costForTwo}</div>
            <div>{avgRatingString}</div>

            </div>
        </div>

    </div>
    </>
}

export default Card
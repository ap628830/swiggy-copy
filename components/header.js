import {LogoUrl} from '../constants/urls'
import { Link } from 'react-router-dom'
import useStatus from '../utils/useStatus'
import UserContext from '../utils/userContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'
const Header =()=>{
    const {loggedInUser} = useContext(UserContext)
    console.log("login details ",loggedInUser)
    const status = useStatus()
    const cartItem = useSelector(state=>state.cart)
    console.log("select ",cartItem)

    return <>
    <div className="header">
        
        <div className="logo">
            <img src={LogoUrl} alt="logo"  className='logoUrl'/>
        </div>
        <div className="tabs">
        <div> <Link to='./'>Home</Link></div>
        <div><Link to='./about'> About </Link></div>
        <div> <Link to='./contact'>Contact Us </Link></div>
        <div> <Link to='./cart'> <i className="fa fa-shopping-cart" style={{fontSize: '25px', color: 'black'}}></i>  </Link> <span>{cartItem.items.length}</span></div>
        <div style={{fontWeight: 'bold'}}> <i className="fa-solid fa-user"></i> {loggedInUser}</div>
        <div>{status=='online'? (<div className='online'> </div>):(<div className='offline'></div>)}</div>
        </div>
    </div>
    </>
}

export default Header
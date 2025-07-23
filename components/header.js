import {LogoUrl} from '../constants/urls'
import { Link } from 'react-router-dom'
const Header =()=>{
    return <>
    <div className="header">
        
        <div className="logo">
            <img src={LogoUrl} alt="logo"  className='logoUrl'/>
        </div>
        <div className="tabs">
        <div> <Link to='./'>Home</Link></div>
        <div><Link to='./about'> About </Link></div>
        <div> <Link to='./contact'>Contact Us </Link></div>
        <div> <Link to='./cart'>Cart </Link></div>
            
        </div>
    </div>
    </>
}

export default Header
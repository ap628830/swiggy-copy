import {LogoUrl} from '../constants/urls'
import { Link } from 'react-router-dom'
import useStatus from '../hooks/useStatus'
const Header =()=>{

    const status = useStatus()

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
        <div>{status=='online'? (<div className='online'> </div>):(<div className='offline'></div>)}</div>
        </div>
    </div>
    </>
}

export default Header
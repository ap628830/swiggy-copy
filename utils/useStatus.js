import { useState } from "react"

const useStatus =()=>{
    const [status,setStatus] = useState('online')

    window.addEventListener('online',()=>{
        setStatus('online')
    })

    window.addEventListener('offline',()=>{
        setStatus('offline')
    })

    return status
   
}

export default useStatus
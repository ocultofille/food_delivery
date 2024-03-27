import { useEffect,useState } from "react";
const useOnline=()=>{
    const [isOnline,setIsOnline] = useState(true)
    useEffect(()=>{
        const offline =()=>{
            setIsOnline(false)
        }
        const online =()=>{
            setIsOnline(true)
        }
        window.addEventListener('offline',offline)
        window.addEventListener('online',online)
        return (()=>{
            window.removeEventListener('offline',offline)
            window.removeEventListener('online',online)
    
        })
    }, [])
    return isOnline
    
}

export default useOnline;
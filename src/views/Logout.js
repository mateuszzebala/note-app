import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {API, POST} from "../api"
import { routes } from "../routes";

const Logout = () => {
    const navigate = useNavigate()
    POST(API.LOGOUT)
    useEffect(()=>{
        navigate(routes.signin)
    }, [navigate])
    return (
        <>
        
        </>
    )
}

export default Logout
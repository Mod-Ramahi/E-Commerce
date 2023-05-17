import { Outlet, Navigate } from "react-router-dom"

const Protectedpage =() => {
    const user = false
    return(
        user? <Outlet/> : <Navigate to='/signin'/>
    )
}

export default Protectedpage
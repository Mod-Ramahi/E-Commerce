import { Outlet } from "react-router-dom";
import Chat from "./Chat";

const RouteWithChat = ()=>{
    const user =false;
    return(
        user? <><Outlet/> <Chat/></> : <Outlet/>
    )
}

export default RouteWithChat;
import React from "react";
import { Link } from "react-router-dom";
import ticket from "../icons/ticket.png"
interface INavbar{

}

const Navbar:React.FunctionComponent<INavbar> = ()=>{
    return(

        <div className="topnav">
        <div> <img className="nav-logo" src={ticket} width="50px"/> <h3 id="nav-name"> Ticket Busters </h3>   </div>
        <Link to='/login' >Login</Link>
        <Link to='/signup'>Sign Up</Link>
        
      </div>
    )
}

export default Navbar;
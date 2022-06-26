import React from "react";
import { Link } from "react-router-dom";


interface INavbar{

}

const Navbar:React.FunctionComponent<INavbar> = ()=>{
    return(
        <div id="navbar-parent">

           <div className="navbar">
 <Link to="login"> <li> Login </li>  </Link>
 <Link to="signUp"><li> Sign Up </li> </Link>
 <Link to="forgot"> <li> Forgot </li> </Link>
</div>       
   
        </div>
    )
}

export default Navbar;
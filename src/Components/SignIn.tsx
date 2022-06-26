import React from "react";
import hill from "../icons/hill.png"
import { Link } from "react-router-dom";
interface ISignIn{

}

const SignIn:React.FunctionComponent<ISignIn> = (props)=>{
    return(
        <div id="container-login">
        <div id="login-box">


            <div id="signIn-box">

                <div id="login_logo-parent-box">
                    <div id="login_logo-box"> <img src={hill} id="img-logo_login" /> </div>

                </div>

                <div id="login-text">  <h1> LOG IN </h1> </div>

                <form id="login-form-tag">

                    <input type="email" placeholder="Email" className="login-input-field" />

                    <input type="password" placeholder="Password" className="login-input-field" />

                 <Link id="forgotpass-sign" to="/forgot">      <span id="forget-password"> Forget Password? </span>  </Link>

                    <button id="login-btn">
                        Login
                    </button>

                </form>

            </div>

        </div>

    </div>
    )
}

export default SignIn;
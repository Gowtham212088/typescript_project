import React from "react";
import hill from "../icons/hill.png"

interface ISignUp {

}

const SignUp: React.FunctionComponent<ISignUp> = (props) => {

    return (
        <div id="container-signup">
            <div id="box">


                <div id="signUp-box">

                    <div id="logo-parent-box">
                        <div id="logo-box"> <img src={hill} id="img-logo" /> </div>

                    </div>

                    <div id="signUp-text">  <h1> Sign Up </h1> </div>

                    <form id="form-tag">

                        <input type="text" placeholder="First name" className="input-field" />

                        <input type="text" placeholder="Second name" className="input-field" />

                        <input type="email" placeholder="Email" className="input-field" />

                        <input type="password" placeholder="Password" className="input-field" />

                        <input type="password" placeholder="Conform password" className="input-field" />



                        <button id="btn">
                            Sign Up
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default SignUp;
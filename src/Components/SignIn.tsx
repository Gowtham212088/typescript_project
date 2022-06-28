import React, { useState } from "react";
import hill from "../icons/hill.png"
import { Link, useHistory } from "react-router-dom";

interface ISignIn {

}

const SignIn: React.FunctionComponent<ISignIn> = (props) => {

    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    const history = useHistory()

    const [email, setEmail] = useState<string>()

    const [password, setPassword] = useState<string>()

    return (
        <div id="container-login">
            <div id="login-box">

                <div id="signIn-box">

                    <div id="login_logo-parent-box">
                        <div id="login_logo-box"> <img src={hill} id="img-logo_login" /> </div>
                    </div>

                    <div id="login-text">  <h1> LOG IN </h1> </div>

                    <form onSubmit={handleSubmit} id="login-form-tag">

                        <input type="email" onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="login-input-field" />

                        <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="login-input-field" />

                        <Link id="forgotpass-sign" to="/forgot">      <span id="forget-password"> Forget Password? </span>  </Link>

                        <button
                            onClick={() => {
                                const loginData = {
                                    email: email,
                                    password: password
                                };
                                fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/movies",
                                    {
                                        method: "POST",
                                        body: JSON.stringify(loginData),
                                        headers: { "content-type": "application/json" }
                                    }).then(()=>history.push("/signSuccess"))
                            }}
                            id="login-btn">
                            Login
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default SignIn;
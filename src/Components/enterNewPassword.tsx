import React, { useState } from "react";
import { useParams } from "react-router-dom";
import resetPass from "../icons/resetPass.png"
interface IEnterNewPassword {

}

const EnterNewPassword: React.FunctionComponent<IEnterNewPassword> = (props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }

    //   const {id} = useParams()
    const [password, setPassword] = useState<string>("");

    const [conformPass, setConformPass] = useState<string>("");

    // const {userid,token} = useParams()

    return (
        <div>
            <div id="new_password-container-login">
                <div id="new_password-login-box">

                    <div id="new_password-signIn-box">

                        <div id="new_password-login_logo-parent-box">
                            <div id="new_password-login_logo-box"> <img src={resetPass} id="img-logo_login" /> </div>

                        </div>

                        <div id="new_password-login-text">  <h1> Enter New Password </h1> </div>

                        <form onSubmit={handleSubmit} id="new_password-login-form-tag">

                            <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="new_password-login-input-field" />

                            <input type="password" onChange={(event) => setConformPass(event.target.value)} placeholder="Conform password" className="new_password-login-input-field" />

                            <button
                                onClick={() => {
                                    const newPassword = {
                                        password: password,
                                        conformPass: conformPass
                                    };
                                    fetch("", {
                                        method: "PUT",
                                        body: JSON.stringify(newPassword),
                                        headers: { "content-type": "application/json" }
                                    })
                                }}
                                id="new_password-login-btn">
                                UPDATE MY PASSWORD
                            </button>

                        </form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default EnterNewPassword;
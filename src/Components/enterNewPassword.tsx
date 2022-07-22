import { response } from "express";
import React, { useState,useRef } from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import resetPass from "../icons/resetPass.png"
import { API } from "../API";


interface IEnterNewPassword {

}

const EnterNewPassword: React.FunctionComponent= (props) => {
    const handleSubmit = (e: any) => {
        e.preventDefault()
    }
  const form = useRef()
      const {_id,token}:any = useParams()
console.log({_id:_id,token:token});
    const [password, setPassword] = useState("");

    const [conformPass, setConformPass] = useState<string>("");
// console.log({userid:userid,token:token});
  return (
        // <div>
        //     <div id="new_password-container-login">
        //         <div id="new_password-login-box">

        //             <div id="new_password-signIn-box">

        //                 <div id="new_password-login_logo-parent-box">
        //                     <div id="new_password-login_logo-box"> <img src={resetPass} id="img-logo_login" /> </div>

        //                 </div>

        //                 <div id="new_password-login-text">  <h1> Enter New Password </h1> </div>

        //                 <form onSubmit={handleSubmit} id="new_password-login-form-tag">

        //                     <input type="password" onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="new_password-login-input-field" />

        //                     <input type="password" onChange={(event) => setConformPass(event.target.value)} placeholder="Conform password" className="new_password-login-input-field" />

        //                     <button
        //                         onClick={() => {
        //                             const newPassword = {
        //                                 password: password,
        //                                 conformPass: conformPass
        //                             };
        //                             fetch("https://dipar-tcejorp.herokuapp.com/reset-password/:_id/:token", {
        //                                 method: "POST",
        //                                 body: JSON.stringify(newPassword),
        //                                 headers: { "content-type": "application/json" }
        //                             })
        //                         }}
        //                         id="new_password-login-btn">
        //                         UPDATE MY PASSWORD
        //                     </button>

        //                 </form>

        //             </div>

        //         </div>

        //     </div>
        // </div>

        <div id="new_pass-bg">
         
        <form id="new_pass" onSubmit={handleSubmit}>
            <h1> Enter New Password </h1>
            
            <div><input placeholder="Enter-Password" onChange={(event) => setPassword(event.target.value)} className="txt-field" name="user" type="password" /></div>
            <div><input placeholder="Re-Enter-Password" onChange={(event) => setConformPass(event.target.value)}  className="txt-field" name="password" type="password" /></div>
           
            <div><button className="btn" name="btn" 
           onClick={() => {   
                                        const newPassword = {
                                            password: password,
                                            conformPass: conformPass
                                        };console.log(newPassword);

                                        fetch(`${API}/reset-password/${_id}/${token}`, {
                                            method: "POST",
                                            body: JSON.stringify(newPassword),
                                            headers: { "content-type": "application/json" }
                                        }).then((response)=>response.json()).then((data)=>console.log(data))
                                       
                                    }}
            type="submit" >Login</button></div>
        </form>
    </div>

    )
}

export default EnterNewPassword;
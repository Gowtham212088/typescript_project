import React, { useState } from "react";
import forgot from "../icons/forgot.png"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import MailSent from "../Reactions/MailSent"
import { API } from "../API";



interface IForgetPassword {

}

const ForgetPassword: React.FunctionComponent<IForgetPassword> = () => {

  const [userName, setUserName] = useState<string>("");

  const [email, setEmail] = useState<string>("");

  const history = useHistory()

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    // <div id="forgot-pass-container">
    //   <div id="forgot-box">


    //     <div id="forgot-pass-box">

    //       <div id="login_logo-parent-box">
    //         <div id="login_logo-box"> <img src={forgot} id="img-logo_login" /> </div>

    //       </div>

    //       <div id="forgot-text">  <h1 style={{ color: "#05D6D9" }}> Verify your email address </h1> </div>


    //       <form onSubmit={handleChange} id="forgot-form-tag">

    //         <input type="text" name="username" onChange={(event)=>setUserName(event.target.value)} placeholder="username"  className="forgot-input-field" />

    //         <input type="email" name="email" onChange={(event)=>setEmail(event.target.value)} placeholder="email"  className="forgot-input-field" />

    //         <Link id="Link-forgot" to="login">   <span id="forget-back_to_login"> Back to login page </span>  </Link>

    //         <button 
    // onClick={()=>{

    //   const signUpData = {
    //     userName: userName,
    //     email: email
    //   };
    //   fetch(
    //     "https://dipar-tcejorp.herokuapp.com/form/addRandomString",
    //     {
    //       method: "POST",
    //       body: JSON.stringify(signUpData),
    //       headers: { "content-type": "application/json" },
    //     }
    //   ).then(()=> history.push("/mailSent"))
    // }}
    //         type="submit"

    //           id="forgot-btn">
    //           Verify Me
    //         </button>

    //       </form>

    //     </div>

    //   </div>
    // </div>
    <div id="forgot-bg">
      <form id="forgot" onSubmit={handleSubmit}>
        <h1> Verify your email </h1>

        <div><input placeholder="Username" onChange={(event) => setUserName(event.target.value)} className="txt-field" name="user" type="text" /></div>
        <div><input placeholder="E-mail" onChange={(event) => setEmail(event.target.value)} className="txt-field" name="email" type="email" /></div>
        <div>  <Link id="forgotpass-sign" to="/forgot">  <Link id="Link-forgot" to="login">   <span id="forget-back_to_login"> Back to login page </span>  </Link>  </Link> </div>
        <div><button className="btn" name="btn"
          onClick={() => {

            const signUpData = {
              userName: userName,
              email: email
            };
            // fetch(
            //   `${API}/form/addRandomString`,
            //   {
            //     method: "POST",
            //     body: JSON.stringify(signUpData),
            //     headers: { "content-type": "application/json" },
            //   }
            // ).then(()=> history.push("/mailSent"))}}
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(signUpData);
console.log(signUpData);
            var requestOptions = {
              method: 'POST',
              headers: myHeaders,
              body: raw,
              redirect: 'follow'
            }

            fetch("https://tcejorp-dipar.herokuapp.com/form/addRandomString",{
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            })
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error))
          }}
          type="submit" > Login </button></div>
      </form>
    </div>

  )
}

export default ForgetPassword;
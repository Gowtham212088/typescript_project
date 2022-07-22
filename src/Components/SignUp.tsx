import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../API";
import hill from "../icons/hill.png"

interface ISignUp {

}




const SignUp: React.FunctionComponent<ISignUp> = (props) => {

    const [name, setName] = useState<string>("")
    const [secName, setSecName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [contact, setContact] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [checkExist, setCheckExist] = useState<string>("")
    const history = useHistory()

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setName("")
    }
    return (
        // <div id="container-signup">
        //     <div id="box">
        //         <div id="signUp-box">

        //             <div id="logo-parent-box">
        //                 <div id="logo-box"> <img src={hill} id="img-logo" /> </div>
        //             </div>

        //             <div id="signUp-text">  <h1> Sign Up </h1> </div>

        //             <form onSubmit={handleSubmit} id="form-tag">

        //                 <input type="text"  className="txt-field" onChange={(event) => setName(event.target.value)} placeholder="First name" />

        //                 <input type="text"  className="txt-field" onChange={(event) => setSecName(event.target.value)} placeholder="Second name"  />

        //                 <input type="email"  className="txt-field" onChange={(event) => setEmail(event.target.value)} placeholder="Email"  />

        //                 <input type="number"  className="txt-field" onChange={(event) => setContact(event.target.value)} placeholder="Phone" maxLength={15}  />

        //                 <input type="password"  className="txt-field" onChange={(event) => setPassword(event.target.value)} placeholder="Enter password"  />

        //                 <span> {checkExist} </span>

        //                 <button
        // onClick={() => {
        //     const signUpData = {
        //         firstname: name,
        //         secondname: secName,
        //         email: email,
        //         contact: contact,
        //         password: password
        //     };
        //     fetch("https://dipar-tcejorp.herokuapp.com/form/signUp", {
        //         method: "POST",
        //         body: JSON.stringify(signUpData),
        //         headers: { "content-type": "application/json" }
        //     }).then((data) => data.json())
        //         .then((response) => {
        //             setCheckExist(response.error)
        //         })
        // }}
        //                     id="btn">
        //                     Sign Up
        //                 </button>

        //             </form>

        //         </div>

        //     </div>

        // </div>

        <div id="signUp-bg">

            <form onSubmit={handleSubmit} id="signUp">
                <h1> SIGN UP </h1>

                <h3> {checkExist} </h3>
                <div><input type="text" className="signUp_txt-field" onChange={(event) => setName(event.target.value)} placeholder="First name" /></div>
                <div><input type="text" className="txt-field" onChange={(event) => setSecName(event.target.value)} placeholder="Second name" /></div>
                <div> <input type="email" className="txt-field" onChange={(event) => setEmail(event.target.value)} placeholder="Email" /> </div>
                <div> <input type="number" className="txt-field" onChange={(event) => setContact(event.target.value)} placeholder="Phone" maxLength={15} /> </div>
                <div> <input type="password" className="txt-field" onChange={(event) => setPassword(event.target.value)} placeholder="Enter password" /> </div>
               

                <div> <button className="signUp_btn" name="btn" type="submit"
                    onClick={() => {
                        const signUpData = {
                            firstname: name,
                            secondname: secName,
                            email: email,
                            contact: contact,
                            password: password
                        };
                       
                       

                        fetch(`${API}/form/signUp`, {
                            method: "POST",
                            body: JSON.stringify(signUpData),
                            headers: { "content-type": "application/json" }
                        }).then((data) => {
                            if(data.status===200){
                                setCheckExist("SignUp Successful")
                            }
                        })

                            // .then((response) => {
                            //     console.log(response);
                            // })
                    }}
                > Sign Up </button></div>
            </form>
        </div>

    )
}

export default SignUp;
import React, { useState } from "react";
import hill from "../icons/hill.png"

interface ISignUp {

}

const SignUp: React.FunctionComponent<ISignUp> = (props) => {

 const [name,setName]=useState<string>("")
 const [secName,setSecName]=useState<string>("")
 const [email,setEmail] = useState<string>("")
 const [contact,setContact]=useState<string>("")
 const [password,setPassword] = useState<string>("")

 const handleSubmit = (e:any) =>{
    e.preventDefault()
 }
    return (
        <div id="container-signup">
            <div id="box">


                <div id="signUp-box">

                    <div id="logo-parent-box">
                        <div id="logo-box"> <img src={hill} id="img-logo" /> </div>
                    </div>

                    <div id="signUp-text">  <h1> Sign Up </h1> </div>

                    <form onSubmit={handleSubmit} id="form-tag">

                        <input type="text" onChange={(event)=>setName(event.target.value)} placeholder="First name" className="input-field" />

                        <input type="text" onChange={(event)=>setSecName(event.target.value)} placeholder="Second name" className="input-field" />

                        <input type="email" onChange={(event)=>setEmail(event.target.value)} placeholder="Email" className="input-field" />

                        <input type="number" onChange={(event)=>setContact(event.target.value)} placeholder="Phone" maxLength={15} className="input-field" />

                        <input type="password" onChange={(event)=>setPassword(event.target.value)} placeholder="Conform password" className="input-field" />

                         <button
                         onClick={()=>{
                            const signUpData = {
                                name:name,
                                secondName:secName,
                                email:email,
                                contact:contact,
                                password:password  
                            };
                            fetch("https://6228d2bb9fd6174ca8308614.mockapi.io/movies",{
                                method:"POST",
                                body:JSON.stringify(signUpData),
                                headers:{"content-type":"application/json"}
                            })
                         }}
                         id="btn">
                            Sign Up
                        </button>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default SignUp;
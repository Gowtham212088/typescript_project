import React from "react";

interface ISignInSuccess {

}

const SignInSuccess:React.FunctionComponent = ()=>{
    return(
        <div>
            <img src="https://www.networkgeek.in/img/success.gif" id="signin-success"  />
        </div>
    )
}

export default SignInSuccess;
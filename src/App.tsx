import React from 'react';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/forgetPassword';
import MailSent from './Reactions/MailSent';
import EnterNewPassword from './Components/enterNewPassword';
import { Route, Switch } from "react-router-dom";
import SignInSuccess from './Reactions/sucess';
import './App.css';


function App() {
  return (
    <div className="App">



      <Navbar />

      <Switch>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/forgot">
          <ForgetPassword />
        </Route>
        <Route path="/mailSent">
          <MailSent />
        </Route>
        <Route path="/signSuccess">
          <SignInSuccess />
        </Route>
        <Route path="/reset-password/:userid/:token">
          <EnterNewPassword />
        </Route>
      </Switch>



    </div>
  );
}

export default App;

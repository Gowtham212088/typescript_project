import React from 'react';
import SignUp from './Components/SignUp';
import Navbar from './Components/Navbar';
import SignIn from './Components/SignIn';
import ForgetPassword from './Components/forgetPassword';
import { Route, Switch } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">



 <Navbar/>

 <Switch>
          <Route path="/login">
            <SignIn/>
          </Route>
          <Route path="/signup">
           <SignUp/>
          </Route>
          <Route path="/forgot">
           <ForgetPassword/>
          </Route>
</Switch>

  
    
    </div>
  );
}

export default App;

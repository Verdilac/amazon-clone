import React, { useEffect } from "react";
import Header from "./Header";
import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{basket},dispatch] = useStateValue();
  
  useEffect(() => {
    //This will only run once when the app component loads...
    //becuase the [] is empty istead we can use  something [user] to make it run every time a new user loads
  
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>',authUser);

      if(authUser) {
        //the user jst logged in or was logged in 

        dispatch( {
          type:'SET_USER',
          user:authUser
        })

      } else {
        dispatch( {
          type:'SET_USER',
          user:null
        })
        //the user is logged out 
      }
    })
  
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

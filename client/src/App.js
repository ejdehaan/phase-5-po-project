import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'

import OpenOrders from "./components/OpenOrders";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";
import Profile from "./components/Profile";
import CompletedOrders from "./components/CompletedOrders";
import Help from "./components/Help";
import NavBar from "./components/NavBar";
import EditOrder from "./components/EditOrder"


function App() {

  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([])


  useEffect(() => {
    fetchOrders();
  }, []);


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);


  function fetchOrders() {
    fetch("/orders")
    .then(resp => resp.json())
    .then(data => setOrders(data))
  }
  

  function handleUpdateUser(user) {
    setUser(user);
  }


  if (!user) return (
    <div className="no-user">
        <Route path="/login">
          <Login onLogin={handleUpdateUser} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
    </div>
  )


  return (
    <div>
      <Header user={user} onLogout={handleUpdateUser}/>
      <NavBar user={user} />

        <Switch>
          <Route path="/help"> 
            <Help />
          </Route>

          <Route path="/users/:id/edit"> 
            <Profile user={user}/>
          </Route>

          <Route path="/completed-orders"> 
            <CompletedOrders user={user}/>
          </Route>

          <Route path="/open-orders/:id/edit">
            <EditOrder orders={orders} user={user} handleUpdateUser={handleUpdateUser}/>
          </Route>

          <Route exact path="/open-orders"> 
            <OpenOrders user={user} />
          </Route>

        </Switch> 

    </div>
  );
}

export default App;

import { useState } from "react";
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";


function App() {

  const [user, setUser] = useState(null);

  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout() {
    setUser(null);
  }


  if (!user) return (
    <div className='no-user'>
      <BrowserRouter>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/signup">
          <SignUp setUser={setUser} />
        </Route>
      </BrowserRouter>
    </div>
  )


  return (
    <div>
      <Header user={user} onLogout={handleLogout}/>
      <BrowserRouter>
        <Switch>
          {/* <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route> */}

          <Route path="/"> 
            <Home />
          </Route>
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

export default App;

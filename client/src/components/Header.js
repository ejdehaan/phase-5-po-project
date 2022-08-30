import React from 'react'
import { Link, useHistory } from 'react-router-dom'


function Header({ user, onLogout }) {
  
  const history = useHistory()
  
  function handleLogout() {
    fetch("/logout", {
      method: "DELETE",
    }).then(() => onLogout(null));
    history.push("/login")
  }
  
  return (
    <div>
      <div>
        {user ? (
            <div className="header">
              <h5>Welcome, {user.username}!</h5>
              <button className='box' onClick={handleLogout}>Logout</button>
            </div>
          ) 
          : (
            <Link to="/login">
              <button className='box'>Login</button>
            </Link>
          )
          }
      </div>
      <br></br>
    </div>
  )
}

export default Header
import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'

import React from 'react'

function Login({ onLogin }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => onLogin(user));
            }
            history.push("/open-orders")
        });
    }


  return (
    <>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h2 className='app_name'>Shipment Solutions</h2>
        <br/>
        <br/>
        <form className='user_acct_form' onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br/>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br/>
            <br/>

            <label htmlFor="password">Password</label>
            <br/>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br/>
            <br/>
            <button className='box'>Login</button>
        </form>
        <Link to ="/signup">
            <h5 className='hyperlink'>Sign Up Here!</h5>
        </Link>
        <br></br>
    </>
  )
}

export default Login
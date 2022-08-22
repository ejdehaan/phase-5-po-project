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
            history.push("/")
        });
    }


  return (
    <>
        <div>Login Component</div>
        <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <label htmlFor="username">Username: </label>
            <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <br></br>

            <h3>Password</h3>
            <label htmlFor="password">Password:  </label>
            <input 
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>
            <button>Login</button>
        </form>
        <br></br>
        <Link to ="/signup">
            Sign Up Here!
        </Link>
    </>
  )
}

export default Login
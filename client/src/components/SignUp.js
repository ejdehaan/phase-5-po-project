import {React, useState} from 'react'
import { useHistory } from 'react-router-dom'

function SignUp({ setUser }) {
  
  const history = useHistory()

  const [userformData, setUserFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email_address: "",
    password: ""
  })

  function handleChange(e) {
    const { id, value } = e.target;
    setUserFormData((prevData) => ({...prevData, [id]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userformData),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    history.push("/")
  }
  

  
  return (
    <div>
      <h1>SignUp Component</h1>

      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>     
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={userformData.username}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="first_name">First Name</label>
        <input
          type="text"
          id="first_name"
          autoComplete="off"
          value={userformData.first_name}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="last_name">Last Name</label> 
        <input
          type="text"
          id="last_name"
          autoComplete="off"
          value={userformData.last_name}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="email_address">Email</label>  
        <input
          type="text"
          id="email_address"
          autoComplete="off"
          value={userformData.email_address}
          onChange={handleChange}
        />
        <br></br>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={userformData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <br></br>
        <button type="submit">Sign Up</button>
      </form>

    </div>
  )
}

export default SignUp
import {React, useState} from 'react'
import { useHistory, Link } from 'react-router-dom'

function SignUp({ setUser }) {
  
  const history = useHistory()

  const [userformData, setUserFormData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email_address: "",
    password: "",
    supplier_id: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone:""
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
  
  //add a return to login link
  
  return (
    <div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <h2 className='login_signup_hdr_ftr'>Sign Up</h2>     
      <form className='user_acct_form' onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <br/>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={userformData.username}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label htmlFor="first_name">First Name</label>
        <br/>
        <input
          type="text"
          id="first_name"
          autoComplete="off"
          value={userformData.first_name}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label htmlFor="last_name">Last Name</label>
        <br/> 
        <input
          type="text"
          id="last_name"
          autoComplete="off"
          value={userformData.last_name}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label htmlFor="email_address">Email</label>  
        <br/>
        <input
          type="text"
          id="email_address"
          autoComplete="off"
          value={userformData.email_address}
          onChange={handleChange}
        />
        <br/>
        <br/>

        <label htmlFor="password">Password</label>
        <br/>
        <input
          type="password"
          id="password"
          value={userformData.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <br/>
        <br/>

        <label htmlFor="supplier_id">Supplier ID</label>  
        <br/>
        <input
          type="text"
          id="supplier_id"
          autoComplete="off"
          value={userformData.supplier_id}
          onChange={handleChange}
        />
        <br/>

        {/* <label htmlFor="address">Address </label>  
        <br/>
        <input
          type="text"
          id="address"
          autoComplete="off"
          value={userformData.address}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="city">City </label>  
        <br/>
        <input
          type="text"
          id="city"
          autoComplete="off"
          value={userformData.city}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="state">State </label>  
        <br/>
        <input
          type="text"
          id="state"
          autoComplete="off"
          value={userformData.state}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="zip">Zip </label>  
        <br/>
        <input
          type="text"
          id="zip"
          autoComplete="off"
          value={userformData.zip}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="country">Country </label>  
        <br/>
        <input
          type="text"
          id="country"
          autoComplete="off"
          value={userformData.country}
          onChange={handleChange}
        />
        <br/>

        <label htmlFor="phone">Phone </label>  
        <br/>
        <input
          type="text"
          id="phone"
          autoComplete="off"
          value={userformData.phone}
          onChange={handleChange}
        /> */}
        <br/>
        <br/>
        <button className='box' type="submit">Sign Up</button>
      </form>

      <Link to ="/login">
        <h5 className='hyperlink'>Return to Login</h5>
      </Link>

    </div>
  )
}

export default SignUp
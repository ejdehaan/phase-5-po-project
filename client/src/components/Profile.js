import { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function Profile({ user }) {

  const history = useHistory()

  let params = useParams()
  console.log(params)

  const {id, username, first_name, last_name, email_address, password, supplier_id, address, city, state, zip, country, phone} = user
  
  const [profileData, setProfileData] = useState({
    username: username,
    first_name: first_name,
    last_name: last_name,
    email_address: email_address,
    password: password,
    supplier_id: supplier_id,
    address: address,
    city: city,
    state: state,
    zip: zip,
    country: country,
    phone: phone
  })


  function handleChange(e) {
    const { name,value } = e.target;
    setProfileData((prevData) => ({...prevData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/users/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(profileData),
    })
    .then(resp => resp.json())
    .then(data => setProfileData(data));
    history.push("/");
  };


  return (
    <div> 
      <form className='profile_form' onSubmit={handleSubmit}>

        <label>First Name </label>
        <br/>
        <input 
        name="first_name"
        onChange={handleChange}
        value={profileData.first_name}
        />
        <br/>
        <br/>

        <label>Last Name </label>
        <br/>
        <input 
        name="last_name"
        onChange={handleChange}
        value={profileData.last_name}
        />
        <br/>
        <br/>

        <label>Email </label>
        <br/>
        <input 
        name="email_address"
        onChange={handleChange}
        value={profileData.email_address}
        />
        <br/>
        <br/>

        <label>Address </label>
        <br/>
        <input 
        name="address"
        onChange={handleChange}
        value={profileData.address}
        />
        <br/>
        <br/>

        <label>City </label>
        <br/>
        <input 
        name="city"
        onChange={handleChange}
        value={profileData.city}
        />
        <br/>
        <br/>

        <label>State </label>
        <br/>
        <input 
        name="state"
        onChange={handleChange}
        value={profileData.state}
        />
        <br/>
        <br/>

        <label>Zip </label>
        <br/>
        <input 
        name="zip"
        onChange={handleChange}
        value={profileData.zip}
        />
        <br/>
        <br/>

        <label>Country </label>
        <br/>
        <input 
        name="country"
        onChange={handleChange}
        value={profileData.country}
        />
        <br/>
        <br/>

        <label>Phone </label>
        <br/>
        <input 
        name="phone"
        onChange={handleChange}
        value={profileData.phone}
        />
        <br/>
        <br/>

        <button className='box'>Update</button>
      </form>
    </div>
  )
}

export default Profile
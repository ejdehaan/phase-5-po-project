import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'


function EditOrder({ handleUpdateUser, user }) {

  const history = useHistory()
  let params = useParams()
  const currentOrder = user.open_orders.find(order => order.id == params.id)

  const {id, po_num, supplier_name} = currentOrder

  const [inputOrderData, setInputOrderData] = useState({
    pickup_date: "",
    pickup_name: "",
    pickup_address: "",
    pickup_city: "",
    pickup_state: "",
    pickup_zip: "",
    pickup_country: "",
    pickup_contact: "",
    pickup_phone: "",
    cartons: "",
    weight: "",
    volume: "",
    pallets: "",
    completed: true
  })

  function handleChange(e) {
    const { name,value } = e.target;
    setInputOrderData((prevData) => ({...prevData, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch(`/orders/${id}`, {
      method:"PATCH",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputOrderData),
    })
    .then(resp => resp.json())
    .then(data => {
      const openOrders = user.open_orders.filter((order) => 
        order.id !== data.id
      )
      const completedOrders = [...user.completed_orders, data]

      handleUpdateUser({...user, open_orders: openOrders, completed_orders: completedOrders})
    });
    history.push("/completed-orders");
  };



  return (
    <div>Fill in Shipment Information Below
      <h5> {supplier_name} PO {po_num}</h5>

        <form className='edit_order' onSubmit={handleSubmit}>

          <label>Pickup Date </label>
          <br/>
          <input 
          name="pickup_date"
          onChange={handleChange}
          value={inputOrderData.pickup_date}
          />
          <br/>
          <br/>

          <label>Company Name </label>
          <br/>
          <input 
          name="pickup_name"
          onChange={handleChange}
          value={inputOrderData.pickup_name}
          />
          <br/>
          <br/>

          <label>Address </label>
          <br/>
          <input 
          name="pickup_address"
          onChange={handleChange}
          value={inputOrderData.pickup_address}
          />
          <br/>
          <br/>

          <label>City </label>
          <br/>
          <input 
          name="pickup_city"
          onChange={handleChange}
          value={inputOrderData.pickup_city}
          />
          <br/>
          <br/>
          
          <label>State </label>
          <br/>
          <input 
          name="pickup_state"
          onChange={handleChange}
          value={inputOrderData.pickup_state}
          />
          <br/>
          <br/>

          <label>Zip </label>
          <br/>
          <input 
          name="pickup_zip"
          onChange={handleChange}
          value={inputOrderData.pickup_zip}
          />
          <br/>
          <br/>

          <label>Country </label>
          <br/>
          <input 
          name="pickup_country"
          onChange={handleChange}
          value={inputOrderData.pickup_country}
          />
          <br/>
          <br/>

          <label>Contact Name </label>
          <br/>
          <input 
          name="pickup_contact"
          onChange={handleChange}
          value={inputOrderData.pickup_contact}
          />
          <br/>
          <br/>

          <label>Contact Phone </label>
          <br/>
          <input 
          name="pickup_phone"
          onChange={handleChange}
          value={inputOrderData.pickup_phone}
          />
          <br/>
          <br/>

          <label>Cartons </label>
          <br/>
          <input 
          name="cartons"
          onChange={handleChange}
          value={inputOrderData.cartons}
          />
          <br/>
          <br/>

          <label>Weight </label>
          <br/>
          <input 
          name="weight"
          onChange={handleChange}
          value={inputOrderData.weight}
          />
          <br/>
          <br/>

          <label>Volume </label>
          <br/>
          <input 
          name="volume"
          onChange={handleChange}
          value={inputOrderData.volume}
          />
          <br/>
          <br/>

          <label>Pallets </label>
          <br/>
          <input 
          name="pallets"
          onChange={handleChange}
          value={inputOrderData.pallets}
          />
          <br/>
          <br/>
          <br/>

          <button type="submit">Complete Order</button>
        </form>

    </div>
  )
}

export default EditOrder
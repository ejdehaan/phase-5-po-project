import React from 'react'
import { Link } from 'react-router-dom'


function Order({ po_num, supplier_name, id }) {

  
  return (

    <div>
      <p>PO Number: {po_num}</p>
      <p>Supplier:  {supplier_name}</p>
      <Link to={`/open-orders/${id}/edit`}>
        <button className='box'>Route PO</button>
      </Link>
      <br></br>
      <br></br>
    </div>
  )
}

export default Order
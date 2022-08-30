import React from 'react'
import Order from './Order'

function CompletedOrders({ user }) {

  function renderCompletedOrders() {
    return user.completed_orders.map((order) => 
      <Order key={order.id} {...order}/>
    )
  }

  return (
    <div>Completed Orders
      <ul>
        {user && renderCompletedOrders()}
      </ul>
    </div>
  )
}

export default CompletedOrders

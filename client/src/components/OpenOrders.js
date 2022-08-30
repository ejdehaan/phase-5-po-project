import Order from './Order'


function OpenOrders({ user }) {


 
  function renderOrders() {
    return user.open_orders.map((order) => 
      <Order key={order.id} {...order}/>
    )
  };

  return (
    <div>Open Orders
     <ul>
      {user && renderOrders()}
     </ul>
    </div>
  )
}
     
export default OpenOrders
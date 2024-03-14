import React, { useState } from "react";
import View from './View'
import './Order.css'
function Order() {
  // Define state variable to store orders
  const [orders, setOrders] = useState([
    { id: 1, customer: "ramesh", date: "2024-03-2", status: "Pending" },
    { id: 2, customer: "suresh", date: "2021-9-3", status: "Completed" },
    {id: 3, customer: "prasad", date: "2024-9-3", status: "Pending"}
    // Add more orders as needed
  ]);
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order => {
      if (order.id === orderId) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(updatedOrders);
  };
  const handleStatusUpdate = (orderId) => {
    const newStatus = prompt("Enter the new status:");
    if (newStatus) {
      updateOrderStatus(orderId, newStatus);
    }
  };
  // Function to view order details
  const viewOrderDetails = (orderId) => {
    const order = orders.find(order => order.id === orderId);
    if (order) {
      alert(`Order ID: ${order.id}\nCustomer: ${order.customer}\nDate: ${order.date}\nStatus: ${order.status}`);
    } else {
      alert("Order not found.");
    }
  };
// Function to update order status
 

  // Function to delete order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  const handleDeleteOrder = (orderId) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this order?");
    if (confirmDelete) {
      deleteOrder(orderId);
    }
  };

  return (
    <div>
    
      <h1>Order List</h1>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => viewOrderDetails(order.id)}>View Details</button>
                <button onClick={() => handleStatusUpdate(order.id)}>Update Status</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <View orders={orders} />
    </div>
  );
}

export default Order;

    // Filter orders based on the selected date
    import React, { useState } from 'react';
    import Calendar from 'react-calendar';
    import 'react-calendar/dist/Calendar.css';
    import './View.css';
    
    const View = ({ orders }) => {
      const [selectedDate, setSelectedDate] = useState(new Date());
    
      const handleDateClick = (date) => {
        setSelectedDate(date);
      };
    
      const formatDate = (date) => {
        return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
      };
    
      const ordersForSelectedDate = orders.filter(order => formatDate(new Date(order.date)) === formatDate(selectedDate));
    
      return (
        <div>
          <h2>Orders Calendar View</h2>
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            onClickDay={handleDateClick}
          />
          <h3>Orders for {selectedDate.toDateString()}</h3>
          {ordersForSelectedDate.length > 0 ? (
            <ul>
              {ordersForSelectedDate.map(order => (
                <li key={order.id}>
                  <strong>Order ID:</strong> {order.id}<br />
                  <strong>Status:</strong> {order.status}<br />
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders for this date.</p>
          )}
        </div>
      );
    };
    
    export default View;
    
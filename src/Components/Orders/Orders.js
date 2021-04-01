import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    useEffect(() => {
        fetch("https://secure-hollows-18485.herokuapp.com/orders?email="+loggedInUser.email)
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])
    return (
        <div>
            <h1>THIS IS ORDERS ROUTE!!!</h1>
            <h1>You have {orders.length} Orders</h1>
            {
                orders.map(order => <li>{order.name} -- {order.price} -- {order.quantity} -- {(new Date(order.orderDate).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Orders;
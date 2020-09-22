import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import Order from './Order';
import './Orders.css';
import { useStateValue } from './StateProvider';

function Orders() {
    const [orders, setOrders] = useState([])

    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (user) {
            db.collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc') // returns as docs
                .onSnapshot(snapshot => {
                    setOrders(snapshot.docs.map(doc => ({  // each document return an object in below format
                        id: doc.id,
                        data: doc.data()
                    })))
                })
        } else {
            setOrders([])
        }
    }, [user])

    return (
        <div className="orders">
            <h1>Your Orders</h1>
            <div className="orders__order">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders

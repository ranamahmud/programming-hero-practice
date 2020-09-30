import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';

const Booking = () => {
    const [bookings, setBookings] = useState([])
    const [loggedInUser, setLoggedInUser] = useContext
        (UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/bookings?email=' + loggedInUser.email, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${sessionStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>

            {
                bookings.map(book =>
                    <li kry={book._id}>{book.name} from: {(new Date(book.checkIn).toDateString('dd/MM/yyyy'))} to {(new Date(book.checkOut).toDateString('dd/MM/yyyy'))}</li>)
            }
        </div>
    );
};

export default Booking;
import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useContext } from 'react';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { useState } from 'react';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState({});
  const onSubmit = data => {
    console.log('form submitted', data)

    setShippingData(data);

  };

  const handlePayment = paymentId => {

  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="row">
      <div style={{ display: shippingData ? 'none' : 'block' }} className="col-md-6"> <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
        {errors.name && <span className="error">Name is required</span>}

        <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
        {errors.email && <span className="error">Email is required</span>}

        <input name="address" ref={register({ required: true })} placeholder="Your Address" />
        {errors.address && <span className="error">Address is required</span>}

        <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
        {errors.phone && <span className="error">Phone Number is required</span>}

        <input type="submit" />
      </form></div>
      <div style={{ display: shippingData ? 'block' : 'none' }} className="col-md-6">
        <h2>Pay For Me</h2>
        <ProcessPayment handlePayment={handlePayment} /></div>
    </div>
  );
};

export default Shipment;
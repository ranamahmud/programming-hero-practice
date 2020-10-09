import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';
import SplitCardForm from './SplitCardForm'
const stripePromise = loadStripe('pk_test_51HZjH5EtzbYUOan5jmAlFIs6zvGZOxbKDvRaHYckTX2wQTzRgznB6VoDvFOaCZqnSzesYdwgAV3L7ihcJ8QZMelz00JQBiwhcW');

const ProcessPayment = ({ handlePayment }) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} />
        </Elements>
    );
};

export default ProcessPayment;
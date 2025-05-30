import React from 'react';
import axios from 'axios';

function RazorpayGateway() {
  const price = localStorage.getItem("price") ;

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const result = await axios.post('http://localhost:3001/bookings/create-order' , {
      amount : price ,
    });

    if (!result) {
      alert('Server error. Are you online?');
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: 'rzp_live_Cj4Nty3eyy07Vi', // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: 'ABC.',
      description: 'Test Transaction',
      image: "https://example.com/your_logo",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post('http://localhost:3001/bookings/success', data);

        alert(result.data.msg);
      },
      prefill: {
        name: 'Aman',
        email: 'example@example.com',
        contact: '9999999999',
      },
      notes: {
        address: 'Example Corporate Office',
      },
      theme: {
        color: '#61dafb',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }


  return (
    <div className='App'>
      <header className='App-header'>
        <img src="" className='App-logo' alt='logo' />
        <p>Buy React now!</p>
        <button className='App-link' onClick={displayRazorpay}>
          {price} Pay 
        </button>
      </header>
    </div>
  );
}

export default RazorpayGateway;

import React, { useState } from 'react';
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
// Import the assets directly
import stripe_logo from '../assets/stripe_logo.png';
import razorpay_logo from '../assets/razorpay_logo.png';
import { useNavigate } from 'react-router-dom'; 

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const navigate = useNavigate(); 

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left Side: Delivery Information */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1="DELIVERY" text2="INFORMATION" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder='First Name' />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder='Last Name' />
        </div>
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="email" placeholder="Email" />
        <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Phone Number" />
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Address" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="City" />
        </div>
        <div className="flex gap-3">
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Zipcode" />
          <input className="border border-gray-300 rounded py-1.5 px-3.5 w-full" type="text" placeholder="Country" />
        </div>
      </div>

      {/* Right Side: Cart Total + Payment */}
      <div className="flex flex-col mt-16 gap-8">
        {/* CartTotal Component */}
        <div className="min-w-80">
          <CartTotal />
        </div>

        {/* Payment Method Section */}
        <div>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          <div className='flex gap-3 flex-col lg:flex-row'>
            {/* Payment Method Options */}
            <div onClick={() => setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={stripe_logo} alt='Stripe Logo' />
            </div>
            <div onClick={() => setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-5 mx-4' src={razorpay_logo} alt='Razorpay Logo' />
            </div>
            <div onClick={() => setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-sm font-medium mx-4'>CASH ON DELIVERY</p>
            </div>
          </div>

          {/* Place Order Button */}
          <div className="w-full text-end">
            <button
              className="bg-black text-white my-8 px-12 py-3"
              onClick={() => navigate('/order')} // Navigate to the Order confirmation page
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;

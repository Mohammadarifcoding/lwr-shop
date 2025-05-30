import React from 'react';
import OrderSummary from './OrderSummary';
import CartItem from './CartItem';

const Cart = () => {
    return (
<div className="lg:col-span-1">
  <div className="bg-white rounded-lg p-6 border border-gray-200">
    <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
<CartItem/>
    {/* Order Summary */}
    <div className="mt-6">
    <OrderSummary/>
      {/* Checkout Button */}
      <a href="#" className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors">
        Go to Checkout
        <span className="inline-block ml-2">→</span>
      </a>
    </div>
  </div>
</div>

    );
};

export default Cart;
import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { products, cartItems, currency, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();

  // Update cartData when cartItems change
  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        if (cartItems[items][size] > 0) {
          tempData.push({
            _id: items,
            size: size,
            quantity: cartItems[items][size],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  return (
    <div className='border-t pt-14'>
      <div className="text-2xl mb-3">
        <Title text1={'YOUR'} text2={'CART'} />
      </div>

      {/* Cart Items */}
      <div>
        {cartData.length === 0 ? (
          <p>Your cart is empty.</p> // Show message if cart is empty
        ) : (
          cartData.map((item, index) => {
            const productData = products.find((product) => product._id === item._id);

            if (!productData) {
              return null; // Handle case where the product is not found
            }

            return (
              <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                <div className="flex items-start gap-6">
                  {/* Product Image */}
                  <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />

                  {/* Product Info */}
                  <div>
                    <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                    <div className="flex items-center gap-5 mt-2">
                      {/* Price */}
                      <p>{currency}{productData.price}</p>

                      {/* Size */}
                      <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>

                      <div className="flex items-center justify-end">
                        {/* Quantity */}
                        <input 
                          onChange={(e) => updateQuantity(item._id, item.size, Number(e.target.value))}
                          type="number" 
                          min={1} 
                          max={productData.stock} // Limit max quantity to available stock
                          defaultValue={item.quantity} 
                          className='border w-12 sm:w-16 mx-20 sm:ml-6 px-2 py-1 text-center' 
                        />
                        <img 
                          onClick={() => updateQuantity(item._id, item.size, 0)} 
                          src={assets.bin_icon} 
                          className='w-4 mr-4 sm:w-5 cursor-pointer' 
                          alt="Remove item from cart" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* CartTotal section aligned to the right */}
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button 
              className="bg-black text-white my-8 px-8 py-3"
              onClick={() => navigate('/place-order')} // Navigate to Place Order page
            >
              PROCESS TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

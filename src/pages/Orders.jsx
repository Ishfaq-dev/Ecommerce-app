import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const Orders = () => {
  const { products, cartItems, currency } = useContext(ShopContext);

  // Extract orders from cartItems
  const orderData = Object.keys(cartItems).flatMap(itemId => 
    Object.keys(cartItems[itemId]).map(size => ({
      _id: itemId,
      size: size,
      quantity: cartItems[itemId][size],
    }))
  ).filter(order => order.quantity > 0); // Filter only those with a quantity greater than 0

  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1="MY" text2="ORDERS" />
      </div>
      <div>
        {orderData.length === 0 ? (
          <p className="text-center text-gray-500 mt-4">You have no orders yet.</p>
        ) : (
          orderData.map((item, index) => {
            const productData = products.find(product => product._id === item._id);

            if (!productData) {
              return null; // Handle case where the product is not found
            }

            return (
              <div
                key={index}
                className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div className="flex items-start gap-6 text-sm">
                  <img className="w-16 sm:w-20" src={productData.image[0]} alt={productData.name} />
                  <div>
                    <p className="sm:text-base font-medium">{productData.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
                      <p className="text-lg">{currency}</p>
                      <p>{productData.price}</p>
                      <p>Quantity: {item.quantity}</p>
                      <p>Size: {item.size}</p>
                    </div>
                    <p className="mt-2">
                      Date: <span className="text-gray-400">25, 3</span>
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2 flex justify-between">
                  <div className="flex items-center gap-2">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <p className="text-sm md:text-base">Ready to ship</p>
                  </div>
                  <button className="border px-4 py-2 text-sm font-medium rounded-sm">TRACK ORDER</button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Orders;

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';

const CartTotal = () => {
    const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
    const cartAmount = getCartAmount();
     // Determine if we should include the shipping fee
    const total = cartAmount > 0 ? cartAmount + delivery_fee : cartAmount;

    return (
        <div className="w-full">
            <div className="text-2xl">
                <Title text1={'CART'} text2={'TOTALS'} />
            </div>

            <div className="flex flex-col gap-2 mt-2 text-sm">
                <div className="flex justify-between">
                    <p>Subtotal</p>
                    <p>{currency}{cartAmount.toFixed(2)}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <p>Shipping Fee</p>
                    <p>{cartAmount > 0 ? `${currency}${delivery_fee.toFixed(2)}` : `${currency}0.00`}</p>
                </div>
                <hr />
                <div className="flex justify-between">
                    <b>Total</b>
                    <b>{currency}{total.toFixed(2)}</b>
                </div>
            </div>
        </div>
    );
};

export default CartTotal;

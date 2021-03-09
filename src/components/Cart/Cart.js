import React from 'react';

const Cart = (props) => {
    const cart = props.cart
   // const totalPrice = cart.reduce((total, pd) => total + pd.price, 0)
   let totalPrice = 0
   for (let index = 0; index < cart.length; index++) {
       const product = cart[index];
       totalPrice = totalPrice + product.price
   }

   let shipping = 0

   if (totalPrice > 35){
    shipping = 0

    }
   else if (totalPrice > 15){
       shipping = 6
   }
   else if (totalPrice > 0){
       shipping = 5
   }

   const tax = (totalPrice / 10).toFixed(2)
   const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2)
    return (
        <div className="order-summery">
            <h4>Order Summery</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: {totalPrice}</p>
            <p><small>Tax: {tax}</small></p>
            <p><small>Shipping cost: {shipping}</small></p>
            <p>Total Price: {grandTotal}</p>
        </div>
    );
};

export default Cart;
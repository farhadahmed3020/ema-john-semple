import React from 'react';

const Cart = (props) => {
    const cart =props.cart;
    console.log(cart);
    const total = cart.reduce((total,prd) => total +prd .price, 0);

     let shipping = 0;
     if (total>35) {
         shipping =0
     }
    else if (total >15) {
        shipping =4.99;
    }
    else if (total >0) {
        shipping = 12.99
    }
     const formatNumber = num =>{
         const precision = num.toFixed(3);
         return Number(precision);
     }
    const tax = (total/10);
    const grandTotal=(total + shipping + tax);
     

    return (
        // <div className="card bg-light ">
        //    <h4 className="text-danger">Order Summary</h4> 
        //    <p>Items Ordered:{cart.length} </p>
        //    <p> Product Price:{formatNumber(total)}</p>
        //    <p><small> Shipping Cost:{formatNumber(shipping)}</small></p>
        //    <p><small>Tax + VAT : {formatNumber(tax)}</small></p>
        //    <p>Total Price :{formatNumber(grandTotal)}</p>
        //    <button type="button" class="btn btn-outline-danger">Shopping Now</button>
           
        // </div>
        <div class="card">
        <h4 class="card-header">Order Summary</h4>
        <div class="card-body">
           <p>Items Ordered:{cart.length} </p>
           <p> Product Price:{formatNumber(total)}</p>
           <p><small> Shipping Cost:{formatNumber(shipping)}</small></p>
           <p><small>Tax + VAT : {formatNumber(tax)}</small></p>
           <p>Total Price :{formatNumber(grandTotal)}</p>
           <a href="#"  className="btn btn-danger">Shopping Now</a>
        </div>
      </div>
    );
};

export default Cart;
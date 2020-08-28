import React from 'react';



import './Products.css';
const Product = (props) => {
    //console.log(props);
    const{img,name,seller,price,stock}=props.product;
    return (
        <div className="product">
           <div>
               <img src= {img} alt=""/>
           </div>
           <div className="product-name">
                <h4>{name}</h4>
                <br/>
               <p><small>by:{seller}</small></p>
               <p>${price}</p>
               <br/>
              <p><small>Only {stock} left in -Order soon</small></p>
              <button 
              className="add-button"
              onClick ={() =>props.handleAddProduct(props.product)}
              > add to cart</button>
               
           </div>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = ({products}) => {
  
  
  return (
    <div className='product-main'>
      <h1>Product Dashboard</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} width="100" />
            <h3>{product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Category: {product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
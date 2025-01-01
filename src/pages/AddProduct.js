import React, { useState,useEffect } from 'react';

const AddProduct = ({setFormData,formData}) => {
  const [newData,setNewData]=useState({
    title: '',
    image: '',
    price: '',
    category: '',
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewData({ ...newData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prevData)=>[...prevData,newData])
  };
  useEffect(()=>{
    console.log(formData)
  },[formData])

  return (
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Product Name:
          <input type="text" name="title" value={newData.title} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="url" name="image" value={newData.image} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={newData.price} onChange={handleChange} required />
        </label>
        <label>
          Category:
          <input type="text" name="category" value={newData.category} onChange={handleChange} required />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
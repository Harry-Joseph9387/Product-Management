import React from 'react'
import Navbar from '../src/components/Navbar'
import Home from '../src/pages/Home'
import AddProduct from './pages/AddProduct'
import {Routes,Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from 'axios';

const App = () => {
  const [formData, setFormData] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if(products){
      console.log(products)
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));}
  }, []);
  useEffect(()=>{
    if (formData.length > 0) { // Check if formData is not empty
      setProducts((prevProducts) => [...prevProducts, ...formData]); // Merge arrays
    }

  },[formData])
  return (
    <div className="main">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}/>
        <Route path='/add-product' element={<AddProduct setFormData={setFormData} formData={formData}/>}/>
      </Routes>
    </div>
  )
}

export default App
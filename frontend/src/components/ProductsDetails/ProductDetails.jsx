import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function ProductDetails() {
  const {id} =  useParams();
  const [product,SetProduct] =  useState({})
  useEffect(()=>{
fetch(`https://fakestoreapi.com/products/${id}`)
  .then(response => response.json())
  .then(data => SetProduct(data));
  },[])
  
    console.log(product);
  
  return (

    <div>
       ProductDetails
       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia rerum in cupiditate nemo optio ullam similique modi magni fuga.</h1>
       <h3>{product.title}</h3>
         <h3>{product.price}</h3>
           <h3>{product.description}</h3>
           
    </div>

  )
}

export default ProductDetails

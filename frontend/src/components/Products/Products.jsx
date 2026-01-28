import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import '../Products/styles.css'

function Products() {
    const[product,SetProduct] = useState([]);
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => SetProduct(data));
    })
  return (
    <div>
      <div className='main'>
       {product.map((product) => {
            return (
                <div key={product.id}>
                    <h1>{product.title}</h1>
                    <h2>{product.price}</h2>
                    <Link to={`/products/${product.id}`}>View Details</Link>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Products
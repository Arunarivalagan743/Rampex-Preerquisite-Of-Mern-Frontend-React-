import React from 'react'
import { Link } from 'react-router'

function Products() {
    const products = [
        {
            id  : "1",
            name : "Laptop",
            price : "20000"
        },
        {
            id  : "2",
            name : "Mouse",
            price : "30000"
        },
        {
            id  : "3",
            name : "KeyBord",
            price : "30000"
        }
    ]
  return (
    <div>
      <div>
       {products.map((product) => {
            return (
                <div key={product.id}>
                    <h1>{product.name}</h1>
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
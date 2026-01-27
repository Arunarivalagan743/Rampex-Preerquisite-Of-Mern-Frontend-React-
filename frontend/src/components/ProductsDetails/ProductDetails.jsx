import React from 'react'
import { useParams } from 'react-router'

function ProductDetails() {
    const products = [
        {
            id  : 1,
            name : "Laptop",
            price : "20000",
            description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia rerum in cupiditate nemo optio ullam similique modi magni fuga."
        },
        {
            id  : 2,
            name : "Mouse",
            price : "30000",
              description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia rerum in cupiditate nemo optio ullam similique modi magni fuga."
        },
        {
            id  : 3,
            name : "KeyBord",
            price : "30000",
              description :"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia rerum in cupiditate nemo optio ullam similique modi magni fuga."
        }
    ]
    const {id} =  useParams();
    const product  =  products.find((p)=>p.id  === (Number)(id));
    console.log(product);
  
  return (

    <div>
       ProductDetails
       <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quia rerum in cupiditate nemo optio ullam similique modi magni fuga.</h1>
       <h3>{product.name}</h3>
         <h3>{product.price}</h3>
           <h3>{product.description}</h3>
    </div>

  )
}

export default ProductDetails

import React from 'react'
import ProductItem from './ProductItem'
import './Products.css'

function Products(props) {
  const products_list = props.products_list;
  return (
    <div className="products">
      
         {products_list.map((x) => {
           return (<ProductItem iUrl={x.imageUrl}
                        title = {x.title}
                         price = {x.price}
                         removeFromCart = {null}
                         />)
                         })}

    </div>
  )
}

export default Products
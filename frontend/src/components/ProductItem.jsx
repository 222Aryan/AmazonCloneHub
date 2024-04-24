import React from 'react'

function ProductItem(props)  {
  const title = props.title;
  const imageUrl = props.iUrl;
  const price = props.price;
  const removeFromCart = props.removeFromCart;
  
  return (
        <div className="product_item">
            <img src={imageUrl} alt="" />
            <h1>{title}</h1>
            <p>{price}</p>
            <button onClick = {() => {
              console.log(title)
              removeFromCart(title);
              }}>delete</button>
        </div>
        )
}

export default ProductItem
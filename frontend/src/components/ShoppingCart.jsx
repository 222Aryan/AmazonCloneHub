import React,{useState,useEffect} from 'react'
import ProductItem from './ProductItem'
import axios from 'axios'
const ShoppingCart = () => {
    /** here is where we define js vars and functions **/
    let [products_list,setProductsList] = useState([])
    const addToCart = (item) => {
      products_list.add(item)
    }
// {/*useEffect( () => {
//   axios.get('http://localhost:8000/api/v1/products')
//   .then((res) => {
//     setProductsList(res.data);
//   }
// },[])*/}
   
    function removeFromCart(title) {
     //alert(title);
     console.log(products_list);
      setProductsList(products_list.filter((item) => item.title !== title));
    }
    
    return (
    <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        {products_list.map((x) => {
           return (<ProductItem iUrl={x.imageUrl}
                        title = {x.title}
                         price = {x.price}
                         removeFromCart = {removeFromCart}
                         />)
                         })}
    </div>
  )
}

export default ShoppingCart
import React,{useState,useEffect} from 'react'
import Products from './Products';
import axios from 'axios';
const Home = () => {
  let [counter,setCounter] = useState(0);
  const [products_list,setProductsList] = useState([]);
  // useEffect(
  axios.get('http://127.0.0.1:8000/api/v1/products')
       .then( (res) => {setProductsList(res.data);
                       console.log(products_list);} );
  return (
    <div>
      <p>{counter}</p>
      <button onClick = {() => { 
       setCounter(counter + 1);
        console.log(counter)}}> increment the counter</button>

      <Products products_list={[products_list]}/>

    </div>
  )
}

export default Home
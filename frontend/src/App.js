 import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Orders from './components/Orders';
import CustomerCare from './components/CustomerCare';
import ShoppingCart from './components/ShoppingCart';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { useState } from 'react';

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>               
           <Routes>        
              <Route path ='/' element ={isLoggedIn ? <Home/> : <SignIn/>} />
              <Route path ='/signUp' element ={<SignUp />} />                             
              <Route path ='/orders' element ={<Orders/>} />  
              <Route path ='/cart' element ={<ShoppingCart/>} /> 
              <Route path ='/customercare' element ={<CustomerCare/>} />  
            </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
 
import React, { useState } from 'react';
import './SignIn.css';
import axios from 'axios';

function SignIn(){
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')

    function sign_in_handler(e){
        e.preventDefault()
        //backend Call to route
        console.log(username,password)
        const url = 'http://127.0.0.1:8000/api/v1/signin';
        const payload =  {
            username: username,
            password: password

        };
       
        axios.post(url, payload)
            .then(function (response) {
                console.log(response);
            })

            .catch(function (error){
                console.error(error);
            });
    }
    return (
        <div className = 'sign_in'>
            <h2>Sign In</h2>
            <form action="">
            <div id = "sign_in_form">
                <label htmlFor = "username">Email</label>
                <input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/>

                <label htmlFor = "username">password</label>
                <input type="password" id="passsword" onChange={(e) => setPassword(e.target.value)}/>

                <button onClick={(e)=> sign_in_handler(e)}>sign in</button>
            </div>
            </form>
        </div>
    )
}
export default SignIn;
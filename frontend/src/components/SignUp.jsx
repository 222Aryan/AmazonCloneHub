import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';

function SignUp(){
    const [username,setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')


    function sign_up_handler(e){
        try{
        e.preventDefault()
        //backend Call to route
        console.log(username,password)
        if (password !== confirmPassword){
            throw Error("password and confirm password do not match")
        }
        setErrorMessage('');
        const url = 'http://127.0.0.1:8000/api/v1/signup';
        const payload =  {
            username: username,
            password: password

        };
       
        axios.post(url, payload)
            .then(function (response) {
                console.log(response);
                if (response.status === 200){

                }
            })

            .catch(function (error){
                console.error(error);
            });
        }
        catch(e){
            console.log(e.message)
        }
    }
    return (
        <div className = 'sign_up'>
            <h2>Sign In</h2>
            <form action="">
            <div id = "sign_up_form">
                <label htmlFor = "username">Email</label>
                <input type="text" id="username" onChange={(e) => setUserName(e.target.value)}/>

                <label htmlFor = "password">Password</label>
                <input type="password" id="passsword" onChange={(e) => setPassword(e.target.value)}/>

                <label htmlFor = "confirm_password">Confirm Password</label>
                <input type="password" id="confirm_passsword" onChange={(e) => setConfirmPassword(e.target.value)}/>

                <button onClick={(e)=> sign_up_handler(e)}>sign up</button>
            </div>
            </form>
        </div>
    )
}
export default SignUp;
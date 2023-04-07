import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(()=>{
        const token = localStorage.getItem("token");
        axios.get("http://localhost:5000/profile",{
            headers:{
                Authorization:token
            }
        })
        .then((res)=>{
            navigate("/profile");
        })
        .catch((erros)=>{
            navigate("/login");
        })

    },[]);

const handleLogin = ()=>{
   axios.post("http://localhost:5000/login",{username, password})
   .then((user)=>{
    console.log(user);
    localStorage.setItem("token", user.data.token);
    console.log("user is register");
    navigate("/profile");
   })
   .catch((error)=>{
    console.log(error);
    navigate("/login")
   })
}

  return (
    <div>
        <h2>Login page</h2>
        <input 
        type="text"
        placeholder='username'
        value={ username }
        onChange={(e) =>{
            setUsername(e.target.value);
        }}
        required />
        <input 
        type="password"
        placeholder='Password'
        value={ password }
        onChange={(e) =>{
            setPassword(e.target.value);
        }}
        required />
        <button type="submit" onClick={ handleLogin }>Login</button>
    </div>
  )
}

export default Login
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';


const Register = () => {
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
            navigate("/register");
        })

    },[]);

const handleRegister = ()=>{
   axios.post("http://localhost:5000/register",{username, password})
   .then(()=>{
    console.log("user is register");
    navigate("/login");
   })
   .catch((error)=>{
    console.log(error);
    navigate("/register")
   })
}

  return (
    <div>
        <h2>Register page</h2>
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
        <button type="submit" onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
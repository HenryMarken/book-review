//third party imports
import React, { useState } from "react";
import { router } from 'next/router'

//local imports
import NavBar from "../components/NavBar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formData = {
    email,
    password
  }

  const loginSubmitHandler = async event => {
    event.preventDefault();

    await fetch('http://localhost:5000/api/users/login', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      router.push('/')
    })
    .catch((err) => {
      console.log('Error:', err)
    })

    
     
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="h-screen bg-white text-black font-playfair text-center flex flex-col items-center py-10 space-y-4">
        <p className="block flex">Welcome Back!</p>
        <form className="space-y-4" onSubmit={loginSubmitHandler}>
          <div>
            <label className="px-5">Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border active:bg-gray-400"
            />
          </div>
          <div>
            <label className="px-5">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border active:bg-gray-400"
            />
          </div>
          <button
            className="border border-black rounded-lg w-1/2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Login;

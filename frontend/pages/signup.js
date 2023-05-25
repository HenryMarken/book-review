//third party imports
import React, { useState } from "react";
import { useRouter }  from 'next/router';

//local imports
import NavBar from "../components/NavBar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  

  const signupSubmitHandler = async event => {
    event.preventDefault();

    const formData = {
      email,
      name,
      password
    };
    

    await fetch('http://localhost:5000/api/users/signup', {
      method:'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
    .catch((err) => {
      console.log('Error:', err)
    })

    router.push('/')
     
  }

  return (
    <React.Fragment>
      <NavBar />
      <div className="h-screen bg-white text-black font-playfair text-center flex flex-col items-center py-10 space-y-4">
        <p className="block flex">Join the Betweeen the Line!</p>
        <form className="space-y-4" onSubmit={signupSubmitHandler}>
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
            <label className="px-5">Username:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            Signup
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Signup;

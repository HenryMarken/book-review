//third party imports
import React, { useState } from "react";

//local imports
import NavBar from "../components/NavBar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <React.Fragment>
      <NavBar />
      <div className="h-screen bg-white text-black font-playfair text-center flex flex-col items-center py-10 space-y-4">
        <p className="block flex">Join the Betweeen the Line!</p>
        <form className="space-y-4">
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

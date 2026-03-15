import { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Create Account
        </h2>

        <input
          className="border w-full p-2 rounded mb-4"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="border w-full p-2 rounded mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="border w-full p-2 rounded mb-4"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;

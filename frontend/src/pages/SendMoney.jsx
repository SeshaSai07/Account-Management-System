import { useState } from "react";
import Navbar from "../components/Navbar";

function SendMoney() {

  const [receiver,setReceiver] = useState("");
  const [amount,setAmount] = useState("");

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex justify-center mt-10">

        <div className="bg-white shadow-lg rounded-lg p-8 w-96">

          <h2 className="text-xl font-semibold mb-6">
            Send Money
          </h2>

          <input
            className="border w-full p-2 rounded mb-4"
            placeholder="Receiver ID"
            onChange={(e)=>setReceiver(e.target.value)}
          />

          <input
            className="border w-full p-2 rounded mb-4"
            placeholder="Amount"
            onChange={(e)=>setAmount(e.target.value)}
          />

          <button className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">
            Send
          </button>

        </div>

      </div>

    </div>
  );
}

export default SendMoney;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SendMoney from "./pages/SendMoney.jsx";
import Statement from "./pages/Statement.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/send" element={<SendMoney />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

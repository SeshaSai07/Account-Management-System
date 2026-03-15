import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-indigo-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <h1 className="text-lg font-semibold">Account Manager</h1>

      <div className="space-x-6">
        <Link to="/dashboard" className="hover:text-gray-200">
          Dashboard
        </Link>

        <Link to="/send" className="hover:text-gray-200">
          Send
        </Link>

        <Link to="/statement" className="hover:text-gray-200">
          Statement
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

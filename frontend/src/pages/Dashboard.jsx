import Navbar from "../components/Navbar";

function Dashboard() {

  return (
    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="p-8">

        <div className="bg-white p-6 rounded-lg shadow w-72">

          <h2 className="text-lg font-semibold mb-2">
            Account Balance
          </h2>

          <p className="text-3xl font-bold text-indigo-600">
            ₹10,000
          </p>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;
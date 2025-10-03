import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-light flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden md:flex flex-col p-6 rounded-tr-3xl rounded-br-3xl">
        <div className="text-2xl font-extrabold text-primary mb-10">Vet Clinic</div>
        <nav className="flex flex-col gap-3 text-dark font-medium">
          {["Dashboard", "Appointments", "Patients", "Staff", "Settings"].map(
            (item, idx) => (
              <a
                key={idx}
                href="#"
                className={`px-3 py-2 rounded-lg transition ${
                  item === "Dashboard"
                    ? "bg-primary text-white shadow-md"
                    : "hover:bg-gray-100"
                }`}
              >
                {item}
              </a>
            )
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          {/* Search */}
          <div className="flex items-center gap-3 bg-gray-100 px-3 py-2 rounded-lg w-72">
            <span className="text-gray-400">🔍</span>
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>

          {/* Right side */}
          <div className="flex items-center gap-6">
            <span className="cursor-pointer hover:text-primary transition">
              🔔
            </span>
            <div className="flex items-center gap-3">
              <span className="text-gray-700 font-medium">Dr. Smith</span>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-9 h-9 rounded-full border-2 border-primary"
              />
            </div>
          </div>
        </header>

       {/* Stats Overview */}
        <section className="p-8 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[ 
            { label: "Appointments Today", value: "12", color: "bg-primary" },
            { label: "Patients", value: "128", color: "bg-secondary" },
            { label: "Revenue", value: "$1,240", color: "bg-accent" },
            { label: "Staff", value: "8", color: "bg-red-500" },
        ].map((stat, idx) => (
            <div
            key={idx}
            className="bg-white rounded-2xl shadow-2xl drop-shadow-lg border border-gray-200 hover:shadow-3xl hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-start border-t-4"
            style={{ borderColor: stat.color }}
            >
            <span className="text-sm text-gray-500">{stat.label}</span>
            <span className="text-2xl font-bold text-dark mt-2">{stat.value}</span>
            </div>
        ))}
        </section>

        {/* Widgets */}
        <main className="px-8 pb-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white rounded-2xl shadow-2xl drop-shadow-lg border border-gray-200 hover:shadow-3xl hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-dark mb-4">Today's Appointments</h2>
            <ul className="text-gray-600 text-sm flex-1 space-y-2">
            <li>09:00 - Bella (Dog) - Vaccination</li>
            <li>10:30 - Max (Cat) - Checkup</li>
            <li>13:00 - Luna (Dog) - Surgery</li>
            </ul>
            <button className="mt-6 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition">
            View All
            </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl drop-shadow-lg border border-gray-200 hover:shadow-3xl hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-dark mb-4">Patients</h2>
            <div className="text-4xl font-extrabold text-primary mb-2">128</div>
            <div className="text-gray-500 text-sm">Total Registered</div>
            <button className="mt-6 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition">
            Add Patient
            </button>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl drop-shadow-lg border border-gray-200 hover:shadow-3xl hover:drop-shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col">
            <h2 className="text-lg font-semibold text-dark mb-4">Quick Actions</h2>
            <button className="mb-3 bg-primary text-white py-2 rounded-lg hover:bg-secondary transition">
            New Appointment
            </button>
            <button className="mb-3 bg-accent text-white py-2 rounded-lg hover:opacity-90 transition">
            Add Staff
            </button>
            <button className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition">
            Emergency
            </button>
        </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

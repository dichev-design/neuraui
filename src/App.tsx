import React from "react";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      </main>
    </div>
  );
}

export default App;
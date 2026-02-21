import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 flex">

      {/* Sidebar (hidden on mobile) */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Mobile Top Bar */}
        <div className="md:hidden bg-zinc-950 text-white p-4 text-lg font-semibold">
          NeuraUI
        </div>

        <main className="flex-1 p-4 md:p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
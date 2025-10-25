import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />
      <main className="flex-items bg-gray-50">
        <Outlet/>
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

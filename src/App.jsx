import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotras from "./pages/Nosotras";
import Valores from "./pages/Valores";
import Catalogo from "./pages/Catalogo";
import Testimonios from "./pages/Testimonios";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />
      <main className="p-8">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/nosotras" element={<Nosotras />} />
          <Route path="/valores" element={<Valores />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/testimonios" element={<Testimonios />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

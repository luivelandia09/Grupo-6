import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🩺 Farmaven
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-green-200 transition">
            Inicio
          </Link>
          <Link to="/nosotras" className="hover:text-green-200 transition">
            Nosotras
          </Link>
          <Link to="/valores" className="hover:text-green-200 transition">
            Valores
          </Link>
          <Link to="/catalogo" className="hover:text-green-200 transition">
            Catálogo
          </Link>
          <Link to="/testimonios" className="hover:text-green-200 transition">
            Testimonios
          </Link>
        </div>
      </div>
    </nav>
  );
}

<<<<<<< HEAD
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
=======
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Nosotras from "./pages/Nosotras";
import Valores from "./pages/Valores";
import Catalogo from "./pages/Catalogo";
import Testimonios from "./pages/Testimonios";
import "./assets/css/style.css";
import "./assets/css/inicio.css";
import "./assets/css/valores.css";
import "./assets/css/nosotras.css";

export default function App() {
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
>>>>>>> 85a4d76977a7739edf258aca39625a02a6a0488b

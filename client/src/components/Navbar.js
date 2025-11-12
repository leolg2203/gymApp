import { useState } from "react";

export default function Navbar({ onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold text-blue-400">Mi gimnasio</h1>

      <div className="relative">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 transition"
        >
          <span>Perfil</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-700 rounded shadow-lg">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-600">
              Mi perfil
            </button>
            <button
              onClick={onLogout}
              className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-600"
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

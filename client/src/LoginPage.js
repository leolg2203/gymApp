import { useState } from "react";

export default function LoginPage({ onLoginSuccess }) {
  const [mode, setMode] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const API_URL = "http://localhost:4000/api/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const endpoint =
      mode === "login"
        ? "login"
        : mode === "register"
        ? "register"
        : "reset-password";

    const body =
      mode === "reset"
        ? { email, newPassword }
        : { email, password };

    try {
      const res = await fetch(`${API_URL}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      setMessage(data.message || JSON.stringify(data));

      if (data.token) {
        localStorage.setItem("token", data.token);
        onLoginSuccess(); // ✅ avisa a App.js que el login fue exitoso
      }
    } catch (err) {
      setMessage("⚠️ Error de conexión con el servidor");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-96 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          {mode === "login"
            ? "Iniciar Sesión"
            : mode === "register"
            ? "Crear Cuenta"
            : "Recuperar Contraseña"}
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded bg-gray-700 focus:outline-none"
            required
          />

          {mode !== "reset" && (
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}

          {mode === "reset" && (
            <input
              type="password"
              placeholder="Nueva contraseña"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="p-3 rounded bg-gray-700 focus:outline-none"
              required
            />
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded font-semibold transition-all"
          >
            {mode === "login"
              ? "Entrar"
              : mode === "register"
              ? "Registrarse"
              : "Restablecer"}
          </button>
        </form>

        <div className="text-sm text-center mt-4 space-y-2">
          {mode === "login" && (
            <>
              <p>
                ¿No tienes cuenta?{" "}
                <button
                  onClick={() => setMode("register")}
                  className="text-blue-400 hover:underline"
                >
                  Regístrate
                </button>
              </p>
              <p>
                ¿Olvidaste tu contraseña?{" "}
                <button
                  onClick={() => setMode("reset")}
                  className="text-blue-400 hover:underline"
                >
                  Recuperar
                </button>
              </p>
            </>
          )}

          {mode !== "login" && (
            <button
              onClick={() => setMode("login")}
              className="text-blue-400 hover:underline"
            >
              Volver al inicio
            </button>
          )}
        </div>

        {message && (
          <p className="mt-4 text-center text-sm text-yellow-300">{message}</p>
        )}
      </div>
    </div>
  );
}

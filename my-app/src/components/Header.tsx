import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";


export default function Header() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(false);

  // sincronização de estado com o tema salvo.

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setDark(theme === "dark");
  }, []);

  function toggleTheme() {
    if (!dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDark(!dark);
  }
  function handleLogout() {
    localStorage.removeItem("auth");
    localStorage.removeItem("userEmail");

    navigate("/");
  }

  return (
    <header className="header">
      <span className="store-name">Minha Loja</span>

      <div className="user">
        <img src="https://i.pravatar.cc/40" alt="Avatar" />
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        {/* 🌙 Dark Mode */}
        <button
          onClick={toggleTheme}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: 18,
          }}
          title="Alternar tema"
        >
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: "#2563eb",
            fontWeight: 500,
          }}
        >
          Sair
        </button>
      </div>
    </header>
  );
}

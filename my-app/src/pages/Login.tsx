import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  function toggleDarkMode() {
    if (dark) {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  }

  function handleLogin() {
    if (!email || !senha) {
      alert("Preencha e-mail e senha");
      return;
    }

    //  login mock (frontend)
    localStorage.setItem("auth", "true");
    localStorage.setItem("userEmail", email);

    navigate("/dashboard");
  }

  return (
    <div className="login-page">
      <div className="login-box">
        {/*Toggle Dark Mode */}

        <button
          onClick={toggleDarkMode}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            float: "right",
          }}
        >
          {dark ? "☀️" : "🌙"}
        </button>
        <h2>Acessar Painel</h2>

        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />

        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}

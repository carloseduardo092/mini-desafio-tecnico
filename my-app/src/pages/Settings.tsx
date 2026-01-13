import Layout from "../components/Layout";

export default function Settings() {
  return (
    <Layout>
      <h1>Configurações de E-mail</h1>

      <div className="settings-box">
        <label>
          E-mail do aplicativo
          <input type="email" placeholder="app@email.com" />
        </label>

        <label>
          Senha do aplicativo
          <input type="password" placeholder="********" />
        </label>

        <button className="btn-primary">
          Salvar configurações
        </button>
      </div>
    </Layout>
  );
}

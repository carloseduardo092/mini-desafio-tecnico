import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <Layout>
      <h1>Dashboard</h1>

      <div className="cards-grid">
        <Card title="E-mails pendentes" value="12" />
        <Card title="Refunds do mês" value="4" />
        <Card title="Pedidos recentes" value="18" />
      </div>
    </Layout>
  );
}

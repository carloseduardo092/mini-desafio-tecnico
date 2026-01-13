import Layout from "../components/Layout";

interface Refund {
  id: number;
  cliente: string;
  pedido: string;
  valor: string;
  status: "pendente" | "aprovado" | "recusado";
}

const refunds: Refund[] = [
  {
    id: 1,
    cliente: "João Silva",
    pedido: "#1234",
    valor: "R$ 120,00",
    status: "pendente",
  },
  {
    id: 2,
    cliente: "Maria Souza",
    pedido: "#1235",
    valor: "R$ 89,90",
    status: "aprovado",
  },
  {
    id: 3,
    cliente: "Carlos Lima",
    pedido: "#1236",
    valor: "R$ 45,00",
    status: "recusado",
  },
];

export default function Refunds() {
  return (
    <Layout>
      <h1>Refunds</h1>

      <div className="refunds-list">
        {refunds.map((refund) => (
          <div key={refund.id} className="refund-item">
            <div>
              <strong>{refund.cliente}</strong>
              <p className="pedido">{refund.pedido}</p>
            </div>

            <span>{refund.valor}</span>

            <span className={`status ${refund.status}`}>
              {refund.status}
            </span>

            <button className="btn-primary">Ver pedido</button>
          </div>
        ))}
      </div>
    </Layout>
  );
}

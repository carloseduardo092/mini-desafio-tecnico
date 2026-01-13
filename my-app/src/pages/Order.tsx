import { useState } from "react";
import Layout from "../components/Layout";
import RefundModal from "../components/RefundModal";

export default function Order() {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <h1>Pedido #1234</h1>

      <div className="order-info">
        <p><strong>Cliente:</strong> John Doe</p>
        <p><strong>Valor:</strong> R$ 299,00</p>
        <p><strong>Status:</strong> Pago</p>
      </div>

      <button className="btn-primary" onClick={() => setOpen(true)}>
        Solicitar refund
      </button>

      {open && <RefundModal onClose={() => setOpen(false)} />}
    </Layout>
  );
}

import { Link } from "react-router-dom";
import "./Sidebar.css";


export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">SaaS</h2>

      <nav className="menu">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/inbox">Inbox</Link>
        <Link to="/orders">Pedidos</Link>
        <Link to="/refunds">Refunds</Link>{" "}
        <Link to="/settings">Configurações</Link>
      </nav>
    </aside>
  );
}

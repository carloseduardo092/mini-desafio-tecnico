import './Card.css';

interface CardProps {
  title: string;
  value: string;
}

export default function Card({ title, value }: CardProps) {
  return (
    <div className="card">
      <span className="card-title">{title}</span>
      <strong className="card-value">{value}</strong>
    </div>
  );
}

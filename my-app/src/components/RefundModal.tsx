import "./RefundModal.css";

interface RefundModalProps {
  onClose: () => void;
}

export default function RefundModal({ onClose }: RefundModalProps) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Solicitar Refund</h2>

        {/*<select>
          <option>Motivo do refund</option>
          <option>Atraso</option>
          <option>Defeito</option>
          <option>Desistência</option>
        </select>*/}
        <p>Motivo do Refund :</p>
        <div className="checkbox-group">
          <label>
            <input type="checkbox" /> Atraso
          </label>
          <label>
            <input type="checkbox" /> Produto com defeito
          </label>
          <label>
            <input type="checkbox" /> Cliente desistiu
          </label>
        </div>

        <textarea placeholder="Observações" />

        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancelar
          </button>
          <button className="btn-primary">Confirmar refund</button>
        </div>
      </div>
    </div>
  );
}

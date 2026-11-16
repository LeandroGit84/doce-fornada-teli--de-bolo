import Icon from './Icon.jsx';
import './QuantityStepper.css';

// Contador com botões − e +. Reutilizado no modal e na sacola.
// `onChange(1)` aumenta e `onChange(-1)` diminui — quem usa decide o que fazer com isso.
function QuantityStepper({ quantity, onChange, min = 1 }) {
  return (
    <div className="stepper">
      {/* type="button" evita que o botão envie um formulário sem querer */}
      <button type="button" aria-label="Diminuir quantidade" disabled={quantity <= min} onClick={() => onChange(-1)}>
        <Icon name="remove" />
      </button>
      <span>{quantity}</span>
      <button type="button" aria-label="Aumentar quantidade" onClick={() => onChange(1)}>
        <Icon name="add" />
      </button>
    </div>
  );
}

export default QuantityStepper;

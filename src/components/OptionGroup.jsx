import { formatCurrency } from '../utils/formatCurrency.js';
import './OptionGroup.css';

// Um bloco de opções (ex.: tamanhos) onde só UMA pode estar marcada.
// Usado três vezes no modal (tamanho, massa, recheio) — sem repetir código.
function OptionGroup({ title, options, selectedId, onSelect }) {
  return (
    <fieldset className="option-group">
      <legend>{title}</legend>
      <div className="option-group__list">
        {options.map((option) => (
          <button
            key={option.id}
            type="button"
            className={option.id === selectedId ? 'option-group__item is-selected' : 'option-group__item'}
            onClick={() => onSelect(option.id)}
          >
            <strong>{option.label}</strong>
            {/* Estes textos só existem nos tamanhos; nos outros grupos simplesmente não aparecem */}
            {option.detail && <small>{option.detail}</small>}
            {option.extra !== undefined && <small>+ {formatCurrency(option.extra)}</small>}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default OptionGroup;

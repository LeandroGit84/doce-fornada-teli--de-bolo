import Icon from './Icon.jsx';
import QuantityStepper from './QuantityStepper.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';
import './CartItem.css';

// Uma linha da sacola: foto, nome, detalhes, quantidade e botão de remover.
function CartItem({ item, onChangeQuantity, onRemove }) {
  return (
    <article className="cart-item card">
      <img src={item.image} alt={item.name} />

      <div className="cart-item__info">
        <h3>{item.name}</h3>
        {/* Itens sem personalização não têm `details` */}
        {item.details && <p>{item.details}</p>}
        <strong>{formatCurrency(item.unitPrice * item.quantity)}</strong>
      </div>

      <div className="cart-item__actions">
        {/* Passamos o `id` do item junto: o contexto sabe QUAL item alterar */}
        <QuantityStepper quantity={item.quantity} onChange={(amount) => onChangeQuantity(item.id, amount)} />
        <button type="button" aria-label={`Remover ${item.name}`} className="cart-item__remove" onClick={() => onRemove(item.id)}>
          <Icon name="delete_outline" />
        </button>
      </div>
    </article>
  );
}

export default CartItem;

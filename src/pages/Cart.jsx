import { useState } from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../components/CartItem.jsx';
import Icon from '../components/Icon.jsx';
import ScheduleForm from '../components/ScheduleForm.jsx';
import { useCart } from '../hooks/useCart.js';
import { STORE } from '../data/store.js';
import { buildWhatsappUrl } from '../utils/buildWhatsappUrl.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import { validateOrder } from '../utils/validateOrder.js';
import './Cart.css';

// Valores iniciais do formulário (definidos fora do componente: não mudam).
const INITIAL_SCHEDULE = { name: '', deliveryType: 'pickup', address: '', date: '', time: '' };

// Página da sacola: revisar itens, agendar e finalizar pelo WhatsApp.
function Cart() {
  const { items, subtotal, changeQuantity, removeItem, clearCart } = useCart();

  // Estado do formulário e dos erros de validação.
  const [schedule, setSchedule] = useState(INITIAL_SCHEDULE);
  const [errors, setErrors] = useState({});

  // Frete só é cobrado na entrega. Total = itens + frete.
  const deliveryFee = schedule.deliveryType === 'delivery' ? STORE.deliveryFee : 0;
  const total = subtotal + deliveryFee;

  // Roda quando o cliente envia o formulário (botão "Finalizar pelo WhatsApp").
  function handleSubmit(event) {
    // Impede o comportamento padrão do navegador (recarregar a página ao enviar).
    event.preventDefault();

    const foundErrors = validateOrder(schedule);
    setErrors(foundErrors);

    // Object.keys(...).length > 0 significa "existe pelo menos um erro": paramos aqui.
    if (Object.keys(foundErrors).length > 0) return;

    // Tudo certo: abre o WhatsApp em nova aba com o pedido montado.
    window.open(buildWhatsappUrl(items, schedule, { total }), '_blank', 'noopener');
  }

  // Retorno antecipado: sacola vazia mostra só um convite para ir ao cardápio.
  if (items.length === 0) {
    return (
      <section className="container section cart__empty">
        <Icon name="shopping_bag" />
        <h1>Sua sacola está vazia</h1>
        <p>Que tal escolher um bolo para a sua próxima comemoração?</p>
        <Link to="/cardapio" className="btn btn--primary">Ver cardápio</Link>
      </section>
    );
  }

  return (
    <form className="container section cart" onSubmit={handleSubmit} noValidate>
      <div className="cart__main">
        <header className="cart__header">
          <h1>Sua sacola de encomendas</h1>
          <button type="button" className="btn" onClick={clearCart}>Esvaziar sacola</button>
        </header>

        <div className="cart__items">
          {items.map((item) => (
            <CartItem key={item.id} item={item} onChangeQuantity={changeQuantity} onRemove={removeItem} />
          ))}
        </div>

        <ScheduleForm schedule={schedule} errors={errors} onChange={setSchedule} />
      </div>

      {/* Resumo do pedido */}
      <aside className="cart__summary card">
        <h2>Resumo</h2>
        <dl>
          <div><dt>Subtotal</dt><dd>{formatCurrency(subtotal)}</dd></div>
          <div><dt>Frete</dt><dd>{deliveryFee === 0 ? 'Grátis' : formatCurrency(deliveryFee)}</dd></div>
          <div className="cart__total"><dt>Total</dt><dd>{formatCurrency(total)}</dd></div>
        </dl>
        <button type="submit" className="btn btn--whatsapp">
          <Icon name="chat" /> Finalizar pelo WhatsApp
        </button>
        <small>Você confirma pagamento e detalhes finais direto com a nossa equipe.</small>
      </aside>
    </form>
  );
}

export default Cart;

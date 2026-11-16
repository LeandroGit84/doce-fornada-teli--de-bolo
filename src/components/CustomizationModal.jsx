import { useEffect, useState } from 'react';

import Icon from './Icon.jsx';
import OptionGroup from './OptionGroup.jsx';
import QuantityStepper from './QuantityStepper.jsx';
import { SIZES, DOUGHS, FILLINGS } from '../data/customization.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import './CustomizationModal.css';

// Janela (modal) para escolher tamanho, massa e recheio antes de adicionar à sacola.
// Props: `product` (o bolo), `onClose` (fechar) e `onConfirm` (entregar o item pronto ao pai).
function CustomizationModal({ product, onClose, onConfirm }) {
  // CONCEITO: Vários estados — um para cada escolha do cliente. Começam com um valor padrão.
  const [sizeId, setSizeId] = useState('m');
  const [doughId, setDoughId] = useState(DOUGHS[0].id);
  const [fillingId, setFillingId] = useState(FILLINGS[0].id);
  const [quantity, setQuantity] = useState(1);

  // CONCEITO: useEffect com limpeza — fecha o modal ao apertar a tecla Esc.
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKeyDown);
    // A função retornada roda quando o modal some: remove o "ouvinte" para não acumular.
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Procura, em cada lista, o objeto escolhido pelo cliente.
  const size = SIZES.find((option) => option.id === sizeId);
  const dough = DOUGHS.find((option) => option.id === doughId);
  const filling = FILLINGS.find((option) => option.id === fillingId);

  // Estado derivado: o preço é calculado a cada escolha, sem useState extra.
  const unitPrice = product.price + size.extra;
  const total = unitPrice * quantity;

  function handleConfirm() {
    // O `id` junta produto + escolhas: o mesmo bolo com as mesmas escolhas soma a quantidade na sacola.
    onConfirm({
      id: `${product.id}-${sizeId}-${doughId}-${fillingId}`,
      name: product.name,
      image: product.image,
      details: `${size.label}, ${dough.label}, ${filling.label}`,
      unitPrice,
      quantity,
    });
  }

  return (
    // Fundo escuro: clicar fora da janela fecha o modal.
    <div className="modal-backdrop" onClick={onClose}>
      {/* stopPropagation impede que um clique DENTRO da janela chegue ao fundo e a feche */}
      <div className="modal" role="dialog" aria-modal="true" aria-label={product.name} onClick={(event) => event.stopPropagation()}>
        <header className="modal__header">
          <span className="eyebrow">Ateliê de personalização</span>
          <button type="button" aria-label="Fechar" className="modal__close" onClick={onClose}>
            <Icon name="close" />
          </button>
        </header>

        <div className="modal__body">
          <div className="modal__product">
            <img src={product.image} alt={product.name} />
            <div>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <strong className="modal__price">{formatCurrency(unitPrice)}</strong>
            </div>
          </div>

          <p className="modal__allergens">
            <Icon name="info" /> Contém glúten, leite e derivados, ovos. Pode conter traços de nozes e castanhas.
          </p>

          <OptionGroup title="1. Escolha o tamanho" options={SIZES} selectedId={sizeId} onSelect={setSizeId} />
          <OptionGroup title="2. Escolha o tipo de massa" options={DOUGHS} selectedId={doughId} onSelect={setDoughId} />
          <OptionGroup title="3. Escolha o recheio" options={FILLINGS} selectedId={fillingId} onSelect={setFillingId} />
        </div>

        <footer className="modal__footer">
          {/* setQuantity recebe o valor atual + a mudança (+1 ou -1) */}
          <QuantityStepper quantity={quantity} onChange={(amount) => setQuantity(quantity + amount)} />
          <button type="button" className="btn btn--primary" onClick={handleConfirm}>
            <Icon name="shopping_bag" /> Adicionar à sacola • {formatCurrency(total)}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default CustomizationModal;

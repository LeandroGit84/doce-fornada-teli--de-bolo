import Icon from './Icon.jsx';
import { formatCurrency } from '../utils/formatCurrency.js';
import './ProductCard.css';

// CONCEITO: Props — `product` e `onAction` chegam do componente PAI.
// POR QUÊ: o card só desenha; quem decide o que o botão faz é a página que o usa.
// Isso permite usar o mesmo card na Home e no Cardápio.
function ProductCard({ product, onAction }) {
  // Desestruturação: tira as propriedades de dentro do objeto para usar com nome curto.
  const { name, description, price, priceLabel, image, badge, customizable, available } = product;

  // O texto e o ícone do botão dependem do tipo de produto.
  const buttonLabel = customizable ? 'Personalizar' : 'Adicionar';
  const buttonIcon = customizable ? 'tune' : 'add';

  return (
    <article className="product-card card">
      <div className="product-card__image">
        {/* alt descreve a imagem para quem usa leitor de tela */}
        <img src={image} alt={name} loading="lazy" />
        {/* Renderização condicional: só mostra o selo se o produto tiver um */}
        {badge && <span className="badge product-card__badge">{badge}</span>}
      </div>

      <div className="product-card__body">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      <div className="product-card__footer">
        <div>
          <small>{priceLabel}</small>
          <strong>{formatCurrency(price)}</strong>
        </div>

        {/* CONCEITO: Eventos — onClick chama a função recebida via props. */}
        <button type="button" className="btn btn--primary" disabled={!available} onClick={() => onAction(product)}>
          {available ? (
            <>
              {buttonLabel} <Icon name={buttonIcon} />
            </>
          ) : (
            'Indisponível'
          )}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;

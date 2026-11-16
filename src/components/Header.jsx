import { useState } from 'react';
// Link troca de página sem recarregar; NavLink também sabe se está "ativo".
import { Link, NavLink } from 'react-router-dom';

import Icon from './Icon.jsx';
import { useCart } from '../hooks/useCart.js';
import { STORE } from '../data/store.js';
import { formatCurrency } from '../utils/formatCurrency.js';
import './Header.css';

// CONCEITO: Dados em lista + .map() — o menu é descrito em dados e desenhado por um laço.
const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/cardapio', label: 'Cardápio' },
  { to: '/sobre-nos', label: 'Sobre nós' },
];

function Header() {
  // CONCEITO: Estado local — controla se o menu do celular está aberto.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Lemos a sacola pelo nosso hook customizado.
  const { totalItems, subtotal } = useCart();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      {/* Faixa de avisos no topo */}
      <div className="header__top">
        ✨ Encomendas com no mínimo 48h de antecedência • Produção artesanal diária • Praia Grande - SP
      </div>

      <div className="container header__bar">
        <Link to="/" className="header__brand" onClick={closeMenu}>
          <strong>{STORE.name}</strong>
          <small>{STORE.tagline}</small>
        </Link>

        {/* CONCEITO: Renderização condicional de classe — "nav--open" só quando o menu está aberto. */}
        <nav className={isMenuOpen ? 'header__nav header__nav--open' : 'header__nav'}>
          {NAV_LINKS.map((link) => (
            // CONCEITO: `key` — identifica cada item da lista para o React atualizá-la direito.
            // NavLink aplica a classe "active" sozinho na página atual.
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/sacola" className="header__cart" onClick={closeMenu}>
          <Icon name="shopping_bag" />
          {/* Mostra a bolinha só se houver itens: `&&` renderiza o lado direito se o esquerdo for verdadeiro */}
          {totalItems > 0 && <span className="header__count">{totalItems}</span>}
          <span className="header__subtotal">{formatCurrency(subtotal)}</span>
        </Link>

        <button
          type="button"
          className="header__menu-button"
          aria-label="Abrir menu de navegação"
          // `!isMenuOpen` inverte o valor: aberto → fechado, fechado → aberto.
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Icon name={isMenuOpen ? 'close' : 'menu'} />
        </button>
      </div>
    </header>
  );
}

export default Header;

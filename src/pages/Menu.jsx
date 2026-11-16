import { useCallback, useState } from 'react';

import CategoryFilter from '../components/CategoryFilter.jsx';
import CustomizationModal from '../components/CustomizationModal.jsx';
import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import Toast from '../components/Toast.jsx';
import { useCart } from '../hooks/useCart.js';
import { CATEGORIES, PRODUCTS } from '../data/products.js';
import './Menu.css';

// Página do cardápio: busca, filtro por categoria, personalização e adição à sacola.
function Menu() {
  const { addItem } = useCart();

  // CONCEITO: Estado — cada informação que muda na tela vira um useState.
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [productToCustomize, setProductToCustomize] = useState(null); // null = modal fechado
  const [toastMessage, setToastMessage] = useState('');

  // CONCEITO: useCallback — mantém a MESMA função entre renderizações.
  // POR QUÊ: o Toast e o Modal usam essas funções dentro de useEffect;
  // se a função mudasse a cada render, o timer do aviso reiniciaria à toa.
  const closeToast = useCallback(() => setToastMessage(''), []);
  const closeModal = useCallback(() => setProductToCustomize(null), []);

  // CONCEITO: Estado derivado — a lista filtrada é CALCULADA a cada render,
  // então não precisa ser guardada em outro useState.
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleProducts = PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === 'todos' || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(normalizedSearch) ||
      product.description.toLowerCase().includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  // Decide o que fazer ao clicar no botão de um card.
  function handleProductAction(product) {
    if (product.customizable) {
      setProductToCustomize(product); // abre o modal
      return;
    }
    // Produto simples: vai direto para a sacola.
    addItem({ id: product.id, name: product.name, image: product.image, details: '', unitPrice: product.price, quantity: 1 });
    setToastMessage('Item adicionado à sacola!');
  }

  // Chamado pelo modal quando o cliente confirma as escolhas.
  function handleConfirmCustomization(item) {
    addItem(item);
    closeModal();
    setToastMessage('Item adicionado à sacola!');
  }

  return (
    <div className="container section">
      <header className="menu__header">
        <span className="badge"><Icon name="bakery_dining" /> Feito à mão &amp; confeitaria fina</span>
        <h1>Nosso Cardápio Artesanal</h1>
        <p>Cada receita é preparada com ingredientes frescos, afeto e memória de família.</p>

        <div className="menu__search field">
          {/* Campo controlado: o valor vem do estado e cada letra atualiza o estado */}
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Buscar por nome, sabor ou ingrediente..."
            aria-label="Buscar no cardápio"
          />
        </div>
      </header>

      <CategoryFilter categories={CATEGORIES} selectedId={selectedCategory} onSelect={setSelectedCategory} />

      {/* Lista vazia? Mostra uma mensagem amigável; senão, a grade de produtos */}
      {visibleProducts.length === 0 ? (
        <p className="menu__empty">Nenhum doce encontrado. Tente outra busca!</p>
      ) : (
        <div className="menu__grid">
          {visibleProducts.map((product) => (
            <ProductCard key={product.id} product={product} onAction={handleProductAction} />
          ))}
        </div>
      )}

      {/* O modal só existe enquanto houver um produto escolhido */}
      {productToCustomize && (
        <CustomizationModal product={productToCustomize} onClose={closeModal} onConfirm={handleConfirmCustomization} />
      )}

      {toastMessage && <Toast message={toastMessage} onClose={closeToast} />}
    </div>
  );
}

export default Menu;

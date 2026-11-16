import { useContext } from 'react';
import { CartContext } from '../context/CartContext.jsx';

// CONCEITO: Hook customizado — função que começa com "use" e reaproveita lógica de hooks.
// POR QUÊ: os componentes escrevem só `useCart()` em vez de `useContext(CartContext)`,
// e ganham um aviso claro se esquecerem do CartProvider.
export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error('useCart precisa ser usado dentro de <CartProvider>.');
  }

  return context;
}

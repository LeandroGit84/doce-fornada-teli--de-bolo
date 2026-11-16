// CONCEITO: Hooks — `createContext` e `useState` são funções especiais do React.
import { createContext, useState } from 'react';

// CONCEITO: Context — um "canal" que entrega dados a qualquer componente da árvore.
// POR QUÊ: o cabeçalho, o cardápio e a sacola precisam da MESMA lista de itens.
export const CartContext = createContext(null);

// CartProvider guarda o estado da sacola e o distribui para os filhos (`children`).
export function CartProvider({ children }) {
  // CONCEITO: Estado — `items` é o valor atual; `setItems` o troca e re-renderiza a tela.
  const [items, setItems] = useState([]);

  // Adiciona um item. Se já existe um igual (mesmo `id`), soma a quantidade.
  function addItem(newItem) {
    // Usar a função `current => ...` garante que partimos do valor mais recente do estado.
    setItems((current) => {
      const existing = current.find((item) => item.id === newItem.id);

      if (existing) {
        // CONCEITO: Imutabilidade — criamos uma NOVA lista em vez de alterar a antiga.
        return current.map((item) =>
          item.id === newItem.id ? { ...item, quantity: item.quantity + newItem.quantity } : item,
        );
      }
      return [...current, newItem];
    });
  }

  // Soma (+1) ou subtrai (-1) a quantidade. Se chegar a zero, o item sai da sacola.
  function changeQuantity(id, amount) {
    setItems((current) =>
      current
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity + amount } : item))
        .filter((item) => item.quantity > 0),
    );
  }

  // Remove um item pelo id (mantém só os que são diferentes).
  function removeItem(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  // Esvazia a sacola.
  function clearCart() {
    setItems([]);
  }

  // CONCEITO: Estado derivado — calculamos a partir de `items`, sem criar outro useState.
  // POR QUÊ: assim os números nunca ficam "fora de sincronia" com a lista.
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0);

  // Tudo que os outros componentes podem usar.
  const value = { items, totalItems, subtotal, addItem, changeQuantity, removeItem, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

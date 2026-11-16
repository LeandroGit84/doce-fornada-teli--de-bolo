// CONCEITO: Módulos ES — `import` traz código de outros arquivos.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// CONCEITO: React Router — BrowserRouter habilita várias "páginas" sem recarregar o site.
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
// Estilos globais (cores, fontes, reset). Importar CSS no JS é um recurso do Vite.
import './styles/global.css';

// CONCEITO: Renderização — `createRoot` liga o React ao <div id="root"> do index.html.
createRoot(document.getElementById('root')).render(
  // CONCEITO: StrictMode — ajuda a achar erros em desenvolvimento (não aparece na tela).
  <StrictMode>
    {/* O Router precisa envolver tudo que usa rotas ou links */}
    <BrowserRouter>
      {/* CONCEITO: Context — CartProvider deixa a sacola disponível para TODOS os componentes,
          sem precisar passar props de pai para filho várias vezes. */}
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </StrictMode>,
);

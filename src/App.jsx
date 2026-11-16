// CONCEITO: Rotas — cada <Route> liga um endereço (URL) a um componente de página.
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Menu from './pages/Menu.jsx';
import About from './pages/About.jsx';
import Cart from './pages/Cart.jsx';
import NotFound from './pages/NotFound.jsx';

// CONCEITO: Componente de função — uma função que devolve JSX (a "tela").
// POR QUÊ: App só decide QUAL página mostrar; cada página cuida do próprio conteúdo.
function App() {
  return (
    <Routes>
      {/* Layout (cabeçalho + rodapé) envolve todas as páginas filhas */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/sobre-nos" element={<About />} />
        <Route path="/sacola" element={<Cart />} />
        {/* "*" captura qualquer endereço que não existe */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

// `export default` permite importar este componente em outro arquivo.
export default App;

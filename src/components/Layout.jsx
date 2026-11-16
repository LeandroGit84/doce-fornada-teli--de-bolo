import { useEffect } from 'react';
// Outlet = "buraco" onde a página da rota atual é desenhada.
// useLocation = informa o endereço atual.
import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';

function Layout() {
  const { pathname } = useLocation();

  // CONCEITO: useEffect — executa código DEPOIS da tela ser desenhada.
  // POR QUÊ: ao trocar de página, voltamos ao topo (o navegador não faz isso sozinho em SPAs).
  // O array [pathname] diz: "rode de novo somente quando o endereço mudar".
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      {/* Aqui entra Home, Menu, About, Cart... conforme a URL */}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;

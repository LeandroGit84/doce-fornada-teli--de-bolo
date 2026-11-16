import { Link } from 'react-router-dom';

import Icon from './Icon.jsx';
import { STORE } from '../data/store.js';
import './Footer.css';

// Componente "de apresentação": só mostra informação, não tem estado.
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <h3>{STORE.name}</h3>
          <p className="footer__quote">“Feito à mão, com cheiro de casa de vó.”</p>
        </div>

        <div>
          <h4>Ateliê &amp; Visitas</h4>
          <p><Icon name="location_on" /> {STORE.address}</p>
          <p><Icon name="schedule" /> {STORE.openingHours}</p>
        </div>

        <div>
          <h4>Fale Conosco</h4>
          {/* target="_blank" abre em nova aba; rel="noopener noreferrer" é uma proteção de segurança */}
          <a className="btn btn--whatsapp" href={`https://wa.me/${STORE.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" /> {STORE.phoneLabel}
          </a>
          <p>{STORE.instagram}</p>
        </div>

        <div>
          <h4>Navegação</h4>
          <ul>
            <li><Link to="/">Início</Link></li>
            <li><Link to="/cardapio">Cardápio</Link></li>
            <li><Link to="/sobre-nos">Sobre nós</Link></li>
            <li><Link to="/sacola">Minha sacola</Link></li>
          </ul>
        </div>
      </div>

      <p className="footer__copy">
        © 2026 {STORE.name} – {STORE.tagline}. Pedidos sob agendamento e finalização via WhatsApp.
      </p>
    </footer>
  );
}

export default Footer;

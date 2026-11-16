// useNavigate permite trocar de página por código (ex.: ao clicar em um botão).
import { Link, useNavigate } from 'react-router-dom';

import Icon from '../components/Icon.jsx';
import ProductCard from '../components/ProductCard.jsx';
import IMAGES from '../data/images.js';
import { PRODUCTS } from '../data/products.js';
import { STORE } from '../data/store.js';
import './Home.css';

// Os 3 passos da seção "Como encomendar" — descritos em dados e desenhados com .map().
const STEPS = [
  { icon: 'cake', title: '1. Escolha seu bolo', text: 'Explore o cardápio, escolha o tamanho, a massa e o recheio preferidos.' },
  { icon: 'calendar_month', title: '2. Agende data e horário', text: 'Retire no ateliê ou receba em casa, com no mínimo 48h de antecedência.' },
  { icon: 'chat', title: '3. Confirme pelo WhatsApp', text: 'Sua sacola vira uma mensagem pronta para alinharmos os detalhes finais.' },
];

function Home() {
  const navigate = useNavigate();
  // Pega só os produtos marcados como "featured" (queridinhos).
  const featuredProducts = PRODUCTS.filter((product) => product.featured);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="hero container">
        <div className="hero__text">
          <span className="badge"><Icon name="eco" /> Ateliê artesanal em Praia Grande</span>
          <h1>
            Bolos feitos à mão, com cheiro e sabor de <em>casa de vó.</em>
          </h1>
          <p>
            Cada bolo é assado sob encomenda, com ingredientes selecionados. Agende com facilidade e
            receba quentinho ou retire em nosso ateliê.
          </p>
          <span className="badge badge--rose"><Icon name="schedule" /> Pedidos com no mínimo 48h de antecedência</span>
          <div className="hero__actions">
            <Link to="/cardapio" className="btn btn--primary">Ver cardápio completo <Icon name="arrow_forward" /></Link>
            <Link to="/sobre-nos" className="btn">Conheça nossa história</Link>
          </div>
        </div>
        <img className="hero__image" src={IMAGES.hero} alt="Bolo artesanal de morango com chocolate belga" />
      </section>

      {/* ===== COMO FUNCIONA ===== */}
      <section className="section container">
        <div className="section-header">
          <span className="eyebrow">Passo a passo descomplicado</span>
          <h2>Como encomendar sua fornada</h2>
        </div>
        <div className="home__steps">
          {STEPS.map((step) => (
            <article key={step.title} className="card home__step">
              <Icon name={step.icon} />
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== QUERIDINHOS ===== */}
      <section className="section container">
        <div className="section-header">
          <span className="eyebrow">Mais desejados</span>
          <h2>Queridinhos do nosso ateliê</h2>
          <p>Receitas consagradas que aquecem qualquer reunião de família.</p>
        </div>
        <div className="home__products">
          {featuredProducts.map((product) => (
            // Reaproveitamos o ProductCard; aqui o botão leva ao cardápio completo.
            <ProductCard key={product.id} product={product} onAction={() => navigate('/cardapio')} />
          ))}
        </div>
      </section>

      {/* ===== CHAMADA PARA O WHATSAPP ===== */}
      <section className="container section">
        <div className="home__cta">
          <h2>Tem uma data especial ou quer um bolo com tema sob medida?</h2>
          <p>Criamos projetos exclusivos para aniversários, casamentos e batizados.</p>
          <a className="btn btn--whatsapp" href={`https://wa.me/${STORE.whatsappNumber}`} target="_blank" rel="noopener noreferrer">
            <Icon name="chat" /> Falar com a confeiteira
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;

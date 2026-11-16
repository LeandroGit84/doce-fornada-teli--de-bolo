import Icon from "../components/Icon.jsx";
import IMAGES from "../data/images.js";
import "./About.css";

// Valores da marca, desenhados com .map() a partir de dados.
const VALUES = [
  {
    icon: "favorite",
    title: "100% afeto",
    text: "Memória afetiva em cada fornada.",
  },
  {
    icon: "cookie",
    title: "Sem misturas prontas",
    text: "Nada de conservantes industriais: massas batidas à mão.",
  },
  {
    icon: "verified",
    title: "Produção limitada diária",
    text: "Poucas fornadas por dia, para manter o cuidado.",
  },
];

// Página institucional: só conteúdo estático, sem estado.
function About() {
  return (
    <>
      <section className="container section about__intro">
        <span className="eyebrow">Nossa essência • Desde 2018</span>
        <h1>Receitas de família, feitas à mão com amor e afeto.</h1>
        <p>
          A <b>Casa de Bolos Caseiros</b> nasceu para resgatar aquele sentimento
          doce de quando a gente entrava na cozinha da avó e sentia o perfume do
          bolo recém-saído do forno.
        </p>
      </section>

      <section className="container section about__story">
        <img src={IMAGES.about} alt="Cozinha artesanal da Doce Fornada" />
        <div>
          <h2>A cozinha da Dona Marta</h2>
          <p>
            Em 2018, com receitas passadas de geração em geração, começaram as
            fornadas para os aniversários dos netos. Logo elas ganharam o
            carinho de vizinhos e amigos em Praia Grande.
          </p>
          <p>
            Hoje mantemos a mesma essência: cada massa é batida à mão, os
            brigadeiros são mexidos no ponto certo na panela de cobre e as
            frutas são escolhidas a dedo a cada amanhecer.
          </p>
          <blockquote>
            “Acreditamos que todo bolo carrega uma celebração, seja um domingo
            em família ou um grande casamento.”
          </blockquote>
        </div>
      </section>

      <section className="container section about__values">
        {VALUES.map((value) => (
          <article key={value.title} className="card about__value">
            <Icon name={value.icon} />
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default About;

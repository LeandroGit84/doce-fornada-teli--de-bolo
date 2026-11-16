import { Link } from 'react-router-dom';

// Página mostrada quando o endereço não existe (rota "*").
function NotFound() {
  return (
    <section className="section container" style={{ textAlign: 'center' }}>
      <h1>Ops! Essa página saiu do forno e não voltou.</h1>
      <p style={{ margin: '1rem 0 1.5rem' }}>Não encontramos o que você procurava.</p>
      <Link to="/" className="btn btn--primary">Voltar ao início</Link>
    </section>
  );
}

export default NotFound;

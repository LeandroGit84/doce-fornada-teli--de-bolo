// CONCEITO: Componente reutilizável com PROPS (as "entradas" do componente).
// POR QUÊ: os ícones aparecem em todo o site; assim escrevemos <Icon name="add" />
// em vez de repetir a <span> com classe e atributos toda vez.
function Icon({ name }) {
  return (
    // aria-hidden esconde o ícone de leitores de tela (ele é só decoração).
    <span className="material-symbols-outlined" aria-hidden="true">
      {name}
    </span>
  );
}

export default Icon;

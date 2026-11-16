import './CategoryFilter.css';

// Componente "controlado": não guarda estado próprio.
// Recebe a categoria escolhida (`selectedId`) e avisa o pai quando o usuário clica (`onSelect`).
// POR QUÊ: o pai (página Cardápio) precisa saber a escolha para filtrar os produtos.
function CategoryFilter({ categories, selectedId, onSelect }) {
  return (
    <nav className="category-filter" aria-label="Categorias do cardápio">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          // Adiciona a classe "is-active" apenas no botão selecionado.
          className={category.id === selectedId ? 'category-filter__pill is-active' : 'category-filter__pill'}
          onClick={() => onSelect(category.id)}
        >
          {category.label}
        </button>
      ))}
    </nav>
  );
}

export default CategoryFilter;

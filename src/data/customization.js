// Opções do "Ateliê de Personalização" (modal do cardápio).
// Cada opção tem `id` (identificador único) e `label` (texto na tela).

export const SIZES = [
  { id: 'p', label: 'Tamanho P', detail: 'Serve ~8 fatias', extra: 0 },
  { id: 'm', label: 'Tamanho M', detail: 'Serve ~15 fatias', extra: 40 },
  { id: 'g', label: 'Tamanho G', detail: 'Serve ~25 a 30 fatias', extra: 80 },
];

export const DOUGHS = [
  { id: 'cacau', label: 'Cacau Belga 100%' },
  { id: 'baunilha', label: 'Baunilha Tradicional' },
  { id: 'redvelvet', label: 'Red Velvet Aveludado' },
];

export const FILLINGS = [
  { id: 'ganache', label: 'Ganache Trufado Meio Amargo' },
  { id: 'brigadeiro', label: 'Brigadeiro Gourmet & Ninho' },
  { id: 'doceleite', label: 'Doce de Leite com Nozes' },
];

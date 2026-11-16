// Intl.NumberFormat é um recurso nativo do JavaScript para formatar números.
// Criamos o formatador UMA vez (fora da função) para reaproveitar em toda chamada.
const brlFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Transforma 45 em "R$ 45,00".
// POR QUÊ: um único lugar formata dinheiro → o site inteiro fica consistente.
export function formatCurrency(value) {
  return brlFormatter.format(value);
}

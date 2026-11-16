import { getMinOrderDate, isSunday } from './dates.js';

// Confere os dados do agendamento e devolve um objeto de erros.
// Exemplo de retorno: { name: 'Informe seu nome.' }  — vazio {} significa "tudo certo".
// POR QUÊ: validar fora do componente deixa o componente curto e a regra fácil de testar.
export function validateOrder(schedule) {
  const errors = {};

  if (!schedule.name.trim()) {
    errors.name = 'Informe seu nome.';
  }

  if (!schedule.date) {
    errors.date = 'Escolha uma data.';
  } else if (schedule.date < getMinOrderDate()) {
    // Datas no formato ISO podem ser comparadas como texto.
    errors.date = 'Pedidos precisam de no mínimo 48h de antecedência.';
  } else if (isSunday(schedule.date)) {
    errors.date = 'Não atendemos aos domingos.';
  }

  if (!schedule.time) {
    errors.time = 'Escolha um horário.';
  }

  if (schedule.deliveryType === 'delivery' && !schedule.address.trim()) {
    errors.address = 'Informe o endereço de entrega.';
  }

  return errors;
}

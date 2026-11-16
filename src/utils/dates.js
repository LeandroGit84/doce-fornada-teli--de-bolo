import { STORE } from '../data/store.js';

// Devolve a primeira data aceita para encomenda, no formato "AAAA-MM-DD"
// (formato que o <input type="date"> entende).
export function getMinOrderDate() {
  const date = new Date();
  // Soma as horas de antecedência mínima (48h) à data de agora.
  date.setHours(date.getHours() + STORE.minNoticeHours);

  const year = date.getFullYear();
  // getMonth() começa em 0 (janeiro), por isso somamos 1.
  // padStart garante dois dígitos: "7" vira "07".
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// Converte "2026-11-20" em "20/11/2026" para exibir ao cliente.
export function formatDateBR(isoDate) {
  const [year, month, day] = isoDate.split('-');
  return `${day}/${month}/${year}`;
}

// O ateliê não funciona aos domingos (dia 0 em JavaScript).
export function isSunday(isoDate) {
  // "T00:00:00" evita problemas de fuso horário ao criar a data.
  return new Date(`${isoDate}T00:00:00`).getDay() === 0;
}

import { STORE, DELIVERY_TYPES } from '../data/store.js';
import { formatCurrency } from './formatCurrency.js';
import { formatDateBR } from './dates.js';

// Monta a mensagem do pedido linha por linha.
function buildMessage(items, schedule, totals) {
  const deliveryLabel = DELIVERY_TYPES.find((type) => type.id === schedule.deliveryType).label;

  // Cada item vira uma linha: "2x Bolo de Chocolate (Tamanho M, Cacau...) - R$ 320,00"
  const itemLines = items.map((item) => {
    const details = item.details ? ` (${item.details})` : '';
    return `• ${item.quantity}x ${item.name}${details} — ${formatCurrency(item.unitPrice * item.quantity)}`;
  });

  const lines = [
    `Olá! Gostaria de fazer uma encomenda na ${STORE.name} 🎂`,
    '',
    `*Nome:* ${schedule.name}`,
    `*Data:* ${formatDateBR(schedule.date)} às ${schedule.time}`,
    `*Recebimento:* ${deliveryLabel}`,
  ];

  // O endereço só entra na mensagem se for entrega.
  if (schedule.deliveryType === 'delivery') {
    lines.push(`*Endereço:* ${schedule.address}`);
  }

  lines.push('', '*Itens:*', ...itemLines, '');
  lines.push(`*Total:* ${formatCurrency(totals.total)}`);

  return lines.join('\n');
}

// Devolve o link que abre o WhatsApp com a mensagem pronta.
// encodeURIComponent protege acentos, espaços e quebras de linha dentro do link.
export function buildWhatsappUrl(items, schedule, totals) {
  const message = buildMessage(items, schedule, totals);
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// CONCEITO: Dados separados da interface.
// POR QUÊ: se o telefone ou o frete mudar, você altera UM lugar só.

export const STORE = {
  name: 'Doce Fornada',
  tagline: 'Ateliê de Bolos',
  whatsappNumber: '5513996699310', // formato internacional exigido pelo wa.me
  phoneLabel: '(13) 99669-9310',
  instagram: '@docefornada.atelie',
  address: 'Rua das Acácias, 128 – Boqueirão, Praia Grande – SP, CEP 11700-000',
  openingHours: 'Segunda a Sábado: 9h às 18h',
  minNoticeHours: 48, // antecedência mínima do pedido
  deliveryFee: 15, // valor fixo do frete (R$)
};

// Horários disponíveis para retirada ou entrega.
export const TIME_SLOTS = ['09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

// Tipos de recebimento do pedido.
export const DELIVERY_TYPES = [
  { id: 'pickup', label: 'Retirar no ateliê' },
  { id: 'delivery', label: 'Receber em casa' },
];

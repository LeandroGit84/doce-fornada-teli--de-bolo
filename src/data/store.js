// CONCEITO: Dados separados da interface.
// POR QUÊ: se o telefone ou o frete mudar, você altera UM lugar só.

export const STORE = {
  name: 'Casa de Bolos Caseiros',
  tagline: 'Ateliê de Bolos',
  whatsappNumber: '5513992130305', // formato internacional exigido pelo wa.me
  phoneLabel: '(13) 99213-0305',
  instagram: '@Casadeboloscaseiross',
  address: 'Av. Júlio Prestes de Albuquerque, 540 – Praia Grande – SP',
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

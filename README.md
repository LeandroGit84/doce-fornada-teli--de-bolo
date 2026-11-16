# Casa de Bolos Caseiros — Ateliê de Bolos 🎂

Loja de bolos feita com **Vite + React**, baseada no protótipo do Stitch.
Projeto pensado para **estudo**: o código tem comentários explicando o que cada trecho faz,
o conceito do React envolvido (`CONCEITO:`) e por que aquilo resolve o problema (`POR QUÊ:`).

## Como rodar

```bash
npm install     # baixa as dependências (só na primeira vez)
npm run dev     # abre o site em http://localhost:5173
```

## Páginas

| Rota         | Página    | O que tem                                                  |
| ------------ | --------- | ---------------------------------------------------------- |
| `/`          | Início    | Hero, passo a passo, queridinhos, chamada para o WhatsApp  |
| `/cardapio`  | Cardápio  | Busca, filtro por categoria, modal de personalização       |
| `/sobre-nos` | Sobre nós | História da Dona Marta e valores                           |
| `/sacola`    | Sacola    | Itens, agendamento (48h), frete e finalização via WhatsApp |

## Estrutura

```
src/
├── main.jsx          # ponto de entrada (liga o React ao HTML)
├── App.jsx           # mapa de rotas
├── pages/            # uma tela por rota
├── components/       # peças reutilizáveis (Header, ProductCard, Modal...)
├── context/          # CartContext: estado global da sacola
├── hooks/            # useCart: hook customizado
├── data/             # produtos, opções e dados da loja
├── utils/            # funções puras (moeda, datas, validação, WhatsApp)
└── styles/           # tokens de design e estilos globais
```

## Roteiro de estudo (ordem sugerida)

1. `main.jsx` e `App.jsx` — como o React inicia e como as rotas funcionam.
2. `components/Icon.jsx` e `ProductCard.jsx` — componentes e **props**.
3. `pages/Menu.jsx` — **useState**, estado derivado, listas com `.map()` e `key`.
4. `components/CustomizationModal.jsx` e `Toast.jsx` — **useEffect** e limpeza de efeitos.
5. `context/CartContext.jsx` e `hooks/useCart.js` — **Context API** e hook customizado.
6. `components/ScheduleForm.jsx` e `pages/Cart.jsx` — formulários controlados e validação.

## Próximos passos (para praticar)

- Salvar a sacola no `localStorage` (use `useEffect`).
- Criar a página "Meus Pedidos" (existe no protótipo).
- Trocar o `CartContext` de `useState` para `useReducer`.

// CONCEITO: Vite (ferramenta de build) — arquivo de configuração do projeto.
// POR QUÊ: o Vite precisa saber que usamos React para entender JSX.
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Exporta a configuração; o plugin do React habilita JSX e o "Fast Refresh"
// (a página atualiza sozinha quando você salva um arquivo).
export default defineConfig({
  plugins: [react()],
});

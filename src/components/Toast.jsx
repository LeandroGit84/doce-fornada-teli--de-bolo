import { useEffect } from 'react';

import Icon from './Icon.jsx';
import './Toast.css';

// Aviso rápido que some sozinho depois de alguns segundos.
function Toast({ message, onClose }) {
  useEffect(() => {
    // Agenda o fechamento para daqui a 2,5 segundos.
    const timerId = setTimeout(onClose, 2500);
    // Limpeza: se o aviso sumir antes, cancelamos o timer pendente.
    return () => clearTimeout(timerId);
  }, [message, onClose]);

  return (
    // role="status" faz leitores de tela anunciarem a mensagem.
    <div className="toast" role="status">
      <Icon name="check_circle" /> {message}
    </div>
  );
}

export default Toast;

import { DELIVERY_TYPES, TIME_SLOTS } from '../data/store.js';
import { getMinOrderDate } from '../utils/dates.js';
import './ScheduleForm.css';

// Formulário de agendamento. CONCEITO: Componentes controlados —
// o valor de cada campo vem do estado do pai (`schedule`) e cada digitação avisa o pai (`onChange`).
// POR QUÊ: o pai precisa dos dados para validar e montar a mensagem do WhatsApp.
function ScheduleForm({ schedule, errors, onChange }) {
  // Um único manipulador para TODOS os campos: usa o atributo `name` do campo como chave.
  function handleChange(event) {
    const { name, value } = event.target;
    onChange({ ...schedule, [name]: value }); // [name] = chave dinâmica do objeto
  }

  return (
    <section className="schedule card">
      <h2>Agende sua encomenda</h2>

      <div className="field">
        <label htmlFor="name">Seu nome</label>
        <input id="name" name="name" value={schedule.name} onChange={handleChange} placeholder="Como podemos te chamar?" />
        {errors.name && <span className="field__error">{errors.name}</span>}
      </div>

      {/* Escolha entre retirar ou receber em casa (botões de rádio) */}
      <fieldset className="schedule__types">
        <legend>Como prefere receber?</legend>
        {DELIVERY_TYPES.map((type) => (
          <label key={type.id} className={schedule.deliveryType === type.id ? 'is-selected' : ''}>
            <input type="radio" name="deliveryType" value={type.id} checked={schedule.deliveryType === type.id} onChange={handleChange} />
            {type.label}
          </label>
        ))}
      </fieldset>

      {/* Renderização condicional: o endereço só aparece na opção "entrega" */}
      {schedule.deliveryType === 'delivery' && (
        <div className="field">
          <label htmlFor="address">Endereço de entrega</label>
          <input id="address" name="address" value={schedule.address} onChange={handleChange} placeholder="Rua, número, bairro e CEP" />
          {errors.address && <span className="field__error">{errors.address}</span>}
        </div>
      )}

      <div className="schedule__row">
        <div className="field">
          <label htmlFor="date">Data</label>
          {/* `min` impede escolher datas com menos de 48h de antecedência */}
          <input id="date" name="date" type="date" min={getMinOrderDate()} value={schedule.date} onChange={handleChange} />
          {errors.date && <span className="field__error">{errors.date}</span>}
        </div>

        <div className="field">
          <label htmlFor="time">Horário</label>
          <select id="time" name="time" value={schedule.time} onChange={handleChange}>
            <option value="">Selecione</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot}>{slot}</option>
            ))}
          </select>
          {errors.time && <span className="field__error">{errors.time}</span>}
        </div>
      </div>
    </section>
  );
}

export default ScheduleForm;

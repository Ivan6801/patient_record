import React from 'react';
import './styles/App.css';

const options = [
  { value: 'us', label: 'United States + 1' },
  { value: 'mexico', label: 'Mexico + 52' },
];

const gender = [
  { value: 'masculino', label: 'Masculino 🧑🏻' },
  { value: 'femenino', label: 'Femenino 🧒🏻' },
];

const maritalStatus = [
  { value: 'soltero', label: 'Soltero' },
  { value: 'casado', label: 'Casado' },
  { value: 'divorciado', label: 'Divorciado' },
  { value: 'spj', label: 'Separación en proceso judicial' },
  { value: 'viudo ', label: 'Viudo' },
  { value: 'concubinato ', label: 'Concubinato' },
];

const phoneType = [
  { value: 'landline', label: 'Teléfono fijo' },
  { value: 'mobilePhone', label: 'Teléfono móvil' },
];

export default function App() {
  return (
    <section className="container">
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Registrar Paciente</h3>
          <form action="">
            <p>
              <label htmlFor="firstname">Nombres</label>
              <input type="text" id="firstname" name="firstname" />
            </p>
            <p>
              <label htmlFor="email">Apellido Paterno</label>
              <input type="text" id="email" name="email" />
            </p>
            <p>
              <label htmlFor="phone">Apellido Materno</label>
              <input type="text" id="phone" name="phone" />
            </p>
            <p>
              <label htmlFor="date">Fecha de nacimiento</label>
              <input type="date" id="date" name="date" />
            </p>
            <p>
              <label htmlFor="gender">Género</label>
              <select id="gender">
                {gender.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <label htmlFor="maritalStatus">Estado civil</label>
              <select id="maritalStatus">
                {maritalStatus.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <label htmlFor="mainPhone">Teléfono Prinicial</label>
              <input type="tel" id="mainPhone" name="mainPhone" />
            </p>
            <p>
              <label htmlFor="phoneType">Tipo teléfono</label>
              <select id="phoneType">
                {phoneType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <label htmlFor="mainMail">Correo Principal</label>
              <input type="email" id="mainMail" name="mainMail" />
            </p>
            <p>
              <label htmlFor="emergencyPhone">Teléfono emergencia</label>
              <select id="emergencyPhone">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </p>
            <p>
              <label htmlFor="emergencyContact">Contacto emergencia</label>
              <input type="text" id="emergencyContact" name="emergencyContact" />
            </p>
            <p>
              <label htmlFor="mei">Seguro de gastos médicos</label>
              <input type="text" id="mei" name="mei" />
            </p>
            <p className="block">
              <button>Guardar</button>
            </p>
          </form>
        </div>
        <div className="contact-info">
          <h4>Posibles coincidencias</h4>
          <p className="contect-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero provident ipsam
            necessitatibus repellendus?
          </p>
        </div>
      </div>
    </section>
  );
}

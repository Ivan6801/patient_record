import React, { useRef, useContext } from 'react';
import AppContext from '../contexts/AppContext';
import './styles/App.css';

const options = [
  { value: 'us', label: 'United States + 1' },
  { value: 'mexico', label: 'Mexico + 52' },
];

const gender = [
  { value: 'masculino', label: 'Masculino' },
  { value: 'femenino', label: 'Femenino' },
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

export default function Registrar() {
  const {
    addToData,
  } = useContext(AppContext);
  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const data = {
      firstname: formData.get('firstname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      mainPhone: formData.get('mainPhone'),
      emergencyContact: formData.get('emergencyContact'),
      mei: formData.get('mei'),
    };
    addToData(data);
    console.log(data);
  };

  return (
    <section className="container">
      <div className="contact-wrapper animated bounceInUp">
        <div className="contact-form">
          <h3>Registrar Paciente</h3>
          <form ref={form}>
            <div>
              <label htmlFor="firstname">Nombres</label>
              <input type="text" id="firstname" name="firstname" />
            </div>
            <div>
              <label htmlFor="email">Apellido Paterno</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="phone">Apellido Materno</label>
              <input type="text" id="phone" name="phone" />
            </div>
            <div>
              <label htmlFor="date">Fecha de nacimiento</label>
              <input type="date" id="date" name="date" />
            </div>
            <div>
              <label htmlFor="gender">Género</label>
              <select id="gender">
                {gender.map((option) => (
                  <option key={option.value} name="gender" value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="maritalStatus">Estado civil</label>
              <select id="maritalStatus">
                {maritalStatus.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mainPhone">Teléfono Prinicial</label>
              <input type="tel" id="mainPhone" name="mainPhone" />
            </div>
            <div>
              <label htmlFor="phoneType">Tipo teléfono</label>
              <select id="phoneType">
                {phoneType.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="mainMail">Correo Principal</label>
              <input type="email" id="mainMail" name="mainMail" />
            </div>
            <div>
              <label htmlFor="emergencyPhone">Teléfono emergencia</label>
              <select id="emergencyPhone">
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="emergencyContact">Contacto emergencia</label>
              <input type="text" id="emergencyContact" name="emergencyContact" />
            </div>
            <div>
              <label htmlFor="mei">Seguro de gastos médicos</label>
              <input type="text" id="mei" name="mei" />
            </div>
            <div className="block">
              <button type="button" onClick={handleSubmit}>Guardar</button>
            </div>
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

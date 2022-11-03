import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Radio } from '@mui/material/';
import './styles/Header.css';

export default function Header() {
  const [selectedValue, setSelectedValue] = useState('a');
  const { i18n } = useTranslation('global');

  const handleChangeEs = (event) => {
    setSelectedValue(event.target.value);
    i18n.changeLanguage('es');
  };

  const handleChangeEn = (event) => {
    setSelectedValue(event.target.value);
    i18n.changeLanguage('en');
  };
  return (
    <header className="Header">
      <div>
        <label>ES</label>
        <Radio
          checked={selectedValue === 'a'}
          onChange={handleChangeEs}
          value="a"
          name="radio-buttons"
          style={{ color: '#3A4879' }}
          inputProps={{ 'aria-label': 'A' }}
        />
      </div>
      <div>
        <label>EN</label>
        <Radio
          checked={selectedValue === 'b'}
          onChange={handleChangeEn}
          value="b"
          name="radio-buttons"
          style={{ color: '#3A4879' }}
          inputProps={{ 'aria-label': 'B' }}
        />
      </div>
    </header>
  );
}

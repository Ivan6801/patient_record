/* eslint-disable max-len */
/* eslint-disable no-unused-expressions */
import React, { useState, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Radio } from '@mui/material/';
import ThemeContext from '../contexts/ThemeContext';
import './styles/Header.css';

export default function Header() {
  const [selectedValue, setSelectedValue] = useState('a');
  const [darkmode, setDarkMode] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { i18n } = useTranslation('global');

  const handleClick = () => {
    setDarkMode(!darkmode);
    theme === 'bg-light' ? setTheme('bg-dark') : setTheme('bg-light');
  };

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
      <div className="Header-boton">
        <Button type="button" style={{ color: '#393939', borderColor: '#393939' }} variant="outlined" onClick={handleClick}>{darkmode ? 'Light Mode 🌞' : 'Dark Mode 🌑'}</Button>
      </div>
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

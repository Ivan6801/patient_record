/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ArticleUsers(props) {
  const { t } = useTranslation('global');
  const { item } = props;
  return (
    <article key={item.id} className="card">
      <img className="character-img" src={item.image} alt={item.name} />
      <p className="character-info">
        {' '}
        <small className="character-name">
          {t('register.nombre')}
          {' '}
          :
        </small>
        {' '}
        {item.name}
      </p>
      <p className="character-info">
        <small className="character-name">
          {t('register.genero')}
          {' '}
          :
        </small>
        {item.gender}
      </p>
    </article>
  );
}

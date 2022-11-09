/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function ArticleUsers(props) {
  const { t } = useTranslation('global');
  const { item } = props;
  return (
    <article key={item.id} className="card">
      <img className="character-img" src={item.picture.large} alt={item.name.title} />
      <p className="character-info">
        {' '}
        <small className="character-name">
          {t('register.nombre')}
          {' '}
          :
        </small>
        {' '}
        {item.name.title}
      </p>
      <p className="character-info">
        <small className="character-name">
          {t('r.birthday')}
          {' '}
          :
        </small>
        <p className="character-date">{item.dob.date}</p>
      </p>
    </article>
  );
}

/* eslint-disable react/prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';

export default function Search(props) {
  const { search, searchInput, handleSearch } = props;
  const { t } = useTranslation('global');
  return (
    <input
      type="text"
      placeholder={t('search.busca')}
      value={search}
      ref={searchInput}
      onChange={handleSearch}
      className="handle-serarch"
    />
  );
}

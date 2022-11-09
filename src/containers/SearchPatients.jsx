/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, {
  useState, useEffect, useRef, useMemo, useCallback,
} from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header';
import Search from '../components/Search';
import ArticleUsers from '../components/ArticleUsers';
import './styles/SearchPatients.css';

export default function SearchPatients() {
  const { t } = useTranslation('global');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      getDatas();
    }, 500);
  }, []);

  const getDatas = async () => {
    setLoading(true);
    if (loading) {
      const response = await fetch('https://randomuser.me/api/?results=30');
      const data = await response.json();
      setData(data.results);
    }
    setLoading(false);
    return data.results;
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () => data.filter((user) => user.name.title.toLowerCase().includes(search.toLowerCase())),
    [data, search],
  );

  const countUsar = filteredUsers.length;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Parte #2</title>
        <meta name="description" content="Search register" />
      </Helmet>
      <nav className="Search-nav">
        <div>
          <Link className="card-link" to="/">Regreso</Link>
        </div>
        <Header />
      </nav>
      <section className="Search">
        <div className="Search-left">
          <div className="Search-input">
            <Search
              search={search}
              searchInput={searchInput}
              handleSearch={handleSearch}
              className="handle-serarch"
            />
          </div>
          <div>
            <h1>
              Resultado
              {countUsar > 1 ? 's' : ''}
              {': '}
              {countUsar}
            </h1>
          </div>
          <div className="cards">
            {loading && (<CircularProgress />)}
            {(!loading && !filteredUsers.length) && (
              <p style={{ color: 'red' }}>
                {t('search.found')}
                {' '}
                😮
              </p>
            )}
            {filteredUsers.map((item) => (
              <ArticleUsers
                key={item.id}
                item={item}
              />
            ))}
          </div>
        </div>
        <div className="Search-right">
          <h1>
            Informacion del Paciente
          </h1>
        </div>
      </section>
    </>
  );
}

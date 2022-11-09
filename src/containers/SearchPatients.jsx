/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, {
  useState, useEffect, useRef, useMemo, useCallback,
} from 'react';
import { Helmet } from 'react-helmet';
import CircularProgress from '@mui/material/CircularProgress';
import Header from '../components/Header';
import Search from '../components/Search';
import ArticleUsers from '../components/ArticleUsers';
import './styles/SearchPatients.css';

export default function SearchPatients() {
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
      const data = await fetch('https://rickandmortyapi.com/api/character/');
      const users = await data.json();
      setData(users.results);
    }
    setLoading(false);
  };

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);

  const filteredUsers = useMemo(
    () => data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())),
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
      <Header />
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
            {(!loading && !filteredUsers.length) && <p style={{ color: 'red' }}>Not found character 😮</p>}
            {filteredUsers.map((item) => (
              <ArticleUsers key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import { favoriteReducer, initialState } from '../reducers';
import Header from '../components/Header';
import Search from '../components/Search';
import ArticleUsers from '../components/ArticleUsers';
import Favorite from '../components/Favorite';
import './styles/SearchPatients.css';

export default function SearchPatients() {
  const { t } = useTranslation('global');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const searchInput = useRef(null);
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites.favorites));
  }, [favorites]);

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

  const validateItem = (data) => {
    let state = false;

    favorites.favorites.forEach((favorite) => {
      if (favorite.id === data.id) state = true;
    });

    return state;
  };

  const handleClick = (favorite) => {
    if (!validateItem(favorite)) {
      dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
    }
  };

  const deleteFavorite = (id) => {
    dispatch({ type: 'DELETE_TO_FAVORITE', payload: id });
  };

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
                handleClick={handleClick}
              />
            ))}
          </div>
        </div>
        <div className="Search-right">
          <h1>
            {t('search.intro')}
          </h1>
          {favorites.favorites.length > 0 && (
            <ul className="list-favorites">
              {favorites.favorites.map((favorite) => (
                <Favorite
                  key={favorite.id}
                  id={favorite.id}
                  name={favorite.name.title}
                  img={favorite.picture.large}
                  dob={favorite.dob.date}
                  sgm={favorite.id.name}
                  phone={favorite.phone}
                  deleteFavorite={deleteFavorite}
                />
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
}

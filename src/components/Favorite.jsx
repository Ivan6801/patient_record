/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'react-i18next';
import './styles/Favorite.css';

export default function Favorite({
  id, name, img, dob, phone, sgm, deleteFavorite,
}) {
  const { t } = useTranslation('global');

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardActionArea onClick={() => deleteFavorite(id)}>
        <CardMedia component="img" image={img} alt="green iguana" />
        <CardContent style={{ background: '#93B9BA' }}>
          <Typography variant="body2" color="text.secondary">
            <h6 style={{ fontSize: 16 }}>
              <small style={{ color: 'white' }}>
                {t('i.name')}
                {' '}
                :
              </small>
              {' '}
              <small>{name}</small>
            </h6>
            <h6 style={{ fontSize: 16 }}>
              <small style={{ color: 'white' }}>
                {t('i.birthday')}
                {' '}
                :
              </small>
              {' '}
              {dob}
            </h6>
            <h6 style={{ fontSize: 16 }}>
              <small style={{ color: 'white' }}>
                {t('i.phone')}
                {' '}
                :
              </small>
              {' '}
              {phone}
            </h6>
            <h6 style={{ fontSize: 16 }}>
              <small style={{ color: 'white' }}>
                {t('i.sgm')}
                {' '}
                :
              </small>
              {' '}
              <b>{sgm || 'N/A'}</b>
            </h6>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

Favorite.propTypes = {
  id: PropTypes.element.isRequired,
  name: PropTypes.element.isRequired,
  img: PropTypes.element.isRequired,
  dob: PropTypes.element.isRequired,
  phone: PropTypes.element.isRequired,
  sgm: PropTypes.element.isRequired,
  deleteFavorite: PropTypes.func.isRequired,
};

/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './styles/AllItem.css';

export default function AllItem(props) {
  const {
    user,
    image,
    completed,
    added,
    onComplete,
    onDelete,
  } = props;

  return (
    <li className="item">
      <img src={image} alt={user} />
      <p className={`item-p ${completed && 'item-p--complete'}`}>{user}</p>
      <span className={`Icon Icon-check ${completed && 'Icon-check--active'}`} onClick={onComplete}>✔</span>
      <span className={`Icon Icon-delete ${added && 'Icon-check--active'}`} onClick={onDelete}>X</span>
    </li>
  );
}

AllItem.propTypes = {
  user: PropTypes.element.isRequired,
  image: PropTypes.element.isRequired,
  completed: PropTypes.element.isRequired,
  added: PropTypes.element.isRequired,
  onComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

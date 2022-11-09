import React from 'react';
import PropTypes from 'prop-types';
import './styles/AllList.css';

export default function AllList(props) {
  const { children } = props;
  return (
    <section>
      <ul>
        {children}
      </ul>
    </section>
  );
}

AllList.propTypes = {
  children: PropTypes.element.isRequired,
};

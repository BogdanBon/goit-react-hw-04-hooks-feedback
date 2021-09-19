import React from 'react';
import PropTypes from 'prop-types';
import s from './Analitics.module.css';

const Analitics = ({ onTotalReviews, onPositiveReviews }) => (
  <div className={s.container}>
    <p className={s.item}>
      <span>Total reviews:</span>
      <span>{onTotalReviews}</span>
    </p>
    <p className={s.item}>
      <span>Positive feedback:</span>
      <span>{onPositiveReviews}</span>
    </p>
  </div>
);

Analitics.propTypes = {
  onTotalReviews: PropTypes.number.isRequired,
  onPositiveReviews: PropTypes.string.isRequired,
};

export default Analitics;

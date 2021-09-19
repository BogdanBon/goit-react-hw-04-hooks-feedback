import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ onReviewGood, onReviewNeutral, onReviewBad }) => (
  <div className={s.container}>
    <p className={s.item_good}>Good: {onReviewGood}</p>
    <p className={s.item_neutral}>Neutral: {onReviewNeutral}</p>
    <p className={s.item_bad}>Bad: {onReviewBad}</p>
  </div>
);

Statistics.propTypes = {
  onReviewGood: PropTypes.number.isRequired,
  onReviewNeutral: PropTypes.number.isRequired,
  onReviewBad: PropTypes.number.isRequired,
};

export default Statistics;

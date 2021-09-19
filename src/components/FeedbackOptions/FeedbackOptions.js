import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

const FeedbackOptions = ({ handleIncrement, options }) => (
  <div>
    {Object.keys(options).map(option => (
      <li key={option}>
        <button
          className={s.btn}
          type="button"
          onClick={() => handleIncrement(option)}
        >
          {option}
        </button>
      </li>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func,
  options: PropTypes.object,
};

export default FeedbackOptions;

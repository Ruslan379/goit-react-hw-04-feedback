import React from 'react';
import PropTypes from 'prop-types';
import CapitalizeFirstLetter from 'components/CapitalizeFirstLetter/CapitalizeFirstLetter';

import css from 'components/FeedbackOptions/FeedbackOptions.module.css' //todo = старый вариант импорта стилей


export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={css.FeedBackOptions}>

    {Object.keys(options).map(key => (
      <button key={key}
        type="button"
        className={css.FeedBackBtn}
        onClick={onLeaveFeedback}>
        {CapitalizeFirstLetter(key)}
      </button>
    ))} 

  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};



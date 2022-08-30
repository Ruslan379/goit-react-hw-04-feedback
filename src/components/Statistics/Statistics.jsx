import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/Statistics/Statistics.module.css' //todo = старый вариант импорта стилей



export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.Statistics}>
    {/* <h1 className="Statistics__title">Statistics</h1> */}

    <p className={css.StatisticsGood}>Good: {good}</p>
    <p className={css.StatisticsNeutral}>Neutral: {neutral}</p>
    <p className={css.StatisticsBad}>Bad: {bad}</p>

    <p className={css.StatisticsTotal}>Total: {total}</p>
    <p className={css.StatisticsPositive}>Positive feedback: {positivePercentage}%</p>
  </div>
);


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,

  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
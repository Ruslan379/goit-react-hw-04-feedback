import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/NotificationMessage/NotificationMessage.module.css' //todo = старый вариант импорта стилей


export const NotificationMessage = ({ message }) => {
  return (
    <div>
      <h3 className={css.NotificationsMessage}>{ message }</h3>
    </div>
  );
}

NotificationMessage.propTypes = {
  message: PropTypes.string.isRequired,
};



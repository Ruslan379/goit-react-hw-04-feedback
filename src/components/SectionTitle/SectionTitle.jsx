import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/SectionTitle/SectionTitle.module.css' //todo = старый вариант импорта стилей

export const SectionTitle = ({ title, total, NotificationMessage, children }) => {
  return (
    <div>
      {/* {title && <h1>{title}</h1>} */}
      {<h1 className={css.SectionsTitle}>{title}</h1>}
      {children}
      {/* {total && children} */}
      {/* {total ? children : <p>{NotificationMessage}</p>}  */}
      
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};



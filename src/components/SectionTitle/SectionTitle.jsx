import React from 'react';
import PropTypes from 'prop-types';

import css from 'components/SectionTitle/SectionTitle.module.css' //todo = старый вариант импорта стилей

export const SectionTitle = ({ title, children }) => {
  return (
    <div>
      {<h1 className={css.SectionsTitle}>{title}</h1>}
      {children}
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};



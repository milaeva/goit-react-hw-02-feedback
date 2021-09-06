import React from 'react';
import PropTypes from 'prop-types';
import styles from "./Statistics.module.css"

const Statistics = ({ props, total, positivePercentage }) => {
  return (
    <>
      {Object.keys(props).map(item => (
        <p className={styles.stat} key={item}>
          {item[0].toUpperCase() + item.slice(1)} :
          <span className={styles.statNumber}>{props[item]}</span>
        </p>
      ))}
      <p className={styles.stat}>Total: {total()}</p>
      <p className={styles.stat}>Positive feedback: {positivePercentage()}%</p>
    </>
  );
};

Statistics.propTypes = {
  props: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

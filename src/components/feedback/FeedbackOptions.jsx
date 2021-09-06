import React from 'react';
import PropTypes from 'prop-types';
import styles from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const buttonElements = options.map(item => (
        <button
          className={styles.feedback}
          onClick={()=>onLeaveFeedback(item)}
          type="button"
          key={item}
        >
          {item}
        </button>
      ))
  return (
    <>
      {buttonElements}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

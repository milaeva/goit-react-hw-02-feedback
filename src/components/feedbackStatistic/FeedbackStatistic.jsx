import React, { Component } from 'react';
import FeedbackOptions from '../feedback/FeedbackOptions';
import Section from '../section/Section';
import Statistics from '../statistic/Statistics';
import Notification from '../notification/Notification';

import styles from "./FeedbackStatistic.module.css"


class FeedbackStatistic extends Component {
  state = {
    good: 0,
    bad: 0,
    neutral: 0,
  };
  handleIncreament = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const arrayValue = Object.values(this.state);
    const total = arrayValue.reduce((acc, value) => acc + value, 0);
    return total
  };
  countPositiveFeedbackPercentage = () => {
    if (!this.countTotalFeedback()) {
      return 0
    }
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncreament}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics
              props={this.state}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackStatistic;

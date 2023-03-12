// import PropTypes from 'prop-types';
import { FeedbackSection } from './Feedback.styled';

import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = {
    option1: 'Good',
    option2: 'Neutral',
    option3: 'Bad',
  };

  showStat = false;

  handleGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
    this.showStatistics();
  };

  handleNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.showStatistics();
  };

  handleBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
    this.showStatistics();
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const countPercentage = ((good * 100) / (good + neutral + bad)).toFixed(0);

    return Number(countPercentage);
  }

  showStatistics() {
    this.showStat = true;
  }

  onLeaveFeedback = {
    onHandleGood: this.handleGood,
    onHandleNeutral: this.handleNeutral,
    onHandleBad: this.handleBad,
  };

  render() {
    return (
      <FeedbackSection>
        <Section sectionTitle="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.showStat ? (
          <Section sectionTitle="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackSection>
    );
  }
}

export default Feedback;

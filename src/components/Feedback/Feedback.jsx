// import PropTypes from 'prop-types';
import { FeedbackSection } from './Feedback.styled';

import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

// class to function

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = ['Good', 'Neutral', 'Bad'];

  showStat = false;

  onLeaveFeedback = event => {
    const option = event.currentTarget.innerText.toLowerCase();
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
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

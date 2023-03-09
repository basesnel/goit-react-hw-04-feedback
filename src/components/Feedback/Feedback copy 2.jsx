// import PropTypes from 'prop-types';

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
    total: 0,
    positivePercentage: 0,
    showStat: false,
  };

  options = {
    option1: 'Good',
    option2: 'Neutral',
    option3: 'Bad',
  };

  handleGood = () => {
    this.setState(
      prevState => {
        return {
          good: prevState.good + 1,
        };
      },
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.showStatistics();
      }
    );
  };

  handleNeutral = () => {
    this.setState(
      prevState => {
        return {
          neutral: prevState.neutral + 1,
        };
      },
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.showStatistics();
      }
    );
  };

  handleBad = () => {
    this.setState(
      prevState => {
        return { bad: prevState.bad + 1 };
      },
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
        this.showStatistics();
      }
    );
  };

  countTotalFeedback() {
    this.setState({
      total: this.state.good + this.state.neutral + this.state.bad,
    });
  }

  countPositiveFeedbackPercentage() {
    let countPercentage = 0;
    countPercentage = (
      (this.state.good * 100) /
      (this.state.good + this.state.neutral + this.state.bad)
    ).toFixed(0);

    this.setState({ positivePercentage: countPercentage });
  }

  showStatistics() {
    this.setState({ showStat: true });
  }

  onLeaveFeedback = {
    onHandleGood: this.handleGood,
    onHandleNeutral: this.handleNeutral,
    onHandleBad: this.handleBad,
  };

  render() {
    return (
      <section className="feedback">
        <Section sectionTitle="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {this.state.showStat ? (
          <Section sectionTitle="Statistics">
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.state.total}
              positivePercentage={this.state.positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </section>
    );
  }
}

export default Feedback;

// import { FeedbackSection } from './Feedback.styled';
// import FeedbackTitle from './FeedbackTitle/FeedbackTitle';
// import FeedbackButton from './FeedbackButton/FeedbackButton';

// export default function Feedback() {
//   return (
//     <FeedbackSection>
//       <FeedbackTitle title="Please leave feedback" />
//       <FeedbackButton content="Good" />
//       <FeedbackButton content="Neutral" />
//       <FeedbackButton content="Bad" />
//     </FeedbackSection>
//   );
// }

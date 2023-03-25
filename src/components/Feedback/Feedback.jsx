// import PropTypes from 'prop-types';
import { FeedbackSection } from './Feedback.styled';

import { useState, useRef } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const showStat = useRef(false);

  const options = ['Good', 'Neutral', 'Bad'];

  function onLeaveFeedback(event) {
    const option = event.currentTarget.innerText.toLowerCase();

    switch (option) {
      case 'good':
        setGood(good + 1);
        break;

      case 'neutral':
        setNeutral(neutral + 1);
        break;

      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }

    showStatistics();
  }

  function countTotalFeedback() {
    const total = good + neutral + bad;
    return total;
  }

  function countPositiveFeedbackPercentage() {
    const countPercentage = ((good * 100) / (good + neutral + bad)).toFixed(0);

    return Number(countPercentage);
  }

  function showStatistics() {
    showStat.current = true;
  }

  return (
    <FeedbackSection>
      <Section sectionTitle="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      {showStat.current ? (
        <Section sectionTitle="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </FeedbackSection>
  );
}

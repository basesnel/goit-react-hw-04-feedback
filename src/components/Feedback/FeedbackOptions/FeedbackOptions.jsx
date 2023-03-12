import PropTypes from 'prop-types';
import { Controls, Option } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Controls>
      {options.map(option => (
        <Option key={option} onClick={onLeaveFeedback}>
          {option}
        </Option>
      ))}
    </Controls>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

import PropTypes from 'prop-types';
import { Controls, Option } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Controls>
      <Option onClick={onLeaveFeedback.onHandleGood}>{options.option1}</Option>
      <Option onClick={onLeaveFeedback.onHandleNeutral}>
        {options.option2}
      </Option>
      <Option onClick={onLeaveFeedback.onHandleBad}>{options.option3}</Option>
    </Controls>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    option1: PropTypes.string.isRequired,
    option2: PropTypes.string.isRequired,
    option3: PropTypes.string.isRequired,
  }).isRequired,
  onLeaveFeedback: PropTypes.shape({
    onHandleGood: PropTypes.func.isRequired,
    onHandleNeutral: PropTypes.func.isRequired,
    onHandleBad: PropTypes.func.isRequired,
  }).isRequired,
};

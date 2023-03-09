import PropTypes from 'prop-types';
import { StatList, StatItem, StatDef, StatVal } from './Statistics.styled';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <StatList>
      <StatItem>
        <StatDef>Good: </StatDef>
        <StatVal>{good}</StatVal>
      </StatItem>
      <StatItem>
        <StatDef>Neutral: </StatDef>
        <StatVal>{neutral}</StatVal>
      </StatItem>
      <StatItem>
        <StatDef>Bad: </StatDef>
        <StatVal>{bad}</StatVal>
      </StatItem>
      <StatItem>
        <StatDef>Total: </StatDef>
        <StatVal>{total}</StatVal>
      </StatItem>
      <StatItem>
        <StatDef>Positive feedback: </StatDef>
        <StatVal>{positivePercentage}%</StatVal>
      </StatItem>
    </StatList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

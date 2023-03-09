import PropTypes from 'prop-types';
import { SectionArea, SectionTitle } from './Section.styled';

export default function Section({ sectionTitle, children }) {
  return (
    <SectionArea>
      <SectionTitle>{sectionTitle}</SectionTitle>
      {children}
    </SectionArea>
  );
}

Section.propTypes = {
  sectionTitle: PropTypes.string.isRequired,
};

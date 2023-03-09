import styled from 'styled-components';

export const FeedbackSection = styled.section`
  max-width: 600px;
  /* margin: 0 auto 40px; */
  padding: 20px;
  border-radius: 8px;
  box-shadow: 1px 0px 4px rgb(0 0 0 / 12%), -1px 0px 4px rgb(0 0 0 / 14%),
    0px 4px 4px rgb(0 0 0 / 20%);
  background-color: ${props => props.theme.colors.fground};
  color: ${props => props.theme.colors.primText};
`;

import styled from 'styled-components';

export const Controls = styled.div`
  display: flex;
  justify-content: space-around;
  width: 220px;
  padding: 10px;
`;

export const Option = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border: 1px solid ${props => props.theme.colors.primText};
  color: ${props => props.theme.colors.primText};
  background-color: ${props => props.theme.colors.bground};
  border-radius: 4px;
  &:hover {
    color: ${props => props.theme.colors.fground};
    background-color: ${props => props.theme.colors.primText};
  }
`;

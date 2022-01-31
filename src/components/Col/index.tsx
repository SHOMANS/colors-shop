import styled from 'styled-components';
import { Row } from '../Row';

export const Column = styled(Row)`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.JC};
  justify-items: ${props => props.item};
  width: 40%;
  text-align: left;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

Column.defaultProps = {
  JC: 'start',
  item: 'start',
};

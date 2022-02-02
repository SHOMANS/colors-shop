import styled from 'styled-components';

export interface IProps {
  flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  flexWrap?: boolean;
  justifyContent?: 'center' | 'space-between' | 'flex-start' | 'flex-end';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
}
export const Wrapper = styled.div<IProps>`
  width: 75%;
  margin: auto;
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  flex-wrap: ${props => (props.flexWrap ? 'wrap' : 'no-wrap')};
  justify-content: ${props => props.justifyContent || 'space-between'};
  align-items: ${props => props.alignItems || 'center'};
  @media screen and (max-width: 1500px) {
    width: 90%;
  }
  @media screen and (max-width: 1200px) {
    width: 85%;
  }
  @media screen and (max-width: 1000px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 95%;
  }
  @media screen and (max-width: 500px) {
    width: 97%;
  }
`;

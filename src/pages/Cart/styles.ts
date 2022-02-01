import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export const CloseIcon = styled.i`
  position: absolute;
  top: 17px;
  right: 1em;
  color: #242424;
  &:hover {
    cursor: pointer;
  }
`;

export const OldPrice = styled.div`
  position: absolute;
  top: 3em;
  right: 1.2em;
  @media only screen and (max-width: 767px) {
    top: unset;
    bottom: 1.6em;
  }
`;

export const ItemTitle = styled(Link)`
  /* width: 60%; */
  text-decoration: none;
  color: #242424;
  margin-top: 10px;
  font-size: 0.8rem;
  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
  }
`;

export const WrapCounter = styled.div`
  background: #fff;

  @media only screen and (max-width: 767px) {
    margin-bottom: 1em;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  /* algin-items: center; */
  gap: 20px;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  @media only screen and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  background: #f2f2f2;
  border-radius: 16px;
  padding: 1em 0.5em;
  position: relative;
  @media only screen and (max-width: 767px) {
    width: 100%;
    display: flex;
  }
`;

export const ImgContainer = styled.div`
  width: 30%;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    min-width: 30%;
  }
`;

export const TotalContainer = styled.div`
  background: #f2f2f2;
  border-radius: 16px;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
  gap: 5px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 25rem;
    margin: 0;
  }
`;

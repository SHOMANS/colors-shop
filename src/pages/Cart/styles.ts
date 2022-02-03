import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";

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
  color: ${(props) => props.theme.textColors.primary};

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
  width: 30%;
  /* width: 60%; */
  text-decoration: none;
  color: #242424;
  padding-top: 10px;
  padding-left: 10px;
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
  width: 100%;
  justify-content: space-between;

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

export const ItemContainer = styled.div`
  display: flex;
  background: ${(props) => props.theme.background.paper};
  padding: 0.5em 0.8em;

  border-radius: 16px;
  position: relative;
  height: 200px;
  width: 100%;
  @media only screen and (max-width: 767px) {
    width: 100%;
    display: flex;
  }
`;

export const ImgContainer = styled.div`
  over-flow: hidden;
  /* max-height:60%; */
  width: 30%;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media only screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    min-width: 30%;
  }
`;

export const TotalContainer = styled.div`
  background: ${(props) => props.theme.background.paper};
  border-radius: 16px;
  height: 40%;
  padding: 1em 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media only screen and (max-width: 767px) {
    width: 100%;
    max-width: 25rem;
    margin: 0;
  }
`;

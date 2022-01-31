import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Column } from '../Col';
import { FlexBox } from '../Row';
import { Container } from '..';

interface Props {
  open: boolean;
}

export const InnerSection = styled(Column)`
  margin: 0 auto;
  max-width: 1640px;
  width: 100%;
`;
export const ListNav = styled(Container)<Props>`
  background-color: ${props => props.theme.common?.black || '#242424'};
  height: 50px;
  z-index: 999;
  padding: 7px 5%;
  @media (max-width: 768px) {
    flex-flow: column wrap;
    background-color: #242424;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    top: 0;
    right: 0;
    height: 100vh;
    z-index: 10;
    list-style: none;
    display: flex;
    width: 100%;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    align-items: center;
    flex-direction: column;
  }
  position: fixed;
  top: 0;
`;
export const Badge = styled('div')`
  background: #fcdd06;
  border-radius: 50%;
  color: #242424;
  text-align: center;
  font-family: normal normal normal 10px/13px Muli;
  height: 15px;
  width: 15px;
  z-index: 10;
  font-weight: bold;
  position: absolute;
  right: 12px;
  top: 4px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchButton = styled.div`
  padding: 5px 15px;
  cursor: pointer;
  background: #fcdd06;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 15px;
`;
export const StyledSearchIcon = styled('div')`
  font-size: 18;
`;

export const NavBox = styled('div')`
  display: flex;
  height: 30px;
  justify-content: space-between;
  width: 40%;
  background: #fff;
  border-radius: 6px;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavIcon = styled('div')`
  display: flex;
  border-radius: 6px;
  justify-content: center;
  background: none;
`;

export const CustomLink = styled(Link)`
  color: none;
  position: relative;
  text-decoration: none;
`;

export const Logo = styled('img')`
  height: 50px;
  object-fit: cover;
  opacity: 1;
  width: 180px;
`;
export const IconList = styled('li')`
  font-size: 12px;
  cursor: pointer;
  display: inline;
  color: #fff;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 50px;
  width: 50px;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #06aefc;
    text-decoration: none;
    cursor: pointer;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 10rem;
    justify-content: center;
  }
`;
export const Hamburger = styled.div`
  display: none;
  padding: 5%;
  text-align: right;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: #7b7fda;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-right: auto;
    top: auto;
  }
`;
export const SearchInput = styled.input`
  background: #ffffff 0% 0% no-repeat padding-box;
  border: none;
  border-radius: 6px;
  text-indent: 15px;
  height: 100%;
  width: 100%;

  &::placeholder {
    color: gray;
  }
`;
export const List = styled('ul')`
  text-decoration: none;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ListItem = styled('li')`
  color: ${props => props.theme.primary?.darkYallow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 13px;
  display: flex;
  letter-spacing: 0.2px;
  list-style: none;
  margin-left: 20px;
  opacity: 1;
  text-decoration: none;
  align-items: center;
`;

export const StyleObj: CSSProperties = {
  fontSize: 22,
  color: '#FCDD06',
  fill: '#FFF',
  margin: '0px auto',
  display: 'flex',
  alignItems: 'center',
  alignContent: 'space-between',
  marginBottom: '10px',
};

export const IConsContainer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-items: center; */
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

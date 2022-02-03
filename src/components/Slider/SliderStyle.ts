import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../Button/ButtonStyle";
import { FlexBox, Row, Column } from "../Row";
import { ContainerWrapper } from "../Container/style";
import { Container, Image, Typography } from "..";
import { IPropTypography } from "../Typography/interface";

export const SectionSlider = styled(FlexBox)`
  background: #f2f2f2;
  // height: 70%px;
`;
export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 1rem;
`;

export const FlexColumn = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-align: left;
  @media (max-width: 800px) {
    width: 100%;
    justify-content: center;
    display: flex;
    text-align: center;
  }
`;
export const SliderSection = styled(ContainerWrapper)`
  margin: 0 auto;
  overflow: hidden;
  flex-wrap: wrap;
  padding-top: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
  }
`;
export const ShopeButton = styled(Button)`
  background: #fcdd06 0% 0% no-repeat padding-box;
  border-radius: 20px;
  color: #242424;
  height: 56px;
  letter-spacing: 0.88px;
  opacity: 1;
  outline: none;
  font-family: mulish;
  text-transform: uppercase;
  width: 220px;
`;
export const PriceText = styled<any>(Typography)`
  color: #242424;
  font-size: 24px;
  margin-bottom: 10px;
  letter-spacing: 1.28px;
  font-family: mulish;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 5px;
    letter-spacing: 1px;
  }
`;

export const DescriptionText = styled(PriceText)`
color: ${(props) => props.theme.textColors.primary};
font-size: 20px;
  font-family: mulish;
  margin-bottom: 42px;
`;

export const NameText = styled(PriceText)`
  color: ${(props) => props.theme.textColors.primary};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ImageSlider = styled(Image)`
  width: 80%;
  height: 80%;
  object-fit: cover;
  margin-top: 30px;
`;

export const ButtonHero = styled(Link)`
  color: #242424;
  background: #fcdd06;
  font-size: 22px;
  height: 56px;
  outline: none;
  margin-top: 10px;
  border-radius: 20px;
  opacity: 1;
  text-transform: uppercase;
  width: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  letter-spacing: 1.28px;
  font-family: mulish;
  max-width: 220px;
`;

export const WrapperImageHero = styled.div`
  width: 400px;
  height: 400px;
  overflow: hidden;

  @media screen and (max-width: 500px) {
    width: 100%;
    height: auto;
  }
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
interface IDot {
  isGrey: boolean;
  width?: string;
}

export const Dot = styled("div")<IDot>`
  background: ${(props) => (props.isGrey ? "#70707030" : "#FCDD06 ")};
  border-radius: 50%;
  width: ${(props) => props.width};
  height: ${(props) => props.width};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.3rem;
  cursor: pointer;
`;
export const SwiperWrapper = styled("div")`
  background: ${(props) => props.theme.background.secondary};
`;
export const CategDots = styled(Dot)`
  @media (max-width: 1200px) {
    display: none;
  }
`;
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  padding: 1rem 0;
  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;
interface IArrow {
  isLeft?: boolean;
  color?: string;
}
// width="auto" JC="center" item="center" style={{marginBottom:"32px"}}

export const RowArrowWrapper = styled(Row)`
  width: auto;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

export const Arrow = styled("div")<IArrow>`
  font-size: 23px;
  font-weight: 700;
  padding: 0rem 0.5rem;
  cursor: pointer;
  opacity: 1;
`;

export const ContentContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  height: 90%;
  @media (max-width: 768px) {
    margin: auto;
    flex-direction: column-reverse;
    height: 38rem;
    justify-content: flex-end;
    & > *:last-child {
      width: 25rem;
      margin-top: -2rem;
    }
  }
`;

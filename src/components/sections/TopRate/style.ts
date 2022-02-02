import styled from "styled-components";
import { Column, Container, InnerSection, Row } from "../..";

export const RowWithRadius = styled(Container)`
  border: 1px solid #fcdd06;
  border-radius: 16px solid #fcdd06;
  border-radius: 16px;
  height: 700px;
  margin-bottom: 197px;
  margin-top: 43px;
  width: 100%;
  opacity: 1;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  & > div {
    border-radius: 0;
    margin: 0;
    width: 33.33%;
  }
  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    margin: auto;
  }
`;
export const CustomTopRate = styled(Column)`
  background: #ffffff;
  min-height: 990px;
`;

export const CustomInnerSection = styled(InnerSection)`
  background: #ffffff;
  height: 100%;
`;

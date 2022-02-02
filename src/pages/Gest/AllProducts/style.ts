import styled from "styled-components";

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 100%;
  height: auto;
  background: ${(props) => props.color};
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardsBox = styled(FlexRow)`
  /* justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  width: 90vw;
  max-width: 1800px; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media screen and (max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    column-gap: 15px;
  }
`;

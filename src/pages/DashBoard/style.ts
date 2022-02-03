import styled from "styled-components";
import { Container } from "../../components";
import { Button } from "../../components/Button/ButtonStyle";

export const ContainAgGrid = styled("div")`
  height: 500px;
  width: 85.5%;
  margin: 140px auto;
  border: none !important;
`;

export const Btn = styled(Button)`
  background: ${(props) => props.theme.colors.primary};
  color: #242424;
  float: right;
  margin: 10px 3%;
  padding: 8px 15px;
  text-align: center;
`;

export const DashContainer = styled(Container)`
  justify-content: space-between;
  width: 100%;
  margin: -50px auto;
`;

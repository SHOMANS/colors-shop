import styled from "styled-components";
import { Typography } from "..";
import { Column } from "../Row/index";

export const Title = styled(Typography)`
  color: ${(props) => props.theme.textColors.primary};
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: mulish;
  text-align: left;
  margin-top: 2rem;
`;

interface IDivider {
  width: string;
  height: string;
  color?: string;
}

export const Divider = styled("hr")<IDivider>`
  color: #d3cdcd;
  font-weight: bold;
  margin: 0 0 7px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
`;

export const ColumnCusom = styled(Column)`
  margin-top: 1rem;
`;

import styled from "styled-components";
import { IStyleButton } from "./IStyleButton";

// normal normal bold 16px/20px

export const ButtonStyle = styled.button<IStyleButton>(
  ({
    width = "none",
    height = "none",
    padding = ".3em",
    borderRadius = "10px",
    border = "none",
    fontWeight = "bold",
    background,
    color = "#242424",
    fontSize = "16px / 220px",
    cursor = "pointer",
    letterSpace = "0px",
    margin = "none",
    brand = false,
    type = "button",
    ...props
  }) => ({
    width: `${width}`,
    height: `${height}`,
    padding: `${padding}`,
    borderRadius: `${borderRadius}`,
    border: `${border}`,
    fontWeight: `${fontWeight}`,

    background: `${
      background ||
      (brand ? props.theme.colors.primary : props.theme.background?.lightGrey)
    }`,

    color: `${color}`,
    fontSize: `${fontSize}`,
    cursor: `${cursor}`,
    letterSpacing: `${letterSpace}`,
    alignItems: "baseline",
    margin: `${margin}`,
  })
);

export const Button = styled(ButtonStyle)`
  text-decoration: none;
  &:hover {
    color: white;
    background: #fcdd06;
  }
`;

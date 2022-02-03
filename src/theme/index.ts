import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle<DefaultTheme>`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans',mulish; 
    background-color: ${(props) => props.theme.background.default};
  }
`;

export const lightTheme: DefaultTheme = {
  type: "light",
  colors: {
    primary: "#FCDD06",
    secondary: "#FFC727",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#242424",
    secondary: "#707070",
    disabled: "#00000061",
    counterColor: "#a29d9d",
    divider: "rgba(1, 15, 30, 0.1)",
  },
  background: {
    paper: "#F7F8FC",
    default: "#ffffff",
    secondary: "#f2f2f2",
    header: "#242424",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};

export const darkTheme: DefaultTheme = {
  type: "dark",
  colors: {
    primary: "#FFC727",
    secondary: "#FCDD06",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#efeeff",
    secondary: "#ddd",
    disabled: "##FFFFFF80",
    counterColor: "#a29d9d",
    divider: "rgba(255, 255, 255, 0.2)",
  },
  background: {
    paper: "#1e252b",
    default: "#0a1929",
    secondary: "#123",
    header: "#121518",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
};

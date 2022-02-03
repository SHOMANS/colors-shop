import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    type: string;
    colors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      error: string;
      success: string;
      warning: string;
      info: string;
    };
    textColors: {
      [key: string]: string;
      primary: string;
      secondary: string;
      disabled: string;
      counterColor: string;
      divider: string;
    };
    background: {
      [key: string]: string;
      paper: string;
      default: string;
      secondary: string;
      header: string;
    };
    common: {
      [key: string]: string;
      black: string;
      white: string;
    };
  }
}

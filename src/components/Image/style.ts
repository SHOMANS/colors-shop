import styled from "styled-components";

type sizes = "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";

const getImageWidth = (size: sizes) => {
  switch (size) {
    case "sm":
      return "7em";
    case "md":
      return "15em";
    case "lg":
      return "25rem";
    case "xl":
      return "35em";
    case "xxl":
      return "45em";
    case "xxxl":
      return "55em";
    default:
      return "100em";
  }
};

const getImageHeight = (size: sizes) => {
  switch (size) {
    case "sm":
      return "7.5em";
    case "md":
      return "17em";
    case "lg":
      return "20rem";
    case "xl":
      return "35em";
    case "xxl":
      return "45em";
    case "xxxl":
      return "55em";
    default:
      return "100em";
  }
};

export const StyledImageWrapper = styled.div<any>`
  width: ${(props) =>
    props.width || (props?.size && getImageWidth(props.size)) || "100%"};
  height: ${(props) => props.height || "auto"};

  border: ${(props) => props?.border && "1px solid #F2F2F2"};
  border-radius: ${(props) =>
    props.variant === "circle"
      ? "50%"
      : props.variant === "square"
      ? "12px"
      : "0"};
  /* max-height: ${(props) =>
    props.maxHeight ||
    (props?.size && getImageHeight(props.size)) ||
    "100%"}; */
  margin: 0;
  overflow: hidden;
`;

export const StyledImage = styled.img<any>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

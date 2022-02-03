import { CSSProperties } from "react";
import { StyledImage, StyledImageWrapper } from "./style";

interface IProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  width?: string;
  height?: string;
  fit?: string;
  loading?: "eager" | "lazy" | undefined;
  size?: "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  variant?: "circle" | "square";
  border?: boolean;
  responsive?: boolean;
  src: any;
  style?: CSSProperties;
}

const Image: React.FC<IProps> = ({ src, ...props }) => (
  <StyledImageWrapper {...props}>
    <StyledImage src={src} alt="" />
  </StyledImageWrapper>
);

export default Image;

import { Field } from "formik";
import styled from "styled-components";
import { Image } from "../../../../components";

export const ProductImage = styled(Image)`
  &:hover {
    transform: scale(1.1) translateY(-5px);
    transition: all 0.1s ease-in-out;
  }
`;

export const ImageSections = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 35%;
  padding: 0 2rem 0 0;
  @media (max-width: 800px) {
    padding: 0;
    width: 100%;
  }
`;

export const Imagefirst = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  & img {
    width: 100%;
  }
  @media (max-width: 800px) {
    margin-bottom: 2rem;
    align-items: center;
    align-self: center;
  }
`;

export const Discount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsSection = styled.div`
  background-color: #f2f2f2;
  width: 100%;
  padding: 1rem;
`;
export const Review = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2rem;
`;
export const Title = styled.div`
  padding: 2rem 0rem;
`;

export const Padding = styled.div`
  padding: 0.4rem;
`;
export const Input = styled(Field)`
  padding: 0.5rem 2rem;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #000;
  font-size: 14px;
  width: 100%;
  background: #ccc;

  outline: none;
`;
export const Errors = styled.h6`
  color: red;
  font-size: 12px;
  margin: 5px;
`;

export const Label = styled.label`
  color: #000;
  font-size: 16px;
  letter-spacing: 0.88px;
  margin-bottom: 0.5rem;
  margin-top: 0.5rem;
`;
interface IProps {
  fullWidth?: boolean;
  width?: string;
}
export const FlexInput = styled.div<IProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  // width: ${(props) => (props.fullWidth ? "100%" : props.width)};
  @media (max-width: 800px) {
    width: 100%;
  }
`;

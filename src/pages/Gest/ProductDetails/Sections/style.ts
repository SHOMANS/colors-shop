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
  padding: 0.5rem;
`;

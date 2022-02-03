import styled from "styled-components";

export const ErrorImageOverlay = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const ErrorImageContainer = styled("div")<{ imageUrl: string }>`
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-position: center;
  background-size: cover;
  display: inline-block;
  height: 100vh;
  width: 100vw;
`;

export const ErrorImageText = styled.h2`
  position: absolute;
  color: #2f8e90;
  padding: 15px 25px;
  opacity: 0.8;
  color: white;
  border-radius: 8px;
  font-size: 28px;
  margin-top: 40px;
`;

import { ErrorMessage } from "formik";
import styled from "styled-components";
import { Row } from "../../Row";

export const FiledWrapper = styled("div")<{ marginLeft?: string }>`
  margin-bottom: 0.8rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 40px; */
  margin-left: ${(props) => props.marginLeft || 0};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;
export const Errors = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin: 5px;
`;

export const Label = styled("label")`
  font-family: normal normal normal 22px/15px Mulish;
  letter-spacing: 0.88px;
  color: ${(props) => props.theme.textColors.secondary};
  padding-bottom: 10px;
  font-size: 15px;
  font-weight: bold;
  font-family: mulish;
`;

interface IInput {
  isError?: boolean;
  isSuccess?: boolean;
}
export const Input = styled("input")<IInput>`
  width: 100%;
  border: none;
  border-left: none;
  padding-left: 5px;
  font-size: 12px;
  background-color: white;

  &:disabled {
    box-shadow: none;
    cursor: not-allowed;
    outline: none;
  }

  &:focus:not(:disabled) {
    outline: none;
  }
`;

export const InputWrapper = styled("div")<{
  isError?: boolean;
  isSuccess?: boolean;
}>`
  border: ${(props) => (props.isError ? "1px solid red" : "1px solid #707070")};
  border-radius: 6px;
  width: 100%;
  display: flex;
  height: auto;
`;

export const WrapperIcon = styled(Row)`
  padding: 10px;
  width: 40px;
  height: auto;
  color: ${(props) => props.theme.textColors.primary};
`;

InputWrapper.defaultProps = {
  isError: false,
};

export const ErrorWrapper = styled(Row)`
  margin: 8px 0px;
`;

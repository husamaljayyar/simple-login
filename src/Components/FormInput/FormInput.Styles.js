import styled from "styled-components";
import { Field, Form } from "formik";

export const Forms = styled(Form)`
  height: 400px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Input = styled(Field)`
  outline: none;
  padding: 0 10px;
  height: 45px;
  width: 400px;
  border-radius: 50px;
  opacity: 1;
  font-size: 18px;
  color: #707070;
  margin-bottom: 10px;
  border: 1px solid #242424;
  ${(props) => props.MarginLeft && ` margin-left: 50px`};
  &::placeholder {
    outline: none;
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 600px) {
    width: auto;
  }
`;

export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;

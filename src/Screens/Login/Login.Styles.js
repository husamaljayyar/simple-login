import styled, { keyframes } from "styled-components";
import { FlexColumn, InnerSection } from "../../App.Styles";

export const InnerDiv = styled(InnerSection)`
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: white;
`;

export const FormBox = styled(FlexColumn)`
  width: 450px;
  height: 400px;

  align-items: center;
  justify-content: space-between;

  border-radius: 10px;
  background: #fff;
`;

const jump = keyframes`
  from{
    transform: translateY(0)
  }
  to{
    transform: translateY(-3px)
  }
`;
export const Button = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ebf5fb;
  background: #2e7dcb;
  width: 100%;
  height: 45px;
  border-radius: 50px;
  border: none;
  font-size: 24px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease-out;
  :hover {
    background: #09567e;
    animation: ${jump} 0.2s ease-out forwards;
  }
`;

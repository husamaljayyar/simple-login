import styled from "styled-components";

export const Cards = styled.section`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 300px;
  height: auto;
  min-height: 340px;
  margin: 20px;
  border-radius: 10px 10px 0 0;
  :hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
export const ImageCard = styled.img`
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: auto;
`;

export const InnerCard = styled.section`
  margin: 15px;
`;

export const TitleCard = styled.h4`
  width: auto;
  height: auto;
  text-align: center;
`;

export const Paragraph = styled.p`
  width: auto;
  height: auto;
`;

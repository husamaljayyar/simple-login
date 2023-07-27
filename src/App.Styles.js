import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0 auto;
  overflow: hidden;
`;

export const Typography = styled.p`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  margin: 40px 0;
`;

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  background: ${(props) => props.Background};
`;

export const FlexRow = styled(FlexBox)`
  flex-direction: row;
`;

export const FlexColumn = styled(FlexBox)`
  flex-direction: column;
`;

export const InnerSection = styled(FlexColumn)`
  max-width: 1640px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
`;

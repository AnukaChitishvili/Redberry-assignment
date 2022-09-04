import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 390px) {
    padding: 0 16px 38px;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 34px;
  color: #000000;
  margin-top: 64px;
  font-family: "helvetica bold";
  @media (max-width: 390px) {
    font-size: 16px;
    color: #232323;
    position: absolute;
    top: -38px;
  }
`;

export const Img = styled.img`
  width: 577px;
  height: 342px;
  @media (max-width: 390px) {
    width: 358px;
    height: 191px;
  }
`;

export const ContentWrapper = styled.div`
  margin-top: 84px;
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const EmployeeSection = styled.section`
  display: flex;
  margin-left: 68px;
  @media (max-width: 390px) {
    margin-left: 14px;
    margin-top: 32px;
  }
`;

export const LaptopSection = styled.section`
  display: flex;
  width: 100%;
  margin-top: 55px;
  @media (max-width: 390px) {
    margin-left: 5px;
    margin-top: ${({ noMargin }) => (noMargin ? "0" : "55px")};
  }
`;

export const Border = styled.div`
  border: 1px solid #a5a5a5;
  margin-top: 64px;
`;

export const Title = styled.h3`
  color: #2e2e2e;
  font-size: 22px;
  font-family: "helvetica medium";
  @media (max-width: 390px) {
    font-size: 14px;
    margin-top: 0;
  }
`;

export const Description = styled.p`
  color: #797979;
  font-size: 22px;
  font-family: "helvetica regular";
  @media (max-width: 390px) {
    font-size: 14px;
    margin-top: 0;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 390px) {
    margin-left: 5px;
  }
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  @media (max-width: 390px) {
    margin-left: ${({ isLaptop }) => (isLaptop ? "40px" : "100px")};
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 390px) {
    flex-direction: ${({ isRow }) => (isRow ? "row" : "column")};
    align-items: ${({ isStart }) => (isStart ? "flex-start" : "center")};
  }
`;
export const MiddleSection = styled.div`
  display: flex;
  align-items: flex-start;
  @media (max-width: 390px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const CpuDescriptionWrapper = styled.div`
  margin-left: 75px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const LastSectionDescriptionWrapper = styled.div`
  margin-left: 56px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

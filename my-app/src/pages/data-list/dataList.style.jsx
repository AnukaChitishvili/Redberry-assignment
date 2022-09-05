import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 1178px;
  max-width: 1178px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 390px) {
    flex-direction: column;
    width: 358px;
  }
`;

export const ContentTitle = styled.h2`
  font-size: 36px;
  color: #000000;
  margin-top: 64px;
  font-family: "helvetica medium";
  @media (max-width: 390px) {
    font-size: 16px;
    color: #232323;
    margin-top: 25px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

export const ContentWrapper = styled.div`
  width: 563px;
  height: 205px;
  background-color: #eafaff;
  border: 1px solid #aed1ea;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ noMargin }) => (noMargin ? "0" : "52px")};
  @media (max-width: 390px) {
    width: 358px;
    height: 123px;
  }
`;

export const Img = styled.img`
  width: 266px;
  height: 178px;
  @media (max-width: 390px) {
    width: 164px;
    height: 109px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 28px;
`;

export const Title = styled.div`
  font-size: 18px;
  font-family: "helvetica medium";
  color: #2e2e2e;
  @media (max-width: 390px) {
    font-size: 14px;
  }
`;

export const LinkTag = styled.a`
  margin-top: 20px;
  color: #4386a9;
  font-size: 16px;
  font-family: "helvetica regular";
  @media (max-width: 390px) {
    font-size: 14px;
  }
`;

export const Paragraph = styled.p`
  margin: 0;
  margin-top: 18px;
  color: #2e2e2e;
  font-size: 18px;
  font-family: "helvetica regular";
`;

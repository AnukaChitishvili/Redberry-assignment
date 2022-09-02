import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (max-width: 390px) {
    padding: 0 16px 35px;
  }
`;

export const LandingImage = styled.img`
  margin-top: 10px;
  width: 781px;
  height: 482px;
  @media (max-width: 390px) {
    display: none;
  }
`;

export const LandingImageMobile = styled.img`
  width: 268.58px;
  height: 349px;
  margin-top: 100px;
  @media (min-width: 1920px) {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: ${({ isFirst }) => (isFirst ? "123px" : "26px")};
  margin-bottom: ${({ isFirst }) => (isFirst ? "0" : "147px")};
  width: 387px;
  @media (max-width: 390px) {
    margin-top: ${({ isFirst }) => (isFirst ? "123px" : "16px")};
  }
`;

export const LogoWrapper = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

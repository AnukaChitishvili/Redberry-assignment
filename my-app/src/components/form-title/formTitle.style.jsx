import styled from "styled-components";

export const FormTitleContainer = styled.div`
  display: flex;
  @media (max-width: 390px) {
    display: none;
  }
`;

export const TitleStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  color: #232323;
  font-family: "helvetica bold";
  font-size: 20px;
  cursor: pointer;
  margin-left: ${({ isSecond }) => (isSecond ? "66px" : "0")};
  @media (max-width: 390px) {
    font-size: 16px;
    display: ${({ isSecond }) => (isSecond ? "none" : "unset")};
  }
`;

export const Step = styled.div`
  width: 185px;
  height: 2px;
  background-color: #232323;
  margin: 15px 0 40px;
  @media (max-width: 390px) {
    display: none;
  }
`;

// Mobile

export const TitleStepWrapperMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 17px;
  @media (min-width: 1920px) {
    display: none;
  }
`;

export const StepMobile = styled.div`
  color: #898989;
  font-size: 14px;
  margin: 5px 0 20px;
  @media (min-width: 1920px) {
    display: none;
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  padding: 157px 347px 197px;
  position: relative;
  @media (max-width: 390px) {
    padding: 0;
    padding-top: 84px;
  }
`;

export const FormContainer = styled.form`
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 390px) {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    margin-top: 20px;
  }
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background-color: #ffffff;
  width: 1226px;
  border-radius: 18px;
  padding: 88px 150px 44px;
  @media (max-width: 390px) {
    padding: 38px 16px 58px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

export const SelectInputWrapper = styled.div`
  margin-top: 36px;
  width: 100%;
  @media (max-width: 390px) {
    margin-top: 15px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  margin-left: ${({ isSecond }) => (isSecond ? "20px" : "0")};
  @media (max-width: 390px) {
    margin-left: 0;
    margin-top: 15px;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: "helvetica medium";
  color: ${({ hasError }) => (hasError ? "#E52F2F" : "#000000")};
  margin-bottom: 20px;
  @media (max-width: 390px) {
    margin-bottom: 10px;
  }
`;

export const ButtonWrapper = styled.div`
  margin-top: 87px;
  width: 176px;
  @media (max-width: 390px) {
    margin-top: 35px;
    width: 132px;
    height: 46px;
  }
`;

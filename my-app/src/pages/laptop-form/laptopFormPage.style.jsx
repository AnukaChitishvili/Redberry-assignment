import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f6f6;
  width: 100%;
  height: 100%;
  padding: 96px 16px 200px;
  position: relative;
  @media (max-width: 390px) {
    padding-bottom: 0;
  }
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  padding: 68px 174px 45px;
  @media (max-width: 390px) {
    width: 100%;
    padding: 29px 16px 48px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const UploadContainer = styled.div`
  background-color: #f6f6f6;
  width: 878px;
  height: 423px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  border-style: dashed;
  border-color: #4386a9;
  @media (max-width: 390px) {
    width: unset;
  }
`;

export const UploadText = styled.p`
  color: #4386a9;
  font-size: 20px;
  font-family: "helvetica medium";
  width: 195px;
`;

export const ButtonWrapper = styled.div`
  width: 233px;
`;

export const Label = styled.label`
  font-size: 18px;
  font-family: 'helvetica medium'
  color: #000000;
  margin-bottom: ${({ isLast }) => (isLast ? "0" : "20px")};
  @media (max-width: 390px) {
  }
`;

export const Border = styled.div`
  border: 1px solid #c7c7c7;
  margin-top: 50px;
  @media (max-width: 390px) {
    display: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: ${({ hasRadioInput }) =>
    hasRadioInput ? "flex-start" : "center"};
  margin-top: 50px;
  @media (max-width: 390px) {
    flex-direction: column;
  }
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${({ hasMargin }) => (hasMargin ? "40px" : "0")};
  width: ${({ hasFixedWidth }) => (hasFixedWidth ? "407px" : "100%")};
  @media (max-width: 390px) {
    margin-left: 0;
    margin-top: ${({ hasMargin }) => (hasMargin ? "32px" : "0")};
  }
`;

export const RadioInputWrapper = styled.div`
  display: flex;
  margin-top: 31px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 97px;
`;

export const BackButton = styled.button`
  color: #62a1eb;
  background-color: transparent;
  border: none;
  font-size: 18px;
`;

export const SelectInputWrapper = styled.div`
  margin-left: ${({ isSecond }) => (isSecond ? "0" : "63px")};
  width: 100%;
  margin-bottom: ${({ isFirst }) => (isFirst ? "-24px" : "-28px")};
  margin-bottom: -24px;
  @media (max-width: 390px) {
    margin-left: 0;
    margin-top: 10px;
    margin-bottom: ${({ isSecond }) => (isSecond ? "-11px" : "0")};
  }
`;

export const RadioInputContainer = styled.div`
  margin-left: 63px;
  @media (max-width: 390px) {
    margin-left: 0;
    margin-top: 28px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const RadioLabel = styled.label`
  font-size: 18px;
  font-family: "helvetica medium";
  color: #000000;
  margin-left: 8px;
`;

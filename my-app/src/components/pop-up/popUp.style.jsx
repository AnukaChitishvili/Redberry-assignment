import styled from "styled-components";

export const Layer = styled.div`
  background-color: #4a4a4a;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopUpContainer = styled.div`
  width: 847px;
  height: 537px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding-bottom: 44px;
  @media (max-width: 390px) {
    height: 100%;
    width: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
`;

export const Title = styled.p`
  color: #292929;
  font-size: 25px;
  margin: 0;
  /* font-family: */
`;

export const ButtonWrapper = styled.div`
  width: 297px;
  margin-top: 79px;
  @media (max-width: 390px) {
    margin-top: 159px;
  }
`;

export const SubTitle = styled.button`
  color: #0089a7;
  font-size: 20px;
  margin-top: 28px;
  border: none;
  background: none;
  @media (max-width: 390px) {
    margin-top: 38px;
  }
  /* font-family:  */
`;

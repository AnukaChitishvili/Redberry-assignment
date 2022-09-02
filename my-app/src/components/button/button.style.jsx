import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  height: 60px;
  background-color: #62a1eb;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-size: 20px;
  font-family: "helvetica medium";
  @media (max-width: 390px) {
    font-size: 18px;
    border-radius: 8px;
  }
`;

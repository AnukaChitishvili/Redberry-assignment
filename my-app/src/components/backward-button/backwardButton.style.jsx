import styled from "styled-components";

export const Circle = styled.button`
  background-color: #d9d9d9;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 53px;
  height: 53px;
  position: absolute;
  top: 53px;
  left: 70px;
  cursor: pointer;
  @media (max-width: 390px) {
    background-color: transparent;
    top: 10px;
    left: -1px;
  }
`;

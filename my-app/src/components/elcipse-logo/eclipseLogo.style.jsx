import styled from "styled-components";

export const ImgContainer = styled.img`
  position: absolute;
  bottom: 45px;
  @media (max-width: 390px) {
    display: none;
  }
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
`;

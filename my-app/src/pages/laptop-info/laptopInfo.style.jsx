import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContentTitle = styled.h2`
  font-size: 34px;
  color: #000000;
  margin-top: 64px;
  font-family: "helvetica bold";
  @media (max-width: 390px) {
    font-size: 16px;
    color: #232323;
    margin-top: 25px;
  }
`;

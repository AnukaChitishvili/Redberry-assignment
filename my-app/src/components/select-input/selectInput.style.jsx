import styled from "styled-components";

export const SelectInputContainer = styled.select`
  width: 100%;
  background: #ebebeb;
  border: ${({ error }) => (error ? "1px solid #E52F2F" : "none")};
  border-radius: 8px;
  padding: 13px 16px 13px;
  font-size: 18px;
  color: #000000;
  font-family: "helvetica medium";
`;

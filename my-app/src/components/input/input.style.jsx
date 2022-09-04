import styled from "styled-components";

export const InputContainer = styled.input`
  border-radius: 8px;
  padding: 16px 19px;
  border: ${({ error }) => (error ? "1px solid #E52F2F" : "1px solid #62A1EB")};
  ::placeholder {
    color: #2e2e2e;
    font-family: "helvetica regular";
  }
`;

export const ErrorMessage = styled.p`
  color: ${({ error }) => (error ? "#E52F2F" : " #2e2e2e;")};
  font-size: 14px;
  margin-bottom: 0;
  font-family: "helvetica light";
`;

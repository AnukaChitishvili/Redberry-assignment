import styled from "styled-components";

export const InputContainer = styled.input`
  border-radius: 8px;
  padding: 16px 19px;
  border: 1.8px solid #8ac0e2;
  ::placeholder {
    color: #2e2e2e;
    font-family: "helvetica regular";
  }
`;

export const ErrorMessage = styled.p`
  color: #2e2e2e;
  font-size: 14px;
  margin-bottom: 0;
  font-family: "helvetica light";
`;

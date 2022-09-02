import styled from "styled-components";

export const InputContainer = styled.input`
  margin-left: ${({ isSecond }) => (isSecond ? "60px" : "0")};
`;

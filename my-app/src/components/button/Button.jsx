import { ButtonContainer } from "./button.style";

const Button = ({ children, onClick, type }) => {
  return (
    <ButtonContainer onClick={onClick} type={type}>
      {children}
    </ButtonContainer>
  );
};

export default Button;

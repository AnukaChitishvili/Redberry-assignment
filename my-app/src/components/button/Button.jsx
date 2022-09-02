import { ButtonContainer } from "./button.style";

const Button = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;

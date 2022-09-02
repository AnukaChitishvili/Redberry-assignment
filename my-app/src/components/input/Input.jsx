import { InputContainer, ErrorMessage } from "./input.style";

const Input = ({
  placeholder,
  isSecond,
  value,
  onChange,
  name,
  onBlur = () => {},
  type = "text",
  error,
}) => {
  return (
    <>
      <InputContainer
        placeholder={placeholder}
        isSecond={isSecond}
        value={value}
        onChange={onChange}
        name={name}
        onBlur={onBlur}
        type={type}
      />
      <ErrorMessage>{error}</ErrorMessage>
    </>
  );
};

export default Input;

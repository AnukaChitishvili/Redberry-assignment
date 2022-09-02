import { SelectInputContainer } from "./selectInput.style";

const SelectInput = ({ options, title }) => {
  return (
    <SelectInputContainer name="positions">
      {options.map((option) => (
        <option key={option.id}>{title}</option>
      ))}
    </SelectInputContainer>
  );
};

export default SelectInput;

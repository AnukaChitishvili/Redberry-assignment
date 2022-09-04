import { SelectInputContainer } from "./selectInput.style";

const SelectInput = ({ name, options, title, setFieldValue, value }) => {
  return (
    <SelectInputContainer
      name={name}
      defaultValue=""
      onChange={setFieldValue}
      value={value}
    >
      <option value="" disabled hidden>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </SelectInputContainer>
  );
};

export default SelectInput;

import { SelectInputContainer } from "./selectInput.style";

const SelectInput = ({
  name,
  options,
  valueFieldName = "id",
  title,
  setFieldValue,
  value,
  error,
}) => {
  return (
    <SelectInputContainer
      name={name}
      defaultValue=""
      onChange={setFieldValue}
      value={value}
      error={error}
    >
      <option value="" disabled hidden>
        {title}
      </option>
      {options.map((option) => (
        <option key={option.id} value={option[valueFieldName]}>
          {option.name}
        </option>
      ))}
    </SelectInputContainer>
  );
};

export default SelectInput;

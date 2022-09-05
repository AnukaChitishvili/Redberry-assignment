import {
  FormTitleContainer,
  TitleStepWrapper,
  Title,
  Step,
  TitleStepWrapperMobile,
  StepMobile,
} from "./formTitle.style";

const FormTitle = ({ pathName }) => {
  return (
    <>
      <FormTitleContainer>
        <TitleStepWrapper>
          <Title>თანამშრომლის ინფო</Title>
          {pathName === "/employees" && <Step />}
          <StepMobile>1/2</StepMobile>
        </TitleStepWrapper>
        <TitleStepWrapper>
          <Title isSecond>ლეპტოპის მახასიათებლები</Title>
          {pathName === "/laptops" && <Step />}
        </TitleStepWrapper>
      </FormTitleContainer>
      <TitleStepWrapperMobile>
        {pathName === "/employees" && <Title>თანამშრომლის ინფო</Title>}
        {pathName === "/employees" && <StepMobile>1/2</StepMobile>}
        {pathName === "/laptops" && <Title>ლეპტოპის მახასიათებლები</Title>}
        {pathName === "/laptops" && <StepMobile>2/2</StepMobile>}
      </TitleStepWrapperMobile>
    </>
  );
};

export default FormTitle;

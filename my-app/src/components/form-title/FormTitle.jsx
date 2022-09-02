import {
  FormTitleContainer,
  TitleStepWrapper,
  Title,
  Step,
  TitleStepWrapperMobile,
  StepMobile,
} from "./formTitle.style";

const FormTitle = () => {
  return (
    <>
      <FormTitleContainer>
        <TitleStepWrapper>
          <Title>თანამშრომლის ინფო</Title>
          <Step />
          <StepMobile>1/2</StepMobile>
        </TitleStepWrapper>
        <Title isSecond>ლეპტოპის მახასიათებლები</Title>
      </FormTitleContainer>
      <TitleStepWrapperMobile>
        <Title>თანამშრომლის ინფო</Title>
        <StepMobile>1/2</StepMobile>
      </TitleStepWrapperMobile>
    </>
  );
};

export default FormTitle;

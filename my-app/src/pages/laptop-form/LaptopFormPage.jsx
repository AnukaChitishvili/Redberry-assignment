import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Container,
  FormContainer,
  UploadContainer,
  UploadText,
  ButtonWrapper,
  Label,
  Border,
  InputContainer,
  InputsWrapper,
  RadioInputWrapper,
  ButtonContainer,
  BackButton,
  SelectInputWrapper,
  RadioInputContainer,
  Wrapper,
  RadioLabel,
} from "./laptopFormPage.style";
import BackwardButton from "../../components/backward-button/BackwardButton";
import FormTitle from "../../components/form-title/FormTitle";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import SelectInput from "../../components/select-input/SelectInput";
// import EclipseLogo from "../../components/eclipse-logo/EcliplseLogo";
import PopUp from "../../components/pop-up/PopUp";
import RadioInput from "../../components/radio-input/RadioInput";

const validationSchema = Yup.object({
  laptop_name: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=]*$/,
      "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
    )
    .required("ველის შევსება სავალდებულოა"),
  // laptop_image:
  CPU1: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  CPU2: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")

    .required("ველის შევსება სავალდებულოა"),
  laptopRam: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  price: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
});

const LaptopFormPage = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  // const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  const [cpu, setCpu] = useState([]);

  const formik = useFormik({
    initialValues: {
      laptopName: "",
      CPU1: "",
      CPU2: "",
      laptopRam: "",
      date: "",
      price: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      await fetch(smth, {
        method: "POST",
        body: JSON.stringify(values),
      });
    },
  });

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/brands")
      .then((res) => res.json())
      .then((res) => setBrands(res.data));
    fetch("https://pcfy.redberryinternship.ge/api/cpus")
      .then((res) => res.json())
      .then((res) => setCpu(res.data));
  }, []);

  // const navigateToHomepage = () => {
  //   navigate("/");
  // };

  // const navigateToEmployeesPage = () => {
  //   navigate("/employees");
  // };

  // const togglePopUp = () => {
  //   setOpenPopUp((prevState) => !prevState);
  //   navigate("/success");
  // };

  const smth = "https://pcfy.redberryinternship.ge/api/laptop/create";

  return (
    <Container>
      <BackwardButton
      // onClick={navigateToHomepage}
      />
      <FormTitle />
      <FormContainer>
        <UploadContainer>
          <UploadText>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadText>
          <ButtonWrapper>
            <Button>ატვირთე</Button>
          </ButtonWrapper>
        </UploadContainer>
        <InputContainer>
          <InputsWrapper>
            <Label>ლეპტოპის სახელი</Label>
            <Input
              value={formik.values.laptopName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="ლეპტოპის სახელი"
              name="laptopName"
              error={
                formik.errors.laptopName && formik.touched.laptopName
                  ? formik.errors.laptopName
                  : null
              }
            />
          </InputsWrapper>
          <SelectInputWrapper>
            <SelectInput title="ლეპტოპის ბრენდი" options={brands} />
          </SelectInputWrapper>
        </InputContainer>
        <Border />
        <InputContainer>
          <SelectInputWrapper isSecond>
            <SelectInput title="CPU" options={cpu} />
          </SelectInputWrapper>
          <InputsWrapper hasMargin>
            <Label>CPU-ს ბირთვი</Label>
            <Input
              value={formik.values.CPU1}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="14"
              name="CPU1"
              error={
                formik.errors.CPU1 && formik.touched.CPU1
                  ? formik.errors.CPU1
                  : null
              }
            />
          </InputsWrapper>
          <InputsWrapper hasMargin>
            <Label>CPU-ს ნაკადი</Label>
            <Input
              value={formik.values.CPU2}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="350"
              name="CPU2"
              error={
                formik.errors.CPU2 && formik.touched.CPU2
                  ? formik.errors.CPU2
                  : null
              }
            />
          </InputsWrapper>
        </InputContainer>
        <InputContainer hasRadioInput>
          <InputsWrapper hasFixedWidth>
            <Label>ლეპტოპის RAM (GB)</Label>
            <Input
              value={formik.values.laptopRam}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="16"
              name="laptopRam"
              error={
                formik.errors.laptopRam && formik.touched.laptopRam
                  ? formik.errors.laptopRam
                  : null
              }
            />
          </InputsWrapper>
          <RadioInputContainer>
            <Label>მეხსიერების ტიპი</Label>
            <RadioInputWrapper isFirst>
              <Wrapper>
                <RadioInput />
                <RadioLabel>SSD</RadioLabel>
              </Wrapper>
              <Wrapper>
                <RadioInput isSecond />
                <RadioLabel>HDD</RadioLabel>
              </Wrapper>
            </RadioInputWrapper>
          </RadioInputContainer>
        </InputContainer>
        <Border />
        <InputContainer>
          <InputsWrapper>
            <Label>შეძენის რიცხვი</Label>
            <Input
              value={formik.values.date}
              onChange={formik.handleChange}
              // placeholder="date"
              name="date"
              onBlur={formik.onBlur}
              type="date"
            />
          </InputsWrapper>
          <InputsWrapper hasMargin>
            <Label>ლეპტოპის ფასი</Label>
            <Input
              value={formik.values.price}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="0000"
              name="price"
              error={
                formik.errors.price && formik.touched.price
                  ? formik.errors.price
                  : null
              }
            />
          </InputsWrapper>
        </InputContainer>
        <InputContainer>
          <InputsWrapper>
            <Label isLast>ლეპტოპის მდგომარეობა</Label>
            <RadioInputWrapper>
              <Wrapper>
                <RadioInput />
                <RadioLabel>ახალი</RadioLabel>
              </Wrapper>
              <Wrapper>
                <RadioInput isSecond />
                <RadioLabel>ძველი</RadioLabel>
              </Wrapper>
            </RadioInputWrapper>
          </InputsWrapper>
        </InputContainer>
        <ButtonContainer>
          <ButtonWrapper>
            <BackButton
            // onClick={navigateToEmployeesPage}
            >
              უკან
            </BackButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button type="submit">დამახსვორება</Button>
          </ButtonWrapper>
        </ButtonContainer>
      </FormContainer>
      {openPopUp && (
        <PopUp
        // closePopUp={togglePopUp}
        />
      )}
      {/* <EclipseLogo /> */}
    </Container>
  );
};

export default LaptopFormPage;

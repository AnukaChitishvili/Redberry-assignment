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
import EclipseLogo from "../../components/elcipse-logo/EclipseLogo";
import PopUp from "../../components/pop-up/PopUp";
import RadioInput from "../../components/radio-input/RadioInput";

const validationSchema = Yup.object({
  laptop_name: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=]*$/,
      "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
    )
    .required("ველის შევსება სავალდებულოა"),
  // laptop_image: ,
  // laptop_brand_id: ,
  // laptop_cpu: ,
  laptop_cpu_cores: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_cpu_threads: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_ram: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  // laptop_hard_drive_type: "",
  // laptop_state: "",
  // laptop_purchase_date: "",
  laptop_price: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
});

const LaptopFormPage = () => {
  const [openPopUp, setOpenPopUp] = useState(false);
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  const [cpu, setCpu] = useState([]);

  const address = "https://pcfy.redberryinternship.ge/api/laptop/create";

  const formik = useFormik({
    initialValues: {
      laptop_name: "",
      laptop_image: "",
      laptop_brand_id: "",
      laptop_cpu: "",
      laptop_cpu_cores: "",
      laptop_cpu_threads: "",
      laptop_ram: "",
      laptop_hard_drive_type: "",
      laptop_state: "",
      laptop_purchase_date: "",
      laptop_price: "",
    },
    validationSchema,
    onSubmit: async () => {
      const values = localStorage.getItem("values");
      const parsed = JSON.parse(values);

      const body = JSON.stringify({
        ...parsed,
        laptop_state: "used",
        laptop_hard_drive_type: "HDD",
        token: "37a484885e326bfbc5e85e98dbe800fd",
      });

      fetch(address, {
        method: "POST",
        body: body,
      })
        .then((res) => res.json())
        .then((res) => console.log("res", res));
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

  useEffect(() => {
    const values = localStorage.getItem("values");
    if (values) {
      const parsed = JSON.parse(values);
      formik.setValues(parsed);
    }
  }, []);

  const handleInputChange = async (e) => {
    await formik.setFieldValue(e.target.name, e.target.value);
    const previousValues = JSON.parse(localStorage.getItem("values"));

    localStorage.setItem(
      "values",
      JSON.stringify({
        ...previousValues,
        ...formik.values,
        [e.target.name]: e.target.value,
      })
    );
  };

  const navigateToHomepage = () => {
    navigate("/");
  };

  const navigateToEmployeesPage = () => {
    navigate("/employees");
  };

  const togglePopUp = () => {
    setOpenPopUp((prevState) => !prevState);
    navigate("/success");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToHomepage} />
      <FormTitle />
      <FormContainer onSubmit={formik.handleSubmit}>
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
              value={formik.values.laptop_name}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder="ლეპტოპის სახელი"
              name="laptop_name"
              error={
                formik.errors.laptop_name && formik.touched.laptop_name
                  ? formik.errors.laptop_name
                  : null
              }
            />
          </InputsWrapper>
          <SelectInputWrapper isFirst>
            <SelectInput
              value={formik.values.laptop_brand_id}
              name="laptop_brand_id"
              title="ლეპტოპის ბრენდი"
              options={brands}
              setFieldValue={handleInputChange}
            />
          </SelectInputWrapper>
        </InputContainer>
        <Border />
        <InputContainer>
          <SelectInputWrapper isSecond>
            <SelectInput
              title="CPU"
              options={cpu}
              value={formik.values.laptop_cpu}
              name="laptop_cpu"
              setFieldValue={handleInputChange}
            />
          </SelectInputWrapper>
          <InputsWrapper hasMargin>
            <Label>CPU-ს ბირთვი</Label>
            <Input
              value={formik.values.laptop_cpu_cores}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder="14"
              name="laptop_cpu_cores"
              error={
                formik.errors.laptop_cpu_cores &&
                formik.touched.laptop_cpu_cores
                  ? formik.errors.laptop_cpu_cores
                  : null
              }
            />
          </InputsWrapper>
          <InputsWrapper hasMargin>
            <Label>CPU-ს ნაკადი</Label>
            <Input
              value={formik.values.laptop_cpu_threads}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder="350"
              name="laptop_cpu_threads"
              error={
                formik.errors.laptop_cpu_threads &&
                formik.touched.laptop_cpu_threads
                  ? formik.errors.laptop_cpu_threads
                  : null
              }
            />
          </InputsWrapper>
        </InputContainer>
        <InputContainer hasRadioInput>
          <InputsWrapper hasFixedWidth>
            <Label>ლეპტოპის RAM (GB)</Label>
            <Input
              value={formik.values.laptop_ram}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder="16"
              name="laptop_ram"
              error={
                formik.errors.laptop_ram && formik.touched.laptop_ram
                  ? formik.errors.laptop_ram
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
              value={formik.values.laptop_purchase_date}
              onChange={handleInputChange}
              // placeholder="date"
              name="laptop_purchase_date"
              onBlur={formik.onBlur}
              type="date"
            />
          </InputsWrapper>
          <InputsWrapper hasMargin>
            <Label>ლეპტოპის ფასი</Label>
            <Input
              value={formik.values.laptop_price}
              onChange={handleInputChange}
              onBlur={formik.handleBlur}
              placeholder="0000"
              name="laptop_price"
              error={
                formik.errors.laptop_price && formik.touched.laptop_price
                  ? formik.errors.laptop_price
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
            <BackButton onClick={navigateToEmployeesPage}>უკან</BackButton>
          </ButtonWrapper>
          <ButtonWrapper>
            <Button type="submit">დამახსოვრება</Button>
          </ButtonWrapper>
        </ButtonContainer>
      </FormContainer>
      {openPopUp && <PopUp closePopUp={togglePopUp} />}
      <EclipseLogo />
    </Container>
  );
};

export default LaptopFormPage;

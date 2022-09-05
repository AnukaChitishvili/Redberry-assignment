import { useState, useEffect, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate, useLocation } from "react-router-dom";
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

const validationSchema = Yup.object({
  laptop_name: Yup.string()
    .matches(
      /^[a-zA-Z0-9!@#$%^&*()_+=]*$/,
      "ლათინური ასოები, ციფრები, !@#$%^&*()_+= "
    )
    .required("ველის შევსება სავალდებულოა"),
  laptop_cpu_cores: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_cpu_threads: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
  laptop_ram: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),

  laptop_price: Yup.string()
    .matches(/^[0-9]*$/, "მხოლოდ ციფრები")
    .required("ველის შევსება სავალდებულოა"),
});

const LaptopFormPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [brands, setBrands] = useState([]);
  const [cpu, setCpu] = useState([]);

  const address = "https://pcfy.redberryinternship.ge/api/laptop/create";

  const formik = useFormik({
    initialValues: {
      laptop_name: "",
      laptop_image: null,
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
    onSubmit: async (values) => {
      const storedData = localStorage.getItem("values");
      const parsedStoredData = JSON.parse(storedData);

      const formData = new FormData();

      Object.entries(parsedStoredData).map(([key, value]) => {
        if (key === "position_id") {
          formData.append(key, +value);
        } else {
          formData.append(key, value);
        }
      });

      formData.append("token", "1c6395235ac08f3fa0fa672dbb38c029");
      formData.append("laptop_image", values.laptop_image);

      fetch(address, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.errors) {
            localStorage.removeItem("values");
            navigate("/success");
          }
        })
        .catch((err) => console.log("err", err.message));
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
    navigate("/laptops");
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length) {
        formik.setFieldValue("laptop_image", acceptedFiles[0]);
      }
    },
    [formik]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Container>
      <BackwardButton onClick={navigateToHomepage} />
      <FormTitle pathName={location.pathname} />
      <FormContainer onSubmit={formik.handleSubmit}>
        <UploadContainer {...getRootProps()}>
          <UploadText>ჩააგდე ან ატვირთე ლეპტოპის ფოტო</UploadText>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <ButtonWrapper>
              <Button type="button">ატვირთე</Button>
            </ButtonWrapper>
          )}
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
              valueFieldName="name"
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
                <input
                  type="radio"
                  value="SSD"
                  name="laptop_hard_drive_type"
                  onChange={handleInputChange}
                  checked={formik.values.laptop_hard_drive_type === "SSD"}
                />
                <RadioLabel>SSD</RadioLabel>
              </Wrapper>
              <Wrapper hasMargin>
                <input
                  type="radio"
                  value="HDD"
                  onChange={handleInputChange}
                  name="laptop_hard_drive_type"
                  checked={formik.values.laptop_hard_drive_type === "HDD"}
                />
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
              placeholder="date"
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
                <input
                  type="radio"
                  value="new"
                  name="laptop_state"
                  onChange={handleInputChange}
                  checked={formik.values.laptop_state === "new"}
                />
                <RadioLabel>ახალი</RadioLabel>
              </Wrapper>
              <Wrapper hasMargin>
                <input
                  type="radio"
                  value="used"
                  name="laptop_state"
                  onChange={handleInputChange}
                  checked={formik.values.laptop_state === "used"}
                />
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
      {location.pathname === "/success" && <PopUp closePopUp={togglePopUp} />}
      <EclipseLogo />
    </Container>
  );
};

export default LaptopFormPage;

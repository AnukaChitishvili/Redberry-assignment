import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Container,
  FormContainer,
  FormWrapper,
  InputContainer,
  SelectInputWrapper,
  InputWrapper,
  Label,
  ButtonWrapper,
} from "./employeeFormPage.style";
import FormTitle from "../../components/form-title/FormTitle";
import Input from "../../components/input/Input";
import SelectInput from "../../components/select-input/SelectInput";
import Button from "../../components/button/Button";
import BackwardButton from "../../components/backward-button/BackwardButton";
import EclipseLogo from "../../components/elcipse-logo/EclipseLogo";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .matches(/^[ა-ჰ]*$/, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("ველის შევსება სავალდებულოა"),
  surname: Yup.string()
    .min(3, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .matches(/^[ა-ჰ]*$/, "მინიმუმ ორი სიმბოლო, ქართული ასოები")
    .required("ველის შევსება სავალდებულოა"),
  email: Yup.string()
    .matches(/[a-z0-9]+@redberry.ge/, "უნდა მთავრდებოდეს @redberry.ge-თი")
    .required("ველის შევსება სავალდებულოა"),
  phonenumber: Yup.string()
    .matches(
      /^(\+?995)?(79\d{7}|5\d{8})$/,
      "უნდა აკმაყოფილებდეს ქართული ნომრის ფორმატს"
    )
    .required("ველის შევსება სავალდებულოა"),
});

const EmployeeInfo = () => {
  const navigate = useNavigate();
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phonenumber: "",
    },
    validationSchema,
    // onSubmit: async (values) => {
    //   await fetch(smth, {
    //     method: "POST",
    //     body: JSON.stringify(values),
    //   });
    //   navigateToLaptopsPage();
    // },
  });

  const navigateToHomepage = () => {
    navigate("/");
  };

  const navigateToLaptopsPage = () => {
    navigate("/laptops");
  };

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((res) => res.json())
      .then((res) => setTeams(res.data));
    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((res) => res.json())
      .then((res) => setPositions(res.data));
  }, []);

  return (
    <Container>
      <BackwardButton onClick={navigateToHomepage} />
      <FormTitle />
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <InputContainer>
            <InputWrapper>
              <Label>სახელი</Label>
              <Input
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                onBlur={formik.onBlur}
                placeholder="სახელი"
                error={
                  formik.errors.name && formik.touched.name
                    ? formik.errors.name
                    : null
                }
              />
            </InputWrapper>
            <InputWrapper isSecond>
              <Label>გვარი</Label>
              <Input
                value={formik.values.surname}
                onChange={formik.handleChange}
                name="surname"
                onBlur={formik.onBlur}
                placeholder="გვარი"
                error={
                  formik.errors.surname && formik.touched.surname
                    ? formik.errors.surname
                    : null
                }
              />
            </InputWrapper>
          </InputContainer>
          <SelectInputWrapper>
            <SelectInput options={teams} title="თიმი" />
          </SelectInputWrapper>
          <SelectInputWrapper>
            <SelectInput options={positions} title="პოზიცია" />
          </SelectInputWrapper>
          <InputWrapper>
            <Label>მეილი</Label>
            <Input
              value={formik.values.email}
              onChange={formik.handleChange}
              name="email"
              onBlur={formik.onBlur}
              type="email"
              placeholder="მეილი"
              error={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : null
              }
            />
          </InputWrapper>
          <InputWrapper>
            <Label>ტელეფონის ნომერი</Label>
            <Input
              value={formik.values.phonenumber}
              onChange={formik.handleChange}
              name="phonenumber"
              onBlur={formik.onBlur}
              placeholder="ტელეფონის ნომერი"
              error={
                formik.errors.phonenumber && formik.touched.phonenumber
                  ? formik.errors.phonenumber
                  : null
              }
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button type="submit">შემდეგი</Button>
          </ButtonWrapper>
        </FormWrapper>
      </FormContainer>
      <EclipseLogo onClick={navigateToHomepage} />
    </Container>
  );
};

export default EmployeeInfo;

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  position_id: Yup.string().required(""),
  team_id: Yup.string().required(""),
  email: Yup.string()
    .matches(/[a-z0-9]+@redberry.ge/, "უნდა მთავრდებოდეს @redberry.ge-თი")
    .required("ველის შევსება სავალდებულოა"),
  phone_number: Yup.string()
    .matches(
      /^(\+?995)?(79\d{7}|5\d{8})$/,
      "უნდა აკმაყოფილებდეს ქართული ნომრის ფორმატს"
    )
    .required("ველის შევსება სავალდებულოა"),
});

const EmployeeInfo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [teams, setTeams] = useState([]);
  const [positions, setPositions] = useState([]);

  const navigateToHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((res) => res.json())
      .then((res) => setTeams(res.data));
    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((res) => res.json())
      .then((res) => setPositions(res.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      phone_number: "",
      position_id: "",
      team_id: "",
    },
    validationSchema,
    onSubmit: () => {
      navigate("/laptops");
    },
  });

  useEffect(() => {
    const values = localStorage.getItem("values");
    if (values) {
      const parsed = JSON.parse(values);
      formik.setValues(parsed);
    }
  }, []);

  const handleInputChange = async (e) => {
    await formik.setFieldValue(e.target.name, e.target.value);
    localStorage.setItem(
      "values",
      JSON.stringify({ ...formik.values, [e.target.name]: e.target.value })
    );
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToHomepage} />
      <FormTitle pathName={location.pathname} />
      <FormContainer onSubmit={formik.handleSubmit}>
        <FormWrapper>
          <InputContainer>
            <InputWrapper>
              <Label>სახელი</Label>
              <Input
                value={formik.values.name}
                onChange={handleInputChange}
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
                onChange={handleInputChange}
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
            <SelectInput
              value={formik.values.team_id}
              options={teams}
              title="თიმი"
              setFieldValue={handleInputChange}
              name="team_id"
              error={
                formik.errors.team_id && formik.touched.team_id
                  ? formik.errors.team_id
                  : null
              }
            />
          </SelectInputWrapper>
          <SelectInputWrapper>
            <SelectInput
              value={formik.values.position_id}
              options={positions}
              title="პოზიცია"
              setFieldValue={handleInputChange}
              name="position_id"
            />
          </SelectInputWrapper>
          <InputWrapper>
            <Label>მეილი</Label>
            <Input
              value={formik.values.email}
              onChange={handleInputChange}
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
              value={formik.values.phone_number}
              onChange={handleInputChange}
              name="phone_number"
              onBlur={formik.onBlur}
              placeholder="ტელეფონის ნომერი"
              error={
                formik.errors.phone_number && formik.touched.phone_number
                  ? formik.errors.phone_number
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

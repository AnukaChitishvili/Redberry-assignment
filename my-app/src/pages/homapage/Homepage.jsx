import { useNavigate } from "react-router-dom";

import {
  Container,
  LandingImage,
  LandingImageMobile,
  ButtonWrapper,
  LogoWrapper,
  Select,
} from "./homepage.style";
import Button from "../../components/button/Button";
import Logo from "../../assets/icons/Logo.svg";
import LandingImg from "../../assets/imgs/Landing-img.svg";
import LandingImgMobile from "../../assets/imgs/Mobile-landing-img.svg";

const Homepage = () => {
  const navigate = useNavigate();

  const navigateToEmployeesPage = () => {
    navigate("/employees");
  };

  const navigateToDataListPage = () => {
    navigate("/data-list");
  };

  return (
    <Container>
      <Select type="select">
        <option>anuka</option>
      </Select>
      {/* <h1>
        <LogoWrapper>
          <img src={Logo} alt="Logo" />
        </LogoWrapper>
      </h1>
      <LandingImage src={LandingImg} alt="landing" />
      <LandingImageMobile src={LandingImgMobile} alt="landing mobile" />
      <ButtonWrapper isFirst>
        <Button onClick={navigateToEmployeesPage}>ჩანაწერის დამატება</Button>
      </ButtonWrapper>
      <ButtonWrapper>
        <Button onClick={navigateToDataListPage}>ჩანაწერების სია</Button>
      </ButtonWrapper> */}
    </Container>
  );
};

export default Homepage;

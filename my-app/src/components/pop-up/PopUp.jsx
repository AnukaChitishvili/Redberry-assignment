import { useNavigate } from "react-router-dom";

import {
  Layer,
  PopUpContainer,
  ButtonWrapper,
  Title,
  SubTitle,
} from "./popUp.style";
import Button from "../button/Button";
import PopUpImg from "../../assets/images/Pop-up-img.svg";

const PopUp = ({ closePopUp }) => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  const navigateToLaptopInfoPage = () => {
    navigate("/laptop-info");
  };

  return (
    <Layer onClick={closePopUp}>
      <PopUpContainer>
        <img src={PopUpImg} alt="pop up" />
        <Title>ჩანაწერი დამატებულია!</Title>
        <ButtonWrapper>
          <Button onClick={navigateToLaptopInfoPage}>სიაში დამატება</Button>
        </ButtonWrapper>
        <SubTitle onClick={goToHomepage}>მთავარი</SubTitle>
      </PopUpContainer>
    </Layer>
  );
};

export default PopUp;

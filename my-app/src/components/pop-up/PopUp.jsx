import { useNavigate } from "react-router-dom";
import { useRef } from "react";

import useOutsideClickDetector from "../../helpers/useOutsideClickDetector";
import {
  Layer,
  PopUpContainer,
  ButtonWrapper,
  Title,
  SubTitle,
} from "./popUp.style";
import Button from "../button/Button";
import PopUpImg from "../../assets/imgs/Pop-up-img.svg";

const PopUp = ({ closePopUp = () => {} }) => {
  const popUpRef = useRef(null);
  useOutsideClickDetector(popUpRef, closePopUp);
  const navigate = useNavigate();

  const goToHomepage = () => {
    navigate("/");
  };

  const navigateToLaptopInfoPage = () => {
    navigate("/laptop-info");
  };

  return (
    <Layer>
      <PopUpContainer ref={popUpRef}>
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

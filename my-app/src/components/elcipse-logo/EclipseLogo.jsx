import { ImgContainer, Button } from "./eclipseLogo.style";
import EclipseLogoIcon from "../../assets/icons/Eclipse-logo.svg";

const EclipseLogo = ({ onClick }) => {
  return (
    <Button onClick={onClick}>
      <ImgContainer src={EclipseLogoIcon} alt="logo" />
    </Button>
  );
};

export default EclipseLogo;

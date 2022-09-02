import { Circle } from "./backwardButton.style";
import BackwardArrowIcon from "./../../assets/icons/Backward-arrow.svg";

const BackwardButton = ({ onClick }) => {
  return (
    <Circle onClick={onClick}>
      <img src={BackwardArrowIcon} alt="backward arrow" />
    </Circle>
  );
};

export default BackwardButton;

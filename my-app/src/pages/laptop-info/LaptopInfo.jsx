import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import { Container, ContentTitle } from "./laptopInfo.style";

const LaptopInfo = () => {
  const navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/success");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToSuccess} />
      <ContentTitle>ლეპტოპის ინფო</ContentTitle>
    </Container>
  );
};

export default LaptopInfo;

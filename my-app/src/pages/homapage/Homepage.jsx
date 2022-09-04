import { useNavigate } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
// import { useCallback } from "react";

import {
  Container,
  LandingImage,
  LandingImageMobile,
  ButtonWrapper,
  LogoWrapper,
  // Select,
  // Jandaba,
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
      <h1>
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
      </ButtonWrapper>
    </Container>
  );
};

export default Homepage;

// {
//  <Container>
//      <h1>
//       <LogoWrapper>
//        <img src={Logo} alt="Logo" />
//       </LogoWrapper>
//     </h1>
//      <LandingImage src={LandingImg} alt="landing" />
//       <LandingImageMobile src={LandingImgMobile} alt="landing mobile" />
//        <ButtonWrapper isFirst>
//       <Button onClick={navigateToEmployeesPage}>ჩანაწერის დამატება</Button>
//     </ButtonWrapper>
//     <ButtonWrapper>
//      <Button onClick={navigateToDataListPage}>ჩანაწერების სია</Button>
//     </ButtonWrapper>
//      </Container>
// }

{
  /* <Jandaba>
<div {...getRootProps()}>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p>Drop the files here ...</p>
  ) : (
    <p>Drag 'n' drop some files here, or click to select files</p>
  )}
</div>
</Jandaba> */
}

// const onDrop = useCallback((acceptedFiles) => {
//   // Do something with the files
// }, []);

// const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

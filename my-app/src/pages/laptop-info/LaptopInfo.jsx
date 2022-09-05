import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import {
  Container,
  ContentTitle,
  ContentWrapper,
  LaptopSection,
  EmployeeSection,
  TitleWrapper,
  DescriptionWrapper,
  Title,
  Description,
  Border,
  Img,
  Wrapper,
  MiddleSection,
  CpuDescriptionWrapper,
  LastSectionDescriptionWrapper,
} from "./laptopInfo.style";
import Comp from "../../assets/imgs/comp.svg";

const LaptopInfo = () => {
  const navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/success");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToSuccess} />
      <ContentTitle>ლეპტოპის ინფო</ContentTitle>
      <ContentWrapper>
        <Wrapper isStart>
          <Img src={Comp} alt="" />
          <EmployeeSection>
            <TitleWrapper>
              <Title>სახელი:</Title>
              <Title>თიმი:</Title>
              <Title>პოზიცია:</Title>
              <Title>მეილი:</Title>
              <Title>ტელ:</Title>
            </TitleWrapper>
            <DescriptionWrapper>
              <Description>აკაკი წერეთელი</Description>
              <Description>დიზაინერები</Description>
              <Description>ილუსტრაოტრი</Description>
              <Description>gmail.com</Description>
              <Description>+995 583 45 28 33</Description>
            </DescriptionWrapper>
          </EmployeeSection>
        </Wrapper>
        <Border />
        <MiddleSection>
          <LaptopSection>
            <Wrapper isRow>
              <TitleWrapper>
                <Title>ლეპტოპის სახელი:</Title>
                <Title>ლეპტოპის ბრენდი:</Title>
                <Title>RAM:</Title>
                <Title>მეხსიერების ტიპი:</Title>
              </TitleWrapper>
              <DescriptionWrapper isLaptop>
                <Description> Razor Bla Bla</Description>
                <Description>HP</Description>
                <Description>16</Description>
                <Description>SSD</Description>
              </DescriptionWrapper>
            </Wrapper>
          </LaptopSection>
          <LaptopSection noMargin>
            <TitleWrapper>
              <Title> CPU:</Title>
              <Title>CPU-ს ბირთვი: </Title>
              <Title> CPU-ს ნაკადი:</Title>
            </TitleWrapper>
            <CpuDescriptionWrapper>
              <Description>Intel 5</Description>
              <Description>13</Description>
              <Description>67</Description>
            </CpuDescriptionWrapper>
          </LaptopSection>
        </MiddleSection>
        <Border />
        <LaptopSection isLast>
          <TitleWrapper isLast>
            <Title>მდგომარეობა:</Title>
            <Title>ლეპტოპის ფასი:</Title>
            <Title>შევსების რიცხვი:</Title>
          </TitleWrapper>
          <LastSectionDescriptionWrapper>
            <Description>მეორადი</Description>
            <Description>1500 ₾</Description>
            <Description>15/12/2022</Description>
          </LastSectionDescriptionWrapper>
        </LaptopSection>
      </ContentWrapper>
    </Container>
  );
};

export default LaptopInfo;

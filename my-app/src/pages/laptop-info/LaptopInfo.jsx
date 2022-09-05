import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
  const [info, setInfo] = useState();
  const navigate = useNavigate();

  const navigateToSuccess = () => {
    navigate("/success");
  };

  const params = useParams();

  useEffect(() => {
    fetch(
      `https://pcfy.redberryinternship.ge/api/laptop/${params.id}?1c6395235ac08f3fa0fa672dbb38c029`
    )
      .then((res) => res.json())
      .then((res) => setInfo(res.data));
  }, []);

  console.log(info);

  return (
    <Container>
      {info && (
        <>
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
                  <Description>{info.user.name}</Description>
                  <Description>{info.user.team_id}</Description>
                  <Description>{info.user.position_id}</Description>
                  <Description>{info.user.email}</Description>
                  <Description>{info.user.phone_number}</Description>
                </DescriptionWrapper>
              </EmployeeSection>
            </Wrapper>
            <Border />
            <MiddleSection>
              <LaptopSection>
                <Wrapper isRow>
                  <TitleWrapper>
                    <Title>ლეპტოპის სახელი</Title>
                    <Title>ლეპტოპის ბრენდი:</Title>
                    <Title>RAM:</Title>
                    <Title>მეხსიერების ტიპი:</Title>
                  </TitleWrapper>
                  <DescriptionWrapper isLaptop>
                    <Description>{info.laptop.name}</Description>
                    <Description>{info.laptop.brand_id}</Description>
                    <Description>{info.laptop.ram}</Description>
                    <Description>{info.laptop.hard_drive_type}</Description>
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
                  <Description>{info.laptop.cpu.name}</Description>
                  <Description>{info.laptop.cpu.cores}</Description>
                  <Description>{info.laptop.cpu.threads}</Description>
                </CpuDescriptionWrapper>
              </LaptopSection>
            </MiddleSection>
            <Border />
            <LaptopSection isLast>
              <TitleWrapper isLast>
                <Title>მდგომარეობა:</Title>
                <Title>ლეპტოპის ფასი:</Title>
                <Title>შევსების რიცხვი</Title>
              </TitleWrapper>
              <LastSectionDescriptionWrapper>
                <Description>{info.laptop.state}</Description>
                <Description>{info.laptop.price}</Description>
                <Description>{info.laptop.purchase_date}</Description>
              </LastSectionDescriptionWrapper>
            </LaptopSection>
          </ContentWrapper>
        </>
      )}
    </Container>
  );
};

export default LaptopInfo;

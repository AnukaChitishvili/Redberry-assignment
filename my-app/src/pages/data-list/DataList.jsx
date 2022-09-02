import { useNavigate } from "react-router-dom";

import BackwardButton from "../../components/backward-button/BackwardButton";
import Smth from "../../assets/imgs/Landing-img.svg";
import {
  Container,
  ContentTitle,
  ContentContainer,
  ContentWrapper,
  Img,
  InfoWrapper,
  Title,
  LinkTag,
  Paragraph,
  Wrapper,
} from "./dataList.style";

const DataList = () => {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  return (
    <Container>
      <BackwardButton onClick={navigateToHomepage} />
      <ContentTitle>ჩანაწერების სია</ContentTitle>
      <ContentContainer>
        <div>
          <ContentWrapper noMargin>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
        </div>
        <Wrapper>
          <ContentWrapper noMargin>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
          <ContentWrapper>
            <Img src={Smth} alt="laptop" />
            <InfoWrapper>
              <Title>ირინე ჩანქსელიანი</Title>
              <Paragraph>Pentium || </Paragraph>
              <LinkTag href="#">მეტის ნახვა</LinkTag>
            </InfoWrapper>
          </ContentWrapper>
        </Wrapper>
      </ContentContainer>
    </Container>
  );
};

export default DataList;

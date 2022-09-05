import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import BackwardButton from "../../components/backward-button/BackwardButton";
import {
  Container,
  ContentTitle,
  ContentContainer,
  ContentWrapper,
  Img,
  InfoWrapper,
  Title,
  Paragraph,
  Wrapper,
  LinkWrapper,
} from "./dataList.style";

const DataList = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?1c6395235ac08f3fa0fa672dbb38c029"
    )
      .then((res) => res.json())
      .then((res) => setCards(res.data));
  }, []);

  return (
    <>
      <Container>
        <BackwardButton onClick={navigateToHomepage} />
        <ContentTitle>ჩანაწერების სია</ContentTitle>
        <Wrapper>
          {cards.map((card) => (
            <ContentContainer>
              <ContentWrapper>
                <Img
                  src={"https://pcfy.redberryinternship.ge" + card.laptop.image}
                  key={card.laptop.id}
                />
                <InfoWrapper>
                  <Title>
                    {card.user.name} {card.user.surname}
                  </Title>
                  <Paragraph>{card.laptop.name} </Paragraph>
                  <LinkWrapper>
                    <Link to={`/laptop-info/${card.laptop.id}`}>
                      მეტის ნახვა
                    </Link>
                  </LinkWrapper>
                </InfoWrapper>
              </ContentWrapper>
            </ContentContainer>
          ))}
        </Wrapper>
      </Container>
    </>
  );
};

export default DataList;

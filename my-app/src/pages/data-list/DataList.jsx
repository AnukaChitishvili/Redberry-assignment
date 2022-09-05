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
  LinkTag,
  Paragraph,
  Wrapper,
} from "./dataList.style";

const DataList = () => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate("/");
  };

  useEffect(() => {
    fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?token=37a484885e326bfbc5e85e98dbe800fd"
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
            // key
            <ContentContainer>
              <ContentWrapper>
                <Img src={card.laptop.image} key={card.laptop.id} />
                <InfoWrapper>
                  <Title>
                    {card.user.name} {card.user.surname}
                  </Title>
                  <Paragraph>{card.laptop.name} </Paragraph>
                  <Link to="/laptop-info">მეტის ნახვა</Link>
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

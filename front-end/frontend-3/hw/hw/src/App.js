import "./App.css";
import React from "react";
import styled from "styled-components";

import Bing from "./Img/bing.webp";
import Hwa from "./Img/hwa.webp";
import Nang from "./Img/nang.jpeg";

const season = "여름";
const Appcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #9edbff;
  color: white;
`;
const Title = styled.h1`
  margin-bottom: 20px;
`;

const BoardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const ItemContainer = styled.div`
  width: 200px;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  overflow: hidden;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 40px;
`;

const ItemTitle = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const items = [
  { id: 1, title: "화채", myfav: false, imgSrc: Hwa },
  { id: 2, title: "빙수", myfav: true, imgSrc: Bing },
  { id: 3, title: "냉면", myfav: false, imgSrc: Nang },
];

function App() {
  return (
    <div>
      <Appcontainer>
        <Title>🧊{season}이었다... board🧊</Title>
        <BoardContainer>
          {items.map((item) => (
            <ItemContainer key={item.id}>
              <ItemImage src={item.imgSrc} alt={item.title} />
              <ItemTitle myfav={item.myfav}>
                {item.myfav ? "💛" : "🩶"}
              </ItemTitle>
            </ItemContainer>
          ))}
        </BoardContainer>
      </Appcontainer>
    </div>
  );
}

export default App;

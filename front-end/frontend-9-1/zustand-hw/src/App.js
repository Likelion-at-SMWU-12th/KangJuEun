import React, { useState } from "react";
import QuoteItem from "./QuoteItem";
import useQuoteStore from "./store/store";
import styled from "styled-components";

function App() {
  const [newQuote, setNewQuote] = useState("");
  const [newSource, setNewSource] = useState("");
  const quotes = useQuoteStore((state) => state.quotes);
  const addQuote = useQuoteStore((state) => state.addQuote);

  const handleAddQuote = () => {
    // 인용구 추가 처리 함수
    if (newQuote.trim() && newSource.trim()) {
      // 공백을 제외한 입력이 있을 때만 추가
      addQuote(newQuote, newSource);
      setNewQuote("");
      setNewSource("");
    }
  };

  return (
    <Container>
      {" "}
      <h1>기억하고 싶은 말들...📌</h1>
      <InputWrapper>
        <input
          type="text"
          value={newQuote}
          onChange={(e) => setNewQuote(e.target.value)}
          placeholder="기억하고 싶은 말을 입력하세요"
        />
        <input
          type="text"
          value={newSource}
          onChange={(e) => setNewSource(e.target.value)}
          placeholder="출처가 있나요?"
        />
        <button onClick={handleAddQuote}>추가</button>
      </InputWrapper>
      <QuoteGrid>
        {quotes.map((quoteItem) => (
          <QuoteItem key={quoteItem.id} quoteItem={quoteItem} />
        ))}
      </QuoteGrid>
    </Container>
  );
}

export default App;

const Container = styled.div`
  padding: 20px;
  margin: 100px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  margin-top: 50px;
  input {
    margin-right: 10px;
    padding: 10px;
    width: 200px;
  }
  button {
    padding: 10px;
  }
`;

const QuoteGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

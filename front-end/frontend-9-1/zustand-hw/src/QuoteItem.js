import React from "react";
import useQuoteStore from "./store/store";
import styled from "styled-components";

function QuoteItem({ quoteItem }) {
  const removeQuote = useQuoteStore((state) => state.removeQuote); // 인용구 삭제
  const toggleStar = useQuoteStore((state) => state.toggleStar); // 별표 토글

  return (
    <QuoteBox>
      <p>"{quoteItem.quote}"</p>
      <span>- {quoteItem.source}</span> {/* 인용구와 출처 */}
      <div>
        <button onClick={() => removeQuote(quoteItem.id)}>삭제</button>{" "}
        {/* 삭제 버튼 */}
        <Star onClick={() => toggleStar(quoteItem.id)}>
          {" "}
          {/* 별표 토글 */}
          {quoteItem.starred ? "★" : "☆"}
        </Star>
      </div>
    </QuoteBox>
  );
}

export default QuoteItem;

const QuoteBox = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  p {
    margin: 0;
    font-size: 18px;
  }
  span {
    font-size: 14px;
    color: #888;
  }
`;

const Star = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: gold;
`;

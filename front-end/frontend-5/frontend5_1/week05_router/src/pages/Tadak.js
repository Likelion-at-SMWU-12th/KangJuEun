import React from "react";

const Tadak = () => {
  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1>중앙해커톤 화이팅!</h1>
      <img
        src={`${process.env.PUBLIC_URL}/tadak.jpeg`}
        width="300px"
        alt="Dark Eye"
      />{" "}
      <ol>
        <li>리액트 공부 마니 하자</li>
        <li>내가 할 수 있을까..</li>
        <li>너무 어려워~</li>
      </ol>
    </div>
  );
};

export default Tadak;

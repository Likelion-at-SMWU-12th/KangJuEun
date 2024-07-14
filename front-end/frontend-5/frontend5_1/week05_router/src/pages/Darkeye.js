import React from "react";

const Darkeye = () => {
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
      <h1>눈앞이 캄캄</h1>
      <img
        src={`${process.env.PUBLIC_URL}/darkeye.jpeg`}
        width="300px"
        alt="Dark Eye"
      />{" "}
      <p>나는 말하는 감자다</p>
    </div>
  );
};

export default Darkeye;

import React from "react";
import Btn from "./Btn";
import Menu from "./Menu";
import Info from "./Info";
import Blist from "./Blist";
import Style from "./Style";

function App() {
  return (
    <>
      <Style>
        <h3>4주차 숙제 ~</h3>
        <Menu menu="짜장면" color="brown" />
        <Btn />
        <Info />
        <Blist />
        와! 기대된다!
      </Style>
    </>
  );
}

export default App;

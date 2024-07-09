import { useState } from "react";

const Btn = () => {
  const [state, setState] = useState(0);
  return (
    <div>
      <h1> 짜장면 먹은 횟수: {state} </h1>
      <button onClick={() => setState(state + 1)}>
        짜장면 먹고 싶은 만큼 눌러~
      </button>
    </div>
  );
};

export default Btn;

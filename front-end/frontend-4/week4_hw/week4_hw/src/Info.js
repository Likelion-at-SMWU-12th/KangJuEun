import React, { useState } from "react";

const Info = () => {
  const [star, setStar] = useState("");
  const [mbti, setMbti] = useState("");

  const onChangeStar = (e) => {
    setStar(e.target.value);
  };

  const onChangeMbti = (e) => {
    setMbti(e.target.value);
  };

  return (
    <div>
      <br />
      <div>
        <input value={star} onChange={onChangeStar} />
        <input value={mbti} onChange={onChangeMbti} />
      </div>
      <div>
        <b>별자리:</b> {star}
      </div>
      <div>
        <b>MBTI: </b> {mbti}
      </div>
      <br />
      <br />
    </div>
  );
};

export default Info;

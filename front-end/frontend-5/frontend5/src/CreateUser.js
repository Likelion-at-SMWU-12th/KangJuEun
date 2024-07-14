import React from "react";

const CreateUser = ({ username, email, onChange, onCreate }) => {
  console.log("CreatUser component rendered");
  return (
    <div>
      <input
        name="username"
        placeholder="계정 이름"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default React.memo(CreateUser);

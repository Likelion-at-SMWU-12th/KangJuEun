import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [name, setName] = useState(); // 유저의 이름을 저장하는 state
  const [profileImg, setProfileImg] = useState(); // 유저의 프로필 이미지를 저장하는 state

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken"); // 로컬 스토리지에서 저장된 accessToken을 가져옴
    fetch("https://kapi.kakao.com/v2/user/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`, // 카카오 API에 accessToken을 Bearer 토큰으로 전달
        "Content-type": "application/x-www-form-urlencoded",
      },
    }).then((res) => {
      const userData = res.json(); // 응답 데이터를 JSON 형식으로 파싱
      userData.then((user) => {
        setName(user.properties.nickname); // 유저의 닉네임을 state에 저장
        setProfileImg(user.properties.profile_image); // 유저의 프로필 이미지를 state에 저장
      });
    });
  }, []);
  return (
    <div>
      <div
        className="profile-image-div"
        style={{ backgroundImage: `url(${profileImg})` }} // 유저의 프로필 이미지를 표시
      ></div>
      <h2>{name}</h2> {/* 유저의 이름을 표시 */}
    </div>
  );
};

export default Greeting;

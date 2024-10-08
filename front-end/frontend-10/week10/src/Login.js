import React from "react";
import kakao_btn_img from "./kakao_login_large_narrow.png";
import google_btn_img from "./web_light_sq_SI@2x.png";

const Login = () => {
  const authServerLink = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`;
  // 카카오 인증 서버에 보낼 링크 생성 (response_type=code로 Authorization Code Flow 요청)

  // Authorization Code Flow 다시 정리...
  // 1.	사용자가 로그인 버튼을 클릭해 카카오 서버에 인증을 요청
  // 2.	카카오 서버는 사용자를 로그인 페이지로 보내고, 로그인이 성공하면 Authorization Code(인증 코드)를 내 애플리케이션(클라이언트)의 리다이렉트 URI로 전송
  // 3.	애플리케이션은 해당 Authorization Code를 가지고 다시 카카오 서버에 요청.
  //    ㄴ 여기서 response_type=code == 카카오 서버에 Authorization Code를 요청한다는 의미
  // 4.	카카오 서버는 해당 Authorization Code를 받아서 Access Token으로 교환해줌.
  // 5. 해당 Access Token을 가지고 카카오 API에서 사용자 정보나 다른 데이터를 요청할 수 있게 됨!

  const handleKakao = () => {
    window.location.href = authServerLink; // 카카오 인증 서버로 리다이렉트
  };

  return (
    <div>
      <h2>로그인</h2>
      <div className="btns-container">
        <button onClick={handleKakao}>
          {" "}
          {/* 카카오 로그인 버튼 클릭 시 카카오 인증 서버로 이동 */}
          <img src={kakao_btn_img} alt="kakao_button" />
        </button>
        <button>
          {" "}
          {/* 구글 로그인 버튼 (추후 추가) */}
          <img src={google_btn_img} alt="google_button" />
        </button>
      </div>
    </div>
  );
};

export default Login;

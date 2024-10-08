import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirection = () => {
  const [params] = useSearchParams(); // URL에서 인증 코드를 받기 위해 useSearchParams 사용
  // useSearchParams는 React Router에서 제공하는 훅
  // URL의 쿼리스트링(예: ?key=value)을 읽고 설정할 수 있게 해줌
  // 예를 들어, URL이 https://example.com/page?code=abc123인 경우,
  // useSearchParams를 사용하면 code=abc123 부분에서 code라는 파라미터 값을 읽는 게 가능!

  const authCode = params.get("code"); // 인증 서버에서 받은 Authorization Code를 URL에서 추출
  const grant_type = "authorization_code"; // OAuth 2.0에서 Authorization Code Flow를 사용
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&code=${authCode}`,
      {
        method: "POST", // POST 요청으로 Authorization Code를 Access Token으로 교환

        // body: JSON.stringify({
        //   grant_type: "authorization_code",
        //   client_id: process.env.REACT_APP_REST_API_KEY,
        //   redirect_uri: process.env.REACT_APP_REDIRECT_URI,
        //   code: authCode,
        // }),
        // --> 대부분 프론트엔드는 Authorization Code만 백엔드에 보내고,
        // 백엔드가 카카오 서버에 요청해서 Access Token을 받도록 설계한다.

        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    ).then((res) => {
      const data = res.json(); // 응답을 JSON 형식으로 파싱
      data.then((data) => {
        localStorage.setItem("accessToken", data.access_token); // 받은 Access Token을 로컬 스토리지에 저장
        navigate("/greeting"); // 로그인 완료 후 Greeting 페이지로 이동
      });
    });
  }, [authCode, grant_type, navigate]);

  return <div>Redirection Page: 카카오 로그인 중…</div>; // 사용자에게 로그인 진행 중임을 알림
};

export default Redirection;

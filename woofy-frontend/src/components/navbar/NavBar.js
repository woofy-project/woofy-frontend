import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="login-button" onClick={() => setIsLoggedIn(true)}>
          로그인
        </button>
      </div>
      <div className="navbar-center">
        <Link href="/">
          <img src="/logo.png" alt="로고" className="logo" />
        </Link>
      </div>
      <div className="navbar-right">
        <button className="write-button">글쓰기</button>
        {/* 로그인 되면 마이페이지 버튼 렌더링 */}
        {isLoggedIn && (
          <Link to="/mypage" className="my-page-button">
            마이페이지
          </Link>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

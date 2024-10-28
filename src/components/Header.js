import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faGrip } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const HeaderEl = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const TopWrap = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .topleft_wrap {
    height: 100%;
    display: flex;
    align-items: center;
    .logo {
      text-decoration: none;
      font-size: 20px;
      color: black;
      font-weight: 900;
    }
    .title_wrap {
      display: flex;
      div {
        padding: 0 10px;
        display: flex;
        align-items: center;
      }
      .title1 {
        font-size: 25px;
        color: black;
        font-weight: 900;
      }
      .title2,
      .title3 {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.2);
        font-weight: 900;
        border-left: 1px solid rgba(0, 0, 0, 0.2);
      }
    }
  }
  .topright_wrap {
    height: 100%;
    display: flex;
    align-items: center;
    form {
      border: 1px solid rgba(0, 0, 0, 0.2);
      .search {
        all: unset;
        width: 250px;
        font-size: 14px;
        padding: 10px;
      }
      svg {
        font-size: 15px;
        padding-right: 10px;
        color: rgba(0, 0, 0, 0.5);
        cursor: pointer;
      }
    }
    .user_info {
      height: 100%;
      display: flex;
      align-items: center;
      padding-left: 20px;
      .user_profile {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px;
        border: 1px solid rgba(0, 0, 0, 0.2);
        svg {
          color: rgba(0, 0, 0, 0.2);
        }
      }
    }
    .user_name {
      font-size: 12px;
      padding-left: 5px;
      svg {
        color: rgba(0, 0, 0, 0.5);
        font-size: 10px;
        padding-left: 3px;
      }
    }
    .icons {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-left: 20px;
      width: 120px;
      svg {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }
`;

const HeaderBottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

const BottomWrap = styled.div`
  width: 1200px;
  height: 60px;
  display: flex;
  align-items: center;
  .menu {
    height: 100%;
    display: flex;
    div {
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-weight: 900;
    }
    .menu_home {
      background-color: #00dc64;
      color: #fff;
    }
  }
`;

export const Header = () => {
  return (
    <HeaderEl>
      <HeaderTop>
        <TopWrap>
          <div className="topleft_wrap">
            <Link to="/" className="logo">NAVER</Link>
            <div className="title_wrap">
              <div className="title1">웹툰</div>
              <div className="title2">웹소설</div>
              <div className="title3">시리즈</div>
            </div>
          </div>
          <div className="topright_wrap">
            <form>
              <input
                type="text"
                className="search"
                placeholder="제목/작가로 검색할 수 있습니다."
              />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </form>
            <div className="user_info">
              <div className="user_profile">
                <FontAwesomeIcon icon={faUser} />
              </div>
              <div className="user_name">
                user_1
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="icons">
              <div className="talk">
                <FontAwesomeIcon icon={faComment} />
              </div>
              <div className="alarm">
                <FontAwesomeIcon icon={faBell} />
              </div>
              <div className="email">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="menus">
                <FontAwesomeIcon icon={faGrip} />
              </div>
            </div>
          </div>
        </TopWrap>
      </HeaderTop>

      <HeaderBottom>
        <BottomWrap>
          <div className="menu">
            <div className="menu_home">홈</div>
            <div className="menu_webtoon">웹툰</div>
            <div className="menu_best">베스트도전</div>
            <div className="menu_challenge">도전만화</div>
            <div className="menu_my">마이페이지</div>
          </div>
        </BottomWrap>
      </HeaderBottom>
    </HeaderEl>
  );
};

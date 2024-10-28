import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const webtoonInfo = [
  {
    id: 0,
    img: "https://image-comic.pstatic.net/webtoon/833596/thumbnail/thumbnail_IMAG21_e85ced84-385d-41e2-9dd3-d12020a110a2.jpg",
    name: "모솔대첩",
    author: "진자 / 정생",
  },
  {
    id: 1,
    img: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
    name: "신의 탑",
    author: "SIU",
  },
  {
    id: 2,
    img: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
    name: "윈드브레이커",
    author: "조용석",
  },
  {
    id: 3,
    img: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
    name: "참교육",
    author: "채용택 / 한가람",
  },
  {
    id: 4,
    img: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg",
    name: "똑 닮은 딸",
    author: "이담",
  },
];

const HomeEl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  .info {
    width: 1200px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .info_left {
    height: 100%;
    display: flex;
    align-items: center;
    .week {
      font-size: 20px;
      font-weight: 900;
    }
    .info_menu {
      padding-left: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      div {
        font-size: 14px;
        font-weight: 900;
        color: rgba(0, 0, 0, 0.5);
      }
      .dot {
        margin: 0 3px;
        width: 3px;
        height: 3px;
        border-radius: 3px;
        background-color: rgba(0, 0, 0, 0.5);
      }
      .look {
        color: #00dc64;
      }
    }
  }
  .info_right {
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 14px;
    cursor: pointer;
    svg {
      color: rgba(0, 0, 0, 0.5);
      padding-left: 5px;
    }
  }

  .contents_wrap {
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .content {
      width: calc(1160px / 5);
      .img_wrap {
        display: block;
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 10px;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          transition: 0.25s ease-in-out;
          transform-origin: center;
          transform: scale(1.05);
        }
      }
      .img_wrap:hover img {
        transform: scale(1.1);
      }
      .name {
        padding-top: 10px;
        font-size: 16px;
        font-weight: 700;
      }
      .author {
        padding-top: 5px;
        font-size: 14px;
      }
    }
  }
`;

const Home = () => {
  return (
    <HomeEl>
      <div className="info">
        <div className="info_left">
          <div className="week">월요웹툰</div>
          <div className="info_menu">
            <div className="hot">인기순</div>
            <div className="dot"></div>
            <div className="update">업데이트순</div>
            <div className="dot"></div>
            <div className="look">조회순</div>
            <div className="dot"></div>
            <div className="like">별점순</div>
          </div>
        </div>

        <div className="info_right">
          월요웹툰 전체보기
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
      <div className="contents_wrap">
        {webtoonInfo.map((info, index) => (
          <div className="content" key={index}>
            <Link to={`/webtoon/${info.id}`} className="img_wrap">
              <img src={info.img} alt="webtoon_img" />
            </Link>
            <div className="name">{info.name}</div>
            <div className="author">{info.author}</div>
          </div>
        ))}
      </div>
    </HomeEl>
  );
};

export default Home;

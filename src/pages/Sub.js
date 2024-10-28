import { useParams } from "react-router-dom";
import styled from "styled-components";

const webtoonData = [
  {
    id: 0,
    name: "모솔대첩",
    author: "진자 · 글 / 정생 · 그림",
    week: "월요웹툰",
    age: "15세 이용가",
    detail: `사랑도 얻고! 5억도 얻고! 만 30세 여자 3명의 5억을 건 모솔탈출내기가 시작된다.왕자 없는 공주림, 쓰레기 수집가 강선아 , 혼전순결 김채율!과연 모솔대첩의 우승자는 누가 될 것인가?`,
    tag: [
      "#로맨스",
      "#러브코미디",
      "#리얼로맨스",
      "#설렘폭발",
      "공식미남",
      "#헌신만",
      "#짝사랑남",
    ],
    img: "https://image-comic.pstatic.net/webtoon/833596/thumbnail/thumbnail_IMAG21_e85ced84-385d-41e2-9dd3-d12020a110a2.jpg",
  },
  {
    id: 1,
    name: "신의 탑",
    author: "SIU · 글/그림",
    week: "월요웹툰",
    age: "12세 이용가",
    detail: `자신의 모든 것이었던 소녀를 쫓아 탑에 들어온 소년. 그리고 그런 소년을 시험하는 탑`,
    tag: [
      "#판타지",
      "#명작",
      "#이능력",
      "#배틀",
      "#모험",
      "#전쟁",
      "#액션",
      "#성장물",
      "#서바이벌",
    ],
    img: "https://image-comic.pstatic.net/webtoon/183559/thumbnail/thumbnail_IMAG21_5f3fec31-5c95-4afe-a73f-3046288edb47.jpg",
  },
  {
    id: 2,
    name: "윈드브레이커",
    author: "조용석 · 글/그림",
    week: "월요웹툰",
    age: "12세 이용가",
    detail: `혼자서 자전거를 즐겨타던 모범생 조자현. 왕자 없는 공주림, 원치 않게 자전거 크루의 일에 자꾸 휘말리게 되는데... 자유를 꿈꾸는 청춘들의 스트릿라이딩 드라마!`,
    tag: [
      "#스포츠",
      "#현대",
      "#우정",
      "#라이벌",
      "청춘",
      "#성장물",
      "#학원물",
      "#스포트성장",
    ],
    img: "https://image-comic.pstatic.net/webtoon/602910/thumbnail/thumbnail_IMAG21_e861f2cf-6157-4d33-8e02-7b4cbf0a8baf.jpg",
  },
  {
    id: 3,
    name: "참교육",
    author: "채용택 · 글 / 한가람 · 그림",
    week: "월요웹툰",
    age: "15세 이용가",
    detail: `무너진 교권을 지키기 위해 교권보호국 소속 나화진의 참교육이 시작된다! <부활남> 채용택 작가 X <신석기녀> 한가람 작가의 신작!`,
    tag: [
      "#액션",
      "#사이다",
      "#학원액션",
      "#작극적인",
      "사회고발",
      "#참교육",
      "#블루스트링",
      "#학원물",
    ],
    img: "https://image-comic.pstatic.net/webtoon/758037/thumbnail/thumbnail_IMAG21_15cb2611-34c0-4f02-a689-41d0b1016579.jpg",
  },
  {
    id: 4,
    name: "똑 닮은 딸",
    author: "이담 · 글/그림",
    week: "월요웹툰",
    age: "15세 이용가",
    detail: `'우리 엄마가 살인마인 것 같다.' 성적 우수, 품행 단정, 모범적인 자식인 길소명은 엄마가 요구하는 기준에 맞춰 완벽한 딸로 살아왔다. 그러나 남동생이 강물에서 시체로 떠오른 그 날, 소명의 머릿속엔 섬뜩한 의혹이 피어오른다. 자식의 인생에 방해되는 모든 것을 없애려는 엄마와 그녀에게서 벗어나려는 딸, 두 사람의 잔혹한 모녀 스릴러! 2020 지상최대공모전 2기 우수상 수상작. `,
    tag: [
      "#스릴러",
      "#고자극드라마",
      "#자극적인",
      "#시리어스",
      "#미스터리",
      "#범죄",
    ],
    img: "https://image-comic.pstatic.net/webtoon/774866/thumbnail/thumbnail_IMAG21_b03cd4bd-bc74-4469-a501-20896bcc887f.jpg",
  },
];

const SubEl = styled.div`
padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ConEl = styled.div`
width: 1200px;
display: flex;
justify-content: space-between;
.img_wrap {
  width: 25%;
  overflow: hidden;
  border-radius: 10px;
  img {
    width: 100%;
    transform-origin: center;
    transform: scale(1.05);
  }
}
.text_wrap {
  width: 75%;
  box-sizing: border-box;
  padding: 5px 20px;
  .name {
    font-size: 20px;
    font-weight: 900;
    padding-bottom: 10px;
  }
  .text_info {
    font-size: 14px;
    display: flex;
    font-weight: 900;
    padding-bottom: 10px;
    .author {
      padding-right: 5px;
    }
    .week_age {
      padding-left: 5px;
      border-left: 1px solid rgba(0, 0, 0, 0.2);
      color: rgba(0, 0, 0, 0.2);
      display: flex;
      .week {
        padding-right: 5px;
      }
    }
  }
  .detail {
    font-size: 14px;
    font-weight: 900;
    padding-bottom: 10px;
  }
  .tags {
    display: flex;
    .tag {
      padding: 5px;
      margin-right: 5px;
      background-color: rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.5);
      font-weight: 900;
      cursor: pointer;
    }
  }
}
`;

const Sub = () => {
  const { id } = useParams();

  return (
    <SubEl>
      <ConEl>
        <div className="img_wrap">
          <img src={webtoonData[id].img} alt="con_img" />
        </div>
        <div className="text_wrap">
          <div className="name">{webtoonData[id].name}</div>
          <div className="text_info">
            <div className="author">{webtoonData[id].author}</div>
            <div className="week_age">
              <div className="week">{webtoonData[id].week}</div>
              <div className="age">{webtoonData[id].age}</div>
            </div>
          </div>
          <div className="detail">{webtoonData[id].detail}</div>
          <div className="tags">
            {webtoonData[id].tag.map((tag, index) => (
              <div className="tag" key={index}>
                {tag}
              </div>
            ))}
          </div>
        </div>
      </ConEl>
    </SubEl>
  );
};
export default Sub;

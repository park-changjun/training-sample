// import { Agent } from "http";
import React, { useEffect, useRef, useState } from "react";
// import { transform } from "typescript";
// import { isReturnStatement } from "typescript";



const languageMenu = ["Korean", "English"];
const SlideNavMenu = ["바른뉴스", "업무사례", "언론보도"];





const Dropdown = (props) => {
  const Show = "block";
  const NoShow = "none";
  const [headerDrop, setHeaderDrop] = useState("none");
  const [lang, setLang] = useState("");

  return (
    <div>
      <div className="dropdown">
        <button
          type="button"
          onClick={() => {
            setHeaderDrop(!headerDrop);
          }}
          className="dropbtn"
        >
          language
          <img src="img/arrow.png" alt="버튼" />
        </button>

        <ul
          className="dropdown-menu"
          style={{ display: headerDrop === true ? "block" : "none" }}
        >
          {languageMenu.map((languageMenu, i) => {
            return (
              <li onClick={() => props?.setLang?.(languageMenu)} key={"" + i}>
                {languageMenu}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
const HeaderScroll = () => {
  const [headerScroll, setHeaderScroll] = useState(false);

  const changeBgHeader = () => {
    // console.log(window.scrollY);
    window.scrollY >= 150 ? setHeaderScroll(true) : setHeaderScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBgHeader);
    return () => window.removeEventListener("scroll", changeBgHeader);
  }, []);

  return (
    <header className={headerScroll ? "header scroll" : "header"}>
      <div className="header-container">
        <div className="header-top">
          <Dropdown />
        </div>
      </div>
      <div className="header-bottom">
        <a href="#" className="logo"></a>
        <nav className="header-nav">
          <HeaderNav />
          <HeaderSearch />
        </nav>
      </div>
    </header>
  );
};
const NavMenuData = [
  {
    title: "바른소개",
    subMenus: [
      "바른소개",
      "바른연락",
      "오시는길",
      "싱가포르대표사무소",
      "블로그",
    ],
  },
  {
    title: "업무분야",
    subMenus: ["분야별", "산업별", "국가별"],
  },
  {
    title: "구성원",
  },
  {
    title: "소식/자료",
    subMenus: [
      "바른뉴스",
      "언론보도",
      "최근업무사례",
      "뉴스레터",
      "저서 및 자료",
      "코로나19자료실",
    ],
  },
  {
    title: "아카데미",
    subMenus: ["연구회", "강좌", "연구자료"],
  },
  {
    title: "공익활동",
    subMenus: ["사단법인 정", "사회공헌활동", "사회공헌소식"],
  },
  {
    title: "인재채용",
    subMenus: ["채용안내", "채용점수", "채용게시판"],
  },
];
const HeaderNav = (props) => {
  // const ShowNav = 'block';
  // const NoShowNav = 'none';
  const [headerNav, setHeaderNav] = useState(false);

  return (
    <div>
      <ul className="header-nav-dep">
        {NavMenuData.map((headerMenuData, i) => (
          <HeaderSubNav headerMenuData={headerMenuData} key={"" + i} />
        ))}
      </ul>
    </div>
  );
};
const HeaderSubNav = (props) => {
  const { headerMenuData } = props; // props.headerMenuDate
  const [headerNav, setHeaderNav] = useState(false);

  return (
    <li
      onClick={() => {
        setHeaderNav(!headerNav);
      }}
    >
      <a href="#"> {headerMenuData.title} </a>

      <ul
        className="header-nav-sub-dep"
        onMouseOut={() => {
          setHeaderNav(!headerNav);
        }}
        style={{ display: headerNav ? "block" : "none" }}
      >
        {headerMenuData.subMenus?.map((data, i) => (
          <li>
            <a href="#" key={"" + i}>
              {data}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
const HeaderSearch = () => {
  const [headerinput, setHeaderInput] = useState(false);
  const [text, setText] = useState("");
  const buttonRef = React.useRef();

  return (
    <div>
      <div className="nav_search_wrap">
        <button
          type="button"
          onClick={() => {
            setHeaderInput(!headerinput);
          }}
          className="nav_search_btn"
        >
          <img src="img/srch-button.png" />
        </button>

        <div
          className="modal hidden"
          style={{ display: headerinput ? "block" : "none" }}
        >
          <div className="modal_overlay"></div>

          <input
            type="text"
            className="modal_search_box"
            placeholder="검색어를 입력하세요"
            style={{ display: headerinput ? "block" : "none" }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                buttonRef.current?.click();
              }
            }}
            value={text}
            onChange={(e) => {
              // setHeaderInput(e.target.value);
              setText(e.target.value);
            }}
          />

          <button
            type="button"
            onClick={() => {
              setHeaderInput(!headerinput);
              {
                alert("다시 입력하세요");
              }
            }}
            className="modal_search_box_btn"
            ref={buttonRef}
            placeholder="검색어를 입력하세요"
          >
            <img src="img/srch-button.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Main = (props) => {
  return (
    <main id="main">
        {/* <video className="bg-video" autoPlay loop muted>
          <source
            src="../public/img/bgVideo.mp4" type="video.mp4"></source>
        </video> */}
      <Visual />
    </main>
  );
};

const Visual = () => {
  const [input, setInput] = React.useState("");
  const buttonRef = React.useRef();

  return (
    <div>
      <div className="visual">
        <div className="visual_box">
          <div className="visual_title">
            {" "}
            {input} <br />
            FOR YOUR RIGHT
          </div>

          <div className="visual_search">
            <input
              type="text"
              id="search"
              placeholder=""
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  buttonRef.current?.click();
                }
              }}
              value={input}
              onChange={(e) => {
                // console.log(e.target.value);
                setInput(e.target.value);
              }}
            />

            <div className="visual_search_box"></div>
            <button
              type="button"
              onClick={() => {
                alert("Hello~!");
              }}
              className="visual_search_btn"
              ref={buttonRef}
            >
              <img src="img/search-button-big.png" />
            </button>
          </div>
        </div>

        <div className="scroll_btn">
          <a href="#">
            scroll
            <img src="img/arrow-down.png" alt="스크롤" />
          </a>
        </div>
      </div>
    </div>
  );
};

const SlideNav = () => {
  const [checked, setChecked] = React.useState("바른뉴스");

  return (
    <div>
      <nav className="content_nav">
        <h2 className="content-bg-txt"> {checked} </h2>
        <ul>
          {SlideNavMenu.map((menu, i) => {
            const ischecked = menu === checked;
            return (
              <li
                onClick={(e) => setChecked(menu)}
                key={"" + i}
                style={{ color: ischecked ? "#333333" : "#aaaaaa" }}
              >
                {menu}
              </li>
            );
          })}
        </ul>
        <a href="https://barunlaw.com/barunnews/S" class="more">
          +더보기
        </a>
      </nav>
    </div>
  );
};
const SlideWrap = (props) => {
  const { cardData } = props;
  const { title, subTitle, Text, newsData } = cardData || {};

  const slideIndex = useRef(0);
  //slideIndex가 plusSlides부분때문에 바동기실행이 되어서 처음 클릭했을 때 인덱스번호가 1이 아니라 0이 나와서 ref로 잡아줌.
  // const [slideIndex, setSlideIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(0);
  const [disabled, setDisabled] = useState("add");

  const slides = [<Slides cardData={cardData} />];
  const slideCount = 6;
  const slideWidth = 402;

  const showSlides = (n) => {
    setSlideLeft(-(n * slideWidth));
  };

  const slideStyle = {
    left: slideLeft + "px",
    transition: "1s",
  };

  const plusSlides = (n) => {
    // setSlideIndex(slideIndex + n); //slideindex는 직접적인 변경x
    slideIndex.current = slideIndex.current + n;
    showSlides(slideIndex.current);
  };

  return (
    <section id="content" className="gradient_wrapper">
      <div id="content_inner">
        <SlideNav />
        <div className="content_box">
          <div className="list-wrapper-slider">
            <ul className="clear" style={slideStyle}>
              {[
                {
                  title: "M&A/기업지배구조1",
                  subTitle:
                    "교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례",
                  Text: "zz법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
                {
                  title: "M&A/기업지배구조2",
                  subTitle: "fegrgrhegefegg",
                  Text: "법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
                {
                  title: "M&A/기업지배구조3",
                  subTitle:
                    "교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례",
                  Text: "ddddddddddddd을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
                {
                  title: "M&A/기업지배구조4",
                  subTitle:
                    "교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례",
                  Text: "법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
                {
                  title: "M&A/기업지배구조5",
                  subTitle:
                    "교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례",
                  Text: "법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
                {
                  title: "M&A/기업지배구조6",
                  subTitle:
                    "교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례",
                  Text: "법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)",
                  newsData: "2021.07.01",
                },
              ].map((cardData, i) => (
                <Slides cardData={cardData} key={"" + i} />
              ))}
            </ul>
          </div>

          <div className="arrow_btn">
            <button
              className={(slideIndex.current > 0
                ? ["prev", "disabled"]
                : ["prev"]
              ).join(" ")}
              onClick={() => {
                plusSlides(-1);
                console.log(slideIndex.current);
              }}
            >
              <img src="img/tab-arrow-left.png" alt="버튼" />
            </button>

            <button
              className={(slideIndex.current === slideCount - 3
                ? ["next", "disabled"]
                : ["next"]
              ).join(" ")}
              onClick={() => {
                plusSlides(1);
                console.log(slideIndex.current);
              }}
            >
              <img src="img/tab-arrow-right.png" alt="버튼" />{" "}
            </button>
          </div>
        </div>

        <div className="slide_btn">
          <button className="dots1"></button>
          <button className="dots2"></button>
        </div>
      </div>
    </section>
  );
};
const Slides = (props) => {
  const { cardData } = props;
  const { title, subTitle, Text, newsData } = cardData || {};

  return (
    <div>
      <li>
        <a className="item" href="#">
          <label className="box_topic">
            <span> {title} </span>
          </label>
          <img className="box-topic-img" src="./img/bitmap images.png" />

          <h3 className="box_title"> {subTitle} </h3>
          <p className="box_text"> {Text} </p>
          <span className="box_date"> {newsData} </span>
          <div className="box_img">
            <div className="img01"></div>
            <div className="img01"></div>
            <div className="img01"></div>
          </div>
        </a>
      </li>
    </div>
  );
};

const News = () => {
  return (
    <>
      <section id="news">
        <div className="news_inner">
          <NewsLeft />
          <NewsRight />
        </div>
      </section>
      <hr />
    </>
  );
};
const NewsLeft = () => {
  return (
    <div className="news_left">
      <h2>뉴스레터</h2>
      <h4>
        법무바른은 월간 뉴스레터를 발행하여
        <br />
        법과 관련된 다양한 사례를 전합니다.
      </h4>
      <a href="https://barunlaw.com/barunnews/N" class="more">
        +더보기
      </a>
    </div>
  );
};
const NewsRight = () => {
  return (
    <div className="news_right">
      {[
        {
          letterText: "2021. MARCHere22",
          letterTitle: "법무법인(유한) 바른 뉴스레터 - 제94호 (2021.03)",
        },
        {
          letterText: "2021. MARCHdsdsdsds",
          letterTitle: "법무법인(유한) 바른 뉴스레터 - 제93호 (2021.02)",
        },
      ].map((letterData, i) => (
        <NewsLetter letterData={letterData} key={"" + i} />
      ))}
    </div>
  );
};
const NewsLetter = (props) => {
  const { letterData } = props;
  const { letterText, letterTitle } = letterData || {};

  return (
    <div className="letter">
      <a href="https://barunlaw.com/letter/97/newsletter97.html">
        <p className="letter_date"> {letterText} </p>
        <p className="letter_title"> {letterTitle} </p>
        <p className="news_btn">
          <img src="img/news-arrow.png" alt="버튼" />
        </p>
      </a>
    </div>
  );
};
const Footer = () => {
  return (
    <footer id="footer">
      <h1 id="logo">
        <a href="#">
          <img src="./img/gray-logo.png" alt="로고" />
        </a>
      </h1>
      <nav className="footer_nav">
        <ul>
          <li>
            <a href="#">면책공고</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">오시는길</a>
          </li>
          <li>
            <a href="#">사이트맵</a>
          </li>
        </ul>
      </nav>

      <p className="address">서울 강남구 테헤란로 92길 7 바른빌딩</p>
      <p className="copy">Copyright Barun Law LLC. All rughts reserved</p>
    </footer>
  );
};

const Index = () => {
  return (
    <div>
      <HeaderScroll />
      <Main />
      <SlideWrap />
      <News />
      <Footer />
    </div>
  );
};

export default Index;

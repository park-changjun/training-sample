// import { Agent } from "http";
import React, { useState } from "react";
// import { isReturnStatement } from "typescript";



const languageMenu = ["Korean", "English"];
const Dropdown = (props) => {
  const Show = 'block';
  const NoShow = 'none';
  const [headerDrop, setHeaderDrop] = useState('none');
  const [lang, setLang] = useState('');

  return (
    <div>
      <div className="dropdown">
        <button type="button" onClick={() => {
          setHeaderDrop(!headerDrop);
        }} className="dropbtn">language<img src="img/arrow.png" alt="버튼" /></button>

        <ul className="dropdown-menu" style={{ display: headerDrop === true ? 'block' : 'none' }}>

          {languageMenu.map((languageMenu) => {
            return (
              <li onClick={() => props?.setLang?.(languageMenu)}>{languageMenu}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}



// const HeaderMenu = ["바른소개", "바른소개", "바른소개", "바른소개", "바른소개", "바른소개", "바른소개"];


const HeaderNav = (props) => {
  const ShowNav = 'block';
  const NoShowNav = 'none';
  const [headerNav, setHeaderNav] = useState(false);

  return (
    <div>
      <ul className="header-nav-dep" >

      <li onClick={() => {
        setHeaderNav(!headerNav);
      }}><a href="#">바른소개</a>

        <ul className="header-nav-sub-dep" style={{display : headerNav ? 'block' : 'none'}}>

          <li><a href="#">바른소개</a></li>
          <li><a href="#">바른연락</a></li>
          <li><a href="#">오시는길</a></li>
          <li><a href="#">싱가포르<br />대표사무소</a></li>
          <li><a href="#">블로그</a></li>
        </ul>


      </li>
      <li><a href="#">업무분야</a>
        <ul className="header-nav-sub-dep">
          <li><a href="#">분야별</a></li>
          <li><a href="#">산업별</a></li>
          <li><a href="#">국가별</a></li>
        </ul>
      </li>
      <li><a href="#">구성원</a></li>
      <li><a href="#">소삭/자료</a>
        <ul className="header-nav-sub-dep">
          <li><a href="#">바른뉴스</a></li>
          <li><a href="#">언론보도</a></li>
          <li><a href="#">최근업무사례</a></li>
          <li><a href="#">뉴스레터</a></li>
          <li><a href="#">저서 및 자료</a></li>
          <li><a href="#">코로나19자료실</a></li>
        </ul>
      </li>
      <li><a href="#">아카데미</a>
        <ul className="header-nav-sub-dep">
          <li><a href="#">연구회</a></li>
          <li><a href="#">강좌</a></li>
          <li><a href="#">연구자료</a></li>
        </ul>
      </li>
      <li><a href="#">공익활동</a>
        <ul className="header-nav-sub-dep">
          <li><a href="#">사단법인 정</a></li>
          <li><a href="#">사회공헌활동</a></li>
          <li><a href="#">사회공헌소식</a></li>
        </ul>
      </li>
      <li><a href="#">인재채용</a>
        <ul className="header-nav-sub-dep">
          <li><a href="#">채용안내</a></li>
          <li><a href="#">채용점수</a></li>
          <li><a href="#">채용게시판</a></li>
        </ul>
      </li>
      </ul>
    </div >
  )
}

const HeaderSearch = () => {
  return (
    <div>
      <div className="nav_search_wrap">
        <button type="button" className="nav_search_btn"><img src="img/srch-button.png" /></button>

        <div className="modal hidden">
          <div className="modal_overlay"></div>
          <input type="text" className="modal_search_box" placeholder="검색어를 입력하세요" />
          <button type="button" className="modal_search_box_btn" placeholder="검색어를 입력하세요" ><img
            src="img/srch-button.png" /></button>

        </div>
      </div>
    </div>
  )
}


const Visual = () => {
  const [input, setInput] = React.useState('');
  const buttonRef = React.useRef();

  return (
    <div>
      <div className="visual">
        <div className="visual_box">
          <div className="visual_title"> {input} <br />FOR YOUR RIGHT</div>


          <div className="visual_search">

            <input type="text" id="search" placeholder=""
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  buttonRef.current?.click();
                }
              }}
              value={input}
              onChange={(e) => {
                // console.log(e.target.value);
                setInput(e.target.value)
              }} />

            <div className="visual_search_box"></div>
            <button type="button" onClick={() => { alert('Hello~!'); }}
              className="visual_search_btn" ref={buttonRef}><img src="img/search-button-big.png" /></button>

          </div>

        </div>

        <div className="scroll_btn">
          <a href="#">scroll
            <img src="img/arrow-down.png" alt="스크롤" />
          </a>
        </div>
      </div>
    </div>
  )
}


// const [slideCount, setSlideCount] = React.useState([])
// const [slide, setSlide] = React.useState(0);

const SlideNavMenu = ["바른뉴스", "업무사례", "언론보도"];
const SlideNav = () => {
  const [checked, setChecked] = React.useState('바른뉴스')

  return (
    <div>
      <nav className="content_nav">
        <h2 className="content-bg-txt"> {checked} </h2>
        <ul>

          {SlideNavMenu.map(menu => {
            const ischecked = menu === checked;
            return (
              <li onClick={(e) => setChecked(menu)} style={{ color: ischecked ? "#333333" : "#aaaaaa" }}>{menu}</li>
            )
          })
          }
        </ul>
        <a href="https://barunlaw.com/barunnews/S" class="more">+더보기</a>
      </nav>
    </div>
  )
}
const SlideWrap = () => {
  return (
    <div>
      <div className="list-wrapper-slider">
        <ul className="clear">

          {[{
            title: 'M&A/기업지배구조1',
            subTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례',
            Text: 'zz법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          },
          {
            title: 'M&A/기업지배구조2',
            subTitle: 'fegrgrhegefegg',
            Text: '법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          },
          {
            title: 'M&A/기업지배구조3',
            subTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례',
            Text: 'ddddddddddddd을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          },
          {
            title: 'M&A/기업지배구조4',
            subTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례',
            Text: '법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          },
          {
            title: 'M&A/기업지배구조5',
            subTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례',
            Text: '법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          },
          {
            title: 'M&A/기업지배구조6',
            subTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례',
            Text: '법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”)을 위하여 서울 고속 버스 터미널 주식회사(이하)',
            newsData: '2021.07.01',
          }].map((cardData) => <Sldies cardData={cardData} />)}

        </ul>
      </div>
    </div>
  )
}
const Sldies = (props) => {
  const { cardData } = props;
  const { title, subTitle, Text, newsData } = cardData || {}

  return (
    <div>
      <li>
        <a className="item" href="#">

          <label className="box_topic">
            <span> {title} </span></label>
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
  )
}

const SlideBtnPrev = () => {
  return (
    <div>
      <button className="prev" onClick={() => {
        // slideCount.length - 1 === slideCount ? 0 : slideCount + 1;
        // setSlideCount('-' + slideCount * 384 + 'px')
      }}>

        <img src="img/tab-arrow-left.png" alt="버튼" />
      </button>
    </div>
  )
}



const SlideBtnNext = () => {
  // const [slide setSlide] = useState();

  return (
    <div>
      <button className="next" >
        {/* // slideCount === 0 ? slideCount.length - 1 : slideCount - 1;
        onClick={(e) => setMove(!move)} style={{ width: '-' + 400 + 'px' }}
        // setSlideCount('-' + slideCount * 384 + 'px') */}

        <img src="img/tab-arrow-right.png" alt="버튼" />
      </button>
    </div>
  )
}



const NewsLeft = () => {
  return (
    <div>
      <div className="news_left">
        <h2>뉴스레터</h2>
        <h4>법무바른은 월간 뉴스레터를 발행하여<br />법과 관련된 다양한 사례를 전합니다.</h4>
        <a href="https://barunlaw.com/barunnews/N" class="more">+더보기</a>
      </div>
    </div>
  )
}
const NewsRight = () => {
  return (
    <div>
      <div className="news_right">

        {[{
          letterText: '2021. MARCHere22',
          letterTitle: '법무법인(유한) 바른 뉴스레터 - 제94호 (2021.03)'
        },
        {
          letterText: '2021. MARCHdsdsdsds',
          letterTitle: '법무법인(유한) 바른 뉴스레터 - 제93호 (2021.02)'
        }].map((letterData) => <NewsLetter letterData={letterData} />)}

      </div>
    </div>
  )
}
const NewsLetter = (props) => {
  const { letterData } = props;
  const { letterText, letterTitle } = letterData || {}

  return (
    <div>
      <div className="letter">
        <a href="https://barunlaw.com/letter/97/newsletter97.html">
          <p className="letter_date"> {letterText} </p>
          <p className="letter_title"> {letterTitle} </p>
          <p className="news_btn">
            <img src="img/news-arrow.png" alt="버튼" />
          </p>
        </a>
      </div>
    </div>
  )
}


const Footer = () => {
  return (
    <div>
      <footer id="footer">
        <h1 id="logo">
          <a href="#"><img src="./img/gray-logo.png" alt="로고" /></a>
        </h1>
        <nav className="footer_nav">
          <ul>
            <li><a href="#">면책공고</a></li>
            <li><a href="#">개인정보처리방침</a></li>
            <li><a href="#">오시는길</a></li>
            <li><a href="#">사이트맵</a></li>
          </ul>
        </nav>

        <p className="address">
          서울 강남구 테헤란로 92길 7 바른빌딩
        </p>
        <p className="copy">Copyright Barun Law LLC. All rughts reserved</p>
      </footer>
    </div>
  )
}








const Index = () => {

  return (
    <div>
      <main id="main">
        <header className="header">
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

        <Visual />

      </main>



      <section id="content" className="gradient_wrapper">
        <div id="content_inner">
          <SlideNav />
          <div className="content_box">
            <SlideWrap />
            <div className="arrow_btn">
              <SlideBtnPrev />
              <SlideBtnNext />
            </div>
          </div>

          <div className="slide_btn">
            <button className="dots1"></button>
            <button className="dots2"></button>
          </div>


        </div>
      </section>


      <section id="news">
        <div className="news_inner">
          <NewsLeft />
          <NewsRight />
        </div>
      </section>
      <hr />

      <Footer />

    </div>

  )
};

export default Index;
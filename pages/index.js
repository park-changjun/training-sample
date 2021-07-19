import React from "react";
import { useState } from "react";

const LANGUAGES = ["KOREAN", "ENGLISH", "CHINESE", "FRENCH", "RUSSIAN", "JAPANESE", "VIETNAMESE"];

const Language = (props) => {
    const VISIBLE = '1';
    const INVISIBLE = '0';
    const [headerVisible, setHeaderVisible] = useState(false);
    return (
        <div className="language dropdown">Language
            <img src="/project1/img/arrow-down.svg" alt="" id="language" onClick={() => {
                setHeaderVisible(!headerVisible);
            }} />
            <div className="content" id="headerDropdown" style={{ opacity: headerVisible === true ? VISIBLE : INVISIBLE }}>
                {LANGUAGES.map((language) => {
                    return (
                        <li 
                        key={`langauge_${language}`}
                        onClick={() => props?.setLang?.(language)}>{language}</li>
                    )
                })}
            </div>
        </div>
    )
};

const Nav = () => {
    return (
        <div className="nav-container">
            <img src="/project1/img/logo.png" className="logo" />
            <nav className="nav-bar">
                <ul className="main-menu">
                    <li><a>바론소개</a></li>
                    <li><a>업무분야</a></li>
                    <li><a>구성원</a></li>
                    <li><a>자료실</a></li>
                    <li><a>사회공헌</a></li>
                    <li><a>인재채용</a></li>
                </ul>
                <img src="/project1/img/srch-button.png" className="srch_button" />
            </nav>
        </div>
    )
};

const Header = (props) => {
    return (
        <header className="header">
            <Language lang={props.lang} setLang={props.setLang} />
            <Nav />
        </header>
    )
};

const MainTextBox = () => {
    return (
        <div className="main-text-box">
            WE DO THINGS RIGHT<br />FOR YOUR RIGHT
        </div>
    )
};

const SearchBox = () => {
    
    return (
        <div className="search-box" id="search"  onClick={()=>{

            }}>
            <input className="search-text" />
            <span><img src="/project1/img/search-button-big.png" className="search_button-big" /></span>
        </div>
    )
};

const MainScrollBtn = () => {
    return (<button className="scroll-wrap">
        <p>SCROLL</p>
        <img src="/project1/img/arrow-down.svg" className="arrow-down" />
    </button>)
};

const MainSection = () => {
    return (<main>
        <div className="container">
            <MainTextBox />
            <SearchBox />
            <MainScrollBtn />
        </div>
    </main>)
};

const Grad = () => {
    return (
        <div className="grad"></div>
    )
};

const MiddleNavBar = () => {
    const [barunNews, setBarunNews] = useState('active');
    const [workCase, setWorkCase] = useState('');
    const [report, setReport] = useState('');
    const [backgroundText, setBackgroundText] = useState('바른뉴스');
    return (
        <div className="middle-nav-bar">
            <div className="middle-nav-background-font" id="bgFont">{backgroundText}</div>
            <nav className="category-container" id="categoryContainer">
                <ul>
                    <li className={barunNews} id="barunNews" onClick={()=>{
                        setBarunNews('active');
                        setWorkCase('');
                        setReport('');
                        setBackgroundText('바른뉴스');
                    }}>바른뉴스</li>
                    <li className={workCase} id="workCase" onClick={() => {
                        setBarunNews('');
                        setWorkCase('active');
                        setReport('');
                        setBackgroundText('업무사례');
                    }}>업무사례</li>
                    <li className={report} id="report" onClick={() => {
                        setBarunNews('');
                        setWorkCase('');
                        setReport('active');
                        setBackgroundText('언론보도');
                    }}>언론보도</li>
                </ul>
            </nav>
            <div className="more-info">+ 더보기</div>
        </div>
    )
};

const PrevBtn = (props) => {
    return (
        <button className="case-left-arrow" id="prvBtn" onClick={
            ()=>{
                if (props.transformTime > 0) {
                    props.setTransformTime(props.transformTime--);
                    props.setTranslateX(`${-props.transformTime * props.TRANSFORM_UNIT}`);
                    console.log(props.translateX);
                } else {
                    props.setTranslateX('-10');
                    setTimeout(() => {
                        props.setTranslateX('0');
                    }, 500)
                }
            }
        }></button>
    )
    
}

const NextBtn = () => {
    return (
        <button className="case-right-arrow" id="nextBtn" />
    )
}

const ElementsBox = (props) => {
    return (
    <li className="elements-box" style={{transform: `translateX(${props.translateX}px)`}}>
        <div className="box-content">
            <div>
                <a className="category-block">M&A/기업지배구조1</a>
                <br />
                <img className="flag-back" src="/project1/img/flag-back.png"/>
            </div>
            <h4 className="case-title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받아낸 사례</h4>
            <div className="case-content">
                <p>법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “</p>
            </div>
            <p className="article-date">2021.04.01</p>
        </div>
        <div className="profile-img-box-container">
            <img src="/project1/img/defaultImg.svg" />
            <img src="/project1/img/defaultImg.svg" />
            <img src="/project1/img/defaultImg.svg" />
        </div>
    </li>)
};

const CaseSection = (props) => {
    const TRANSFORM_UNIT = 408;
    const [transformTime, setTransformTime] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    return (
        <section className="case-section">
            <Grad />
            <div className="container">
                <MiddleNavBar/>
                <div className="card-wrap">
                    <PrevBtn transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} setTranslateX={setTranslateX}/>
                    <div className="box-wrap">
                        <ul className="elements-box-container" id="first">
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX}/>
                        </ul>
                    </div>
                    <NextBtn transformTime={transformTime} setTransformTime={setTransformTime}/>
                </div>
                <div className="dot-wrap">
                    <div className="active" id="0"></div>
                    <div id="1"></div>
                    <div id="2"></div>
                </div>
            </div>
        </section>
    )
}

const NewsLetterBox = () => {
    return (
        <div className="news-info-box">
            <h4 className="news-letter">뉴스레터</h4>
            <p>법무바른은 월간 뉴스레터를 발행하여<br />
                법과 관련된 다양한 사례를 전합니다.</p>
            <br /><span className="more-info footer-more-info">+ 더보기</span>
        </div>
    )
}

const NewsInfo = () => {
    return (
        <div className="news-info">
            <a className="news-date">2021. March</a>
            <div>
                <a className="news-cotent">법무법인(유한) 바른 뉴스레터 - 제 94호 (2021.03)</a><img className="right-arrow"
                    src="/project1/img/news-arrow-hover.png" />
            </div>
        </div>
    )
}

const NewsBox = () => {
    return (
        <div className="news-box">
            <NewsInfo />
            <NewsInfo />
        </div>
    )
}

const NewsLetterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <NewsLetterBox />
                <NewsBox />
            </div>
        </section>
    )
}

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="gray-logo"><img src="/project1/img/gray-logo.png" /> </div>
                <nav>
                    <ul>
                        <li><a>면책공고</a></li> <span className="footer-nav-div-icon">|</span>
                        <li><a>개인정보처리방침</a></li> <span className="footer-nav-div-icon">|</span>
                        <li><a>오시는길</a></li> <span className="footer-nav-div-icon">|</span>
                        <li><a>사이트맵 </a></li>
                    </ul>
                </nav>
                <addr className="footer-addr">서울 강남구 테헤란로 92길 7 바른 빌딩</addr>
                <p className="copyright">Copyright. Brau Law LLC. All rights reserved</p>
            </div>
        </footer>
    )
}

const Modal = () => {
    return (
        <section className="modal" id="modal">
            <div className="modal-text">
                
                어떤 법률적 자문이 필요하신가요?<br/>
                검색어를 입력 후, 엔터를 눌러주세요.
            </div>
        </section>
    )
};

const Index = (props) => {
    return (
        <div>
            <Header lang={props.lang} setLang={props.setLang} />
            <MainSection />
            <CaseSection />
            <NewsLetterSection />
            <Footer />
            <Modal />
        </div>
    )
}

export default Index;
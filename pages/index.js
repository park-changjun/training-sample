import React from "react";
import { useState } from "react";


const LANGUAGES = ["KOREAN", "ENGLISH", "CHINESE", "FRENCH", "RUSSIAN", "JAPANESE", "VIETNAMESE"];
const CARD_NEWS_CATEGORIES = ["바른뉴스", "업무사례", "업무보도"];
const DOT_ARR = ['dot1', 'dot2', 'dot3'];
const TRANSFORM_UNIT = 408;
const VISIBLE = '1';
const INVISIBLE = '0';
const MODAL_ON = '3';
const MODAL_OFF = '-1';

const Language = ({ setLang }) => {
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
                            onClick={() => {
                                setLang(language);
                            }}>{language}</li>
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

const Header = ({ lang, setLang }) => {
    return (
        <header className="header">
            <Language setLang={setLang} />
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

const SearchBox = ({ modalVisible, setModalVisible }) => {
    return (
        <div className="search-box" id="search" onClick={() => {
            setModalVisible(true);
        }}>
            <input className="search-text" />
            <span><img src="/project1/img/search-button-big.png" className="search_button-big" /></span>
        </div>
    )
};

const MainScrollBtn = () => {
    return (
        <button className="scroll-wrap">
            <p>SCROLL</p>
            <img src="/project1/img/arrow-down.svg" className="arrow-down" />
        </button>
    )
};

const MainSection = ({ modalVisible, setModalVisible }) => {
    return (
        <main>
            <div className="container">
                <MainTextBox />
                <SearchBox modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <MainScrollBtn />
            </div>
        </main>
    )
};

const Grad = () => {
    return (
        <div className="grad"></div>
    )
};

const CardNewsCategory = ({ setBackgroundText }) => {
    const [cardNewsCategory, setCardNewsCategory] = useState("바른뉴스");
    return (
        <ul>
            {CARD_NEWS_CATEGORIES.map(category => {
                return (<li key={`cardNewsCategory_${category}`} onClick={(e) => {
                    setCardNewsCategory(category);
                    setBackgroundText(category);
                }} className={category === cardNewsCategory ? 'active' : 'inactive'} >{category}</li>)
            })
            }
        </ul>
    )
};

const MiddleNavBar = () => {
    const [backgroundText, setBackgroundText] = useState('바른뉴스');
    return (
        <div className="middle-nav-bar">
            <div className="middle-nav-background-font" id="bgFont">{backgroundText}</div>
            <nav className="category-container" id="categoryContainer">
                <CardNewsCategory setBackgroundText={setBackgroundText} />
            </nav>
            <div className="more-info">+ 더보기</div>
        </div>
    )
};

const PrevBtn = ({transformTime, TRANSFORM_UNIT, setTransformTime, setTranslateX}) => {
    return (
        <button className="case-left-arrow" id="prvBtn" onClick={
            () => {
                if (transformTime > 0) {
                    setTransformTime(transformTime - 1);
                    setTranslateX(`${-(transformTime-1) * TRANSFORM_UNIT}`);
                } else {
                    setTranslateX('-10');
                    setTimeout(() => {
                        setTranslateX('0');
                    }, 500)
                }
            }
        }></button>
    )
};

const NextBtn = (props) => {
    return (
        <button className="case-right-arrow" id="nextBtn" onClick={
            () => {
                switch (props.transformTime) {
                    // 4번째 기사를 보여줄때 밑의 도트를 변경해준다.
                    case 2:
                        props.setTransformTime(props.transformTime + 1);
                        props.setTranslateX(`-${(props.transformTime + 1) * props.TRANSFORM_UNIT}`);
                        props.setCurrentDot('dot2');
                        break;
                    // 7번째 기사를 보여줄때 밑의 도트를 변경해준다.
                    case 5:
                        props.setTransformTime(props.transformTime + 1);
                        props.setTranslateX(`-${(props.transformTime + 1) * props.TRANSFORM_UNIT}`);
                        props.setCurrentDot('dot3');
                        break;
                    // 7번째, 8번째, 9번째 기사가 보여직 있을때 다음 버튼을 클릭하면 초기화면으로 돌아간다.
                    case 6:
                        props.setTranslateX('0');
                        props.setTransformTime(0);
                        props.setCurrentDot('dot1');
                        break;
                    default:
                        props.setTransformTime(props.transformTime + 1);
                        props.setTranslateX(`-${(props.transformTime + 1) * props.TRANSFORM_UNIT}`);
                        break;
                }
            }
        } />
    )
};

const ElementsBox = ({ translateX }) => {
    return (
        <li className="elements-box" style={{ transform: `translateX(${translateX}px)` }}>
            <div className="box-content">
                <div>
                    <a className="category-block">M&A/기업지배구조1</a>
                    <br />
                    <img className="flag-back" src="/project1/img/flag-back.png" />
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
        </li>
    )
};

const CaseSection = () => {
    const [transformTime, setTransformTime] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [currentDot, setCurrentDot] = useState('dot1');
    return (
        <section className="case-section">
            <Grad />
            <div className="container">
                <MiddleNavBar />
                <div className="card-wrap">
                    <PrevBtn transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} setTranslateX={setTranslateX} />
                    <div className="box-wrap">
                        <ul className="elements-box-container" id="first">
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                            <ElementsBox transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} translateX={translateX} setTranslateX={setTranslateX} />
                        </ul>
                    </div>
                    <NextBtn transformTime={transformTime} setTransformTime={setTransformTime} TRANSFORM_UNIT={TRANSFORM_UNIT} setTranslateX={setTranslateX} setCurrentDot={setCurrentDot} />
                </div>
                <div className="dot-wrap">
                    {
                        DOT_ARR.map(dot => {
                            return (
                                <div key={dot}
                                    onClick={(e) => {
                                        setCurrentDot(dot);
                                        if (dot === 'dot1') {
                                            setTransformTime(0);
                                            setTranslateX('0');
                                        } else if (dot === 'dot2') {
                                            setTransformTime(3);
                                            setTranslateX(`-${2 * TRANSFORM_UNIT}`);
                                        } else {
                                            setTransformTime(6);
                                            setTranslateX(`-${5 * TRANSFORM_UNIT}`);
                                        }
                                    }}
                                    className={dot === currentDot ? 'active' : 'inactive'}></div>
                            )
                        })

                    }
                </div>
            </div>
        </section>
    )
};

const NewsLetterBox = () => {
    return (
        <div className="news-info-box">
            <h4 className="news-letter">뉴스레터</h4>
            <p>법무바른은 월간 뉴스레터를 발행하여<br />
                법과 관련된 다양한 사례를 전합니다.</p>
            <br /><span className="more-info footer-more-info">+ 더보기</span>
        </div>
    )
};

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
};

const NewsBox = () => {
    return (
        <div className="news-box">
            <NewsInfo />
            <NewsInfo />
        </div>
    )
};

const NewsLetterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="container">
                <NewsLetterBox />
                <NewsBox />
            </div>
        </section>
    )
};

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
};

const Modal = ({ modalVisible, setModalVisible }) => {
    return (
        <section className="modal"
            style={
                modalVisible ? { opacity: VISIBLE, zIndex: MODAL_ON } : { opacity: INVISIBLE, zIndex: MODAL_OFF }
            }
            onClick={ () => {
                setModalVisible(!modalVisible)
            }
            }
        >
            <div className="modal-text">
                어떤 법률적 자문이 필요하신가요?<br />
                검색어를 입력 후, 엔터를 눌러주세요.
            </div>
        </section>
    )
};

const Index = ({ lang, setLang }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <div>
            <Header lang={lang} setLang={setLang} />
            <MainSection modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <CaseSection />
            <NewsLetterSection />
            <Footer />
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        </div>
    )
};

export default Index;
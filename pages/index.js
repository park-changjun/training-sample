import React from "react";
import { useState, useEffect } from "react";
const LANGUAGES = ["KOREAN", "ENGLISH", "CHINESE", "FRENCH", "RUSSIAN", "JAPANESE", "VIETNAMESE"];
const CARD_NEWS_CATEGORIES = ["바른뉴스", "업무사례", "업무보도"];
const DOT_ARR = ['dot1', 'dot2', 'dot3'];
const SEARCH_SAMPLE_ARR = ['노동법률', '노동자', '노동 전문가', '근로', '근로 기준', '근로법', '형사', '형사법', '형사사건'];
const TRANSFORM_UNIT = 408;
const VISIBLE = '1';
const INVISIBLE = '0';
const MODAL_ON = '3';
const MODAL_OFF = '-1';
const DEFAULT_LOGO_PATH = '/project1/img/logo.png'
const CHANGE_LOGO_PATH = '/img/logo_sub.png'
const DEFAULT_HEADER_SEARCH_IMG_PATH = '/project1/img/srch-button.png'
const CHANGE_HEADER_SEARCH_IMG_PATH = '/img/sch_icon_sub.png'
const VIDEO_PATH1 = '/video/bgVideo1.mp4';
const VIDEO_PATH2 = '/video/bgVideo2.mp4';
const DEFAULT_PROFILE_IMG_PATH = '/img/defaultImg.svg';

const SAMPLE_CARD_DATA_FROM_SERVER = [
    {
     cardCategory: 'M&A 기업지배구조',
     cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
     cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
     caseDate: `2021.04.01`,
     contributorImg: [DEFAULT_PROFILE_IMG_PATH, DEFAULT_PROFILE_IMG_PATH]
    },
];


const Language = ({ lang, setLang }) => {
    const [headerVisible, setHeaderVisible] = useState(false);
    return (
        <div className="language dropdown">Language
            <img src="/project1/img/arrow-down.svg" alt="" onClick={() => {
                setHeaderVisible(!headerVisible);
            }} />
            <div className="content" style={{ opacity: headerVisible === true ? VISIBLE : INVISIBLE }}>
                {
                    LANGUAGES.map((language) => {
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



const Header = ({ lang, setLang, setModalVisible }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
        setModalVisible(false);
    }
    useEffect(() => {
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <header className={scrollPosition > 821 ? 'change-header' : 'header'}>
            <Language lang={lang} setLang={setLang} />
            <div className="nav-container">
                <img src={scrollPosition > 821 ? CHANGE_LOGO_PATH : DEFAULT_LOGO_PATH}
                    className="logo" />
                <nav className="nav-bar">
                    <ul className="main-menu">
                        <li><a>바론소개</a></li>
                        <li><a>업무분야</a></li>
                        <li><a>구성원</a></li>
                        <li><a>자료실</a></li>
                        <li><a>사회공헌</a></li>
                        <li><a>인재채용</a></li>
                    </ul>
                    <img src={scrollPosition > 821 ? CHANGE_HEADER_SEARCH_IMG_PATH : DEFAULT_HEADER_SEARCH_IMG_PATH} className="srch_button" />
                </nav>
            </div>
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

const SearchBox = ({ setModalVisible, setKeyword }) => {
    return (
        <div className="search-box" onClick={() => {
            setModalVisible(true);
        }}
        >
            <input className="search-text" onChange={(e) => {
                const globalRegex = new RegExp(`${e.target.value}/*`);
                const filteredArr = SEARCH_SAMPLE_ARR.filter(filterd => globalRegex.test(filterd) && filterd);
                setKeyword(filteredArr.length === SEARCH_SAMPLE_ARR.length || filteredArr.length === 0 ? '어떤 법률적 자문이 필요하신가요?' : filteredArr.toString());
            }} />
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

const MainSection = ({ setModalVisible, setKeyword }) => {
    return (
        <main>
            <div className="container">
                <MainTextBox />
                <SearchBox setModalVisible={setModalVisible} setKeyword={setKeyword} />
                <MainScrollBtn />
            </div>
            <video autoPlay={true} loop muted>
                <source src={Math.random() * 10 > 5 ? VIDEO_PATH1 : VIDEO_PATH2} type="video/mp4" />
            </video>
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
                }} className={category === cardNewsCategory ? 'active' : ''} >{category}</li>)
            })
            }
        </ul>
    )
};

const MiddleNavBar = () => {
    const [backgroundText, setBackgroundText] = useState('바른뉴스');
    return (
        <div className="middle-nav-bar">
            <div className="middle-nav-background-font" >{backgroundText}</div>
            <nav className="category-container" >
                <CardNewsCategory setBackgroundText={setBackgroundText} />
            </nav>
            <div className="more-info">+ 더보기</div>
        </div>
    )
};

const PrevBtn = ({ transformTime, TRANSFORM_UNIT, setTransformTime, setTranslateX }) => {
    return (
        <button className="case-left-arrow" onClick={
            () => {
                if (transformTime > 0) {
                    setTransformTime(transformTime - 1);
                    setTranslateX(`${-(transformTime - 1) * TRANSFORM_UNIT}`);
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

const NextBtn = ({ TRANSFORM_UNIT, setCurrentDot, setTransformTime, setTranslateX, transformTime }) => {

    return (
        <button className="case-right-arrow" onClick={
            () => {
                switch (transformTime) {
                    // 4번째 기사를 보여줄때 밑의 도트를 변경해준다.
                    case 2:
                        setTransformTime(transformTime + 1);
                        setTranslateX(`-${(transformTime + 1) * TRANSFORM_UNIT}`);
                        setCurrentDot('dot2');
                        break;
                    // 7번째 기사를 보여줄때 밑의 도트를 변경해준다.
                    case 5:
                        setTransformTime(transformTime + 1);
                        setTranslateX(`-${(transformTime + 1) * TRANSFORM_UNIT}`);
                        setCurrentDot('dot3');
                        break;
                    // 7번째, 8번째, 9번째 기사가 보여직 있을때 다음 버튼을 클릭하면 초기화면으로 돌아간다.
                    case 6:
                        setTranslateX('0');
                        setTransformTime(0);
                        setCurrentDot('dot1');
                        break;
                    default:
                        setTransformTime(transformTime + 1);
                        setTranslateX(`-${(transformTime + 1) * TRANSFORM_UNIT}`);
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
                    <img className="flag-back" src="/img/flag-back.png" />
                </div>
                <h4 className="case-title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받아낸 사례</h4>
                <div className="case-content">
                    <p>법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “</p>
                </div>
                <p className="article-date">2021.04.01</p>
            </div>
            <div className="profile-img-box-container">
                <img src="/img/defaultImg.svg" />
                <img src="/img/defaultImg.svg" />
                <img src="/img/defaultImg.svg" />
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
                        <ul className="elements-box-container">
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
                                    className={dot === currentDot ? 'active' : ''}></div>
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

const Modal = ({ modalVisible, setModalVisible, keyword }) => {
    return (
        <section className="modal"
            style={
                modalVisible ? { opacity: VISIBLE, zIndex: MODAL_ON } : { opacity: INVISIBLE, zIndex: MODAL_OFF }
            }
            onClick={() => {
                setModalVisible(!modalVisible)
            }
            }
        >
            <div className="modal-text">
                {keyword}
            </div>
        </section>
    )
};

const Index = ({ lang, setLang }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [keyword, setKeyword] = useState('어떤 법률적 자문이 필요하신가요?')
    return (
        <div>
            <head>
                <title>{`${lang} page`}</title>
            </head>
            <Header lang={lang} setLang={setLang} setModalVisible={setModalVisible} />
            <MainSection setModalVisible={setModalVisible} setKeyword={setKeyword} />
            <CaseSection />
            <NewsLetterSection />
            <Footer />
            <Modal modalVisible={modalVisible} setModalVisible={setModalVisible} keyword={keyword} />
        </div>
    )
};

export default Index;
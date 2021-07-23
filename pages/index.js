import React from "react";
import { useState, useEffect } from "react";
import Router from 'next/router'


const LANGUAGES = ["KOREAN", "ENGLISH", "CHINESE", "FRENCH", "RUSSIAN", "JAPANESE", "VIETNAMESE"];
const CARD_NEWS_CATEGORIES = ["바른뉴스", "업무사례", "업무보도"];
const SEARCH_SAMPLE_ARR = ['노동법률', '노동자', '노동 전문가', '근로', '근로 기준', '근로법', '형사', '형사법', '형사사건'];
const TRANSFORM_UNIT = 408;
const VISIBLE = '1';
const INVISIBLE = '0';
const SAMPLE_CARD_DATA_FROM_SERVER = [
    {
        id: 0,
        cardCategory: '데이터 배열[0]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례 ',
        cardContent: `내용의 글자수 세기를 테스트 하고 있습니다. 컴포넌트는 this.props를 이용해 입력 데이터를 다루는 것 외에도 내부적인 상태 데이터를 가질 수 있습니다. 이는 this.state로 접근할 수 있습니다. 컴포넌트의 상태 데이터가 바뀌면 render()가 다시 호출되어 마크업이 갱신됩니다.`,
        caseDate: `2021.04.30`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 1,
        cardCategory: '데이터 배열[1]',
        cardTitle: '제목의 글자수 세기를 테스트 하고 있습니다. props와 state를 사용해서 간단한 Todo 애플리케이션을 만들 수 있습니다. 이 예제에서는 state를 사용해 사용자가 입력한 텍스트와 할 일 목록을 관리합니다. 이벤트 핸들러들이 인라인으로 각각 존재하는 것처럼 보이지만, 실제로는 이벤트 위임을 통해 하나로 구현됩니다.',
        cardContent: `무죄 판결`,
        caseDate: `2021.04.01`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 2,
        cardCategory: '데이터 배열[2]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.02.11`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg', '/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 3,
        cardCategory: '데이터 배열[3]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2020.11.21`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 4,
        cardCategory: '데이터 배열[4]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.05.01`,
        contributorImg: ['/img/defaultImg.svg']
    },
    {
        id: 5,
        cardCategory: '데이터 배열[5]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.06.01`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 6,
        cardCategory: '데이터 배열[6]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2020.12.01`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 7,
        cardCategory: '데이터 배열[7]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.03.01`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 8,
        cardCategory: '데이터 배열[8]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.04.11`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg']
    },
    {
        id: 9,
        cardCategory: '데이터 배열[9]',
        cardTitle: '교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤지고 무죄를 받아낸 사례',
        cardContent: `법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여 서울 고속 버스 터미널 주식회사(이하 “`,
        caseDate: `2021.04.11`,
        contributorImg: ['/img/defaultImg.svg', '/img/defaultImg.svg']
    }
];
const SLIDE_STOP_POINT = SAMPLE_CARD_DATA_FROM_SERVER?.length - 3;
const DOT_NUM = Math.ceil(SAMPLE_CARD_DATA_FROM_SERVER?.length / 3);
const DOT_ARR = new Array(DOT_NUM).fill('dot')?.map((dot, index) => `${dot}_${index + 1}`);
const HEADER_CHANGE_POINT = 821;
const RANDOM_IMAGE = Math.random() * 10 > 5;
const LAST_DOT = DOT_ARR.length - 1;
const LAST_CHANGE_POINT = SAMPLE_CARD_DATA_FROM_SERVER?.length - 4;
const MAIN_MENUS = ['바론소개', '업무분야', '구성원', '자료실', '사회공헌', '인재채용'];

const Language = ({ setLang }) => {
    const [headerVisible, setHeaderVisible] = useState(false);
    
    return (
        <div className="language dropdown">Language
            <img src="/img/arrow-down.svg" alt="" onClick={() => {
                setHeaderVisible(!headerVisible);
            }} />
            <div className="content" style={{ height: headerVisible ? 'auto' : '0' }}>
                {
                    LANGUAGES.map((language) => {
                        return (
                            <li
                                key={`langauge_${language}`}
                                onClick={() => {
                                    setLang(language);
                                    alert(`${language} page`);
                                }}>{language}</li>
                        )
                    })}
            </div>
        </div>
    )
};



const Header = ({ setLang, setModalVisible }) => {
    const useScroll = () => {
        const [scrollPosition, setScrollPosition] = useState(0);
        const onScroll = (event) => { setScrollPosition(window.scrollY);}
        useEffect(()=>{
            Router.push("/main");
             window.addEventListener("scroll", onScroll);
             return () => { window.removeEventListener("scroll", onScroll)  };
        }, [])
        return scrollPosition;
    }
   const scrollPosition = useScroll();

    return (
        <header className={scrollPosition > HEADER_CHANGE_POINT ? 'change-header' : 'header'}>
            <Language setLang={setLang} />
            <div className="nav-container">
                <img src={scrollPosition > HEADER_CHANGE_POINT ? '/img/logo_sub.png' : '/img/logo.png'}
                    className="logo" />
                <nav className="nav-bar">
                    <ul className="main-menu">
                        {MAIN_MENUS?.map(
                            (menu) => {
                                return (<li key={`menu_${menu}`}><a>{menu}</a></li>)
                            }
                        )}
                    </ul>
                    <img src={scrollPosition > HEADER_CHANGE_POINT ? '/img/sch_icon_sub.png' : '/img/srch-button.png'} className="srch_button" />
                </nav>
            </div>
        </header>
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
            <span><img src="/img/search-button-big.png" className="search_button-big" /></span>
        </div>
    )
};


const MainSection = ({ setModalVisible, setKeyword }) => {

    return (
        <main>
            <div className="container">
                <div className="main-text-box">
                    WE DO THINGS RIGHT<br />FOR YOUR RIGHT
                </div>
                <SearchBox setModalVisible={setModalVisible} setKeyword={setKeyword} />
                <button className="scroll-wrap">
                    <p>SCROLL</p>
                    <img src="/img/arrow-down.svg" className="arrow-down" />
                </button>
            </div>
            <div className="videoWrap">
                <video autoPlay={true} loop muted>
                    <source src={RANDOM_IMAGE ? '/video/bgVideo1.mp4' : '/video/bgVideo2.mp4'} type="video/mp4" />
                </video>
            </div>
        </main>
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

const PrevBtn = ({ transformTime, setTransformTime, setTranslateX, setCurrentDot, currentDot }) => {
    const PREV_CHANGE_POINT = transformTime % 3 === 0;

    return (
        <button className="case-left-arrow" onClick={transformTime > 0 ?
            transformTime === SLIDE_STOP_POINT ?
                () => {
                    setCurrentDot(currentDot - 1)
                    setTransformTime(transformTime - 1);
                    setTranslateX(`${-(transformTime - 1) * TRANSFORM_UNIT}`);
                }
                :
                () => {
                    setCurrentDot(PREV_CHANGE_POINT ? currentDot - 1 : currentDot)
                    setTransformTime(transformTime - 1);
                    setTranslateX(`${-(transformTime - 1) * TRANSFORM_UNIT}`);
                } : () => {
                    setTranslateX('-10');
                    setTimeout(() => {
                        setTranslateX('0');
                    }, 500)
                }
        }></button>
    )
};

const NextBtn = ({ transformTime, setTransformTime, setTranslateX, setCurrentDot, currentDot }) => {
    const NEXT_CHANGE_POINT = transformTime % 3 === 2;

    return (
        <button className="case-right-arrow" onClick={
            transformTime === SLIDE_STOP_POINT ? () => {
                setTranslateX(`${-(transformTime) * TRANSFORM_UNIT + 10}`);
                setTimeout(() => {
                    setTranslateX(`${-(transformTime) * TRANSFORM_UNIT}`);
                }, 500)
            } : transformTime === LAST_CHANGE_POINT ?
                () => {
                    setCurrentDot(currentDot + 1);
                    setTransformTime(transformTime + 1);
                    setTranslateX(`${-(transformTime + 1) * TRANSFORM_UNIT}`);
                }
                : () => {
                    setCurrentDot(NEXT_CHANGE_POINT ? currentDot + 1 : currentDot);
                    setTransformTime(transformTime + 1);
                    setTranslateX(`${-(transformTime + 1) * TRANSFORM_UNIT}`);
                }
        }
        ></button>
    )
};

const ElementsBox = ({ cardData, translateX }) => {

    return (
        <li className="elements-box" style={{ transform: `translateX(${translateX}px)` }}>
            <div className="box-content">
                <div>
                    <a className="category-block">{cardData?.cardCategory}</a>
                    <br />
                    <img className="flag-back" src="/img/flag-back.png" />
                </div>
                <h4 className="case-title">{cardData?.cardTitle}</h4>
                <div className="case-content">
                    <p>{
                        // cardData?.cardContent?.length < 90 ? cardData?.cardContent : `${cardData?.cardContent?.substring(0, 90)} ...`
                        cardData?.cardContent
                    }</p>
                </div>
                <p className="article-date">{cardData?.caseDate}</p>
            </div>
            <div className="profile-img-box-container">
                {cardData?.contributorImg?.map(
                    (path, index) => {
                        return (<img key={`${cardData?.id}_${index}`} src={path} />)
                    }
                )}
            </div>
        </li>
    )
};

const CaseSection = () => {
    const [transformTime, setTransformTime] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [currentDot, setCurrentDot] = useState(0);

    return (
        <section className="case-section">
            <div className="grad"></div>
            <div className="container">
                <MiddleNavBar />
                <div className="card-wrap">
                    <PrevBtn transformTime={transformTime} setTransformTime={setTransformTime} setTranslateX={setTranslateX} setCurrentDot={setCurrentDot} currentDot={currentDot} />
                    <div className="box-wrap">
                        <ul className="elements-box-container">
                            {
                                SAMPLE_CARD_DATA_FROM_SERVER?.map(
                                    (data) => {
                                        return (
                                            <ElementsBox key={`ElementsBox_${data?.id}`} cardData={data} translateX={translateX} />
                                        )
                                    }
                                )
                            }
                        </ul>
                    </div>
                    <NextBtn transformTime={transformTime} setTransformTime={setTransformTime} setTranslateX={setTranslateX} setCurrentDot={setCurrentDot} currentDot={currentDot} />
                </div>
                <div className="dot-wrap">
                    {
                        DOT_ARR.map((dot, index) => {
                            return (
                                <div key={dot}
                                    onClick={
                                        index === LAST_DOT ?
                                            (e) => {
                                                setCurrentDot(index);
                                                setTransformTime(SLIDE_STOP_POINT);
                                                setTranslateX(`-${(SLIDE_STOP_POINT) * TRANSFORM_UNIT}`);
                                            }
                                            :
                                            (e) => {
                                                setCurrentDot(index);
                                                setTransformTime(3 * index);
                                                setTranslateX(`-${(3 * index) * TRANSFORM_UNIT}`);
                                            }}
                                    className={index === currentDot ? 'active' : ''}></div>
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
                    src="/img/news-arrow-hover.png" />
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
                <div className="gray-logo"><img src="/img/gray-logo.png" /> </div>
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
                modalVisible ? { height: '100%' } : { height: 0 }
            }
            onClick={() => {
                setModalVisible(!modalVisible)
            }
            }
        >
            <div className="modal-text" style={
                modalVisible ? { opacity: VISIBLE } : { opacity: INVISIBLE }
            }>
                {keyword}
            </div>
        </section>
    )
};

const Index = ({ lang, setLang }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [keyword, setKeyword] = useState('어떤 법률적 자문이 필요하신가요?');
    return (
        <div>
            <title>{`${lang} page`}</title>
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
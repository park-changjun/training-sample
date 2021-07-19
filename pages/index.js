

const Index = () => {
  return (

    <div>

      <main id="main">
        <header className="header">
          <div className="header-container">
            <div className="header-top">
              
              <div className="dropdown">
                <button type="button" className="dropbtn">language<img src="img/arrow.png" alt="버튼" /></button>

                <ul className="dropdown-menu">
                  <li><a href="#">Korean</a></li>
                  <li><a href="#">English</a></li>
                </ul>
              </div>
            </div>
          </div>


          <div className="header-bottom">
            <a href="#" className="logo"></a>
            <nav className="header-nav">
              <ul className="header-nav-dep">
                <li><a href="#">바른소개</a>
                  <ul className="header-nav-sub-dep">
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


              <div className="nav_search_wrap">
                <button type="button" className="nav_search_btn"><img src="img/srch-button.png" /></button>

                <div className="modal hidden">
                  <div className="modal_overlay"></div>
                  <input type="text" className="modal_search_box" placeholder="검색어를 입력하세요" />
                  <button type="button" className="modal_search_box_btn" placeholder="검색어를 입력하세요" ><img
                    src="img/srch-button.png" /></button>
                </div>
              </div>
            </nav>
          </div>
        </header>


        <div className="visual">
          <div className="visual_box">
            <div className="visual_title">WE DO THINGS RIGHT<br />FOR YOUR RIGHT</div>
            <div className="visual_search">
              <input onclick="input_click()" type="search" id="search" placeholder="" />
              <div className="visual_search_box"></div>

              <button type="button" className="visual_search_btn"><img src="img/search-button-big.png" /></button>

            </div>
          </div>

          <div className="scroll_btn">
            <a href="#">scroll
              <img src="img/arrow-down.png" alt="스크롤" />
            </a>
          </div>
        </div>
      </main>



      <section id="content" className="gradient_wrapper">
        <div id="content_inner">

          <nav className="content_nav">
            <h2 className="content-bg-txt">업무사례</h2>

            <ul>
              <li className="content_manu_news">바른뉴스</li>
              <li className="content_manu_work">업무사례</li>
              <li className="content_menu_media">언론보도</li>
            </ul>

            <a href="https://barunlaw.com/barunnews/S" class="more">+더보기</a>
          </nav>

          <div className="content_box">
            <div className="list-wrapper-slider">
              <ul className="clear">
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조1</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조2</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조3</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조4</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조5</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="item" href="#">

                    <label className="box_topic">
                      <span>M&A/기업지배구조6</span></label>
                    <img className="box-topic-img" src="./img/bitmap images.png" />

                    <h3 className="box_title">교정시설에 녹화장비 반입한 독립 PD들 변호하여 1심 뒤집고 무죄를 받 아낸 사례</h3>
                    <p className="box_text">법무법인(유한) 바른의 최재웅 변호사, 장은진 변호사, 황유진 변호사는 주식회사 중앙고속(이하 “중앙고속”) 을 위하여
                      서울 고속 버스 터미널 주식회사(이하</p>
                    <span className="box_date">2021.07.01</span>
                    <div className="box_img">
                      <div className="img01"></div>
                      <div className="img01"></div>
                      <div className="img01"></div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="arrow_btn">
              <button className="prev">
                <img src="img/tab-arrow-left.png" alt="버튼" />
              </button>
              <button className="next">
                <img src="img/tab-arrow-right.png" alt="버튼" />
              </button>
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

          <div className="news_left">
            <h2>뉴스레터</h2>
            <h4>법무바른은 월간 뉴스레터를 발행하여<br />법과 관련된 다양한 사례를 전합니다.</h4>
            <a href="https://barunlaw.com/barunnews/N" class="more">+더보기</a>
          </div>

          <div className="news_right">
            <div className="letter">
              <a href="https://barunlaw.com/letter/97/newsletter97.html">
                <p className="letter_date">2021. MARCH</p>
                <p className="letter_title">법무법인(유한) 바른 뉴스레터 - 제94호 (2021.03)
                </p>
                <p className="news_btn">
                  <img src="img/news-arrow.png" alt="버튼" />
                </p>
              </a>
            </div>
            <div className="letter">
              <a href="https://barunlaw.com/letter/96/newsletter96.html">
                <p className="letter_date">2021. MARCH</p>
                <p className="letter_title">법무법인(유한) 바른 뉴스레터 - 제93호 (2021.02)
                </p>
                <p className="news_btn">
                  <img src="img/news-arrow.png" alt="버튼" />
                </p>
              </a>
            </div>
          </div>

        </div>
      </section>
      <hr />

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
};

export default Index;
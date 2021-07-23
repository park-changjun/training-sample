// import '../styles/main.css' // 법무법인 바른 css
import '../styles/cultureLife.css' 

import React from "react";
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
    // const [lang, setLang] = React.useState("KOREAN");  // 법무법인 바른에서 사용
    // return (<Component {...pageProps} setLang={setLang} lang={lang} />) // 법무법인 바른에서 사용

    const [isLogin, setIsLogin] =useState(false);
    return (<Component {...pageProps} isLogin={isLogin} setIsLogin={setIsLogin}/>)
}
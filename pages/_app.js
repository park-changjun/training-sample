import '../styles/main.css'
import React from "react";

export default function MyApp({ Component, pageProps }) {
    const [ lang, setLang ] = React.useState("KOREAN")

    return (<Component {...pageProps} setLang={setLang} lang={lang} />)
}
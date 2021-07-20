

const CardNewsCategory = () => {
    const [cardNewsCategory, setCardNewsCategory] = React.useState("바른뉴스");
    return (<ul>
        {CARD_NEWS_CATEGORIES.map(c => {
            return (<li key={`cardNewsCategory_${c}`} onClick={(e) => { setCardNewsCategory(c) }}>{c}</li>)
        })
    }
    </ul>)
}
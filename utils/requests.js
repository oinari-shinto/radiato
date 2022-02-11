const API_KEY = process.env.API_KEY;

export default {
    fetchStalnie: {
        title: "Стальные",
        url: `/stalnie/radiatori&api_key=${API_KEY}&language=en-US`,
    },
    fetchBimetal: {
        title: "Биметаллические",
        url: `/bimetal/radiatori&api_key=${API_KEY}&language=en-US`,
    },
    fetchChugun: {
        title: "Чугунные",
        url: `/chugun/radiatori&api_key=${API_KEY}&language=en-US`,
    },
    fetchContact: {
        title: "Контакты",
        url: `/contact&api_key=${API_KEY}&language=en-US`,
    },
    fetchData: {
        title: "Реквизиты",
        url: `/dataPage&api_key=${API_KEY}&language=en-US`,
    },
    fetchData: {
        title: "Прайс",
        url: `/pricePage&api_key=${API_KEY}&language=en-US`,
    },
    
    
    
}
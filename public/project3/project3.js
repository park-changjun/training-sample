
const mainBtn = document.getElementById("mainSubmitBtn");
const fixedBtn = document.getElementById("fixedSubmitBtn");
const logo = document.getElementById("logo");

const API_KEYS = "61698f0d96bc4fe8c944ed0ff63b195f";
const weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=33.5097&lon=126.5219&exclude=hourly,minutely,current&appid=${API_KEYS}&units=metric&lang=kr`;
const submitPolicy = () => prompt("어떤 정책을 제안하고 싶으신가요?");
let todayWeather;

// 날짜 정보를 불러오는 함수
async function getWeatherInfo(){
    try{
        const response = await axios.get(weatherUrl);
        console.log(response);
        return response;
    } catch(error){
        console.error(error);
    } 
}

// 오늘의 날짜를 팝업창으로 보여주는 함수
async function showTodayWeather(){
    const weatherInfo = await getWeatherInfo();
    const todayWeather = weatherInfo.data.daily[0].weather[0].description;
    alert(`오늘 서울의 날씨는 ${todayWeather}입니다.`);
}

// 메인 버튼에 클릭 이벤트 추가
mainBtn.addEventListener('click',submitPolicy);

// 고정 버튼에 클릭 이벤트 추가
fixedBtn.addEventListener('click',submitPolicy);

// 메인 로고에 클릭 이벤트 추가
logo.addEventListener('click', showTodayWeather);
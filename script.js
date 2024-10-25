const apikey= "5971fde2c8ff81770117742387bc52d4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weather_icon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();
    // console.log(data);
if(data.cod === 200){
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";
}
else{
    alert("Invalid City Name")
}

if(data.weather[0].main=="Clouds"){
    weather_icon.src = "Pictures/clouds.png";
}
else if(data.weather[0].main=="Clear"){
    weather_icon.src = "Pictures/clear.png";
}
else if(data.weather[0].main=="Rain"){
    weather_icon.src = "Pictures/rain.png";
}
else if(data.weather[0].main=="Drizzle"){
    weather_icon.src = "Pictures/drizzle.png";
}
else if(data.weather[0].main=="Mist"){
    weather_icon.src = "Pictures/mist.png";
}

    document.querySelector(".weather").style.display = "block"

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
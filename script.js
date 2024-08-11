const ApiKey = "53d99f4e3eed498e58011826d659b7df";
const ApiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBar= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")
const feelslike = document.getElementsByTagName("h4 p")

const weatherDiv = document.querySelector(".weather")


async function checkWeather(city){
    const response = await fetch(`${ApiURL}&q=${city}&appid=${ApiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }
    else if(response.status == 404){
        console.log("Failed to fetch the URL")
    }
    else{

    let data = await response.json();

    console.log(data)

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp ) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like) + "°C" ;

    
    if (data.weather[0].main == "clouds") {
        weatherIcon.src = "Images/clouds.png"
    }
    
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "Images/clear.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "Images/drizzle.png"
    }
    else if (data.weather[0].main == "Rain"){
        weatherIcon.src = "Images/rain.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "Images/snow.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "Images/mist.png"
    }

    weatherDiv.style.display = "block"
    document.querySelector(".error").style.display = "none"
    
}
}

const searchBox = searchBar.value.replace(" ", "%20")

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBar.value);
})


const apiKey = '94884065ab2c2f4d85e63ef8bc335742';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric'

const searchInput = document.querySelector('#search-input');
const searchButton = document.querySelector('#search-icon');
const weatherIcon = document.querySelector('#weather-icon');

const getWeatherData = async (city) => {
    const response = await fetch(apiUrl + `&q=${city}` +  `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)

    document.querySelector("#temp").innerHTML = Math.round(data.main.temp) + '°c'
    document.querySelector('#city').innerHTML = data.name
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
    document.querySelector('.air-speed').innerHTML = data.wind.speed + 'km/hr'

    let weatherDescription = data.weather[0].main
    if(weatherDescription === 'Clouds'){
        weatherIcon.src = '/images/clouds.png'
    }else if(weatherDescription === 'Clear'){
        weatherIcon.src = '/images/clear.png'
    }else if(weatherDescription === 'Rain'){
        weatherIcon.src = '/images/rain.png'
    }else if(weatherDescription === 'Drizzle'){
        weatherIcon.src = '/images/drizzle.png'
    }else if(weatherDescription === 'Mist'){
        weatherIcon.src = '/images/mist.png'
    }else if(weatherDescription === 'Snow'){
        weatherIcon.src = '/images/snow.png'
    }else if(weatherDescription === 'Wind'){
        weatherIcon.src = '/images/wind.png'
    }
}

getWeatherData('bengaluru') && searchButton.addEventListener('click' , () =>{
    getWeatherData(searchInput.value)
})


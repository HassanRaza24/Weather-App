const apiKey = "aae7c63e2d7fafd77809b706b8e2a133"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let btn = document.getElementById("btn")
let user = document.getElementById("user-info")
let weathericon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await res.json()

    console.log(data)
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


    if (data.weather[0].main == "Clouds") {
        weathericon.src = "clouds.png"
    } else if (data.weather[0].main == "Haza") {
        weathericon.src = "drizzle.png"
    } else if (data.weather[0].main == "Smoke") {
        weathericon.src = "mist.png"
    } else if (data.weather[0].main == "Rain") {
        weathericon.src = "rain.png"
    } else {
        weathericon.src = "clear.png"
    }
}


btn.addEventListener("click", e => {
    checkWeather(user.value).then((r) => {
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none"
    }).catch((e) => {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".weather").style.display = "none"
    }) 
})












// if (res.status == 404) {
//     document.querySelector(".error").style.display = "block"
//     document.querySelector(".weather").style.display = "none"
// } else {
//     let data = await res.json()

//     console.log(data)
//     document.querySelector(".city").innerHTML = data.name
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


//     if (data.weather[0].main == "Clouds") {
//         weathericon.src = "clouds.png"
//     } else if (data.weather[0].main == "Haza") {
//         weathericon.src = "drizzle.png"
//     } else if (data.weather[0].main == "Smoke") {
//         weathericon.src = "mist.png"
//     } else if (data.weather[0].main == "Rain") {
//         weathericon.src = "rain.png"
//     } else {
//         weathericon.src = "clear.png"
//     }
//     document.querySelector(".weather").style.display = "block"
//     document.querySelector(".error").style.display = "none"
// }

//   try {
//     let data = await res.json()

//     console.log(data)
//     document.querySelector(".city").innerHTML = data.name
//     document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"
//     document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
//     document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"


//     if (data.weather[0].main == "Clouds") {
//         weathericon.src = "clouds.png"
//     } else if (data.weather[0].main == "Haza") {
//         weathericon.src = "drizzle.png"
//     } else if (data.weather[0].main == "Smoke") {
//         weathericon.src = "mist.png"
//     } else if (data.weather[0].main == "Rain") {
//         weathericon.src = "rain.png"
//     } else {
//         weathericon.src = "clear.png"
//     }
//     document.querySelector(".weather").style.display = "block"
//     document.querySelector(".error").style.display = "none"
// }catch{if (res.status == 404) {
//     document.querySelector(".error").style.display = "block"
//     document.querySelector(".weather").style.display = "none"
// }}










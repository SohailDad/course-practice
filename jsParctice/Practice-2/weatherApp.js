let apiKey = ""


async function  weatherData(){
    let textInput = document.getElementById("textInput").value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${apiKey}&units=metric`

   await fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        displayData(data)
    })
    .catch((error)=>console.error("Error : ",error))


    // console.log("City Name: ",textInput)
}

function displayData(data){
    let weatherData = document.getElementById("displayData")
    weatherData.innerHTML = `
        <h2>City: ${data.name}</h2>
        <h3>Temperature: ${data.main.temp}</h3>
        <h3>Weather: ${data.weather[0].main}</h3>
        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"  width="100px" height="100px"/>
    `
}
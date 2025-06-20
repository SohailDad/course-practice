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


    console.log("City Name: ",textInput)
}

function displayData(data){
    document.getElementById("")
}
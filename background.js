document.addEventListener("DOMContentLoaded", () => { 
setInterval(()=>{
    weatherCheck();
}, 30000);

const weatherCheck = () => {navigator.geolocation.getCurrentPosition(function(location) {
    console.log("accuracy", location.coords.accuracy);
    fetch(`https://api.weather.gov/points/${location.coords.latitude},${location.coords.longitude}`)
        .then((response) => response.json())
        .then((data) => {
            fetch(`${data.properties.forecastHourly}`)
                .then((response2) => response2.json())
                .then((data2) => {
                    if(data2.properties.periods[15].probabilityOfPrecipitation.value >= 40) {
                        alert("High chance of rain in the next hour");
                    }
                })
        })


    })
    }
    
})
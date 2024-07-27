
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('body');
    const spinner = document.getElementById('spinner');
    
    container.style.visibility = "hidden";
    spinner.style.visibility = "visible";

    setTimeout(() => {
        spinner.style.visibility = "hidden";
        container.style.visibility = "visible";
    }, 3000);


    const dateFor = new Date();
    const formattedDate = dateFor.toLocaleString('en-US', { timeZoneName: "short" });
    
    const weatherAPI = (Xpoint, Ypoint) => {
            fetch(`https://api.weather.gov/points/${Xpoint},${Ypoint}`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                
                fetch(`${data.properties.forecastHourly}`)
                    .then((response2) => response2.json())
                    .then((data2) => {
                        console.log(data2);
                        const currentFC = document.createElement('div')
                        currentFC.textContent = `${data2.properties.periods[0].temperature}°F ${data2.properties.periods[0].shortForecast}`
                        currentFC.id = "currentForecast"
                        document.querySelector('.container').appendChild(currentFC)

                        const city = document.createElement('div')
                        city.textContent = `City: ${data.properties.relativeLocation.properties.city}`
                        city.id ="city"
                        document.querySelector('.container').appendChild(city)

                        const date = document.createElement('div')
                        date.textContent = `${formattedDate}`
                        document.querySelector('.container').appendChild(date)
                    })
            })
        }
        
         navigator.geolocation.getCurrentPosition(function(location) {
            console.log("accuracy", location.coords.accuracy);
            weatherAPI(location.coords.latitude,location.coords.longitude);
          
        })
           
});

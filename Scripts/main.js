document.addEventListener("DOMContentLoaded", () => {
    let gridX = 37.7719;
    let gridY = -87.1112;
    const weatherAPI = (Xpoint, Ypoint) => {
        fetch(`https://api.weather.gov/points/${gridX},${gridY}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data)
            
            fetch(`${data.properties.forecastHourly}`)
                .then((response2) => response2.json())
                .then((data2) => {
                    console.log(data2);
                    const currentFC = document.createElement("li")
                    currentFC.textContent = data2.properties.periods[0].shortForecast + '  ' + Date();
                    document.querySelector('body').appendChild(currentFC)
                })
        })
        // console.log(link);
    }
    // const hourlyLink = ;
    // fetch(`${weatherAPI(gridX,gridY)}`)
    //         .then((response) => response.json())
    //         .then((data) => {
        //             console.log(data);
        //         })
    weatherAPI(gridX,gridY);

});
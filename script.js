let weatherapi={
    apikey: "b3653b932bae7cf3185bf822e3584e7c",
    baseurl: "https://api.openweathermap.org/data/2.5/weather"
}

const search=document.getElementById("search-bar");

search.addEventListener('keypress',(event) =>{
    if(event.keyCode == 13) {
        console.log(search.value);
        getweather(search.value)
    }
   
});

function getweather(city){
    fetch(`${weatherapi.baseurl}?q= ${city}&appid=${weatherapi.apikey}&units=metric`)
    .then(weather => {
        return weather.json();
    }).then(showweather);

}

function showweather(weather){
    console.log(weather);

    let city=document.getElementById("city");
    city.innerText=`${weather.name}, ${weather.sys.country}`;

    let temp=document.getElementById("temp");
    temp.innerHTML=`${Math.round(weather.main.temp)}&deg;C`;

    let mintemp=document.getElementById("min-max");
    mintemp.innerHTML=`${Math.floor(weather.main.temp_min)}&deg;C (min)/ ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weathertype=document.getElementById("weather");
    weathertype.innerText=`${weather.weather[0].main}`;

    if(weathertype.textContent=='Clear'){
        document.body.style.backgroundImage="url('clear.jpg')";
    }
    else if(weathertype.textContent=='Rain'){
        document.body.style.backgroundImage="url('rain.jpg')";
    }
    else if(weathertype.textContent=='Clouds'){
        document.body.style.backgroundImage="url('clouds.jpg')";
    }
    else if(weathertype.textContent=='Haze'){
        document.body.style.backgroundImage="url('haze.jpg')";
    }
    else if(weathertype.textContent=='Snow'){
        document.body.style.backgroundImage="url('snow.jpg')";
    }
    else if(weathertype.textContent=='Thunderstorm'){
        document.body.style.backgroundImage="url('thunderstorm.jpg')";
    }


    let date=document.getElementById("date");
    let todaydate=new Date();
    date.innerText=showdate(todaydate);
}


function showdate(date1){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year=date1.getFullYear();
    let month=months[date1.getMonth()];
    let date=date1.getDate();
    let day=days[date1.getDay()];

    return `${date} ${month} (${day}), ${year}`;
}
   

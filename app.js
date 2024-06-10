document.querySelector('#cityInput').addEventListener('keydown',function(event){
  if(event.key === 'Enter'){
  let city = document.querySelector('#cityInput').value;
  const apikey = "9b1ce2ad7327df86a6b1dce6441e87fa";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

  fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    if(data.cod === 200){
        showWeather(data);
    }else{
        document.querySelector('.weather').innerHTML = 'city not found';
    }
  })
  .catch(error => console.error('error',error));
  }   
});

function showWeather(data){
  if(data.main.temp<60&& data.main.temp>33){
    let element = document.querySelector('#sun');
    element.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
  }else if(data.main.temp<33 && data.main.temp>25){
    let element2 = document.querySelector('#sc');
    element2.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
  }else{
    let element3 = document.querySelector('#cloud');
    element3.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
  }
  
    document.querySelector('.weather').innerHTML =
    `<h2>${data.name},${data.sys.country}</h2>

    <p>Temperature : ${data.main.temp} °C</p>
    <p>Wind Speed : ${data.wind.speed} m/s</p>
     <p> Humidity : ${data.main.humidity}%</p>
     <p>Pressure : ${data.main.pressure} hpa</p>
     <p> Max Temp : ${data.main.temp_max} °C </p>
     <p> Cloud : ${data.clouds.all} %</P>
    `
}

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

const mname = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function showWeather(data){
  
const d = new Date();
let month = d.getMonth();
let dat = d.getDate();
let hour = d.getHours();
let min = d.getMinutes();
month = mname[month];
resetVisibility();

  if(data.main.temp<60&& data.main.temp>33){
    let element = document.querySelector('#sun');
    element.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
    // document.querySelector('#sc').style.height = '0%';
    // document.querySelector('#sc').style.width = '0%';
    // document.querySelector('#cloud').style.height = '0%';
    // document.querySelector('#cloud').style.height = '0%';
   // document.querySelector('.da').innerHTML = `${month} + ' ' + ${dat}`;
   
    document.querySelector('.weather').innerHTML =
      `<div class="new_div" style="display:flex;">
        <img src="sun.png" alt="sun" id="sun" class="sun_animate">
        <h2>${data.main.feels_like} °C </h2>
        <h2 id = "time">  ${dat} ${month}   ${hour}:${min} </h2>
      </div>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Pressure: ${data.main.pressure} hpa</p>
      <p>Max Temp: ${data.main.temp_max} °C</p>
      <p>Cloud: ${data.clouds.all}%</p>`;
      
  }
   else if(data.main.temp<33 && data.main.temp>25){
   
 
    let element2 = document.querySelector('#sc');
    element2.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
    // document.querySelector('#sun').style.height = '0%';
    // document.querySelector('#sun').style.width = '0%';
    // document.querySelector('#cloud').style.height = '0%';
    // document.querySelector('#cloud').style.height = '0%';
   
    document.querySelector('.weather').innerHTML =
    `<div class="new_div" style="display:flex;">
      <img src="clouds.png" alt="sun_cloud" id="sc" class="sc_animate">
        <h2>${data.main.feels_like} °C </h2>
 <h2 id = "time">  ${dat} ${month}   ${hour}:${min} </h2>
 </div>
    <p>Temperature : ${data.main.temp} °C</p>
    <p>Wind Speed : ${data.wind.speed} m/s</p>
     <p> Humidity : ${data.main.humidity}%</p>
     <p>Pressure : ${data.main.pressure} hpa</p>
     <p> Max Temp : ${data.main.temp_max} °C </p>
     <p> Cloud : ${data.clouds.all} %</P>
    `
  }else{
    

    let element3 = document.querySelector('#cloud');
    element3.style.visibility = 'visible';
    document.querySelector('.weather').style.visibility ='visible';
    document.querySelector('#close').style.visibility ='hidden';
    document.querySelector('#close').style.fontSize='0%';
    // document.querySelector('#sun').style.height = '0%';
    // document.querySelector('#sun').style.width = '0%';
    // document.querySelector('#sc').style.height = '0%';
    // document.querySelector('#sc').style.height = '0%';
    
    document.querySelector('.weather').innerHTML =
    `<div class="new_div" style="display:flex;">
      <img src="cloudy.png" alt="cloud" id="cloud" class="cloud_animate">
       <h2>${data.main.feels_like} °C </h2>
        <h2 id = "time">  ${dat} ${month}   ${hour}:${min} </h2>
      </div>
    <p>Temperature : ${data.main.temp} °C</p>
    <p>Wind Speed : ${data.wind.speed} m/s</p>
     <p> Humidity : ${data.main.humidity}%</p>
     <p>Pressure : ${data.main.pressure} hpa</p>
     <p> Max Temp : ${data.main.temp_max} °C </p>
     <p> Cloud : ${data.clouds.all} %</P>
    `
  }

}
function resetVisibility() {
  document.querySelector('#sun').style.visibility = 'hidden';
  document.querySelector('#sc').style.visibility = 'hidden';
  document.querySelector('#cloud').style.visibility = 'hidden';
  // document.querySelector('#sun').style.height = 'auto';
  // document.querySelector('#sun').style.width = 'auto';
  // document.querySelector('#sc').style.height = 'auto';
  // document.querySelector('#sc').style.width = 'auto';
  // document.querySelector('#cloud').style.height = 'auto';
  // document.querySelector('#cloud').style.width = 'auto';
}

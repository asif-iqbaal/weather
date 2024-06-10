document.querySelector('#cityInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      let city = document.querySelector('#cityInput').value;
      const apikey = "9b1ce2ad7327df86a6b1dce6441e87fa";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              if (data.cod === 200) {
                  updateWeather(data);
                  // data = null;
                  resetInputField(); // Reset input field after successful search
              } else {
                  document.querySelector('.weather').innerHTML = 'City not found';
              }
          })
          .catch(error => console.error('error', error));
  }
});

function updateWeather(data) {
  showWeather(data);
}

function resetInputField() {
  document.querySelector('#cityInput').value = '';
 // Clear input field after each search
}

const mname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function showWeather(data) {
  let d = new Date();
  let month = d.getMonth();
  let dat = d.getDate();
  let hour = d.getHours();
  let min = d.getMinutes();
  month = mname[month];

  let element1 = document.querySelector('#sun');
  let element2 = document.querySelector('#sc');
  let element3 = document.querySelector('#cloud');
  //resetVisibility();
  // document.querySelector('.weather').innerHTML = "";
  if (data.main.feels_like < 60 && data.main.feels_like > 33) {
      element1.style.visibility = 'visible';
      document.querySelector('.weather').style.visibility = 'visible';
      document.querySelector('#close').style.visibility = 'hidden';
      document.querySelector('#close').style.fontSize = '0%';

      document.querySelector('.weather').innerHTML =
          `<div class="new_div" style="display:flex;">
              <img src="sun.png" alt="sun" id="sun" class="sun_animate">
              <h2>${data.main.feels_like} °C </h2>
              <h2 id="time">  ${dat} ${month}   ${hour}:${min} </h2>
          </div>
             <p>Temperature: ${data.main.temp} °C</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Pressure: ${data.main.pressure} hpa</p>
          <p>Max Temp: ${data.main.temp_max} °C</p>
          <p>Cloud: ${data.clouds.all}%</p>
  `;
  } else if (data.main.feels_like < 33 && data.main.feels_like > 25) {
      
      element2.style.visibility = 'visible';
      document.querySelector('.weather').style.visibility = 'visible';
      document.querySelector('#close').style.visibility = 'hidden';
      document.querySelector('#close').style.fontSize = '0%';

      document.querySelector('.weather').innerHTML =
          `<div class="new_div" style="display:flex;">
              <img src="clouds.png" alt="sun_cloud" id="sc" class="sc_animate">
              <h2>${data.main.feels_like} °C </h2>
              <h2 id="time">  ${dat} ${month}   ${hour}:${min} </h2>
          </div>
           <p>Temperature : ${data.main.temp} °C</p>
            <p>Wind Speed : ${data.wind.speed} m/s</p>
           <p> Humidity : ${data.main.humidity}%</p>
           <p>Pressure : ${data.main.pressure} hpa</p>
         <p> Max Temp : ${data.main.temp_max} °C </p>
           <p> Cloud : ${data.clouds.all} %</p>`;
  } else {
   
      element3.style.visibility = 'visible';
      document.querySelector('.weather').style.visibility = 'visible';
      document.querySelector('#close').style.visibility = 'hidden';
      document.querySelector('#close').style.fontSize = '0%';

      document.querySelector('.weather').innerHTML =
          `<div class="new_div" style="display:flex;">
              <img src="cloudy.png" alt="cloud" id="cloud" class="cloud_animate">
              <h2>${data.main.feels_like} °C </h2>
              <h2 id="time">  ${dat} ${month}   ${hour}:${min} </h2>
          </div>
           <p>Temperature : ${data.main.temp} °C</p>
           <p>Wind Speed : ${data.wind.speed} m/s</p>
           <p> Humidity : ${data.main.humidity}%</p>
           <p>Pressure : ${data.main.pressure} hpa</p>
          <p> Max Temp : ${data.main.temp_max} °C </p>
          <p> Cloud : ${data.clouds.all} %</p>`;
  }

 
  if(element1 === 'visible'){
    element2 === 'hidden';
    element3 === 'hidden';
  }else if(element2 ==='visible'){
    element1 === 'hidden';
    element3 === 'hidden';
  }else{
    element2 === 'hidden';
    element1 === 'hidden';
  }
}

// function resetVisibility() {
//   document.querySelector('#sun').style.visibility = 'hidden';
//   document.querySelector('#sc').style.visibility = 'hidden';
//   document.querySelector('#cloud').style.visibility = 'hidden';
// }
function resetInputField() {
  document.querySelector('#cityInput').value = '';
 // Clear input field after each search
}

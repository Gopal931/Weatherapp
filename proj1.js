let input = document.querySelector(".inputbox");
let button = document.querySelector(".buttom");
let Wimg = document.querySelector(".weather-icon");
let temp = document.querySelector(".temp");
let ccity = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind");

async function update(city) {
  try {
    if (city === "") {
      console.error("Please enter a city name");
      return;
    }
    const apiKey = "7fcb7699bf3fad97041ab1195659bd28";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let res = await fetch(apiUrl);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    let data = await res.json();
    console.log(data);

    // Update UI elements
    temp.textContent = `${data.main.temp}°C`;
    ccity.textContent = `${data.name}`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed} km/hr`;
    // Update weather icon
    Wimg.src = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
;}

button.addEventListener("click", () => {
  update(input.value);
});
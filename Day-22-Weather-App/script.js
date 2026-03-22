let input = document.querySelector("#cityInput");
let button = document.querySelector("#searchBtn");
let weatherDiv = document.querySelector("#weather");

const apiKey = "YOUR_API_KEY";

button.addEventListener("click", async () => {
  let city = input.value;

  if (city === "") return;

  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    let data = await res.json();

    weatherDiv.innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp}°C</p>
      <p>Weather: ${data.weather[0].main}</p>
    `;
  } catch (error) {
    weatherDiv.textContent = "Error fetching data";
  }
});
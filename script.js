// Ambil elemen DOM
const cityInput = document.getElementById("city");
const getWeatherButton = document.getElementById("getWeather");
const weatherDisplay = document.getElementById("weather");
const locationDisplay = document.getElementById("location");
const temperatureDisplay = document.getElementById("temperature");
const descriptionDisplay = document.getElementById("description");
const iconDisplay = document.getElementById("icon");

// API Key openweather (ganti dengan API key Anda)
const API_KEY = "1e78ceaee06ab8b7a52eda8b332d3808";

// Fungsi untuk mengambil data cuaca
async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=id`
    );
    
    if (!response.ok) throw new Error("Kota tidak ditemukan!");
    
    const data = await response.json();
    
    // Update DOM dengan data cuaca
    locationDisplay.textContent = `${data.name}, ${data.sys.country}`;
    temperatureDisplay.textContent = `Suhu: ${data.main.temp}°C`;
    descriptionDisplay.textContent = `Kondisi: ${data.weather[0].description}`;
    iconDisplay.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherDisplay.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
  }
}

// Tambahkan event listener pada tombol
getWeatherButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city) {
    getWeather(city);
  } else {
    alert("Harap masukkan nama kota!");
  }
});
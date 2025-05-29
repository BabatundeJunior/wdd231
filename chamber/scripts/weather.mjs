export async function fetchWeather() {
  const apiKey = '8d4f67f4da2e2ff5777b038251e6f837'; 
  const city = 'Uyo';
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    const container = document.getElementById('weather-container');
    const current = data.list[0];

    let forecastData = {};

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    let foundCount = 0;

    for (let i = 1; i < data.list.length; i++) {
      const forecastDate = new Date(data.list[i].dt * 1000);
      forecastDate.setHours(0, 0, 0, 0);

      const diffDays = Math.floor((forecastDate - today) / (1000 * 60 * 60 * 24));

      if (diffDays >= 1 && diffDays <= 3 && !forecastData[diffDays]) {
        const weekday = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
        forecastData[diffDays] = {
          day: weekday,
          temp: data.list[i].main.temp
        };
        foundCount++;
      }

      if (foundCount === 3) break;
    }

    const iconCode = current.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    container.innerHTML = `
      <figure>
        <img src="${iconUrl}" alt="${current.weather[0].description}">
        <figcaption>
          <p><strong>Today:</strong> ${current.main.temp}°C, ${current.weather[0].description}</p>
          <hr class="hr">
            <p>${forecastData[1]?.day || 'Tomorrow'}: ${forecastData[1]?.temp || 'N/A'}°C</p>
            <p>${forecastData[2]?.day || 'Day 2'}: ${forecastData[2]?.temp || 'N/A'}°C</p>
            <p>${forecastData[3]?.day || 'Day 3'}: ${forecastData[3]?.temp || 'N/A'}°C</p>
          
        </figcaption>
      </figure>
    `;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

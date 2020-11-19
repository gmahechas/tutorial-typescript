const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = (forecast: { date: Date, weather: string }) => {
  console.log(forecast.date);
  console.log(forecast.weather);
};

//ES2015
const logWeather2 = ({ date, weather }: { date: Date, weather: string }) => {
  console.log(date);
  console.log(weather);
};

logWeather(todayWeather);
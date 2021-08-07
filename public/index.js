const surfURL = "http://magicseaweed.com/api/";
const weatherURL = "http://api.openweathermap.org/data/2.5/";
const apiKey = config.MY_KEY;
const input = document.getElementById("searchField");

// const getSurfReport = (event) => {
//     event.preventDefault()

//     axios.get(`${surfURL}`)
// }

//need a way to get take input as beach name, then get coordinates, then pass that to weather api
const getWeather = () => {
  let location = input.value;
  console.log(location);
  axios
    .get(`${weatherURL}weather?q=${location}&appid=${apiKey}&units=imperial`)
    .then((res) => {
      let name = res.data.name;
      let temp = Math.floor(res.data.main.temp);
      let weather = res.data.weather[0].description;
      console.log(name, temp, weather);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

// input.addEventListener("submit", getWeather);

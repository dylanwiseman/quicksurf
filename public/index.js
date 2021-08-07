const surfURL = "http://magicseaweed.com/api/";
const weatherURL = "http://api.openweathermap.org/data/2.5/";
const apiKey = config.MY_KEY;
const input = document.getElementById("searchField");

// const getSurfReport = (event) => {
//     event.preventDefault()

//     axios.get(`${surfURL}`)
// }

const getWeather = () => {
  let location = input.value;
  console.log(location);
  axios
    .get(`${weatherURL}weather?q=${location}&appid=${apiKey}&units=imperial`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
};

// input.addEventListener("submit", getWeather);

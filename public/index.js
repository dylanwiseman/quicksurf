const surfURL = "http://magicseaweed.com/api/";
const weatherURL = "api.openweathermap.org/data/2.5/";
const apiKey = "840d0c2134d72e318ad0909c65cf71ee";
const input = document.querySelector("#searchField");

console.log(input.value);

// const getSurfReport = (event) => {
//     event.preventDefault()

//     axios.get(`${surfURL}`)
// }
const sayHello = () => {
  console.log("hello");
};

sayHello();

const getWeather = (e) => {
  console.log("1");
  e.preventDefault();
  console.log("clicked");
  //   let location = input.value;

  //   axios
  //     .get(`${weatherURL}weather?q=${location}&appid=${apiKey}`)
  //     .then((res) => {
  //       console.log(res.data);
  // });
};

// input.addEventListener("submit", getWeather);

const arr = process.argv.slice(2);

const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${arr[0]}`, (error, response, body) => {
  
  const data = JSON.parse(body);
  if (error) {
    console.log("Failed to access server");
  }
  if (Object.values(data).includes(data[0])) {
    console.log(`${data[0]['description']}`);
  } else {
    console.log("Sorry! Breed not found!");
  }
});
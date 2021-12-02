//const arr = process.argv.slice(2);

const request = require('request');


/*
request(`https://api.thecatapi.com/v1/breeds/search?q=${arr[0]}`, (error, response, body) => {
  
  if (error) {
    console.log("Failed");
  }

  const data = JSON.parse(body);

  if (Object.values(data).includes(data[0])) {
    console.log(`${data[0]['description']}`);
  } else {
    console.log("Sorry! Breed not found!");
  }

}); */



const fetchBreedDescription =  function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
  
    if (!error) {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback("Error", null);
      } else {
        return callback(null, data[0]['description']);
      }
    } else {
      return callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };
"use struct";

let apiURL = `https://randomuser.me/api/?results=20`;

fetch(apiURL)
  .then((response) => response.json())
  .then((data) => data.results.forEach((user) => console.log(user.name.first)));

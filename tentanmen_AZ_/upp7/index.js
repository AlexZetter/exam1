"use strict";

let apiURLResultTwenty = `https://randomuser.me/api/?results=20`;

let apiURLSweden = `http://universities.hipolabs.com/search?country=Sweden`;

let doubleAPI = [
  `https://randomuser.me/api/?results=20`,
  `http://universities.hipolabs.com/search?country=Sweden`,
];

document.querySelector("#parallellt").addEventListener("click", function (e) {
  getURL(apiURLResultTwenty, "X");
  getURL(apiURLSweden, "Y");
});

async function getURL(url, type) {
  let response = await fetch(url);
  let data = await response.json();
  console.log(type, data);
}

document.querySelector("#vänta").addEventListener("click", printAllUsers);

async function getResourcesWait() {
  let arrayOfResponses = doubleAPI.map((url) => fetch(url));

  let promiseResponse = await Promise.all(arrayOfResponses);

  let jsonpromise = promiseResponse.map((user) => user.json());

  let data = await Promise.all(jsonpromise);

  let schools = data[0].results.concat(data[1]);
  console.log(schools);
  return schools;
}

async function printAllUsers() {
  let schoolsData = await getResourcesWait();

  console.log(`Båda resurserna har kommit in`);
}

document.querySelector("#serie").addEventListener("click", getResourcesSerie);

async function getResourcesSerie() {
  let randomResponse = await fetch(apiURLResultTwenty);
  let data = await randomResponse.json();

  console.log(data);
  console.log("resource x is here");

  getResourcesWaitY();
}

async function getResourcesWaitY() {
  let randomResponse = await fetch(apiURLSweden);
  let data = await randomResponse.json();

  console.log(data);
  console.log("resource y is here");
}

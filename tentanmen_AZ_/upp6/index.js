"use strict";

let apiURLNorway = `http://universities.hipolabs.com/search?country=Norway`;

let apiURLFinland = `http://universities.hipolabs.com/search?country=Finland`;

let doubleAPI = [
  `http://universities.hipolabs.com/search?country=Norway`,
  `http://universities.hipolabs.com/search?country=Finland`,
];

async function getAllSchools() {
  let arrayOfResponses = doubleAPI.map((url) => fetch(url));

  let promiseResponse = await Promise.all(arrayOfResponses);

  let jsonpromise = promiseResponse.map((user) => user.json());

  let data = await Promise.all(jsonpromise);
  console.log(data);
  let schools = data[0].concat(data[1]);

  return schools;
}

async function printAllUsers() {
  let schoolsData = await getAllSchools();

  console.log(
    `Båda resurser har kommit in och det finns ${schoolsData.length} universitet tillsammans i de länderna”. (TOTAL ska vara summan av antalet universitet i båda länderna)`
  );
}
printAllUsers();

console.log();

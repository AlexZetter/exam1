"use strict";

let apiURL = `http://universities.hipolabs.com/search?country=Sweden`;

async function getAllUsers() {
  let response = await fetch(apiURL);
  let data = response.json();

  return data;
}

async function printAllUsers() {
  let users = await getAllUsers();
  let filteredTechonlogy = users.filter((schools) =>
    schools.name.includes("Technology")
  );
  console.log(filteredTechonlogy);
}

printAllUsers();

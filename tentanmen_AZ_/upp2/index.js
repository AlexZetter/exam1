"use strict";

let apiURL = `https://randomuser.me/api/?results=20`;

async function getAllUsers() {
  let response = await fetch(apiURL);
  let data = response.json();

  return data;
}

async function printAllUsers() {
  let users = await getAllUsers();
  users.results.forEach((user) => console.log(user.name.first));
}

printAllUsers();

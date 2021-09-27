"use strict";

let apiURL = `http://mpp.erikpineiro.se/dbp/sameTaste/users.php`;

async function getAllUsers() {
  let response = await fetch(apiURL);

  let data = response.json();

  return data;
}

async function printAllUsers() {
  let users = await getAllUsers();
  console.log(users.message.length);
}

printAllUsers();

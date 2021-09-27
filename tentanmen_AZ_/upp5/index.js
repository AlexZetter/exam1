"use strict";

let apiURL = `https://randomuser.me/api/?results=20`;

let arrayOfUsers = [];

async function getAllUsers() {
  for (let i = 0; i < 3; i++) {
    arrayOfUsers.push(fetch(apiURL));
  }

  let promiseResponse = await Promise.all(arrayOfUsers);

  let jsonpromise = promiseResponse.map((user) => user.json());

  let data = await Promise.all(jsonpromise);

  let users = data[0].results.concat(data[1].results, data[2].results);

  return users;
}

async function printAllUsers() {
  let users = await getAllUsers();

  users.forEach((users) => console.log(users.name.first));
}
printAllUsers();

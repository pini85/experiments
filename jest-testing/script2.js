const fetch = require("node-fetch");

const searchPeople = fetch => {
  return fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(data => {
      return {
        count: data.count,
        results: data.results
      };
    });
};

searchPeople(fetch);

const asyncSearchPeople = async fetch => {
  const response = await fetch("https://swapi.co/api/people");
  const data = await response.json();
  return {
    count: data.count,
    results: data.results
  };
};

module.exports = {
  searchPeople,
  asyncSearchPeople
};

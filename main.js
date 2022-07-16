// import express from 'express';
// import cors from 'cors';
// import fetch from 'node-fetch';

const { loadConfigFromFile } = require('vite');

const form = document.getElementById('form-movie');
let title = document.getElementById('title');
let imdb = document.getElementById('imdb');
let new_input = document.createElement('input');
let api_key = document.getElementById('api_key');

//Having the "new_input" in the global scope allows for the function to add the input one at a time once the radio button is selected.
function addElement() {
  if (title) {
    let div = document.getElementById('div-title');
    div.append(new_input);
    new_input.setAttribute('id', 'input-title');
    new_input.setAttribute('name', 'titleIM_choice');
    new_input.setAttribute('class', 'input-grp');
  }
}

function addIMElement() {
  if (imdb) {
    let div = document.getElementById('div-imdb');
    div.append(new_input);
  }
}

title.addEventListener('click', addElement);
imdb.addEventListener('click', addIMElement);

// let api_key = document.getElementById('api_key');
// let value = api_key.getAttribute('name');
// console.log(value);

// let title_input = document.getElementById('title');

// let year_input = document.getElementById('year');

// let form = document.getElementById('form-movie');

// let url = 'http://www.omdbapi.com/?i=tt3896198&apikey=';

// let btn = document.getElementById('btn');

// btn.addEventListener('click', function () {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.log(err));
// });

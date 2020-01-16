'use strict';

function getDogImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Ruh Roh'));
}

function displayResults(responseJson) {
    let template = createTemplate(responseJson[0]);
    console.log(template);
    // let results = responseJson.forEach(createTemplate());
    // return $('.results').append(results);
    console.log(responseJson);
}

function createTemplate(url) {
    return `<img class="dogPic" src="${url}"/>`
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        $('.results').empty();
        const number = $('.number').val();
        getDogImages(number);
    });
}

function handleDogApp() {
    watchForm();
}

$(handleDogApp());
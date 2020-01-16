'use strict';

function getDogImages(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Ruh Roh'));
}

function displayResults(responseJson) {
        let imgArr = responseJson.message;
        $('.results').empty();
        imgArr.forEach(img => {
          $('.results').append(
            `<img src="${img}" class="img-result"/>`
          );
        });
}

function createTemplate(url) {
    $('.results').append(`<img class="dogPic" src="${url}"/>`);
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
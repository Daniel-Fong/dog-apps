'use strict';

function getDogImages(num) {
    for (let i = 0; i<num; i++){
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(responseJson => console.log(responseJson))
        .catch(error => alert('Ruh Roh'));
    }
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        const number = $('.number').val();
        getDogImages(number);
    });
}

function handleDogApp() {
    watchForm();
    console.log('hello');
}

$(handleDogApp());
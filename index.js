"use strict";
function helloWorld() {
    document.getElementById('handle').textContent = 'D³SYMPL'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function requestData(){
    window.alert("Data requested, delivery in about 10 seconds");
    await sleep(10000);
    processData();
}

function processData(){
    document.getElementById('datafield').textContent = 'new Data'
}

helloWorld();
let request = new XMLHttpRequest();

async function requestData(){
    request.open("GET","test.json");
    request.onreadystatechange = checkIncoming;
    window.alert("Data requested, delivery in about 10 seconds");
    document.getElementById('datafield').textContent = 'Data requested'
    await sleep(9000);

    request.send();
}

function checkIncoming(){
    if(request.readyState == 4){
        if(request.status == 200) process(request.responseText);
        else console.error("Uebertragung fehlgeschlagen");
    }
}

function process(recvData) {
    document.getElementById('datafield').textContent = recvData.data;
}

function setTitle() {
    document.getElementById('handle').textContent = 'D³SYMPL'
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTitle();
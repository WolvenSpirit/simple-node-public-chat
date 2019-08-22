var wsc;
function connect() {
const o = document.getElementById("render"); 
wsc = new WebSocket('ws://localhost:8080');
wsc.onopen = (event)=>{
    o.innerHTML = "Connected!<br>";
};
wsc.onmessage = (event)=>{
    o.innerHTML += `${event.data}<br>`
};
wsc.onerror = (event)=>{
    o.innerHTML += `Connection error: ${event}<br>`
};
wsc.onclose = (event)=>{
    o.innerHTML += `Disconnected.`
};
}
function sendMsg(){
    wsc.send(`${document.getElementById("nickname").value} said: ${document.getElementById("msg").value}`);
}
const socket = io('http://localhost:8800');

const form = document.getElementById('my-form');
const input = document.getElementById('myinp');
const container = document.getElementById('container');

const name = prompt("enter your name");

socket.emit('message', name);
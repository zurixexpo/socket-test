const socket = io();

const form = document.getElementById('my-form');
const input = document.getElementById('myinp');
const container = document.getElementById('container');

const name = prompt("enter your name");
socket.emit('message', name);


socket.on('user-joined', data =>{
	console.log('name' + data);
	let div = document.createElement('div');
	div.classList.add('msg');
	div.innerHTML = `${data} joined the chat`;
	container.appendChild(div);
});
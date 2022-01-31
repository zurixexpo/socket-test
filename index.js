const port = process.env.PORT || 5000;
const io = require('socket.io')(port)

var users = {};

io.on('connection', socket =>{
	socket.on('message', name =>{
		console.log(name);
		users[socket.id] = name;
	socket.broadcast.emit('user-joined', name);
	});
});
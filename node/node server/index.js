const io = require('socket.io')(8800, {
	cors:{
		origin: ['http://localhost:3000']
	}
})

io.on('connection', socket =>{
	socket.on('message', name =>{
		console.log(name)
	socket.broadcast.emit('user-joined', name);
	});
});
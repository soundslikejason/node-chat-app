var socket = io();

socket.on('connect', function() {
  console.log('Connected to server');
  
  socket.emit('createMessage', {
    from: 'Jason',
    text: 'Hey. This is good.'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
});
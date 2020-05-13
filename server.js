const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public')); // Gives app access to static files
const http = require('http').createServer(app); // Registers express as server listener
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;          // If a port isn't requested by host, use 3000

http.on("error", (err) => {
    console.error(`Server error: ${err}`);
});

http.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
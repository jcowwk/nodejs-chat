const express = require('express')
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, "src")))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("server is running"));

const socketIo = require('socket.io');
const io = socketIo()
const express = require('express')
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`서버가 http://localhost:${PORT} 에서 실행 중입니다.`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

io.on('connection', (socket) => {
    console.log('새로운 사용자가 연결되었습니다.');

    // 클라이언트에서 보낸 채팅 메시지 수신
    socket.on('chat message', (message) => {
        console.log('수신한 메시지:', message);
        // 모든 클라이언트에게 채팅 메시지 전송
        io.emit('chat message', message);
    });
});
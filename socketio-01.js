let socketio = {};

function getSocket(server) {
    socketio.io = require('socket.io')(server);

    let io = socketio.io;
    io.on('connection', function (socket) {

        //此处的socket对象是某个浏览器与服务器的连接对象
        //当新用户连接进来时，向所有人广播此人id
        io.sockets.emit('addUser', {
            id: socket.id,
            content: '新用户加入'
        })
        socket.emit('new', { hello: 'world' });
        socket.on('my other event', function (data) {

            console.log(socket.id);
            console.log(data);
            socket.emit('hello', { content: '学习前端' });
        });

        //向某个用户发送消息的事件
        socket.on('sendUser', function (data) {
            //发送的数据对象类型
            // data = {
            //     from: '发送者Id',
            //     to: '接收者Id',
            //     content: ''
            // }
            socket.to(data.to).emit('sendClient', data)
        })

        //加入房间事件
        socket.on('addRoom', function (data) {
            let roomoObj = socket.join(data.room);
        })

        // 监听群聊事件，并且广播给所有人
        socket.on('sendMsgRoom', function (data) {
            socket.to(data.room).emit('qunliao', data);
        })
    });
}

socketio.getSocket = getSocket;

module.exports = socketio;
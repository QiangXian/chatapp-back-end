const sqlQuery = require('./jxjMysql');

let socketio = {};

function getSocket(server) {
    socketio.io = require('socket.io')(server);
    let io = socketio.io;
    io.on('connection', function (socket) {
        console.log(socket.id + '建立连接');
        //接收登录事件
        socket.on('login', async function (data) {
            //登录时判断是否已经有人登录。如果有人登录的话，将其断开连接
            let sqlStr1 = 'select * from user where isonline = ? and username = ?';
            let result1 = await sqlQuery(sqlStr1, ['true', data.username]);
            if (result1.length > 0) {
                socket.to(result1[0].socketid).emit('logout', { content: '有人登陆同一账号，强制离线' });
                //发送离线消息后，断开连接
            };

            //修改数据库登录信息(socket.id,isonline)
            let sqlStr = "update user set socketid=?,isonline=? where username=?";
            let result = await sqlQuery(sqlStr, [socket.id, 'true', data.username]);
            console.log('更改成功');
            socket.emit('login', {
                state: 'ok',
                content: '登录成功'
            });

            //用户登录后，又有其他新用户登录，更新用户在线信息显示情况
            let sqlStr2 = "select * from user";
            //等待获取mysql查询结果
            let result2 = await sqlQuery(sqlStr2);
            io.sockets.emit('users', Array.from(result2));

            //加入群（房间）
            //获取所有的群
            let sqlStr4 = 'select * from user where isgroup = ?';
            let result4 = await sqlQuery(sqlStr4, ['true']);
            Array.from(result4).forEach((item, index) => {
                socket.join(item.socketid);
            })

            //登陆后接收未接受的消息
            let sqlStr3 = "select * from chat where isread=? and `to` = ?"
            let result3 = await sqlQuery(sqlStr3, ['false', data.username]);

            socket.emit('unreadMsg', Array.from(result3));
        });

        //用户主动断开连接，修改数据库信息
        socket.on('disconnect', async function () {
            //修改数据库登录信息(socket.id,isonline)
            let sqlStr = "update user set socketid=?,isonline=? where socketid=?";
            let result = await sqlQuery(sqlStr, [null, null, socket.id]);
            console.log('断开连接');
        });

        socket.on('users', async function () {
            let sqlStr = "select * from user";
            //等待获取mysql查询结果
            let result = await sqlQuery(sqlStr);
            socket.emit('users', Array.from(result));
        })

        socket.on('sendMsg', async function (msg) {
            //判断接受消息的人是否在线
            let sqlStr = 'select * from user where username = ? and isonline = ?';
            let result = await sqlQuery(sqlStr, [msg.to.username, 'true']);
            if (result.length > 0) {
                console.log('消息接受者查找成功，准备发送消息')
                //若此人在线直接发送消息
                let toid = result[0].socketid;
                socket.to(toid).emit('accept', msg);
                //将聊天内容放到数据库
                let sqlStr1 = 'insert into chat (`from`,`to`,content,`time`,isread) values (?,?,?,?,?)';
                let arr1 = [msg.from.username, msg.to.username, msg.content, msg.time, 'true'];
                sqlQuery(sqlStr1, arr1);
                console.log('消息发送成功，接受者收到信息');
            } else {
                let sqlStr1 = 'insert into chat (`from`,`to`,content,`time`,isread) values (?,?,?,?,?)';
                let arr1 = [msg.from.username, msg.to.username, msg.content, msg.time, 'false'];
                sqlQuery(sqlStr1, arr1);
                console.log('接受者不在线，消息存入至数据库中')
            }
        })

        //如果收到已读信息，将已读信息改为true
        socket.on('readMsg', function (data) {
            let sqlStr = 'update chat set isread=? where `from`=? and `to`=?';
            sqlQuery(sqlStr, ['true', data.username, data.self]);
            console.log('消息已读')
        })
    });
};

socketio.getSocket = getSocket;

module.exports = socketio;
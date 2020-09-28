# 前端地址：https://github.com/QiangXian/chatapp
# 聊天室后端

技术栈：WebSocket(socket.io) + Express

socketio-01.js包含了socket.io的基本用法，结合01socketio内的网页可进行以Express框架为基础的简单的socket通信。

## Project setup/项目依赖安装

```
npm install
```

## Project run/项目启动

``` javascript
npm start
```

注：前端已进行编译，并安装存放在public目录下。项目启动后，浏览器访问`http://localhost:3000/`即可打开项目。

# **聊天APP前瞻**

<img src="C:\Users\lenovo\Desktop\wolf.JPG" alt="wolf" style="height:100px;display:inline" />

## 需求

​	聊天APP

## 功能

​	查看聊天列表、实现单聊功能、实现群（选做：个人中心、好友添加、群创建、登录、注册）

## 功能实现

#### 1.创建一张用户表

字段：username、~~passwod、mail~~,headerimg、socketid、isonline

#### 1.5在页面选择一个聊天角色



#### 2.设置前端内容

（1）socket-client客户端与服务器的socket相连接，（选择当前的用户），并建立连接

（2）客户端向服务器发送一个获取用户列表的事件

```javascript--
socket.emit('getUserlist')
```

监听服务器返回的数据

```javascript
socket.on('getUserlist')
```

#### 3.设置后端的内容：chatapp（Express框架)

（1）服务器监听客户端的连接，获取当前连接用户的用户名和socket.id，更新数据库内容

（2）服务器监听获取用户列表事件

```javascript
socket.on('getUserlist',function(){
    数据库的查询user表语句;
    //将结果返回到给前段
    socket.emit('getUserlist'，data);
})
```


const http =require("http");
const socketio=require('socket.io');

const server=http.createServer((req,res,next)=>{
    res.end("Hello world")
})
server.listen(3000,()=>{
    console.log(`Server started with 3000 port`);
})
const io=socketio.listen(server)


io.sockets.on('connection',(socket)=>{
    console.log("clent ulandi");

    socket.on("submit",(data)=>{
       socket.broadcast.emit('newuser',{value:`${data.value}`})
    })
    socket.on("disconnect",()=>{
        console.log("clent chiqdi !!!!!!!!!!!!!!!!!!");
    })
})


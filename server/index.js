const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const port  =  process.env.port || 8000; 

const router  = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
   console.log("we have a new connection !!");

   socket.on('join', ({name,room}, callback) => {
   
       console.log(name,room);
        //   callback({ error :'error'});
    //   }
   });

    socket.on('disconnect', () =>{
        console.log('user had left !!');
    } )
} )

app.use('/',require('./router'));  

server.listen(port, () => {
    console.log(`server has started on port ${port}`);
} )

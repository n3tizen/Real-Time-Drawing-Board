const express = require("express")
const app = express()


app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html")
})

const port = (process.env.PORT || 3000)

const server = app.listen(port,()=>{
    console.log("Server initiated")
})

const socket = require("socket.io")

const io = socket(server)

io.sockets.on("connection",(socket)=>{
    console.log(socket.id+" has connected")
    
    socket.on('mouse',
        function(data) {
        // Broadcast mouseX and mouseY data to all other clients
        socket.broadcast.emit('mouse', data);
        }
    );
})

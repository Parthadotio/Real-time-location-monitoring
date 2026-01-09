const express = require('express');
const app = express();
const path = require('path');
const http =  require('http');//For socket io

const port = process.env.PORT || 3000;

const socketio = require('socket.io');
const { log } = require('console');
const server = http.createServer(app);
const io = socketio(server);

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", function(req, res){
    res.render("index"); 
})

io.on("connection", function(socket) {
    socket.on("send-location", function(data) {
        io.emit("recived-location", {
            id: socket.id,
            ...data
        })
    });
    
    socket.on("disconnect", function() {
        io.emit("user-diconnected", socket.id)
    });
})


server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
    
});
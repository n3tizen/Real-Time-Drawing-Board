
function setup(){
    createCanvas(1420,790);
    socket = io.connect("http://localhost:3000/")

    socket.on("mouse",(data)=>{
        fill(255);
        noStroke();
        ellipse(data.x,data.y,200,200)
    })
}



function mouseDragged(){
    fill(0,0,255)
    ellipse(mouseX,mouseY,200,200)
    noStroke()
    sendMouse(mouseX,mouseY)
}

function sendMouse(x,y){
    socket.emit("mouse",{
        x:x,
        y:y
    })

}



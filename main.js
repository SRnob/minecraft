var canvas = new fabric.Canvas("myCanvas");
var blockimageWidth = 30;
var blockimageHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";

function playerUpdate(){
     fabric.Image.fromURL("player.png",function(Img){;
    playerObject = Img;
    playerObject.scaleToWidth(150);
    playerObject.scaleToHeight(140);
    playerObject.set({
        top:playerY,left:playerX
    });
    canvas.add(playerObject)
 });
}

function newImage(getimage){
    fabric.Image.fromURL(getimage,function(Img){;
        blockimageObject = Img;
        blockimageObject.scaleToWidth(blockimageWidth);
        blockimageObject.scaleToHeight(blockimageHeight);
        blockimageObject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockimageObject)
     });
}

window.addEventListener("keydown",myKeydown);
function myKeydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80"){
        console.log("p e shift presionada juntas");
        blockimageWidth = blockimageWidth + 10;
        blockimageHeight = blockimageHeight + 10;
        document.getElementById("currentWidth").innerHTML = blockimageWidth;
        document.getElementById("currentHeight").innerHTML = blockimageHeight;
    }

    if(e.shiftKey == true && keyPressed == "77"){
        console.log("p e shift presionada juntas");
        blockimageWidth = blockimageWidth - 10;
        blockimageHeight = blockimageHeight - 10;
        document.getElementById("currentWidth").innerHTML = blockimageWidth;
        document.getElementById("currentHeight").innerHTML = blockimageHeight;
    }

    if(keyPressed == "38"){
        console.log("cima");
        up();
    }

    if(keyPressed == "40"){
        console.log("baixo");
        down();
    }

    if(keyPressed == "37"){
        console.log("left");
        left();
    }

    if(keyPressed == "39"){
        console.log("direita");
        right();
    }

    if(keyPressed == "87"){
        console.log("tecla W");
        newImage("wall.jpg");
    }

    if(keyPressed == "71"){
        console.log("tecla G");
        newImage("ground.png");
    }

    if(keyPressed == "76"){
        console.log("tecla L");
        newImage("light_green.png");
    }

    if(keyPressed == "84"){
        console.log("tecla T");
        newImage("trunk.jpg");
    }

    if(keyPressed == "82"){
        console.log("tecla R");
        newImage("roof.jpg");
    }

    if(keyPressed == "89"){
        console.log("tecla Y");
        newImage("yellow_wall.png");
    }

    if(keyPressed == "68"){
        console.log("tecla D");
        newImage("dark_green.png");
    }

    if(keyPressed == "85"){
        console.log("tecla U");
        newImage("unique.png");
    }

    if(keyPressed == "67"){
        console.log("tecla C");
        newImage("cloud.jpg");
    }

}

function up(){
    if(playerY >= 0){
        playerY = playerY - blockimageHeight;
        console.log("altura da imagem do bloco ="+ blockimageHeight);
        console.log("tecla cima foi apertada");
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function down(){
    if(playerY <= 500){
        playerY = playerY + blockimageHeight;
        console.log("altura da imagem do bloco ="+ blockimageHeight);
        console.log("tecla baixo foi apertada");
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function left(){
    if(playerX >= 0){
        playerX = playerX - blockimageWidth;
        console.log("largura da imagem do bloco ="+ blockimageWidth);
        console.log("tecla esquerda foi apertada");
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    if(playerX <= 850){
        playerX = playerX + blockimageWidth;
        console.log("largura da imagem do bloco ="+ blockimageWidth);
        console.log("tecla direita foi apertada");
        canvas.remove(playerObject);
        playerUpdate();
    }
}
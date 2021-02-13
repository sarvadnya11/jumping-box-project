 var block,surface1,surface2,surface3,surface4;

 var music;


function prelod(){
   music = loadSound("music.mp3");

}

function setup(){
    createCanvas(900,600);

    block = createSprite(random(20,750,20,20));
    block.shapColor = "white";
    BhxBrowser.velocityX = 6;

    surface1 = craeteSprite(300,300,70,20);
    surface1.shapeColor = "maroon";

    surface2 = craeteSprite(310,310,70,20);
    surface2.shapeColor = "black";

    surface3 = craeetSprite(320,320,20,20);
    surface3.shapeColor = "orange";

    surface4 = craeetSprite(330,330,20,20);
    surface4.shapeColor = "blue"

}

function draw(){
    background("green");

    if(surface1.isTouching(box)) && box.bounxeOff(surface1){
        box.shapeColor = "pink";
        music.play();
    }

    if(block.isTouching(surface1)){
        block.shapeColor = rgb(225,128,0);
        block.velocityX = 0;
        music.stop();
    }

}


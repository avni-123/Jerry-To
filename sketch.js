var ground, groundImg;

var jerry2, jerryImg;

var jerry4, jerryImage4;

var jerry, jerry_run;

var tom1, tomImg1;

var tom4, tomImg4;

var tom, tom_running;

function preload() {
    //load the images here

    groundImg = loadImage("garden.png");

    jerryImg = loadAnimation("jerryTwo.png");

    jerryImage4 = loadAnimation("jerryFour.png");

    jerry_run = loadAnimation("jerryOne.png", "jerryThree.png");

    tomImg1 = loadAnimation("tomOne.png");

    tomImg4 = loadAnimation("tomFour.png");

    tom_running = loadAnimation("tomTwo.png", "tomThree.png");

}

function setup(){
    createCanvas(680,400);
    
    ground = createSprite(340, 200);
    ground.addImage("groundImg", groundImg);
    ground.scale = 0.7;

    jerry2 = createSprite(205, 347, 50, 100);
    jerry2.addAnimation("jerryImg", jerryImg);
    jerry2.scale = 0.1;
    jerry2.visible = true;

    jerry4 = createSprite(205, 347, 50, 100);
    jerry4.addAnimation("jerryImage4", jerryImage4);
    jerry4.scale = 0.1;
    jerry4.visible = false;

    jerry = createSprite(205, 347, 50, 100);
    jerry.addAnimation("jerry_run", jerry_run);
    jerry.scale = 0.1;
    jerry.debug = false;
    jerry.setCollider("circle", -400, 70);
    jerry.visible = false;

    tom1 = createSprite(500, 350, 20, 40);
    tom1.addAnimation("tomImg1", tomImg1);
    tom1.scale = 0.07;

    tom4 = createSprite(267, 350, 20, 40);
    tom4.addAnimation("tomImg4", tomImg4);
    tom4.scale = 0.1;
    tom4.visible = false;

    tom = createSprite(500, 350, 20, 40);
    tom.addAnimation("tom_running", tom_running);
    tom.scale = 0.1;
    tom.debug = false;
    tom.setCollider("circle", 500, 50);
    tom.visible = false;

}

function draw() {

    console.log(tom.x - jerry.x);

    background(rgb(30, 100, 220));

    if (tom4.x - jerry4.x < tom4.width / 2 - jerry4.width / 2) {
        tom4.addAnimation("tomImg4", tom4);
        tom4.changAnimation("tomImg4");
        jerry4.addAnimation("jerryImage4", jerry4);
        jerry4.changAnimation("jerryImage4");
        tom.velocityX = 0;
        jerry.visible = false;
        jerry2.visible = false;
        jerry4.visible = true;
        tom4.visible = true;
        tom.visible = false;
    }

    tom4.bounce(jerry4);

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        tom4.visible = false;
        tom1.visible = false;
        tom.visible = true;
        tom.velocityX = -5;
        tom.addAnimation("tom_running", tom);
        tom.changAnimation("tom_running");
    }
    
}

const square = [];

var score = 0;
var ground;
var state = 0;

var popS;
var GameFont;
var GameMusicVolume;
var GameState = "MainMenu";
var GameRestart, GamePlay, GameBack, GameMenu;

function preload(){
  GameFont = loadFont("Font.TTF");

  popS = loadSound("SFX/pop.mp3");
};

function setup() {
  createCanvas(displayWidth, displayHeight);

  ground = new Ground(displayWidth/2, displayHeight/1);

  square[0] = new Square();
  square[1] = new Square(); 
  square[2] = new Square(); 
  square[3] = new Square(); 
  square[4] = new Square(); 

  GamePlay = createButton("Play");
  GamePlay.position(displayWidth/2.2, displayHeight/3);
  GamePlay.size(100, 60);
  GamePlay.hide();

  GameBack = createButton("back");
  GameBack.position(displayWidth/10, displayHeight/1.5);
  GameBack.size(100, 60);
  GameBack.hide();

  GameMenu = createButton("Menu");
  GameMenu.position(displayWidth/1.1, displayHeight/15);
  GameMenu.size(100, 60);
  GameMenu.hide();

  GameRestart = createButton("Restart");
  GameRestart.position(displayWidth/2.2, displayHeight/1.8);
  GameRestart.size(100, 60);
  GameRestart.hide();

};

function draw() {
  background(55);  
  rectMode(CENTER);
  noStroke();
  textFont(GameFont);

  if(GameState === "MainMenu"){
    fill(255);
    textSize(120);
    text("Touch    Square", displayWidth/3.5, displayHeight/4);
    fill(255, 100);
    textSize(120);
    text("Touch    Square", displayWidth/3.45, displayHeight/4);

    GamePlay.mousePressed(function(){
      GameState = "Play"
      square[0].y = displayHeight-displayHeight-50;
      square[1].y = displayHeight-displayHeight-50;
      square[2].y = displayHeight-displayHeight-50;
      square[3].y = displayHeight-displayHeight-50;
      square[4].y = displayHeight-displayHeight-50;
      score = 0;
    });

    GamePlay.show();  
    GameRestart.hide();
    GameBack.hide();
    GameMenu.hide();
  }else if(GameState === "Play"){
    fill(255);
    textSize(48);
    text("Score   " + score, displayWidth/20, displayHeight/15);

    if(score > -1){
      square[0].show();
      square[0].update();
      square[0].over(ground);
    }
    if(score > 9){
      square[1].show();
      square[1].update();
      square[1].over(ground);
    }
    if(score > 19){
      square[2].show();
      square[2].update();
      square[2].over(ground);
    }
    if(score > 39){
      square[3].show();
      square[3].update();
      square[3].over(ground);
    }
    if(score > 69){
      square[4].show();
      square[4].update();
      square[4].over(ground);
    }

    GameMenu.mousePressed(function(){
      GameState = "MainMenu";
    });

    ground.show();
    GameMenu.show();
    GameRestart.hide();
    GamePlay.hide();
    GameBack.hide();
  }else if(GameState === "Game Over"){
    fill(255);
    textSize(48);
    text("Score   " + score, displayWidth/2.3, displayHeight/2);
    textSize(64);
    text("Game Over", displayWidth/2.5, displayHeight/2.3);
    
    GameRestart.show();
    GameRestart.mousePressed(function(){
      GameState = "Play";
      square[0].y = displayHeight-displayHeight-50;
      square[1].y = displayHeight-displayHeight-50;
      square[2].y = displayHeight-displayHeight-50;
      square[3].y = displayHeight-displayHeight-50;
      square[4].y = displayHeight-displayHeight-50;
      score = 0;
    });

    GameMenu.mousePressed(function(){
      GameState = "MainMenu";
    });


    ground.show();
    GameMenu.show();
    GamePlay.hide();
    GameBack.hide();
  }
};

function mouseReleased(){
  if(GameState === "Play"){
    if(score > -1){
      square[0].touched();
    }
    if(score > 9){
      square[1].touched();
    }
    if(score > 19){
      square[2].touched();
    }
    if(score > 39){
      square[3].touched();
    }
    if(score > 69){
      square[4].touched();
    }
  }
};
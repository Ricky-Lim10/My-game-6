var player, guard1, guard2, guard3
var score;
var emerald;
var shelf1, shelf2;
var level;
var resetButton, startButton;
var gameState;
var guardsGroup;

function setup() {
  createCanvas(800,800);
  player = createSprite(100,700,35,35);
  
  shelf1 = createSprite(250,400,50,500);
  shelf2 = createSprite(550,400,50,500);

  guard1 = new Guard(150,200,35,35);
  guard2 = new Guard(350,600,35,35);
  guard3 = new Guard(700,400,35,35);

  guardsGroup = new Group();

  resetButton = createButton('Restart');
  startButton = createButton('Start')

  gameState = 0;

  emerald = createSprite(400,50,50,50);

  score = 0;
  level = 1;
}

function draw() {
  background(255,255,255);  

  

  if(gameState === 0){

    player.position.x = 100;
    player.position.y = 700;

    text("Click Start to Continue",400,250);
    startButton.visible = true;

    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;
    emerald.visible = false;

    if(level === 1){
      text("Steal as much Items as you can and bring them back to the van! But make sure not to get caught!", 200,200);
      text("Level:"+level,450,270)
    }
    if(level > 1){
      text("Level:"+ level, 400,270);
    }
    startButton.mousePressed(()=>{
      gameState = 1;
    })
  }

  if(gameState === 1){

  text("Score:"+ score, 50,50);
  text("Level" + level, 100,50);

    player.visible = true;
    shelf1.visible = true;
    shelf2.visible = true;
    guard1.visible = true;
    guard2.visible = true;
    guard3.visible = true;
    emerald.visible = true;
    startButton.visible = false;

  if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }
  if(keyDown(UP_ARROW)){
    player.y = player.y-5;
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x +5;
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x -5;
  }

  if(player.collide(emerald)){
    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;
    emerald.visible = false;

    gameState = 2;
  }

    if(player.collide(emerald)){
      level = level +1;
      speed = speed +1;
      player.position.x = 100;
      player.position.y =700;
      level = level +1;
      speed = speed + 1;
      gameState = 0;
      
    }

    player.collide(shelf1);
    player.collide(shelf2);
    text("Get This Emerald!!!",350,20)

    resetButton.mousePressed(()=>{
      reset();
    })
  
}

  if(gameState === 2){
    text("You got caught!!!",400,200);   
    reset();

  }

  if(gameState === 3){
    text("Why are you running away???",350,200); 
    player.visible = false;
    shelf1.visible = false;
    shelf2.visible = false;
    guard1.visible = false;
    guard2.visible = false;
    guard3.visible = false;
    emerald.visible = false;  
    reset();

  }


  if(player.x < 0 || player. x > 800 || player.y < 0 || player.y > 800){
    gameState = 3;
  }

  
  
  drawSprites();
}

function reset(){
    score = 0;
    level = 1;
    speed = 1;
    gameState = 0;
  }


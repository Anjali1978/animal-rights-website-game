var bg1, bg2, bg3, bg4, bg5, bg6, background_img;

function preload(){

  bg1= loadImage("backgroundImg/bear.png");
  bg2 = loadImage("backgroundImg/cheetah.png");
  bg3= loadImage("backgroundImg/elephants.png");
  bg4= loadImage("backgroundImg/lion.png");
  bg5 = loadImage("backgroundImg/monkey.png");
  bg6= loadImage("backgroundImg/panda.png");
}

function setup(){

  createCanvas(displayWidth, displayHeight);
  
  background_img = createSprite(960, 550, displayWidth, displayHeight);
  background_img.scale =1.4;
}

function draw(){

  background("white");

 spawnBackground()
  drawSprites();
}

function spawnBackground(){

  if(frameCount%150 === 0){

    var img= Math.round(random(1, 7));

    switch(img){

      case 1: background_img.addImage(bg1);
      break;

      case 2: background_img.addImage(bg2);
      break;

      case 3: background_img.addImage(bg3);
      break;

      case 4: background_img.addImage(bg4);
      break;

      case 5: background_img.addImage(bg5);
      break;

      case 6: background_img.addImage(bg6);
      break;

      default:break;
    }
  }
}

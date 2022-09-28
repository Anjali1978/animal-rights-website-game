var panda, happy_panda, sad_panda;
var bamboo, bamboo_img, bambooGroup;
var people, people_img, peopleGroup;
var bg, bg_img;
var trees_cut = 0;
var trees_saved = 0;
var bg_1,bg_2,bg_3,bg_4,bg_5,bg_6,bg_7,bg_8,bg_9,bg_10,bg_11;
var bg1,bg2,bg3,bg4,bg5,bg6,bg7,bg8,bg9,bg_10,bg_11, bg_12;

var PLAY = 1;
var START = 0;
var gameState = 0;

var button, button2;
var bg_sound;

function preload(){

  //to load the images and the sounds

  happy_panda = loadImage("images/panda.png");
  sad_panda = loadImage("images/panda_cry.png");
  bamboo_img = loadImage("images/bamboo.png");
  people_img = loadImage("images/people.png");
  bg_img = loadImage("images/sad_bg.jpg");

  bg_1 = loadImage("images/bg_1.png");
  bg_2 = loadImage("images/bg_2.png");
  bg_3 = loadImage("images/bg_3.png");
  bg_4 = loadImage("images/bg_4.png");
  bg_5 = loadImage("images/bg_5.png");
  bg_6 = loadImage("images/bg_6.png");
  bg_7 = loadImage("images/bg_7.png");
  bg_8 = loadImage("images/bg_8.png");
  bg_9 = loadImage("images/bg_9.png");
  bg_10 = loadImage("images/bg_10.png");
  bg_11 = loadImage("images/bg_11.png");
  bg_12 = loadImage("images/bg_12.png");

  bg_sound = loadSound("background_sound.mp3");


}

  function setup(){

    //to create the canvas
    createCanvas(displayWidth, displayHeight);

    bg = createSprite(0, - 10, displayWidth, displayHeight - 1000);
    bg.addImage(bg_12);
    bg.scale = 7.2;
    
    panda = createSprite(displayWidth/3, 920, 100, 100);
    panda.addImage(happy_panda);
    panda.scale= 1;
    panda.debug = false;
    panda.setCollider('rectangle', 0, 0, 250, 200, -90 );
    
   // bg_sound.loop()

    button = new Button();
  //  button2 = new Button2();
    

    //bamboo = createSprite(400, 400, 50, 50);
    //bamboo.addImage(bamboo_img);
    //bamboo.scale = 0.8;

    bambooGroup = createGroup();
    peopleGroup = createGroup();
  }

  function draw(){

    //to add the background image
    
   
    background("black");
    drawSprites();
    displayFacts();


   // console.log(frameCount)

  if(frameCount>3700){

    fill("black");
    textSize(30)
    text("GAME OVER", displayWidth/2 - 100, panda.y - 500);
    text("Please reload the page to play again.", displayWidth/2 - 250, panda.y - 400);
    gameState=0;
    panda.velocityY=0;
    panda.addImage(happy_panda);
  } 
if(gameState === 0){

  button.display();
  

}
    
if(gameState === 1){
   spawnBamboo();
   changeBg();
   
   fill("grey");
   textSize(25);
   text("Number of Habitats Saved: " + trees_saved, displayWidth/2 - 800, panda.y - 500);

   fill("grey");
      textSize(25);
      text("Number of Habitats Destroyed: " + trees_cut, displayWidth/2 + 500 , panda.y - 500);
      panda.velocityY = -5;

    if(keyDown("RIGHT_ARROW")){

      panda.x += 5
      
    }

    if(keyDown("LEFT_ARROW")){

      panda.x += -5
      
    }

    if(frameCount%100 === 0){

      bg.y = bg.y - (displayHeight - 600);
    }

    
    camera.position.y = panda.y - 100;
   // camera.position.x = panda.x - 50;

   if(panda.isTouching(bambooGroup)){

    bambooGroup.destroyEach();
    peopleGroup.destroyEach();
    trees_saved ++ 
    
   }
  

}  
  
  }

  function spawnBamboo(){

     if(frameCount % 150 === 0){

      bamboo = createSprite(400, 800, 50, 50);
      bamboo.x = Math.round(random( panda.x - 1000, panda.x + 1500));
      bamboo.y = Math.round(random(panda.y - 200, panda.y - 800));

      bamboo.addImage(bamboo_img);
      bamboo.scale = 0.8;
      bamboo.debug = false;
      bamboo.setCollider('rectangle', 0, 0, 450, 250, -90);
      bamboo.lifeTime = 200;

      bambooGroup.add(bamboo);

      people = createSprite(200, 200, 200, 200);
      people.y = bamboo.y - 500;
      people.x = bamboo.x;
  
    
      people.addImage(people_img);
      people.velocityY = 4.5;
      people.debug = false;
      people.setCollider('circle', 10, -10, 40);
      people.lifeTime = 200;
      peopleGroup.add(people);

      
      
      

    

   }
   if(peopleGroup.isTouching(bambooGroup)){

      bambooGroup.destroyEach();
      panda.addImage(sad_panda);
      trees_cut = trees_cut + 1;

    } else if(!peopleGroup.isTouching(bambooGroup) && frameCount%140 === 0){

      panda.addImage(happy_panda);
    }

  }

  function changeBg(){


    if(frameCount>400){

      bg.addImage(bg_3);
    }

    if(frameCount<400 && frameCount>900){

      bg.addImage(bg_4);
    
      
    }

    if(frameCount>900 && frameCount<1300){

      bg.addImage(bg_5);
      
    }

    if(frameCount>1300 && frameCount<1700){

      bg.addImage(bg_6);
      
    }

    if(frameCount>1700 && frameCount<2100){

      bg.addImage(bg_7);
    }

    if(frameCount>2100 && frameCount<2500){

      bg.addImage(bg_8);
    }

    if(frameCount>2500 && frameCount<2900){

      bg.addImage(bg_9);
    }

    if(frameCount>2900 && frameCount<3300){

      bg.addImage(bg_10);
    }

    if(frameCount>3300 && frameCount<3700){

      bg.addImage(bg_11);
    }

    if(frameCount>3700){

      bg.addImage(bg_12);
      
    }

  

   
  }

  function displayFacts(){

    document.getElementById('fact1').style.display = 'none';
    document.getElementById('fact2').style.display = 'none';
    document.getElementById('fact3').style.display = 'none';
    document.getElementById('fact4').style.display = 'none';
    document.getElementById('fact5').style.display = 'none';
    document.getElementById('fact6').style.display = 'none';


    if(frameCount>400 && frameCount<700){

      document.getElementById('fact1').style.display = 'block';

    }

    if(frameCount>900 && frameCount<1200){

      document.getElementById('fact2').style.display = 'block';

    }

    if(frameCount>1400 && frameCount<1700){

      document.getElementById('fact3').style.display = 'block';

    }

    if(frameCount>19000 && frameCount<2200){

      document.getElementById('fact4').style.display = 'block';

    }

    if(frameCount>2400 && frameCount<2700){

      document.getElementById('fact5').style.display = 'block';

    }

    if(frameCount>3000 && frameCount<3300){

      document.getElementById('fact6').style.display = 'block';

    }
    

  }

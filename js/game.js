class Game {
    constructor(){}
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
            gameState = data.val();
        });
    }
    update(state){
     database.ref('/').update({
         gameState:state
     });
    }
    async start(){
        if(gameState===0){
    player=new Player();
    var playerCountref = await database.ref('playerCount').once("value");
    if(playerCountref.exists()){
    playerCount = playerCountref.val();
    player.getCount();
    }
    
    form= new Form();
    form.display();
        }
        car1 = createSprite(100,200)
        car1.addImage(car1Img);
        car2 = createSprite(300,200)
        car2.addImage(car2Img);
        car3 = createSprite(500,200)
        car3.addImage(car3Img);
        car4 = createSprite(700,200)
        car4.addImage(car4Img);
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hideForm();
        textSize(30);
        text("game Starts",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            background(rgb(198,135,103));
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
        var index = 0;
        var x = 175;
        var y
        // var displayPosition = 130;
         for(var i in allPlayers){
          index = index+1;
          x = x+200;
          y = displayHeight-allPlayers[i].distance
          cars[index-1].x=x;
          cars[index-1].y=y;
          textAlign(CENTER);
          textSize(20);
          fill("green");
          text(allPlayers[i].name,cars[index-1].x,cars[index-1].y+75);
          if(index===player.index){
              stroke(10);
              fill("red");
              ellipse(x,y,80,80);
           cars[index-1].shapeColor="red";
           camera.position.x=displayWidth/2
           camera.position.y=cars[index-1].y
          }
     
          
            //displayPosition += 20;
           // textSize(15);
            //text(allPlayers[i].name+":"+allPlayers[i].distance,120,displayPosition);
         }
         
        }
        if(keyIsDown(UP_ARROW)&&player.index !== null){
        player.distance += 50;
        player.update();
        }
        if(player.distance>=3850){
         gameState = 2;
        }
        drawSprites();
    }
        end(){
        console.log("game over")
        }
}

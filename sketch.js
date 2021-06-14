dog, happyDog, database,foodS, foodStock;

function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png");
}

function setup() {
	createCanvas(500.500);
  dog(200,200,20,20);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(KeyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dog);
}


  drawSprites();
  //add styles here

  function readStock(data){
    foodS=data.val();
  }

  function writeStock(x){

    database.ref('food').update({
      food:x
    })


  }

}




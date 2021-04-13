
var food; 
function preload() {
  dogimg = loadImage("images/dogimg.png");
  dogimg2 = loadImage("images/dogimg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(200, 300)
  dog.addImage(dogimg);
  dog.scale = 0.3;

  db = firebase.database();
  db_p = db.ref('food')
  db_p.on("value", db_number);
}


function draw() {
  background(0);

  if (keyWentDown("space")) {
    if (food > 0) 
      food = food - 1;
    
    dbchange(food);
    dog.addImage(dogimg2);
    console.log(food);
  }

  fill("red");
  textSize(20);
  text("press 'space '  to feed the dog", 40, 30);
  text("FOODSTOCK = "+ food, 40, 60);

  drawSprites();
}
function db_number(a) {
  food = a.val();
}

function dbchange(b) {
  db.ref('/').set({food: b})
}
var weight = [35,38,42,45,43,34,36,41,48,32];
var s1,s2,s3,s4
var sprites=[]

for(var i=0;i<weight.length;i++){
if(weight[i] >= 45){
  console.log(weight[i])
}

}

function findNumber(array,x){
for(var i=0;i<array.length;i++){
  if(array[i] === x){
    return 0
  }
  
}
return -1
}

function setup() {
  createCanvas(400,400);
s1=createSprite(100,100)
s2=createSprite(200,200)
s3=createSprite(300,300)
s4=createSprite(250,250)

sprites=[s1,s2,s3,s4]

console.log(sprites[0].position.x)

for(var i=0;i<sprites.length;i++){

console.log(sprites[i].position.x)

}
if(findNumber(weight,99) === 0 ){
  console.log("number is found in the array")
}
else{
  console.log("number is not found in the array")
}
}

function draw() 
{
  background(30);

  drawSprites()
}

 


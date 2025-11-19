//GENERAL
let score = 0
let playing = false
let game = 0
//HOME


//PATIENCE
let type="NA"
let marketDone=0
let timeElapsed=0
let win="no"

function preload(){
Calistoga=loadImage("background.png")
Orch1=loadImage("/Images/Orchid1.png")
Orch2=loadImage("/Images/Orchid2.png")
Orch3=loadImage("/Images/Orchid3.png")
Wist1=loadImage("/Images/Wisteria1.png")
Wist2=loadImage("/Images/Wisteria2.png")
Wist3=loadImage("/Images/Wisteria3.png")
Snap1=loadImage("/Images/Snap1.png")
Snap2=loadImage("/Images/Snap2.png")
Snap3=loadImage("/Images/Snap3.png")
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  if(marketDone==0){
     market()
     }
  if(type!="NA"){
    growing()
  }
}


//FUNCTIONS
function market(){
  filter(BLUR,1000000)
  background(Calistoga)
  filter(BLUR,0)
  if(type=="NA"){
    fill(255)
    textSize(32)
    rectMode(CENTER)
    text("pick a flower!",width/2,100)
    circle(200,height/2,100)
    circle(300,height/2,100)
    circle(400,height/2,100)
  }
    if(mouseIsPressed&&dist(200,200,mouseX,mouseY)<=50){
      type="Orchid"
      marketDone=1
    }
    if(mouseIsPressed&&dist(300,200,mouseX,mouseY)<=50){
      type="Wisteria"
      marketDone=1
    }
    if(mouseIsPressed&&dist(400,200,mouseX,mouseY)<=50){
      type="Snapdragon"
      marketDone=1
    }
  }

function growing(){
  background(Calistoga)
  if(type=="Orchid"){
      if(timeElapsed<=10&&timeElapsed>=0){
        image(Orch1,0,height,400,600)
      }
      if(timeElapsed<=20&&timeElapsed>10){
        image(Orch2,0,height,400,600)
      }
      if(timeElapsed>20){
        image(Orch3,0,height,400,600)
      }
      if(timeElapsed>30){
        win="yes"
      }
    }
    if(type=="Wisteria"){
      if(timeElapsed<=40&&timeElapsed>=0){
        image(Wist1,0,height,400,600)
      }
      if(timeElapsed<=80&&timeElapsed>40){
        image(Wist2,0,height,400,600)
      }
      if(timeElapsed>80){
        image(Wist3,0,height,400,600)
        win="yes"
      }
    }
    if(type=="Snapdragon"){
      if(timeElapsed<=100&&timeElapsed>=0){
        image(Snap1,0,height,400,600)
      }
      if(timeElapsed<=200&&timeElapsed>100){
        image(Snap2,0,height,400,600)
      }
      if(timeElapsed>200){
        image(Snap3,0,height,400,600)
        win="yes"
      }
    }
    if(win=="yes"){
      rectMode(CENTER)
  textAlign(CENTER,CENTER)
  rect(300,50,100,50)
  text("Done!",300,50,100,50)
      if(mouseIsPressed){
        if(this.type=="Orchid"){
          score+=100
        }
        if(this.type=="Orchid"){
          score+=500
        }
        if(this.type=="Snapdragon"){
          score+=1500
        }
        //MOVE USER TO MEDIA PAGE
      }
    }
}

function home(){
  
}


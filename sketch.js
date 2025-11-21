//GENERAL
let score = 0
let playing = false
let game = 0
//HOME
let isHome=true
let sparkle=[]

//PATIENCE
let type="NA"
let marketPlaying=0
let timeElapsed=0
let win="no"

function preload(){
HomePic=loadImage("/Images/Fireflies.png")
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
Spark1=loadImage("/Images/Sparkler1.png")
Spark2=loadImage("/Images/Sparkler2.png")
Spark3=loadImage("/Images/Sparkler3.png")
}

function setup() {
  createCanvas(600, 400);
  sparkle=[Spark1,Spark2,Spark3]
}

function draw() {
  console.log(type)
//HOME
  if(isHome==true){
     home()
     }
//PATIENCE
          if(mouseIsPressed&&mouseX<525&&mouseX>400&&mouseY>45&&mouseY<145){
    marketPlaying=1
    isHome=false
     }
  if(marketPlaying==1){
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
  isHome=false
  if(type=="NA"){
    fill(255)
    textSize(32)
    textAlign(CENTER)
    text("pick a flower!",width/2,300)
    image(Orch1,-100,-145,600,400)
    image(Wist1,0,-145,600,400)
    image(Snap1,100,-145,600,400)
  }
    if(mouseIsPressed&&dist(200,200,mouseX,mouseY)<=50){
      type="Orchid"
      marketPlaying=0
    }
    if(mouseIsPressed&&dist(300,200,mouseX,mouseY)<=50){
      type="Wisteria"
      marketPlaying=0
    }
    if(mouseIsPressed&&dist(400,200,mouseX,mouseY)<=50){
      type="Snapdragon"
      marketPlaying=0
    }
  }

function growing(){
  background(Calistoga)
  timeElapsed+=deltaTime/10
  if(type=="Orchid"){
      if(timeElapsed<=15&&timeElapsed>=0){
        image(Orch1,0,0,600,400)
      }
      if(timeElapsed<=30&&timeElapsed>15){
        image(Orch2,0,0,600,400)
      }
      if(timeElapsed>30){
        image(Orch3,0,0,600,400)
        win="yes"
      }
    }
    if(type=="Wisteria"){
      if(timeElapsed<=60&&timeElapsed>=0){
        image(Wist1,0,0,600,400)
      }
      if(timeElapsed<=120&&timeElapsed>60){
        image(Wist2,0,0,600,400)
      }
      if(timeElapsed>120){
        image(Wist3,0,0,600,400)
        win="yes"
      }
    }
    if(type=="Snapdragon"){
      if(timeElapsed<=150&&timeElapsed>=0){
        image(Snap1,0,0,600,400)
      }
      if(timeElapsed<=300&&timeElapsed>150){
        image(Snap2,0,0,600,400)
      }
      if(timeElapsed>300){
        image(Snap3,0,0,600,400)
        win="yes"
      }
    }
    if(win=="yes"){
      rectMode(CENTER)
  textAlign(CENTER,CENTER)
  rect(300,50,100,50)
  text("Done!",300,50,100,50)
      if(mouseIsPressed){
        if(type=="Orchid"){
          score+=100
        }
        if(type=="Wisteria"){
          score+=500
        }
        if(type=="Snapdragon"){
          score+=1500
        }
        isHome=true
        win="no"
        type="NA"
        timeElapsed=0
      }
    }
}

function home(){
  frameRate(20)
  noFill()
  image(HomePic,0,0,600,400)
  fill(0)
  rectMode(CORNER)
  rect(mouseX-1000,mouseY+100,10000,10000)
  rect(mouseX-1000,mouseY-100,10000,-10000)
  rect(mouseX-100,mouseY-1000,-10000,10000)
  rect(mouseX+100,mouseY-1000,10000,10000)
  image(random(sparkle),mouseX-width/2,mouseY-height/2,600,400)
}



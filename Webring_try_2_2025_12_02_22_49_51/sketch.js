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
let Pwin="no"

//HUMOR
let Hplaying = false
let moleVisible = [false, false, false, false, false, false]
let moleTimers = [0, 0, 0, 0, 0, 0]
let moleSize = 64
let startTime = 0
let gameDuration = 15000
let endTime = 0

function preload(){
HomePic=loadImage("Images/Fireflies.png")
Calistoga=loadImage("background.png")
Orch1=loadImage("Images/Orchid1.png")
Orch2=loadImage("Images/Orchid2.png")
Orch3=loadImage("Images/Orchid3.png")
Wist1=loadImage("Images/Wisteria1.png")
Wist2=loadImage("Images/Wisteria2.png")
Wist3=loadImage("Images/Wisteria3.png")
Snap1=loadImage("Images/Snap1.png")
Snap2=loadImage("Images/Snap2.png")
Snap3=loadImage("Images/Snap3.png")
Spark1=loadImage("Sparkler1.png")
Spark2=loadImage("Sparkler2.png")
Spark3=loadImage("Sparkler3.png")
Arcade=loadImage("Images/Arcade.png")
Ham1=loadImage("Images/Ham1.png")
Ham2=loadImage("Images/Ham2.png")
Ham3=loadImage("Images/Ham3.png")
Ham4=loadImage("Images/Ham4.png")
Ham5=loadImage("Images/Ham5.png")
Ham6=loadImage("Images/Ham6.png")
}

function setup() {
  createCanvas(600, 400);
  sparkle=[Spark1,Spark2,Spark3]
  lastSecond = millis();
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
//HUMOR
  if (mouseIsPressed && mouseX < 140 && mouseX > 20 && mouseY > 160 && mouseY < 240) {
  if (!Hplaying) {  
    Hplaying = true
    isHome = false
    startTime = millis()
  }
}

if (Hplaying) timeMoles()
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
  timeElapsed+=deltaTime/1000
  if(type=="Orchid"){
      if(timeElapsed<=15&&timeElapsed>=0){
        image(Orch1,0,0,600,400)
      }
      if(timeElapsed<=30&&timeElapsed>15){
        image(Orch2,0,0,600,400)
      }
      if(timeElapsed>30){
        image(Orch3,0,0,600,400)
        Pwin="yes"
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
        Pwin="yes"
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
        Pwin="yes"
      }
    }
    if(Pwin=="yes"){
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
        Pwin="no"
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
function timeMoles() {
  background(Arcade)

  let elapsed = millis() - startTime
  let remaining = ceil((gameDuration - elapsed) / 1000)
  
  fill(0)
  textSize(32)
  textAlign(RIGHT, TOP)
  text("Time: " + remaining, width - 20, 20)

  fill(0)
  textSize(32)
  textAlign(LEFT, TOP)
  text("Score: " + score, 20, 20)

  for (let i = 0; i < 6; i++) {
    if (!moleVisible[i] && random() < 0.01) {
      moleVisible[i] = true
      moleTimers[i] = millis() + 1200
    }
    if (moleVisible[i] && millis() > moleTimers[i]) {
      moleVisible[i] = false
    }
  }

  drawMoles()

  if (endTime > 0 && millis() - endTime > 1000) {
    isHome = true
    Hplaying = false
    moleVisible = [false, false, false, false, false, false]
    startTime = 0
    endTime = 0
  }
  if (elapsed >= gameDuration && endTime === 0) {
    Hplaying = false
    endTime = millis()
    isHome=true
  }
}

function drawMoles() {
  if (moleVisible[0]) image(Ham1, 0, 0, 600, 400)
  if (moleVisible[1]) image(Ham2, 0, 0, 600, 400)
  if (moleVisible[2]) image(Ham3, 0, 0, 600, 400)
  if (moleVisible[3]) image(Ham4, 0, 0, 600, 400)
  if (moleVisible[4]) image(Ham5, 0, 0, 600, 400)
  if (moleVisible[5]) image(Ham6, 0, 0, 600, 400)
}

function mousePressed() {
  if (!Hplaying) return

  if (moleVisible[0] && dist(mouseX, mouseY, 48*4, 64*4) < moleSize / 2) {
  moleVisible[0] = false
  score += 10
  
}

if (moleVisible[1] && dist(mouseX, mouseY, 75*4, 61*4) < moleSize / 2) {
  moleVisible[1] = false
  score += 10
}

if (moleVisible[2] && dist(mouseX, mouseY, 102*4, 68*4) < moleSize / 2) {
  moleVisible[2] = false
  score += 10
}

if (moleVisible[3] && dist(mouseX, mouseY, 44*4, 80*4) < moleSize / 2) {
  moleVisible[3] = false
  score += 10
}

if (moleVisible[4] && dist(mouseX, mouseY, 75*4, 79*4) < moleSize / 2) {
  moleVisible[4] = false
  score += 10
}

if (moleVisible[5] && dist(mouseX, mouseY, 107*4, 80*4) < moleSize / 2) {
  moleVisible[5] = false
  score += 10
}
}

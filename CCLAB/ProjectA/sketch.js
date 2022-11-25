let xspeed, yspeed, S, display, d;
let bubbles = [];
let extrabubbles=[]
let textbox = [
  "Damn you, Morty! What Happened!",
  "We are stuck in a stupid student's midterm project",
  "He **** know nothing about code and art",
  "Shit,now I have to save your ass?",
  "SHIT!",
  "*",
];
let lastTime;
let lastTime2;
let lastTime3;
let lastTime4;
var time0 = 60;
var index = 0;
var Index = 0;
let questionbox = [
  "What should we wear when going to public places  ",
  "What will happen if your code turns red",
  "How long between each PCR (hours) ",
];
let INDEX = 0;
let flag = false;
let answer1 = " mask";
let Counter=0
let answer2 = " quarantine";
let answer3 = " 48 ";
let youranswer1 = [];
let youranswer2 = [];
let youranswer3 = [];
let state1 = 0;
let state2 = 0;
let state3 = 0;
let whiteness = 245;
let btime;
let scene2Called = false;
let scene3Called = false;
let scene4Called = false;
let scene1Called = true;
let endingbox = [
  "I am sorry Rick",
  "I will always wear mask from now on",
  "I promise I will protect myself from virus",
];
let mode1, mode2;
let instructionbox = ["Starts with m ", "Starts with q", "Starts with 4"];
let ganbox = [
  "Answer the First Question",
  "Answer the Second Question",
  "Answer the Third Question",
];

InspiringBox = [
  "YOU ONLY GOT ONE SHOT",
  "THERE IS NO RESTART IN LIFE",
  "DO IT RIGHT OR YOU DIE",
];

let img,keyboard;

function preload() {
  img = loadImage('assets/mouse.jpg');
  img2= loadImage('assets/keyboard.png')
}

function setup() {
  let canvas= createCanvas(1100, 814);
  canvas.parent('canvasContainer');
  textStyle(BOLD);
  Bomb = new bomb();
  Rick = new Grandpa();
  Morty = new Grandson(width / 2, height / 2);
  for (var i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = 60;
    let b = new Bubbles(x, y, r);

    bubbles.push(b);
  }
}

function draw() {
  if (scene2Called == false && scene1Called == true) {
    Scene1();
  }
  
  // console.log(width, height)

  if (Rick.x > width / 2 + 10 && state3 == 10) {
    Scene3();
    scene3Called = true;
    scene1Called = false;
  }
  if (scene4Called == true) {
    Scene4();
  }
}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {
    if (!bubbles[i].isDead) {
      if (bubbles[i].clicked(mouseX, mouseY)) {
        bubbles.splice(i, 1);

        break;
      }
    }
  }
  if (Bomb.checker(mouseX, mouseY)) {
    console.log("dieeeee66");
    // background(0)
    fill(255);

    textSize(22);
    for(var i=0;i<2000;i++){
      extrabubbles.push(new Bubbles(random(width),random(height),60))
     
    }
   
  }
  if (scene4Called == true) {
    if (Index < endingbox.length - 1) {
      Index++;
    }
  }

  if (index < textbox.length - 1) {
    index++;
  }
  if(scene2Called==true && (scene3Called==false)){
    Counter++
    console.log('shahhh')
    Scene2();
  }
}

function Scene3() {
  background(128, 128, 128);

  push();
  if (millis() - lastTime3 < 10000) {
    stroke(100, 100, 255);
    fill(255);
    textSize(20);
    text("INSTRUCTIONS", 750, 20);
    text("New Virus Need One Click", 675, 60);
    text("Old Virus Need MUliti-Click", 670, 90);
    text("The DARKER the color gets,", 670, 120);
    text(" The HARDER it is to kill", 670, 150);
    text("The Bomb will end the Game ", 640, 180);
    text("There will be more virus", 670, 210);
  }
  if (11000 < millis() - lastTime3 && millis() - lastTime3 < 12000) {
    stroke(0);
    fill(255);
    textSize(22);
    text("I Doubt If You", width - 300, 130);

    text("Can Save Morty", width - 300, 150);
    text("TRASH!", width - 300, 180);
  }

  pop();
  if( extrabubbles.length>0){
  for(var i=0;i<extrabubbles.length;i++){
     extrabubbles[i].show()
  
  
  }
       noLoop()
  }
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].die();

    bubbles[i].enlarge();
    bubbles[i].bounce(1, 1);
    bubbles[i].show();
  }
  push();
  Bomb.display();
  Bomb.move();
  Bomb.bounce();
  pop();

  if (millis() - lastTime > 10000) {
    if (bubbles.length > 0) {
      let x = random(width);
      let y = random(height);
      let r = 60;
      let b = new Bubbles(x, y, r);

      bubbles.push(b);
      lastTime = millis();
    }
  }
  push();
  if (time0 <= 60 && bubbles.length != 0) {
    if (frameCount >= 1) {
      if (millis() - lastTime2 > 1000) {
        time0 -= 1;
        lastTime2 = millis();
      }
    }
  }

  fill(200, 100, 100);
  rect(0, 0, 55, 32);

  fill(160, 200, 100);
  textSize(20);
  text(time0, 22, 23);
  text("0:", 5, 23);
  pop();
  let G = new Gunsight();
  G.display();
  if (millis() - lastTime3 > 60000 && bubbles.length != 0) {
    lastTime3 = millis();

    console.log(bubbles);
    background(255, 100, 100);
    stroke(255, 200, 100);
    textSize(35);
    text("YOU FAILED", width / 2 - 50, height / 2);
    noLoop();
  }
  if (bubbles.length == 0) {
    background(0, 238, 34);
    textSize(30);
    stroke(225, 0, 0);
    fill(120, 50, 120);
    textStyle(ITALIC);
    text("No Virus", width / 2 - 50, height / 2);
    scene4Called = true;
  }
}

function Scene1() {
  let r = 10;
  background(150, 150, 150);

  push();
  fill(139, 129, 76);
  strokeWeight(4);
  beginShape();
  vertex(0, height / 1.5);
  vertex(width, height / 1.5);
  vertex(width, height);
  vertex(0, height);
  endShape();
  pop();

  push();
  fill(220, 120, 120);
  triangle(
    width / 2 - 50,
    height,
    width / 2,
    height - 50,
    width / 2 + 50,
    height
  );
  rect(width / 2 - 100, height - 170, 200, 120);
  fill(0);
  textSize(18);
  text("Click to Speak", width / 2 - 80, height / 1.1 + 10);
  text("Drag to Move", width / 2 - 80, height / 1.1 - 15);
  textSize(20);
  text("INSTRUCTION", width / 2 - 85, height / 1.22);

  pop();
  if (Rick.x > width / 2) {
    push();
    strokeWeight(3);
    translate(width / 2, height / 2 - 02);

    beginShape();
    stroke(10, 200, 20);
    fill(100, 225, 100);
    for (var i = 0; i < TWO_PI; i += 0.05) {
      let r = random(45, 60);
      let x = r * cos(i);
      let y = 2 * r * sin(i);
      vertex(x, y);
      push();
      fill(0);
      textSize(15);
      text("PRESS SPACE TO ENTER", -87, 290);
      pop();
    }
    endShape(CLOSE);
    pop();
  }

  push();

  textSize(16);
  if (index < 4) {
    text("Let The Man Finish His Words", 590, height / 2 - 200);
  }
  if (index == 4) {
    fill(0);
    text("Now Let The Man Move", 590, height / 2 - 200);
  }

  //   endShape()
  fill(225);
  beginShape();
  vertex(520, 240);
  vertex(520, 280);
  for (var x = 520; x < 580; x += 20) {
    vertex(x, 280);
    vertex(x + 10, 290);
    vertex(x + 20, 280);
  }
  vertex(580, 280);
  vertex(580, 240);
  endShape();

  push();
  noFill();
  strokeWeight(8);
  stroke(255);
  translate(width / 2, height / 2);
  vertex();

  pop();

  push();
  arc(550, 240, 60, 60, PI, 2 * PI);
  pop();
  line(528, 237, 544, 237);
  line(556, 237, 572, 237);
  pop();
  strokeWeight(4);
  push();
  strokeWeight(6);
  point(529, 240);
  point(555, 240);
  pop();

  push();
  fill(255);
  line(550, 258, 540, 266);
  line(550, 258, 560, 266);
  circle(width - 60, height / 1.5 - 40, 80);
  line(width - 100, height / 1.5 - 40, width - 200, height / 1.5 - 40);
  line(width - 200, height / 1.5 - 40, width - 180, height / 1.5 - 120);
  line(width - 200, height / 1.5 - 40, width - 280, height / 1.5);
  line(width - 140, height / 1.5 - 40, width - 80, height / 1.5 - 100);
  pop();

  push();
  translate(width - 60, height / 1.5 - 50);
  scale(0.2);
  rotate(frameCount * 0.5);
  strokeWeight(10);
  for (let i = 0; i < 150; i++) {
    rotate(radians(6));
    line(0, r, 0, r + 0.1);
    r += log(i + 1) / 8;
  }
  r = 10;
  pop();

  strokeWeight(1);
  Rick.display();
  Rick.move();
  Rick.speak();
}

function Scene2() {
  console.log(state3);
  
  push();
  
  push();
 if(Counter>=0){ 
  push();
  strokeWeight(12);
  fill(150, 205, 120);
  background(200, 200, 200);
   image(img,width-200,height-200)
  image(img2,50,height-200)
   rect(160, 0, 650, 160);
  pop();
  stroke(225, 0, 225);
  textSize(60);
  text("Type To Answer", 200, 60);
  textSize(50);
  text("Press SPACE To Submit", 200, 140);}

  pop();

  if (state1 < 10) {
    for (let i = 0; i < youranswer1.length - 1; i++) {
      //       if (keyCode != BACKSPACE && keyCode != DELETE) {
      console.log(youranswer1);
      //         if (youranswer1[i] == answer1[i]) {
      textSize(40);
      text(youranswer1[i + 1], width / 2 - 80 + 60 * i, height / 2);
      //           console.log(youranswer1);
      //           state1 += 1;

      //           // if (state1 == 10) {
      //           //   INDEX = 1;
      //           // }
      //         }
      //       }
    }
  }
  if (state1 == 10 && state2 <= 56) {
    for (let i = 0; i < youranswer2.length; i++) {
      //   if (keyCode != BACKSPACE && keyCode != DELETE) {
      //     if (youranswer2[i] == answer2[i]) {
      console.log(youranswer2);
      INDEX = 1;
      textSize(22);
      text(youranswer2[i], width / 2 - 300 + 60 * i, height / 2);
      //       state2 += 1;
      //     }
      //   }
    }
  }

  if (state1 == 10 && state2 >= 56) {
    INDEX = 2;
    console.log(state2);
    for (let i = 0; i < youranswer3.length; i++) {
      console.log("1107");

      // if (youranswer3[i] == answer3[i]) {
      //   INDEX = 2;

      // state3 += 1;
      textSize(22);
      text(youranswer3[i], width / 2 - 200 + 60 * i, height / 2);
      console.log(state3);
      if (state3 == 10) {
        lastTime = millis();
        lastTime2 = millis();
        lastTime3 = millis();

        text("Too ** Slow!", width / 2, height / 2);
      }
      // }
    }
  }

  push();
  if(Counter>=1){
  push();
  strokeWeight(12);
  fill(240, 200, 120);
  rect(width / 2 - 400, height / 2 - 250, width - 180, height / 3 - 100);
  pop();
  textSize(34);
  stroke(255, 0, 0);
  text(questionbox[INDEX], width / 2 - 380, height / 2 - 200);
  stroke(200, 200, 0);
  text(instructionbox[INDEX], width / 2 - 140, height / 2 - 100);
  text(ganbox[INDEX], width / 2 - 200, height / 2 - 150);
}
  pop();
  push();
  if(Counter>=2){
  console.log()
    push();
  strokeWeight(12);
  fill(50, 200, 200);
  rect(width / 2 - 250, height - 170, width / 2 + 20, height / 2 - 200);
  pop();
  
  
  textSize(34);

  stroke(0, 200, 200);

  text(InspiringBox[INDEX], width / 2 - 200, height - 40);
  stroke(155, 100, 200);
  text("***WATCH HOW YOU SPELL", width / 2 - 200, height - 80);
  stroke(120, 240, 0);
  text("I DOUBT YOU CAN READ", width / 2 - 200, height - 120);}
  pop();
  pop();
}

function keyPressed() {
  let arbitraryValue = 5;
  if (state1 < 10) {
    if (keyCode == BACKSPACE || keyCode == DELETE) {
      if (youranswer1.length > 1) {
      youranswer1.splice(youranswer1.length - 1, 1);}
    } else if (key == " " && state1 == 0) {
      youranswer1.push(key);
      state1 = arbitraryValue;
    } else if (key == " " && state1 == arbitraryValue) {
      for (let i = 0; i < youranswer1.length - 1; i++) {
        if (youranswer1[i] != answer1[i]) {
          console.log("break");
          break;
        } else if (i == youranswer1.length - 2) {
          state1 = 10;
        }
      }
    } else {
      youranswer1.push(key);
    }
  }
  
  if (state1 == 10 && state2 < 56) {
    if (keyCode == BACKSPACE || keyCode == DELETE) {
     if (youranswer2.length > 1) {
      youranswer2.splice(youranswer2.length - 1, 1);}
    } else if (key == " " && state2 == 0) {
      youranswer2.push(key);
      state2 = arbitraryValue;
    } else if (key == " " && state2 == arbitraryValue) {
      for (let i = 0; i < youranswer2.length - 1; i++) {
        if (youranswer2[i] != answer2[i]) {
          console.log("break");
          break;
        } else if (i == youranswer2.length - 2) {
          state2 = 66;
        }
      }
    } else {
      youranswer2.push(key);
    }
  }
  if (state1 == 10 && state2 == 66 && state3 < 10) {
    console.log("0000");
    // youranswer3.push(key);
    console.log(youranswer3);
    if (keyCode == BACKSPACE || keyCode == DELETE) {
     if (youranswer3.length > 1) {
      youranswer3.splice(youranswer3.length - 1, 1);}
    } else if (key == " " && state3 == 0) {
      youranswer3.push(key);
      state3 = arbitraryValue;
    } else if (key == " " && state3 == arbitraryValue) {
      for (let i = 0; i < youranswer3.length - 1; i++) {
        if (youranswer3[i] != answer3[i]) {
          console.log("break");
          break;
        } else if (i == youranswer3.length - 2) {
          state3 = 10;
        }
      }
    } else {
      youranswer3.push(key);
    }
  }

  if (scene3Called == false) {
    btime = millis();
    Scene2();

    scene2Called = true;
  }
}

function Scene4() {
  background(120, 120, 120);
  Morty.display();
  Morty.say();
}

function mouseDragged() {
  flag = true;
}

function doubleClicked() {
  for (var i = 0; i < bubbles.length; i++) {
    if (bubbles[i].clicked(mouseX, mouseY)) {
      if (bubbles[i].isDead) {
        bubbles.splice(i, 1);
      }
    }
  }
}

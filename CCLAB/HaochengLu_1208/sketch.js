bubbles = [];
fishs = [];
bottles = [];
bottles2 = [];
let yoff = 0.0;
yarray = [];
xarray = [];
let turtles = [];
let cont = 50;
let num1, num2, a, b;
let cost, cost1;
let count = 0;
let flag = false;
let cleanw = false;
let siyu=0
function setup() {
  let canvas = createCanvas(1000, 700);
  canvas.parent("canvasContainer")
  fish2 = new Anotherfish(width / 2, height-200);
  for (var i = 0; i < 7; i++) {
    bbb = new Bottle(random(width), 205);
    bottles2.push(bbb);
  }

  for (var i = 0; i < 10; i++) {
    yarray[i] = 0;
  }
  boat = new Boat(width / 2, 0);
  bf = new BF(width - 500, 40);
  cloud1 = new Cloud(120, 50);
  cloud2 = new Cloud(240, 50);
  star1 = new Star(random(width), random(0, 150));
  star2 = new Star(random(width), random(0, 150));
  star3 = new Star(random(width), random(0, 150));
  star4 = new Star(random(width), random(0, 150));
  star5 = new Star(random(width), random(0, 150));
  // for (var i = 0; i <= 6; i++) {
  //   let f = new Fish(width + 10, random(265, height));
  //   fishs.push(f);
  // }
}

function draw() {
  background(num1, num2, 255);
  num1 = map(cloud1.x, 120, width, 168, 10);
  num2 = map(cloud2.x, 120, width, 219, 100);

  push();
  cloud1.display();
  cloud1.move();
  cloud2.display();
  cloud2.move();
  if (cloud1.x > width + 140 || cloud1.x < -10) {
    cloud1.xspd = cloud1.xspd * -1;
  }
  if (cloud2.x > width + 200 || cloud2.x < -10) {
    cloud2.xspd = cloud2.xspd * -1;
  }

  if (num1 <= 100 && num2 <= 150) {
    star2.display();
    star1.display();
    star3.display();
    star4.display();
  }
  pop();
  // console.log(mouseX, mouseY)

  push();
  bf.display();
  bf.swim();
  if (bf.x > width - 100 || bf.x < width / 2) {
    bf.speed = bf.speed * -1;
  }

  if (bf.x > width / 2-100 && bf.x > width / 2 + 100) {
    textSize(22);
    strokeWeight(2);
    textStyle(BOLD);
    stroke(112, 20, 30);
    if (cleanw == false) {
      text("SAVE THE SEA", bf.x - 50, bf.y + 50);
    }
    if (cleanw == true) {
     text("TAKE CARE OF IT", bf.x - 50, bf.y + 50); 
    }
  }

  pop();

  push();
  //大鱼变异
  if (fish2.y <= 267) {
    fish2.pollute = true;
    fish2.ppp();
  }
  pop();
  //钩子的摇摆
  if (boat.len == 0 && boat.bianduan == true) {
    boat.move = true;
  }

  //废水海洋背景+随波漂流的牌子
  push();
  ocean();
  ocean2();
  pop();

  //瓶子坠落
  push();
  bbbottles();
  pop();

  //勾瓶子

  push();

  boat.display();

  boat.stop();
  push();
  for (var i = bottles2.length - 1; i >= 0; i--) {
    a = boat.x - 5 + (45 + boat.len) * -sin(sin(boat.a));
    b = boat.y + 30 + (45 + boat.len) * cos(sin(boat.a));

    if (
      dist(bottles2[i].x, bottles2[i].y, a, b) < 40 ||
      bottles2[i].catch == true
    ) {
      bottles2[i].changeP(a, b);
      bottles2[i].catch = true;
    }
  }
  pop();

  pop();

  //气泡效果
  push();
  bbbubbles();
  pop();

  //大鱼移动

  push();
  fish2.display();

  fish2.gundan();
  pop();

  //太阳
  push();
  sssun();
  pop();

  //小鱼
  push();
  fffishes();
  pop();

  //乌龟
if(frameCount>300){
  push();
  ttturtles();
  pop();}
}

class Cloud {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspd = 0.5;
  }
  display() {
    push();
    fill(255);
    noStroke();
    translate(this.x, this.y);
    ellipse(0, 0, 70, 50);
    ellipse(10, 10, 70, 50);
    ellipse(-20, 10, 70, 50);
    pop();
  }
  move() {
    this.x += this.xspd;
  }
}

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(0.1 + 0.7 * sin(frameCount * 0.05));
    fill(255, 255, 0);
    beginShape();
    vertex(0, 0);
    vertex(-13, 24);
    vertex(-29, 20);
    vertex(-21, 42);
    vertex(-19, 63);
    vertex(0, 53);
    vertex(19, 63);
    vertex(21, 42);
    vertex(29, 20);
    vertex(13, 24);
    endShape(CLOSE);
    fill(255, 0, 0);

    pop();
  }
}

class BF {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
    this.size = 30;
  }

  swim() {
    this.x += this.speed;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(1.8);
    if (this.speed > 0) {
      scale(-1, 1);
    }
    if (this.speed < 0) {
      scale(1, 1);
    }

    ellipseMode(CENTER);
    fill(255, 200, 0);
    ellipse(0, 0, this.size); //body
    // triangle(
    //   0 + this.size / 3,
    //   0,
    //   this.size / 1.5,
    //   this.size / 3,
    //   this.size / 1.5,
    //   0 - this.size / 3
    // );
    ellipse(this.size/2,0,this.size/2,10)
    
    
    fill(255);
    ellipse(0 - this.size / 6, 0, this.size / 2, this.size / 2);
    fill(0);
    ellipse(0 - this.size / 6, 0, this.size / 3, this.size / 3);
    pop();
  }
}

class Turtle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.chil = false;
    this.xspd = random(0.75, 0.5);
    this.yspd = random(0.1, 0.2);
    this.lifespan = 100;
  }
  display() {
    push();
    if (this.chil == true) {
      translate(this.x, 0);
      scale(-1, 1);
    }
    if (this.chil == false) {
      translate(this.x, 0);
      scale(1, 1);
    }

    translate(0, this.y);
    scale(0.7);
    push();
    fill(84, 139, 84);
    push();
    translate(-28, -25);
    rotate(-PI / 5 + 0.2 * sin(frameCount * 0.05));
    ellipse(0, 0, 20, 40);
    pop();

    push();
    translate(28, -25);
    rotate(PI / 5 + 0.2 * sin(frameCount * 0.05));
    ellipse(0, 0, 20, 40);
    pop();

    push();
    translate(-28, 25);
    rotate(PI / 5 + 0.2 * sin(frameCount * 0.05));
    ellipse(0, 0, 20, 40);
    pop();

    push();
    translate(28, 25);
    rotate(-PI / 5 + 0.2 * sin(frameCount * 0.05));
    ellipse(0, 0, 20, 40);
    pop();

    push();
    translate(-40, 0);
    rotate(0.2 * cos(frameCount * 0.05));
    ellipse(-10, 0, 20, 15);
    pop();

    if (this.chil == false) {
      push();
      translate(34, 0);
      ellipse(0, 0, 60, 40);
      push();
      strokeWeight(4);
      point(20, -8);
      point(20, 8);
      pop();

      pop();
    }
    pop();

    push();
    fill(0, 139, 69);
    ellipse(0, 0, 90, 70);
    pop();

    push();
    noFill();
    beginShape();
    vertex(-28, -25);
    vertex(-10, 0);
    vertex(-28, 25);
    endShape();

    beginShape();
    vertex(28, -25);
    vertex(10, 0);
    vertex(28, 25);
    endShape();

    line(-10, 0, 10, 0);

    arc(-40, 0, 90, 90, -PI / 4, PI / 4);
    pop();

    pop();
  }
  movel() {
    this.x += this.xspd;
    this.y += this.yspd;
  }

  diel() {
    return this.x + 20 < 0;
  }
  dier() {
    return this.x - 20 > width;
  }
  mover() {
    this.x -= this.xspd;
    this.y -= this.yspd;
  }
}

class Anotherfish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspd = 0.7;
    this.yspd = 0.7;
    this.turn = false;
    this.eat = false;
    this.arc = 160;
    this.colorR = 139;
    this.colorG = 139;
    this.colorB = 122;
    this.pollute = false;
  }

  gundan() {
    if (keyIsPressed) {
      if (this.eat == false) {
        if (key == "a" || key == "A") {
          if (this.x > -10) {
            this.movel();
          }
        }
        if (key == "d" || key == "D") {
          if (this.x < width + 10) {
            push();

            this.mover();
            pop();
          }
        }

        if (key == "S" || key == "s") {
          if (this.y < height+20) {
            this.moved();
          }
        }

        if (key == "W" || key == "w") {
          if (this.y >= 267) {
            this.moveu();
          }
        }
      }

      if (this.eat == true) {
        if (key == "a" || key == "A") {
          if (this.x > -10) {
            this.mover();
          }
        }
        if (key == "d" || key == "D") {
          if (this.x < width + 10) {
            push();

            this.movel();
            pop();
          }
        }

        if (key == "S" || key == "s") {
          if (this.y > 250) {
            this.moveu();
          }
        }

        if (key == "W" || key == "w") {
          if(this.y<height+20){
          this.moved();}
        }
      }
    }
  }

  display() {
    if (key == "d" || key == "D") {
      this.turn = true;
    }
    if (key == "a" || key == "A") {
      this.turn = false;
    }

    if (this.turn == false) {
      translate(this.x, 0);
      scale(1, 1);
    }
    if (this.turn) {
      translate(this.x, 0);
      scale(-1, 1);
    }
    fill(this.colorR, this.colorG, this.colorB);
    translate(0, this.y);
    scale(0.4);

    rotate(0.07 * sin(frameCount * 0.02));
    triangle(60, 0, 120, -60, 120, 60);

    rotate(0.01 * sin(frameCount * 0.02));
    arc(0, 0, this.arc, this.arc, -PI / 1.25, PI / 1.25);

    push();
    noFill();
    beginShape();
    vertex(-41, -30);
    vertex(-15, -11);
    vertex(-15, 11);
    vertex(-41, 30);
    endShape();
    pop();
    push();
    noStroke();
    triangle(-15, -11, 0, 0, -15, 11);
    pop();
    for (var x = -62; x <= -19; x += 10) {
      triangle(
        x,
        -tan(PI / 1.25) * x,
        x,
        -tan(PI / 1.25) * (x + 10),
        x + 10,
        -tan(PI / 1.25) * (x + 10)
      );
      triangle(
        x,
        tan(PI / 1.25) * x,
        x,
        tan(PI / 1.25) * (x + 10),
        x + 10,
        tan(PI / 1.25) * (x + 10)
      );
    }
    if (this.eat == false) {
      push();
      strokeWeight(4);
      circle(-8, -34, 30);
      line(-18, -30, 2, -38);
      line(-15, -42, -1, -26);
      pop();
    }
    if (this.eat == true) {
      let r = 20;
      push();
      translate(-8, -34);

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
    }
  }
  movel() {
    this.x -= this.xspd;
  }
  mover() {
    this.x += this.xspd;
  }
  moveu() {
    this.y -= this.yspd;
  }
  moved() {
    this.y += this.yspd;
  }
  ppp() {
    if (this.pollute == true) {
      this.colorR -= 0.5;
      this.colorG -= 0.51;
      this.colorB -= 0.51;

      if (this.arc < 300) {
        this.arc += 0.5;
      }
    }
  }
}
class Boat {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.a = 0;
    this.move = true;
    this.len = 0;
    this.bianduan = false;
  }

  display() {
    push();
    translate(this.x, this.y);
    // scale(1.4);
    square(14, -31, 32);
    arc(0, 0, 110, 60, 0, PI, CHORD);
    triangle(14, -31, 30, -50, 46, -31);

    pop();
  }
  stop() {
    if (this.move == false) {
      if (this.len <= 400 && this.bianduan == false) {
        this.len += 3;
      }
      if (this.len >= 399) {
        this.bianduan = true;
      }
      if (this.bianduan && this.len > 0) {
        this.len -= 3;
      }

      push();
      translate(this.x, this.y + 30);
      // scale(1.2);
      strokeWeight(6);
      this.a += 0;
      rotate(sin(this.a));
      line(0, 0, 0, 30 + this.len);
      line(10, 53 + this.len, 0, 30 + this.len);
      line(-10, 53 + this.len, 0, 30 + this.len);
      // text(a, 10, 53 + this.len);
      // text(mouseX, 10, 63 + this.len);
      pop();
    } else {
      if (this.len < 1 && this.bianduan == true) {
        this.bianduan = false;
      }
      this.a += 0.01999;

      push();
      translate(this.x, this.y + 30);
      // scale(1.2);
      strokeWeight(6);
      rotate(sin(this.a));
      line(0, 0, 0, 30);
      line(10, 53, 0, 30);
      line(-10, 53, 0, 30);
      pop();
    }
  }

  changey(a) {
    this.y = a;
  }
}

class Bottle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.yspd = 1;
    this.rotspeed = 10;
    this.catch = false;

  }
  display() {
    fill(100, 60, 50);
    push();
    translate(this.x, this.y);
    rotate(0.2 * sin(frameCount * 0.03));
    push();
    // text(this.x, 20, 0);
    // text(this.y, 20, 20);
    // text(mouseX, 20, 40);
    rect(0, 0, 20, 50, 5);
    beginShape();
    vertex(1, 2);
    vertex(19, 2);
    vertex(15, -5);
    vertex(5, -5);
    endShape(CLOSE);
    ellipse(10, -7, 10, 5);
    beginShape();
    vertex(0, 13);
    vertex(20, 13);
    vertex(20, 18);
    vertex(0, 18);
    endShape(CLOSE);
    beginShape();
    vertex(0, 27);
    vertex(20, 27);
    vertex(20, 32);
    vertex(0, 32);
    endShape(CLOSE);
    pop();
    pop();
  }
  move() {
    this.y += this.yspd;
  }
  remain() {
    if (this.y + 50 > height) {
      this.yspd = 0;
      this.rotspeed = 0;
    }
  }
  changep(a) {
    this.y = a;
  }
  updateX() {
    this.x += 0.5;
    if (this.x > width + 15) {
      this.x = 0;
    }
  }
  die() {
    return this.x > width;
  }
  changeP(X, Y) {
    this.x = X;
    this.y = Y;
  }
}

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xspd = random(0.5, 1);
    this.yspd = random(0.15, 0.095);
    this.ColorR = 255;
    this.ate = false;
    this.lifespan = 100;
  }
  display() {
    push();
    translate(this.x, this.y);
    scale(0.5);
    fill(this.ColorR, 0, 0);
    push();
    translate(39, -1);
    rotate(0.2 * sin(frameCount * 0.02));
    triangle(0, 0, 80 - 39, -31, 80 - 39, 31);

    pop();
    ellipse(0, 0, 100, 60);
    arc(-7, 3, 25, 30, -PI / 3, PI / 3);
    arc(-24, 0, 25, 25, 0, PI);
    pop();
  }
  move() {
    this.x -= this.xspd;
    this.y += this.yspd;
  }
  dieleft() {
    return this.x + 80 < 0;
  }
  get() {
    this.ColorR = 0;
  }
}

function mousePressed() {
  if (boat.move == true) {
    boat.move = false;
  } else {
    boat.move = true;
    boat.len = 0;
  }
  // console.log(0.5 * sin(boat.a));
}

class Bubble {
  constructor(x, y, spd) {
    this.x = x;
    this.y = y;
    this.dia = 60;
    this.spd = spd;
  }
  display() {
    noFill();
    stroke(255);
    strokeWeight(2);
    push();
    translate(this.x, this.y);
    circle(0, 0, this.dia);
    arc(0, 0, 47, 47, PI, -PI / 3.1);
    pop();
  }
  move() {
    this.y -= this.spd;
  }
  die() {
    return this.y <= 240;
  }
}

function bbbubbles() {
  if (bubbles.length < 5) {
    let b = new Bubble(random(width), height + 50, random(1.75, 2.25));
    bubbles.push(b);
  }
  // 气泡破灭
  for (var i = bubbles.length - 1; i >= 0; i--) {
    bubbles[i].display();
    bubbles[i].move();
    if (bubbles[i].die()) {
      bubbles.splice(i, 1);
    }
  }
}

function fffishes() {
  
  //小鱼
  if(frameCount%120==0&&frameCount<1200){
    let f = new Fish(width + 10, random(265, height));
    fishs.push(f);
  }
  
  
  for (var i = fishs.length - 1; i >= 0; i--) {
    fishs[i].display();
    fishs[i].move();
    if (fishs[i].ate == true) {
      fishs[i].get();
    }

    if (fishs[i].dieleft()) {
      fishs[i].x = width + 10;
    } else if (fishs[i].lifespan <= 0) {
      fishs.splice(i, 1);
    }
  }

  //小鱼吃瓶子
  for (var i = 0; i < fishs.length; i++) {
    for (var j = bottles2.length - 1; j >= 0; j--) {
      if (
        dist(fishs[i].x, fishs[i].y, bottles2[j].x, bottles2[j].y) < 30 &&
        fishs[i].lifespan >= 0 &&
        bottles2[j].catch == false
      ) {
        bottles2.splice(j, 1);
        fishs[i].lifespan -= 50;
        fishs[i].ate = true;
      }
    }
  }
}

function bbbottles() {
  //掉落瓶子
  if (bottles2.length >= 0 && flag == false) {
    if (frameCount % 300 == 0) {
      let bo = new Bottle(random(width), 205);
      bottles2.push(bo);
    }
  }
  if (bottles2.length == 0) {
    flag = true;
    cleanw = true;
  }

  for (var i = 0; i < bottles2.length; i++) {
    bottles2[i].display();
    bottles2[i].move();
    bottles2[i].remain();
    if (bottles2[i].catch == true && boat.len == 0) {
      bottles2.splice(i, 1);
    }
  }
  //迷晕
  for (var i = bottles2.length - 1; i >= 0; i--) {
    if (
      dist(fish2.x, fish2.y, bottles2[i].x, bottles2[i].y) < 60 &&
      bottles2[i].catch == false
    ) {
      bottles2.splice(i, 1);
      fish2.eat = true;
    }
  }

  // for (var i = bottles2.length - 1; i >= 1; i--) {
  for (var j = 0; j < turtles.length; j++) {
    for (var i = bottles2.length - 1; i >= 1; i--) {
      let spliced = false;
      // for (var j = 0; j < turtles.length; j++) {
      if (
        dist(turtles[j].x, turtles[j].y, bottles2[i].x, bottles2[i].y) < 60 &&
        turtles[j].lifespan >= 100 &&
        bottles2[i].catch == false
      ) {
        // console.log(bottles2.length);
        if (!spliced) {
          bottles2.splice(i, 1);
          spliced = true;
        }
        turtles[j].chil = true;
        turtles[j].lifespan = 99;
        //console.log(dist(turtles[j].x, turtles[j].y, bottles2[i].x, bottles2[i].y));
      }
    }
  }
}
// }
function ocean() {
  push();
  fill(131, 139, 131);
  noStroke();
  if (bottles.length < 4) {
    for (var i = 0; i < 10; i++) {
      let bo = new Bottle(12 + i * 120, 0);
      bottles.push(bo);
    }
  }
  beginShape();

  let xoff = 0;
  for (let x = 0; x <= width; x += 0.5) {
    let y = map(noise(xoff, yoff), 0, 1, 160, 260);
    vertex(x, y);
    xoff += 0.002;
    for (var j = 0; j < 10; j++) {
      if (x == bottles[j].x) {
        bottles[j].changep(y);
      }
    }
    if (x == boat.x) {
      boat.changey(y);
    }
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  pop();
  for (var i = 0; i < bottles.length; i++) {
    bottles[i].display();
    bottles[i].updateX();
  }
}
function ocean2() {
  push();
  fill(67, 157, 190);
  noStroke();
  beginShape();

  let xoff = 0;
  for (let x = 0; x <= width; x += 12) {
    let y = map(noise(xoff, yoff), 0, 1, 190, 345);
    vertex(x, y);
    xoff += 0.05;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  pop();
}

function sssun() {
  push();
  rotate(100 * sin(frameCount));
  fill(139, 130, 120);

  beginShape();
  for (var i = 0; i < TWO_PI; i += 0.02) {
    let r = 65 + random(5, -5);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  pop();
}

function ttturtles() {
  if(frameCount%60==0){
  if (turtles.length <= 5) {
    let t = new Turtle(-10, random(300, height - 10));
    turtles.push(t);
  }
  }
  for (var i = turtles.length - 1; i >= 1; i--) {
    // console.log(turtles[i]);
    turtles[i].display();
    if (turtles[i].chil == false) {
      turtles[i].movel();
    }

    if (turtles[i].chil == true) {
      turtles[i].mover();
    }
    if (turtles[i].dier()) {
      turtles.splice(i, 1);
    } else if (turtles[i].diel()) {
      turtles.splice(i, 1);
    }
  }
}

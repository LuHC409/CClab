 class Bubbles {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colorG = 210;
    this.colorR = 100;
    this.colorB = 100;
    this.isDead = false;
    this.xspeed = random(-4, 4);
    this.yspeed = random(-4, 4);
    
    this.lifespan = 255;
  }
  show() {
    fill(this.colorR, this.lifespan, this.colorB);
    circle(this.x, this.y, this.r);

    push();
    noStroke();
    translate(this.x, this.y);
    for (var i = 0; i < 8; i++) {
      rotate(PI / 4 + 0.015 * sin(frameCount * 0.1));
      noStroke();
      triangle(
        0 - ((this.r / 2) * sin(22.5)) / 2,
        0 - (this.r / 2) * cos(22.5),
        0 + ((this.r / 2) * sin(22.5)) / 2,
        0 - (this.r / 2) * cos(22.5),
        0,
        0 - (((3 / 2) * this.r) / 2) * cos(22.5)
      );
      push();
      fill(
        this.colorR + 16,
        this.colorG - 145 + this.lifespan,
        this.colorB - 4
      );
      circle(0, -this.r / 2 + 10 * cos(22.5), 8);
      pop();

      noStroke();
    }
    pop();

    push();

    translate(this.x, this.y);
    fill(255, this.lifespan, 143);
    circle(-12, -5, 18);
    circle(12, -5, 18);
    stroke(141, 238, 238);
    strokeWeight(4);
    line(-14, -20, 0, -14);
    line(14, -20, 0, -14);
    pop();
    push();
    stroke(141, 238, 238);
    line(-14, -9, 0, -2);
    pop();
    push();
    translate(this.x, this.y);
    strokeWeight(4);
    point(-10, -7);
    point(10, -7);
    strokeWeight(1);
    noFill();
    arc(-12, 1, 14, 14, (1 / 3) * PI, (2 / 3) * PI);
    arc(12, 1, 14, 14, (1 / 3) * PI, (2 / 3) * PI);
    pop();
    push();
    translate(this.x, this.y);
    noFill();
    arc(0, -30, 100, 100, (HALF_PI * 6.5) / 8, (HALF_PI * 9.5) / 8);
    arc(-13, 17, 10, 10, (PI * 2) / 3, (4 / 3) * PI);
    arc(13, 17, 10, 10, (-1 / 3) * PI, (1 / 3) * PI);
    for (var x = -10; x < 10; x += 15) {
      triangle(x, 20, x + 2.5, 24, x + 5, 20);
    }
    pop();
    push();
    translate(this.x, this.y);
    fill(48, 128 + this.lifespan, 20);
    circle(-3, -22, 5);
    circle(-24, 6, 5);
    circle(23, 8, 5);

    pop();
  }
  clicked(px, py) {
    d = dist(px, py, this.x, this.y);

    return d < this.r / 2;
  }

  move() {
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
    if (frameCount % 60 == 0) {
      this.lifespan -= 5;
    }
  }
  bounce() {
    if (this.x+this.r/2+5 > width || this.x-this.r/2 -5< 0) {
      this.xspeed = this.xspeed * -1;
      
      
    }
    if (this.y+this.r/2+5> height || this.y-this.r/2-5 < 0) {
      this.yspeed = this.yspeed * -1;
      
      
    }
  }
  die() {
   
    if (this.colorG - this.lifespan > 0) {
      console.log("dieeeeeee")
      this.isDead = true;
      
    }
  }
  enlarge(){
    if(this.isDead ==true){
      this.r=70
      var xspeed2=this.xspeed*0.01
      var yspeed2=this.yspeed*0.01
      this.x-=xspeed2
      this.y-=yspeed2
      
      
      
    }
  }
}

class Gunsight {
  constructor(x, y) {
    this.x = mouseX;
    this.y = mouseY;
  }

  display() {
    push();
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
      noFill();

      stroke(255, 0, 0);
      strokeWeight(4);
      circle(this.x, this.y, 40);
      strokeWeight(6);
      point(this.x, this.y);
      pop();
    }
  }
}

class Grandpa {
  constructor() {
    this.x = 100;
    this.y = height / 1.5 - 170;
    this.xspeed = 4;
  }
  display() {
    push();
    translate(this.x, this.y);

    push();
    translate(0, -50);
    fill(225);

    //Face
    push();
    // translate(this.x, this.y);
    fill(150, 245, 255);
    noStroke();
    ellipse(0, -15, 70, 80);
    pop();

    push();
    // translate(this.x, this.y);
    fill(245, 222, 179);
    circle(-25, 0, 12);
    circle(25, 0, 12);
    ellipse(0, 0, 50, 70);
    arc(0, -30, 20, 20, PI / 7, (6 / 7) * PI);
    pop();

    push();
    // translate(this.x, this.y);
    strokeWeight(4);
    stroke(0, 197, 205);
    line(0, -10, -15, -20);
    line(0, -10, +15, -20);
    pop();

    // translate(this.x, this.y);
    fill(255, 210, 0);
    circle(-10, -2.2, 15);
    circle(10, -2.2, 15);

    push();
    strokeWeight(4);
    point(-10, -4);
    point(10, -4);
    pop();

    push();
    noFill();
    arc(0, 10, 8, 12, 0, PI / 0.8);
    arc(-10, 3.5, 12, 10, (1 / 3) * PI, (2 / 3) * PI);
    arc(10, 3.5, 12, 10, (1 / 3) * PI, (2 / 3) * PI);
    ellipse(0, 22, 20, 5);
    pop();

    push();
    fill(135, 206, 235);
    rect(2, 25, 10, 3);
    noFill();
    arc(-9, 22, 8, 8, (PI * 2) / 3, (4 / 3) * PI);
    arc(9, 22, 8, 8, (-1 / 3) * PI, (1 / 3) * PI);
    pop();

    push();
    fill(150, 245, 255);
    noStroke();
    beginShape();
    vertex(-20, -47.666666666666686);
    vertex(-2, -54.666666666666686);
    vertex(-22, -71.66666666666669);
    endShape();
    beginShape();
    vertex(-20, -47.66666);
    vertex(-30, -32.666666);
    vertex(-41, -52.666666);
    endShape();
    beginShape();
    vertex(-3, -52.6666);
    vertex(22, -47.6666);
    vertex(20, -73.666);
    endShape();
    beginShape();
    vertex(40, -54.6666);
    vertex(21, -41.6666);
    vertex(31, -26.6666);
    endShape();
    beginShape();
    vertex(-51, -24.6666);
    vertex(-33, -28.6666);
    vertex(-34, -14.6666);
    endShape();
    beginShape();
    vertex(32, -26.666666);
    vertex(35, -12.666666);
    vertex(50, -22.666666);
    endShape();
    pop();

    //Body
    fill(245, 222, 179);
    rect(-4, 33, 10, 100);
    fill(255);
    rect(-26, 50, 54.5, 100);
    fill(135, 206, 235);
    rect(-6, 50, 20, 100);

    fill(245, 222, 179);
    circle(58, 119.333, 16);
    //hand
    push();
    fill(255);
    rotate(sin(frameCount * 0.3) / 100);
    fill(245, 222, 179);
    circle(-58, 119.333, 16);
    fill(255);
    beginShape();
    vertex(-25, 51.33333);
    vertex(-36, 58.33334);
    vertex(-65, 120.33);
    vertex(-48, 119.333331);
    vertex(-25, 70.33333);
    endShape();
    pop();

    push();
    fill(255);
    rotate(sin(frameCount * 0.3) / 100);
    fill(245, 222, 179);
    circle(58, 119.333, 16);
    fill(255);
    beginShape();
    vertex(25, 51.33333);
    vertex(36, 58.33334);
    vertex(65, 120.33);
    vertex(48, 119.333331);
    vertex(25, 70.33333);
    endShape();
    pop();
    //leg
    push();
    beginShape();
    fill(128, 42, 42);
    vertex(-40, 198.33);
    vertex(-24, 151.33);
    // vertex(-22, 236.33);
    // vertex(-3, 236.33);
    vertex(-8, 149.33);
    vertex(-22, 196.333);

    endShape();
    push();
    beginShape();
    rotate(sin(frameCount * 0.3) / 100);
    vertex(-40, 198.33);
    vertex(-22, 236.33);
    vertex(-3, 236.33);
    vertex(-22, 196.333);
    endShape(CLOSE);
    pop();
    push();
    beginShape();
    rotate(sin(frameCount * 0.3) / 100);
    vertex(11, 149.33);
    vertex(5, 197.33);
    vertex(23, 236.33);
    vertex(42, 236.33);
    vertex(24, 197.33);
    vertex(23, 151.33);
    endShape(CLOSE);
    pop();
    pop();

    fill(0);
    rect(-24, 140, 52, 10);
    rectMode(CENTER);
    fill(255, 255, 0);
    rect(0, 144, 20, 10);
    fill(0);
    beginShape();
    vertex(-24, 236.3);
    vertex(-33, 244.3);
    vertex(-3, 244.3);
    vertex(-3, 236.3);
    endShape(CLOSE);
    beginShape();
    vertex(23, 235.3);
    vertex(16, 244.3);
    vertex(43, 244.3);
    vertex(42, 236.3);
    endShape();
    pop();
    pop();
  }
  move() {
    // if (keyIsPressed) {
    //   if (key == "d" || key == "D") {
    //     this.x += this.xspeed;
    //   }
    //   if (key == "A" || key == "a") {
    //     this.x -= this.xspeed;
    //   }
    // }
    if (flag == true) {
      if (this.x < width / 2 + 11) {
        this.x += 5;
      }
    }
  }
  speak() {
    push();
    stroke(10, 200, 20);
    textStyle(ITALIC);
    textSize(20);
    if (index != 5) {
      text(textbox[index], this.x + 50, this.y - 100);
    }
    pop();
  }
}

class Grandson {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display() {
    translate(this.x, this.y);
    push();
    rotate(PI / 8);
    fill(139, 69, 19);
    ellipse(-5, 0, 100, 90);
    pop();

    push();
    fill(255, 211, 155);
    circle(-10, 10, 90);
    pop();

    push();
    fill(255);
    circle(-34, 4, 30);
    circle(10, 4, 30);
    pop();

    push();
    strokeWeight(8);
    point(-37, 4);
    point(10, 4);
    pop();

    push();
    noFill();
    arc(-12, 20, 6, 12, 0, (6 / 7) * PI);
    line(-44, -14, -28, -19);
    line(1, -20, 17, -18);
    pop();

    push();
    noFill();
    arc(-15, 34, 6, 10, PI / 8, (10 / 8) * PI);
    arc(-9, 34, 6, 10, (-PI * 1) / 8, (6 / 8) * PI);
    pop();
  }

  say() {
    push();

    fill(0);
    textStyle(ITALIC);
    textSize(20);

    text(endingbox[Index], -80, -80);

    pop();
  }
}



class bomb{
  constructor(){
    this.x=random(width)
    this.y=random(height)
    this.xSpd = random(-6, 6);
    this.ySpd = random(-4, 4);
    this.r=70
    
    
    
  }
  display(){
    translate(this.x,this.y)
    fill(0)
    circle(0,0,50)  
    fill(255)
    rotate(PI/9)
    fill(0)
    rect(-10,-35,12,12)
    noFill()
    strokeWeight(6)
    arc(20,-20,60,60,7/6*PI,2.8/2*PI)
    }
  move(){
    this.x+=this.xSpd
    this.y+=this.ySpd
  }
  bounce(){
    if (this.x > width || this.x < 0) {
      this.xSpd = this.xSpd * -1;
      
    }
    if (this.y > height || this.y < 0) {
      this.ySpd = this.ySpd * -1;
     
    }
  }
  checker(px,py){
    
    d = dist(px, py, this.x, this.y);
    console.log('h111')
    return d < this.r/2+5;
  
  }
  
}

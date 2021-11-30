let amp = 150;
let dimAmp = .1;


let signes = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
  tailleH = windowHeight / 5;
  pixelDensity(1);

  for (var i = 0; i < windowWidth; i++) {
    signes[i] = new Signe(tailleH, int(random(5)) * tailleH, i * 15);
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  tailleH = windowHeight / 5;
  setup();
}

rdm0 = [];
rdm1 = [];
rdm2 = [];
rdm3 = [];
rdm4 = [];


let vel = -3;
let x = -200;

function draw() {
  strokeCap(SQUARE);
  strokeJoin(MITER);
  console.log(signes.length);

  background(255);
  stroke(0);
  strokeWeight(7);
  noFill();
  translate(-window.innerWidth, 0);
  // if (frameCount % 256 == 1) {
  //   signes = signes.splice(0,5);

  // }
  if (frameCount % 16 < 20) {
    signes = signes.splice(0);
    signes[signes.length] = new Signe(tailleH, int(random(5)) * tailleH);

  }

 

  // for (let i = 0; i<signes.length; i++){
  //   signes[i] = new Signe(200, map(e,0,4,0,windowHeight));
  //
  // }
  for (let i = 0; i < signes.length; i++) {

    signes[i].move();
    signes[i].show();
  }




  //   translate(x, 0);
  //
  //   for (var i = 0; i < 5; i++) {
  //     push();
  //     if(frameCount%20==0){
  //     //reFill(i);
  //     }
  //     translate(0, map(i, 0, 5, 0, height));
  //     //bezier(0,0,40,40,80,80,200,200);
  //     for(var tec = 0; tec < 50; tec++){
  //       push();
  //       let decalRdm ;
  //
  //         if(rdm0[tec*i%1000]<150){
  //           decalRdm = .8;
  //         }
  //         else {
  //           decalRdm = 800;
  //         }
  //         translate(tec*80*decalRdm,0);
  //
  //       for (var bez = 0; bez < 8; bez++) {
  //         switch (i) {
  //           case 0:
  //           bezier(
  //           rdm0[(0+1)+tec*(i+1)%1000], rdm0[(1+1)*tec*(i+1)%1000],
  //           rdm0[(2+1)+tec*(i+1)%1000], rdm0[(3+1)*tec*(i+1)%1000],
  //           rdm0[(4+1)+tec*(i+1)%1000], rdm0[(5+1)*tec*(i+1)%1000],
  //           rdm0[(6+1)+tec*(i+1)%1000], rdm0[(7+1)*tec*(i+1)%1000],
  //         );
  //             break;
  //             case 1:
  //             bezier(
  //             rdm1[(0+1)+tec*(i+1)%1000], rdm1[(1+1)*tec*(i+1)%1000],
  //             rdm1[(2+1)+tec*(i+1)%1000], rdm1[(3+1)*tec*(i+1)%1000],
  //             rdm1[(4+1)+tec*(i+1)%1000], rdm1[(5+1)*tec*(i+1)%1000],
  //             rdm1[(6+1)+tec*(i+1)%1000], rdm1[(7+1)*tec*(i+1)%1000],
  //           );
  //               break;
  //               case 2:
  //               bezier(
  //               rdm2[(0+1)+tec*(i+1)%1000], rdm2[(1+1)*tec*(i+1)%1000],
  //               rdm2[(2+1)+tec*(i+1)%1000], rdm2[(3+1)*tec*(i+1)%1000],
  //               rdm2[(4+1)+tec*(i+1)%1000], rdm2[(5+1)*tec*(i+1)%1000],
  //               rdm2[(6+1)+tec*(i+1)%1000], rdm2[(7+1)*tec*(i+1)%1000],
  //             );
  //                 break;
  //                 case 3:
  //                 bezier(
  //                 rdm3[(0+1)+tec*(i+1)%1000], rdm3[(1+1)*tec*(i+1)%1000],
  //                 rdm3[(2+1)+tec*(i+1)%1000], rdm3[(3+1)*tec*(i+1)%1000],
  //                 rdm3[(4+1)+tec*(i+1)%1000], rdm3[(5+1)*tec*(i+1)%1000],
  //                 rdm3[(6+1)+tec*(i+1)%1000], rdm3[(7+1)*tec*(i+1)%1000],
  //               );
  //                   break;
  //                   case 4:
  //                   bezier(
  //                   rdm4[(0+1)+tec*(i+1)%1000], rdm4[(1+1)*tec*(i+1)%1000],
  //                   rdm4[(2+1)+tec*(i+1)%1000], rdm4[(3+1)*tec*(i+1)%1000],
  //                   rdm4[(4+1)+tec*(i+1)%1000], rdm4[(5+1)*tec*(i+1)%1000],
  //                   rdm4[(6+1)+tec*(i+1)%1000], rdm4[(7+1)*tec*(i+1)%1000],
  //                 );
  //                     break;
  //
  //         }
  //
  //     }
  //     pop();
  //   }
  //   pop();
  // }
  //
  //   x-=2;
}

// x % width ?
function rdmArray(a) {
  for (var i = 0; i < 1000; i++) {
    switch (a) {
      case 0:
        rdm0[i] = random(amp);
        break;
      case 1:
        rdm1[i] = random(amp);
        break;
      case 2:
        rdm2[i] = random(amp);
        break;
      case 3:
        rdm3[i] = random(amp);
        break;
      case 4:
        rdm4[i] = random(amp);
        break;
      default:
        rdm0[i] = random(amp);
        break;

    }
  }
}

function reFill(a) {
  for (var i = 0; i < 1000; i++) {
    switch (a) {
      case 0:
        rdm0[i] = random(amp);
        break;
      case 1:
        rdm1[i] = random(amp);
        break;
      case 2:
        rdm2[i] = random(amp);
        break;
      case 3:
        rdm3[i] = random(amp);
        break;
      case 4:
        rdm4[i] = random(amp);
        break;
      default:
        rdm0[i] = random(amp);
        break;

    }
  }
}

class Signe {
  constructor(dim, rang, xInit) {
    this.x1 = random(dim) + windowWidth + xInit;
    this.y1 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.x2 = random(dim) + windowWidth + xInit;
    this.y2 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.x3 = random(dim) + windowWidth + xInit;
    this.y3 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.x4 = random(dim) + windowWidth + xInit;
    this.y4 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.xx1 = random(dim) + windowWidth + xInit;
    this.yy1 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.xx2 = random(dim) + windowWidth + xInit;
    this.yy2 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.xx3 = random(dim) + windowWidth + xInit;
    this.yy3 = random(dim - dim * dimAmp, dim * dimAmp) + rang;

    this.xx4 = random(dim) + windowWidth + xInit;
    this.yy4 = random(dim - dim * dimAmp, dim * dimAmp) + rang;
  }
  move() {
    this.x1 += vel;
    //  this.y1 += vel;

    this.x2 += vel;
    //  this.y2 += vel;

    this.x3 += vel;
    //  this.y3 += vel;

    this.x4 += vel;
    //  this.y4 += vel;

    this.xx1 += vel;
    //  this.y1 += vel;

    this.xx2 += vel;
    //  this.y2 += vel;

    this.xx3 += vel;
    //  this.y3 += vel;

    this.xx4 += vel;
    //  this.y4 += vel;
  }
  show() {

    // bezier(this.xx1,this.yy1,this.xx2,this.yy2,this.xx3,this.yy3,this.xx4,this.yy4);

    bezier(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
  }
}
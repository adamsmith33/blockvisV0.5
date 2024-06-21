//Sketch File


let rez = 1;
let angle = 0;
let amp = 100;
let speed = 0.01;
let rotoSpeed = 1;

let color = 0;
let colorSpeed = 0.5;

function setup() {
    createCanvas(700, 400, WEBGL);
    angleMode(DEGREES);
    //blendMode(SCREEN);

}

function draw() {
    let num = document.getElementById('txnC').textContent;
    let timeStamp = document.getElementById('timestamp').textContent;
    let confirmations = document.getElementById('confirmations').textContent;

    background(200);

    let noiseLevel = 1000;
    let noiseScale = 0.001;
    let nt = noiseScale * frameCount;

    rotateX(45)
    rotateY(15)

    for(let i=0; i<num/10; i++){
        let x = 1000 * noise(nt+ i);
        let y = 700 * noise(nt+i+7000);

        noStroke()
        fill('rgba(220, 95, 0, 0.5)')
        circle(x-500, y-350, 200);

    }



}

function setOpacity() {

}

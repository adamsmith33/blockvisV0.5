//Sketch File


let rez = 1;
let angle = 0;
let amp = 100;
let speed = 0.01;
let rotoSpeed = 1;

function setup() {
    createCanvas(700, 400, WEBGL);
    angleMode(DEGREES);


}

function draw() {
    let num = document.getElementById('txnC').textContent;

    background(0, 0, 100);

    let x = map(mouseX, 0, width, -100, 200);

    rotateX(15);
    rotateY(45);

    for (let i=0; i<num; i+=rez){
        push();
        noFill();
        stroke(255,255,255);

        let depth = amp*sin(angle + i);
        translate(0, 0, depth);
        //rotateX(depth)
        
        ellipse(0, 0, i, i);
        pop();

        angle += speed;
        //console.log(num)
    }

    
    //console.log(num)
}
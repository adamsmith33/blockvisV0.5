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
    blendMode(SCREEN);

}

function draw() {
    let num = document.getElementById('txnC').textContent;

    background(0, 0, 100);

    let x = map(mouseX, 0, width, -100, 200);

    rotateX(15);
    rotateY(45);
    rotateZ(25)

    for (let i=0; i<num; i+=rez){
        push();
        noFill();
        stroke(255,color,0);

        let depth = amp*sin(angle+(amp*sin((amp*sin(angle+i)))+i));
        let height = amp*sin((amp*sin(angle+i)));
        translate(height, 0, depth);
        //rotateX(depth)
        
        ellipse(0, 0, i, i);
        pop();

        angle += speed;
        //console.log(angle)
    }

    color += colorSpeed;
    if(color >= 255 || color <= 0) {
        colorSpeed = -colorSpeed
    }
    
    console.log(color)
}
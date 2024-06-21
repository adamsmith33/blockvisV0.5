//Sketch File

let xoff = 0;
let yoff = 0;
let zoff = 0;
let incr = 0.1;
let zinc = 0.01;

function setup() {
    createCanvas(1000, 1000, WEBGL);
    //angleMode(DEGREES);
    blendMode(SCREEN);

}

function draw() {
    let txns = document.getElementById('txnC').textContent;
    let timeStamp = document.getElementById('timestamp').textContent;
    let confirmations = document.getElementById('confirmations').textContent;

    let opac = setOpacity(confirmations);
   
    let amp = setAmplitude(txns, confirmations);

    let grid = calculateSquare(txns)

    background(220, 95, 0);

    rotateX(45)
    rotateZ(10)

    xoff = 0;

    for(let i=0; i<grid[0]; i++){
        yoff = 0;
        for(let j=0; j < grid[1]; j++) {
            stroke(`rgba(220, 95, 0, ${opac})`,)
            fill(`rgba(220, 95, 0, ${opac})`)
            push();
            translate(i*35-200, j*35-120, 0)
            box(25, 25, amp*noise(xoff, yoff, zoff));
            pop();

            yoff += incr;
        }
        xoff += incr;
        

    }
    zoff += zinc;

}

function setOpacity(confirmationCount) {
    if (confirmationCount <= 150) {
        if(confirmationCount < 26){
            return 0.1
        }
        return (confirmationCount/255);
    } else {
        return 0.6;
    }
}

function calculateSquare(txnc) {
    let myNum;

    let cols;
    let rows;

    if(txnc % 2 != 0) {
        myNum = txnc-1
    } else {
        myNum = txnc
    }

    cols = floor(sqrt(myNum));

    rows = floor(txnc/cols)

    console.log(`the columns are ${cols}`)
    console.log(`The rows are${rows}`)

    return [rows, cols]

}

function setAmplitude(txns, confirmations) {
    let threshold = 500;

    let amp = (confirmations*txns)/500

    if (amp >= threshold) {
        amp = threshold
    } else if (amp < 50) {
        amp = 50;
    }

    return amp
}

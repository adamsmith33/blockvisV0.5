//Sketch File

let xoff = 0;
let yoff = 0;
let zoff = 0;
let incr = 0.1;
let zinc = 0.005;

let colors = [[70, 116, 202], [216, 64, 48],[220, 95, 0], [48, 48, 74]]
let hexColors = ["#4674CA", "#D84030", "#CA5F00", "#30304A"]

function setup() {
    createCanvas(1200, 650, WEBGL);
    //angleMode(DEGREES);
    blendMode(SCREEN);

}

function draw() {
    let blockHash = document.getElementById('hash').textContent;
    let txns = document.getElementById('txnC').textContent;
    let timeStamp = document.getElementById('timestamp').textContent;
    let confirmations = document.getElementById('confirmations').textContent;


    let opac = setOpacity(confirmations);
   
    let amp = setAmplitude(txns, confirmations);

    let grid = calculateSquare(txns)

    let colorPalette = setColor(timeStamp)

    background(colorPalette[0], colorPalette[1], colorPalette[2]);
    document.body.style.background = `rgb(${colorPalette[0]}, ${colorPalette[1]}, ${colorPalette[2]})`
    document.getElementById('button1').style.background = `rgb(${colorPalette[0]}, ${colorPalette[1]}, ${colorPalette[2]})`

    rotateX(45)
    rotateZ(10)

    xoff = 0;

    console.log(blockHash)
    noiseSeed(blockHash);
    

    for(let i=0; i<grid[0]; i++){
        yoff = 0;
        for(let j=0; j < grid[1]; j++) {
            stroke(`rgba(255, 255, 255, ${opac})`)
            fill(`rgba(${colorPalette[0]}, ${colorPalette[1]}, ${colorPalette[2]}, ${opac})`)
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

    //console.log(`the columns are ${cols}`)
    //console.log(`The rows are${rows}`)

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


function setColor(hour) {
    if(hour >= 0 && hour <= 8) {
        return colors[0];
    } else if (hour > 8 && hour <= 11) {
        return colors[1];
    } else if (hour > 11 && hour <=18) {
        return colors[2]
    } else {
        return colors[3]
    }
}

function setHexColor(hour) {
    if(hour >= 0 && hour <= 8) {
        return hexColors[0];
    } else if (hour > 8 && hour <= 11) {
        return hexColors[1];
    } else if (hour > 11 && hour <=18) {
        return hexColors[2]
    } else {
        return hexColors[3]
    }
}

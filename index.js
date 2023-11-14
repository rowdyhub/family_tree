const DEBUG_MODE = false;



var canvas = document.getElementsByTagName("canvas")[0];
var ctx = canvas.getContext('2d');

canvas.height = 500;
canvas.width = 500;


let line1 = {
    x1: 50,
    y1: 50,
    x2: 140,
    y2: 50,
}


let line2 = {
    x1: 190,
    y1: 50,
    x2: 390,
    y2: 390,
}


// Draw line parent-to-parent
function drawLinePP(line) {
    let p = 60;
    let rad = p/2;
    ctx.beginPath();

    /* ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x1, line.y1+p/2);
    ctx.arcTo(line.x1, line.y1+p/2, line.x1+p/2, line.y1+p, 5);
    ctx.lineTo(line.x2, line.y2+p); */

    ctx.moveTo(line.x1, line.y1);
    ctx.lineTo(line.x1, line.y1+p/2);
    ctx.arcTo(line.x1, line.x1+p, line.x1+p, line.y1+p, rad);
    ctx.lineTo(line.x2-p/2, line.y2+p);
    ctx.arcTo(line.x2, line.y2+p, line.x2, line.y2-p/2, rad);
    ctx.lineTo(line.x2, line.y2);

    ctx.stroke();

    // Drawing dots (debug)
    if(DEBUG_MODE){
        ctx.fillStyle = "#ff0000";
            ctx.fillRect(line.x1-10/2, line.y1-10/2, 10, 10);
            ctx.fillText('a1', line.x1+10, line.y1+10);

        ctx.fillStyle = "#0000ff";
            ctx.fillRect(line.x1-10/2, line.y1+p-10/2, 10, 10);
            ctx.fillText('b2', line.x1+10, line.y1+p+10);
            ctx.fillRect(line.x2-10/2, line.y2+p-10/2, 10, 10);
            ctx.fillText('b2', line.x2+10, line.y2+p+10);

        ctx.fillStyle = "#ff0000";
            ctx.fillRect(line.x2-10/2, line.y2-10/2, 10, 10);
            ctx.fillText('b1', line.x2+10, line.y2+10);
    }
}

// Draw line parents-to-children
function drawLinePC(line) {
    let r = line.y1+((line.y2-line.y1)/2-(line.y2-line.y1)/3);
    let e = line.y1+((line.y2-line.y1)/2+(line.y2-line.y1)/3);

    ctx.beginPath();
    ctx.moveTo(line.x1, line.y1);
    ctx.bezierCurveTo(line.x1, e, line.x2, r, line.x2, line.y2);
    ctx.stroke();

    // Drawing dots (debug)
    if(DEBUG_MODE){
        ctx.fillStyle = "#ff0000";
            ctx.fillRect(line.x1-10/2, line.y1-10/2, 10, 10);
            ctx.fillText('a1', line.x1+10, line.y1+10);

        ctx.fillStyle = "#0000ff";
            ctx.fillRect(line.x1-10/2, e-10/2, 10, 10);
            ctx.fillText('b2', line.x1+10, e+10);
            ctx.fillRect(line.x2-10/2, r-10/2, 10, 10);
            ctx.fillText('b2', line.x2+10, r+10);

        ctx.fillStyle = "#ff0000";
            ctx.fillRect(line.x2-10/2, line.y2-10/2, 10, 10);
            ctx.fillText('b1', line.x2+10, line.y2+10);
    }
}

drawLinePP(line1);
drawLinePC(line2);
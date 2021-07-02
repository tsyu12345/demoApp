class Elips {
    constructor(canvas, x, y) {
        this.context = canvas.getContext('2d');
        this.dia = 20;
        this.x = x;
        this.y = y;
        this.writed = false;
    }

    draw() {
        this.dia = 20;
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.dia, 0 * Math.PI / 180, 360 * Math.PI / 180, false);
        this.context.strokeStyle = 'rgba(255, 0, 0, 1)';
        this.context.lineWidth = 3;
        this.context.closePath();
        this.context.stroke();
    }

    move(x, y) {
        this.x = x;
        this.y = y;
    }
}

function dist(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) ) ;
}

//Draw Lines functions---
const mycanvas = document.getElementById('draw_area');
const ctx = mycanvas.getContext('2d');
let x = 0;
let y = 0;
let is_dlg = false;

mycanvas.addEventListener('mousedown', e=> {
    x = e.offsetX;
    y = e.offsetY;
    is_dlg = true;
});

mycanvas.addEventListener('mousemove', e => {
    if(is_dlg === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = e.offsetX;
        y = e.offsetY;
    }
})

mycanvas.addEventListener('mouseup', e => {
    is_dlg = false;
})

mycanvas.addEventListener('mouseout', e => {
    is_dlg = false;
})

function drawLine(context, sx, sy, ex, ey) {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.moveTo(sx, sy);
    context.lineTo(ex, ey);
    context.stroke();
    context.closePath();
}
//----



window.addEventListener('load', () => {
    if(is_dlg === true) {
        drawLine(ctx, x, y, e.offsetX, e.offsetY);
        x = 0;
        y = 0;
        is_dlg = false;
    }

    const canvas = document.querySelector('#draw_area');
    //initialization elps
    start_elps = new Elips(canvas, 160, 190);
    end_elps = new Elips(canvas, 300, 190);
    start_elps.draw();
    end_elps.draw();
    
    next_elps(210, 180, 210, 300);
    next_elps(270, 210, 250, 310);

    function next_elps(sx, sy, ex, ey) {
        document.addEventListener('mousemove', e => {
            if(dist(e.offsetX, e.offsetY, end_elps.x, end_elps.y) < end_elps.dia / 2) {
                if(is_dlg === true) {
                    console.log('hit!!!');
                    start_elps.move(sx, sy);
                    end_elps.move(ex, ey);
                    start_elps.draw();
                    end_elps.draw()  
                }

            }
        })
    }
    
}, false);

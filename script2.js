class Elips {
    constructor(canvas) {
        this.context = canvas.getContext('2d');
        this.dia = 20;
        this.x;
        this.y;
        this.writed = false;
    }

    draw(x, y) {
        this.x = x;
        this.y = y;
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

    delete() {
        //this.context.save()
        this.context.clearRect(this.x-this.dia / 2 - 12, this.y-this.dia / 2 - 12, this.dia+25, this.dia+25);
    }
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
        line(ctx, x, y, e.offsetX, e.offsetY);
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

function line(context, sx, sy, ex, ey) {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 3;
    context.moveTo(sx, sy);
    context.lineTo(ex, ey);
    context.stroke();
    context.closePath();

}
function dist(x1, y1, x2, y2) {
    return Math.sqrt( Math.pow( x2-x1, 2 ) + Math.pow( y2-y1, 2 ) ) ;
}
//-------------
const canvas = document.getElementById('draw_area');
const context = canvas.getContext('2d');
const start_elps = new Elips(canvas);
const end_elps = new Elips(canvas);
const text_elm = document.getElementById('draw_text');

function loop() {
    //context.clearRect(0, 0, canvas.width, canvas.height)
    //あ
    start_elps.draw(160, 190);
    end_elps.draw(300, 190);
    //console.log('animaited!!');
    next(210, 190, 210, 300);
    next(290, 210, 270, 320);
    next(0, 0, 0, 0);
    context.clearRect(0, 0, canvas.windth, canvas.height);
    console.log('end');
    //い
    text_elm.textContent = 'い';
    //う
    //え
    //お
    function next(sx, sy, ex, ey) {
        canvas.addEventListener('mousemove', (event) =>  {
            if(is_dlg === true) {
                if(dist(event.offsetX, event.offsetY, end_elps.x, end_elps.y) < end_elps.dia / 2) {
                    console.log('hit!!')
                    start_elps.delete();
                    end_elps.delete();
                    start_elps.move(sx, sy);
                    end_elps.move(ex, ey);
                    start_elps.draw(sx, sy);
                    end_elps.draw(ex, ey);
                }
            }
        })
    }
    //window.requestAnimationFrame(loop);
}

window.addEventListener('load', loop, false);

//window.requestAnimationFrame(this.loop.bind(this))

//window.requestAnimationFrame(loop);

    